import { memo, useRef, useEffect, useState } from 'react';
import { Gsap, useGsapInView } from '../utils/gsapAnimate';
import { Terminal, Github, Server, Cloud, ShieldCheck, Zap } from 'lucide-react';

const PIPELINE_NODES = [
  { id: 'code', label: 'Commit & Push', icon: Terminal, color: 'text-gray-300', bg: 'bg-gray-800', border: 'border-gray-600', detail: 'Git push to main branch triggers the automated pipeline.' },
  { id: 'build', label: 'CI Build & Test', icon: Github, color: 'text-blue-400', bg: 'bg-blue-900/30', border: 'border-blue-500/50', detail: 'GitHub Actions runs unit tests, linting, and security scans.' },
  { id: 'container', label: 'Containerization', icon: Server, color: 'text-cyan-400', bg: 'bg-cyan-900/30', border: 'border-cyan-500/50', detail: 'Docker image is built, tagged, and pushed to the registry.' },
  { id: 'deploy', label: 'K8s Deployment', icon: Cloud, color: 'text-purple-400', bg: 'bg-purple-900/30', border: 'border-purple-500/50', detail: 'ArgoCD syncs the new state and deploys to Kubernetes cluster.' },
  { id: 'secure', label: 'Live Production', icon: ShieldCheck, color: 'text-emerald-400', bg: 'bg-emerald-900/30', border: 'border-emerald-500/50', detail: 'Traffic routed via ALB/Ingress with SSL termination.' },
];

const DevOpsPipeline = memo(function DevOpsPipeline() {
  const containerRef = useRef(null);
  const isInView = useGsapInView(containerRef, { once: true, amount: 0.2 });
  const [activeNode, setActiveNode] = useState(0);

  // Auto-progress the pipeline visualization
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev >= PIPELINE_NODES.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section id="pipeline-section" className="py-24 md:py-32 w-full relative bg-[#04050a] overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,rgba(0,0,0,0.8)_1px)] bg-[size:100%_4px] opacity-20" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10" ref={containerRef}>
        
        {/* Header */}
        <Gsap.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
            <Zap size={14} className="text-blue-400" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-blue-300">Live Workflow Demo</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-4">
            Automated <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Delivery</span>
          </h2>
          <p className="text-white/50 max-w-lg text-sm md:text-base font-light">
            An interactive look into my deployment philosophy. Zero-downtime, fully automated CI/CD pipelines from local commit to global edge.
          </p>
        </Gsap.div>

        {/* Pipeline Visualizer */}
        <div className="relative pt-10 pb-20">
          
          {/* Connecting Line Background (Desktop) */}
          <div className="hidden lg:block absolute top-[85px] left-[10%] right-[10%] h-1 bg-white/5 rounded-full" />

          {/* Glowing Progress Line */}
          <div 
            className="hidden lg:block absolute top-[85px] left-[10%] h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-700 ease-in-out shadow-[0_0_15px_rgba(56,189,248,0.5)]"
            style={{ width: `${(activeNode / (PIPELINE_NODES.length - 1)) * 80}%` }}
          />

          {/* Nodes Container */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-4 relative z-10">
            {PIPELINE_NODES.map((node, i) => {
              const isPast = i < activeNode;
              const isActive = i === activeNode;
              const isFuture = i > activeNode;

              return (
                <Gsap.div 
                  key={node.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative flex flex-col items-center w-full max-w-[220px]"
                >
                  {/* Mobile Connecting Line */}
                  {i !== PIPELINE_NODES.length - 1 && (
                    <div className={`lg:hidden absolute top-[100px] bottom-[-48px] w-1 left-1/2 -translate-x-1/2 transition-colors duration-500 ${isPast || isActive ? 'bg-gradient-to-b from-blue-400 to-cyan-400' : 'bg-white/5'}`} />
                  )}

                  {/* Icon Node */}
                  <button 
                    onClick={() => setActiveNode(i)}
                    className={`relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center border transition-all duration-500 cursor-pointer backdrop-blur-md
                      ${isActive ? `${node.bg} ${node.border} shadow-[0_0_30px_rgba(56,189,248,0.2)] scale-110` : 
                        isPast ? 'bg-white/5 border-white/20 scale-100 opacity-70' : 
                        'bg-transparent border-white/5 scale-95 opacity-40 hover:opacity-100 hover:border-white/20'
                      }
                    `}
                  >
                    <node.icon size={isActive ? 32 : 24} className={`transition-all duration-500 ${isActive || isPast ? node.color : 'text-white/30'}`} strokeWidth={isActive ? 2 : 1.5} />
                    
                    {/* Active Ping */}
                    {isActive && (
                      <span className={`absolute -inset-2 border ${node.border} rounded-2xl animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-40 pointer-events-none`} />
                    )}
                  </button>

                  {/* Text Content */}
                  <div className={`mt-6 text-center transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-2'}`}>
                    <h3 className={`font-bold text-sm md:text-base uppercase tracking-wide mb-2 ${isActive ? 'text-white' : 'text-white/60'}`}>
                      {node.label}
                    </h3>
                    <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="font-mono text-[10px] md:text-xs text-white/50 leading-relaxed px-2">
                        {node.detail}
                      </p>
                    </div>
                  </div>

                </Gsap.div>
              );
            })}
          </div>
        </div>

        {/* Console Log Simulation directly below */}
        <Gsap.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-3xl mx-auto mt-12 bg-black/50 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
            <span className="ml-3 font-mono text-[9px] text-white/30 tracking-widest uppercase">deployment.log</span>
          </div>
          <div className="p-4 md:p-6 font-mono text-[10px] md:text-xs leading-loose h-[120px] overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none z-10" />
            <div className={`transition-transform duration-500 transform -translate-y-[${activeNode * 28}px]`}>
              <div className={activeNode >= 0 ? "text-gray-400" : "opacity-0"}>&gt; Initializing pipeline... HEAD at main</div>
              <div className={activeNode >= 1 ? "text-blue-400" : "opacity-0"}>&gt; Running tests: 142 passed, 0 failed. Building image.</div>
              <div className={activeNode >= 2 ? "text-cyan-400" : "opacity-0"}>&gt; Pushing ridho/app:v4.2 to registry... Success.</div>
              <div className={activeNode >= 3 ? "text-purple-400" : "opacity-0"}>&gt; Applying k8s manifests to cluster-prod-01...</div>
              <div className={activeNode >= 4 ? "text-emerald-400 font-bold" : "opacity-0"}>&gt; Deployment verified. 100% traffic shifted. Live.</div>
            </div>
          </div>
        </Gsap.div>

      </div>
    </section>
  );
});

export default DevOpsPipeline;
