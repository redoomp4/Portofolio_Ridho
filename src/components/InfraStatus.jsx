import { memo, useState, useEffect, useRef } from 'react';
import { Gsap } from '../utils/gsapAnimate';
import { Cloud, Server, Shield, Activity, Wifi, HardDrive, Cpu, Globe, ChevronRight } from 'lucide-react';

/* ─── Static Data ─── */
const SERVICES = [
  { name: 'API Gateway',     icon: Globe,     region: 'ap-southeast-1', latency: 12,  uptime: 99.98 },
  { name: 'Auth Service',    icon: Shield,    region: 'ap-southeast-1', latency: 8,   uptime: 99.99 },
  { name: 'K8s Cluster',     icon: Cpu,       region: 'us-east-1',      latency: 24,  uptime: 99.95 },
  { name: 'PostgreSQL',      icon: HardDrive, region: 'ap-southeast-1', latency: 4,   uptime: 99.99 },
  { name: 'Redis Cache',     icon: Activity,  region: 'ap-southeast-1', latency: 1,   uptime: 100.0 },
  { name: 'CDN Edge',        icon: Wifi,      region: 'global',         latency: 3,   uptime: 99.99 },
];

const PIPELINE_STAGES = ['Commit', 'Build', 'Test', 'Security', 'Deploy', 'Monitor'];

const RAW_LOGS = [
  { msg: '[git]    Push received on branch: main', type: 'info', delay: 1000 },
  { msg: '[ci]     Starting Pipeline #1848...', type: 'info', delay: 2000 },
  { msg: '[test]   Running unit tests: 142 passed, 0 failed', type: 'success', delay: 3500 },
  { msg: '[scan]   0 vulnerabilities found (trivy v0.52)', type: 'success', delay: 5000 },
  { msg: '[docker] Building image ridho/api:v2.5.0...', type: 'info', delay: 7000 },
  { msg: '[docker] Image pushed to registry', type: 'success', delay: 8500 },
  { msg: '[k8s]    Rollout: deployment/api → 3/3 replicas', type: 'info', delay: 10500 },
  { msg: '[nginx]  ✓ Health check passed — 200 OK', type: 'success', delay: 12000 },
  { msg: '[sys]    System operational. Traffic routed.', type: 'success', delay: 13500 },
];

/* ─── Utility: simulated fluctuating latency ─── */
function useFluctuatingValue(base, range = 4, interval = 2200) {
  const [val, setVal] = useState(base);
  useEffect(() => {
    const id = setInterval(() => {
      setVal(base + Math.round((Math.random() - 0.5) * range));
    }, interval);
    return () => clearInterval(id);
  }, [base, range, interval]);
  return Math.max(1, val);
}

/* ─── Sub-components ─── */
const StatusDot = ({ uptime }) => {
  const color = uptime >= 99.99 ? 'bg-emerald-400' : uptime >= 99.9 ? 'bg-yellow-400' : 'bg-red-400';
  return (
    <span className="relative flex h-2 w-2">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-50 ${color}`} />
      <span className={`relative inline-flex rounded-full h-2 w-2 ${color}`} />
    </span>
  );
};

const ServiceRow = memo(function ServiceRow({ service, index }) {
  const Icon = service.icon;
  const lat = useFluctuatingValue(service.latency, 5, 1800 + index * 400);

  return (
    <Gsap.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.05 * index, duration: 0.5 }}
      className="group grid grid-cols-[auto_1fr_auto_auto] items-center gap-4 py-3.5 px-4 border-b border-white/[0.04] last:border-0 hover:bg-white/[0.02] transition-colors cursor-default"
    >
      {/* Icon */}
      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/15 flex items-center justify-center group-hover:border-blue-500/40 transition-colors">
        <Icon size={14} className="text-blue-400" />
      </div>

      {/* Name + Region */}
      <div className="min-w-0">
        <p className="text-[13px] font-bold text-white truncate">{service.name}</p>
        <p className="font-mono text-[10px] text-white/30 uppercase tracking-wider">{service.region}</p>
      </div>

      {/* Latency */}
      <span className="font-mono text-[11px] text-white/50 tabular-nums w-14 text-right">
        {lat}<span className="text-white/25">ms</span>
      </span>

      {/* Status */}
      <div className="flex items-center gap-2">
        <StatusDot uptime={service.uptime} />
        <span className="font-mono text-[10px] text-emerald-400/80 tracking-wider hidden sm:inline">
          {service.uptime}%
        </span>
      </div>
    </Gsap.div>
  );
});

const PipelineStage = ({ label, status, index, total }) => {
  const bgMap = { done: 'bg-blue-600', active: 'bg-blue-500 animate-pulse', pending: 'bg-white/10' };
  const textMap = { done: 'text-white', active: 'text-white', pending: 'text-white/30' };
  const borderMap = { done: 'border-blue-500/50', active: 'border-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.4)]', pending: 'border-white/10' };

  return (
    <div className="flex items-center gap-1">
      <div className={`flex items-center gap-2 px-3 py-2 rounded-md border ${bgMap[status]} ${borderMap[status]} transition-all duration-500`}>
        <span className={`font-mono text-[10px] font-bold uppercase tracking-wider ${textMap[status]} transition-colors duration-500`}>
          {label}
        </span>
      </div>
      {index < total - 1 && (
        <ChevronRight size={12} className={status === 'done' ? 'text-blue-500 transition-colors duration-500' : 'text-white/15 transition-colors duration-500'} />
      )}
    </div>
  );
};

/* ─── Main Component ─── */
const InfraStatus = memo(function InfraStatus() {
  const tickRef = useRef(null);
  const logContainerRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = true; // Simplified for always running when mounted

  const [activeStage, setActiveStage] = useState(0);
  const [logs, setLogs] = useState([]);
  const [isDeploying, setIsDeploying] = useState(true);

  // Live clock
  useEffect(() => {
    const update = () => {
      if (!tickRef.current) return;
      const now = new Date();
      tickRef.current.textContent = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  // Pipeline simulation
  useEffect(() => {
    if (!isDeploying) return;

    let timeouts = [];
    const startTime = Date.now();

    // Reset state
    setLogs([]);
    setActiveStage(0);

    // Schedule logs
    RAW_LOGS.forEach((logItem, index) => {
      const t = setTimeout(() => {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        
        setLogs(prev => [...prev, { ...logItem, time: timeStr }]);

        // Advance pipeline stage based on log progress
        if (index === 2) setActiveStage(2); // Test
        if (index === 3) setActiveStage(3); // Security
        if (index === 4) setActiveStage(4); // Deploy
        if (index === 8) {
          setActiveStage(5); // Monitor
          setIsDeploying(false); // Done
        }

        // Auto-scroll logs
        if (logContainerRef.current) {
          setTimeout(() => {
            if (logContainerRef.current) {
              logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
            }
          }, 50);
        }
      }, logItem.delay);
      timeouts.push(t);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [isDeploying]);

  const handleRestart = () => {
    if (!isDeploying) setIsDeploying(true);
  };

  return (
    <section id="infra-section" ref={containerRef} className="py-20 md:py-28 w-full relative bg-[#0A0A0B] overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute left-1/4 top-0 w-[600px] h-[600px] bg-blue-600/[0.04] rounded-full blur-[120px]" />
        <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* ── Section Header ── */}
        <Gsap.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16 md:mb-20"
        >
          <span className="w-[6px] h-[6px] rounded-full bg-blue-500 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
          <span className="font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-[0.24em] text-white/32">
            03 — Infrastructure
          </span>
          <div className="flex-1 h-px bg-white/[0.07]" />
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] text-emerald-400/80 uppercase tracking-[0.14em]">All Systems Operational</span>
          </div>
        </Gsap.div>

        {/* ── Title ── */}
        <Gsap.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-display font-bold tracking-[-0.025em] leading-[1.08] text-white">
            <span className="block text-[44px] sm:text-[56px] lg:text-[64px]">
              Live Status
            </span>
            <span className="block text-[22px] sm:text-[26px] lg:text-[30px] font-medium tracking-[-0.01em] text-white/40 mt-1">
              Simulated Monitoring Dashboard
            </span>
          </h2>
        </Gsap.div>

        {/* ── Main Grid ── */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">

          {/* Left: Service Status Table */}
          <Gsap.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#0F0F10] border border-white/[0.06] rounded-lg overflow-hidden"
          >
            {/* Table Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/[0.06]">
              <div className="flex items-center gap-2.5">
                <Server size={14} className="text-blue-400" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">Service Health</span>
              </div>
              <span ref={tickRef} className="font-mono text-[10px] text-white/25 tabular-nums tracking-wider">00:00:00</span>
            </div>

            {/* Rows */}
            {SERVICES.map((s, i) => (
              <ServiceRow key={s.name} service={s} index={i} />
            ))}

            {/* Footer */}
            <div className="px-4 py-3 border-t border-white/[0.06] flex items-center justify-between">
              <span className="font-mono text-[10px] text-white/25 uppercase tracking-wider">
                {SERVICES.length} services monitored
              </span>
              <span className="font-mono text-[10px] text-blue-400/60 uppercase tracking-wider">
                region: ap-southeast-1
              </span>
            </div>
          </Gsap.div>

          {/* Right: Pipeline + Deploy Log */}
          <div className="flex flex-col gap-6">

            {/* CI/CD Pipeline Visualization */}
            <Gsap.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="bg-[#0F0F10] border border-white/[0.06] rounded-lg p-5"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <Cloud size={14} className="text-blue-400" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white/60">CI/CD Pipeline</span>
                <span className="ml-auto font-mono text-[10px] text-blue-400/60 uppercase tracking-wider">#1847</span>
              </div>

              <div className="flex flex-wrap items-center gap-1">
                {PIPELINE_STAGES.map((stageLabel, i) => {
                  let status = 'pending';
                  if (i < activeStage || (i === PIPELINE_STAGES.length - 1 && !isDeploying)) status = 'done';
                  else if (i === activeStage) status = 'active';

                  return (
                    <PipelineStage key={stageLabel} label={stageLabel} status={status} index={i} total={PIPELINE_STAGES.length} />
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-between">
                <span className="font-mono text-[10px] text-white/25">Live Workflow</span>
                <button 
                  onClick={handleRestart}
                  disabled={isDeploying}
                  className={`font-mono text-[10px] flex items-center gap-1.5 transition-colors ${isDeploying ? 'text-blue-400/70 cursor-not-allowed' : 'text-emerald-400 hover:text-emerald-300 cursor-pointer'}`}
                >
                  <Activity size={10} className={isDeploying ? 'animate-spin' : ''} />
                  {isDeploying ? 'Deploying to production...' : 'System Live • Run Again'}
                </button>
              </div>
            </Gsap.div>

            {/* Deployment Logs */}
            <Gsap.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="bg-[#0F0F10] border border-white/[0.06] rounded-lg overflow-hidden flex-1"
            >
              <div className="flex items-center gap-2.5 px-4 py-3.5 border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white/60 ml-2">Deploy Logs</span>
              </div>

              <div ref={logContainerRef} className="p-4 font-mono text-[11px] leading-[1.85] space-y-0.5 bg-[#0B0B0C] h-[180px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {logs.map((log, i) => {
                  const colorMap = { success: 'text-emerald-400/80', info: 'text-blue-400/70', warning: 'text-yellow-400/70' };
                  return (
                    <Gsap.div
                      key={i}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex gap-3"
                    >
                      <span className="text-white/20 shrink-0 tabular-nums">{log.time}</span>
                      <span className={colorMap[log.type]}>{log.msg}</span>
                    </Gsap.div>
                  );
                })}
                {isDeploying && (
                  <div className="flex items-center gap-2 mt-2 pt-1">
                    <span className="text-blue-500">❯</span>
                    <span className="w-1.5 h-3 bg-white/40 animate-pulse" />
                  </div>
                )}
              </div>
            </Gsap.div>

          </div>
        </div>
      </div>
    </section>
  );
});

export default InfraStatus;
