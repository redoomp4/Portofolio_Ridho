import { memo, useRef, useState, useEffect } from 'react';
import { Gsap, useGsapInView } from '../utils/gsapAnimate';
import { Cloud, Server, GitBranch, Shield, Terminal, Globe, MonitorSmartphone } from 'lucide-react';

const SERVICES = [
  { title: 'Cloud Architecture', desc: 'Designing highly available, scalable infrastructure across AWS, Azure, and GCP.', icon: Cloud },
  { title: 'Infrastructure as Code', desc: 'Automating entire environments with Terraform and Ansible for reliable provisioning.', icon: Terminal },
  { title: 'Container Orchestration', desc: 'Deploying, managing, and scaling resilient microservices using Kubernetes and Docker.', icon: Server },
  { title: 'CI/CD Pipelines', desc: 'Streamlining code integration and delivery using GitHub Actions, Jenkins, and GitLab CI.', icon: GitBranch },
  { title: 'Security & Compliance', desc: 'Implementing IAM, network policies, and DevSecOps practices to secure infrastructure.', icon: Shield },
  { title: 'Monitoring & Logs', desc: 'Setting up observability with Prometheus, Grafana, and ELK to maintain system health.', icon: MonitorSmartphone },
  { title: 'Full-Stack Web', desc: 'Building dynamic, performant frontend interfaces and robust backend APIs.', icon: Globe },
];

const ServicesSection = memo(function ServicesSection() {
  const gridRef = useRef(null);
  const isInView = useGsapInView(gridRef, { once: true, amount: 0.15 });
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (isInView) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        setActiveIndex(currentIndex);
        currentIndex++;

        if (currentIndex > SERVICES.length) {
          setTimeout(() => setActiveIndex(-1), 700);
          clearInterval(interval);
        }
      }, 700);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section id="services-section" className="pt-24 pb-32 w-full relative bg-[#0A0A0B] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* ── SECTION HEADER ── */}
        <Gsap.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16 md:mb-20"
        >
          <span className="w-[6px] h-[6px] rounded-full bg-blue-500 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
          <span className="font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-[0.24em] text-white/32">
            03 — Services
          </span>
          <div className="flex-1 h-px bg-white/[0.07]" />
        </Gsap.div>

        {/* Big Title Area */}
        <div className="mb-20 md:mb-28 flex flex-col items-center text-center max-w-4xl mx-auto">
          <Gsap.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white"
          >
            Engineering <br />
            <span className="text-blue-500/80 transform inline-block italic pr-2">Capabilities.</span>
          </Gsap.h2>
          <Gsap.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-white/50 max-w-2xl text-sm md:text-base leading-relaxed"
          >
            Providing end-to-end solutions from dynamic web interfaces to rock-solid backend architecture and automated cloud infrastructure.
          </Gsap.p>
        </div>

        {/* ARCHITECTURAL MATRIX GRID */}
        <Gsap.div
          ref={gridRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-l border-t border-white/10 group/grid bg-[#0A0A0B]"
        >
          {SERVICES.map((srv, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={i}
                className={`group/cell relative border-r border-b border-white/10 p-6 md:p-8 lg:p-10 min-h-[220px] md:min-h-[300px] flex flex-col justify-between overflow-hidden cursor-crosshair transition-colors duration-500 hover:bg-[#111113] ${isActive ? '!bg-[#111113]' : ''}`}
              >
                {/* Number & Icon Row */}
                <div className="flex justify-between items-start relative z-10">
                  <span className={`font-mono text-xs md:text-sm font-bold text-white/20 group-hover/cell:text-blue-400 transition-colors duration-500 tracking-[0.12em] md:tracking-[0.16em] ${isActive ? '!text-blue-400' : ''}`}>
                    0{i + 1}
                  </span>
                  <srv.icon className={`w-5 h-5 md:w-7 md:h-7 text-white/20 group-hover/cell:text-blue-400 transition-colors duration-500 ${isActive ? '!text-blue-400' : ''}`} strokeWidth={1.5} />
                </div>

                {/* Center massive number watermark */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block text-[8rem] md:text-[12rem] font-black tracking-tighter text-white/[0.02] group-hover/cell:text-white/[0.04] pointer-events-none transition-all duration-500 z-0 ${isActive ? '!text-white/[0.04]' : ''}`}>
                  {i + 1}
                </div>

                {/* Title & Desc Row */}
                <div className="relative z-10 mt-auto">
                  <h3 className={`text-xl md:text-2xl font-black uppercase text-white/80 tracking-tight leading-[1.1] mb-2 group-hover/cell:text-blue-400 transition-colors duration-500 ${isActive ? '!text-blue-400' : ''}`}>
                    {srv.title}
                  </h3>

                  {/* Desktop Hover Description */}
                  <div className={`hidden md:block h-0 opacity-0 group-hover/cell:h-[80px] group-hover/cell:opacity-100 group-hover/cell:mt-4 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? '!h-[80px] !opacity-100 !mt-4' : ''}`}>
                    <p className={`text-[13px] border-l border-blue-500/50 pl-4 text-white/50 font-mono leading-relaxed transform translate-y-4 group-hover/cell:translate-y-0 transition-transform duration-500 delay-100 ${isActive ? '!translate-y-0' : ''}`}>
                      {srv.desc}
                    </p>
                  </div>

                  {/* Mobile Always Visible Description */}
                  <p className={`md:hidden mt-2 text-[12px] border-l border-white/10 group-hover/cell:border-blue-500/50 pl-3 text-white/40 group-hover/cell:text-white/60 font-mono leading-relaxed transition-colors duration-500 ${isActive ? '!border-blue-500/50 !text-white/60' : ''}`}>
                    {srv.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Ghost Cell for layout balance on 4-col XL screens */}
          {(() => {
            const isGhostActive = activeIndex === SERVICES.length;
            return (
              <div className={`flex border-r border-b border-white/10 p-6 md:p-8 lg:p-10 min-h-[220px] md:min-h-[300px] bg-transparent flex-col justify-center items-center text-center group/ghost hover:bg-[#111113] transition-colors duration-500 cursor-crosshair ${isGhostActive ? '!bg-[#111113]' : ''}`}>
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 group-hover/ghost:border-blue-500/50 flex items-center justify-center mb-4 animate-[spin_10s_linear_infinite] group-hover/ghost:animate-[spin_4s_linear_infinite] transition-all duration-500 ${isGhostActive ? '!border-blue-500/50 !animate-[spin_4s_linear_infinite]' : ''}`}>
                  <div className={`w-1.5 h-1.5 bg-white/20 group-hover/ghost:bg-blue-400 rounded-full transition-colors duration-500 ${isGhostActive ? '!bg-blue-400' : ''}`} />
                </div>
                <span className={`font-mono text-xs tracking-[0.14em] uppercase text-white/30 font-bold group-hover/ghost:text-blue-400 transition-colors duration-500 ${isGhostActive ? '!text-blue-400' : ''}`}>
                  Continuously<br />Evolving
                </span>
              </div>
            );
          })()}
        </Gsap.div>

      </div>
    </section>
  );
});

export default ServicesSection;
