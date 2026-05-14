import { memo, useRef } from 'react';
import { Gsap, useGsapInView } from '../utils/gsapAnimate';
import { Cpu, Terminal, Database, Globe, Shield, Cloud, GitBranch, Server, Activity, Zap } from 'lucide-react';

const SKILLS = [
  { name: 'Java', icon: Cpu, color: 'text-orange-400', orbit: 'orbit-1', angle: 0 },
  { name: 'Python', icon: Terminal, color: 'text-blue-400', orbit: 'orbit-1', angle: 120 },
  { name: 'MySQL', icon: Database, color: 'text-blue-600', orbit: 'orbit-1', angle: 240 },
  { name: 'JavaScript', icon: Zap, color: 'text-yellow-400', orbit: 'orbit-2', angle: 45 },
  { name: 'DevOps', icon: Shield, color: 'text-blue-500', orbit: 'orbit-2', angle: 135 },
  { name: 'Linux', icon: Server, color: 'text-white', orbit: 'orbit-2', angle: 225 },
  { name: 'Networking', icon: Activity, color: 'text-emerald-400', orbit: 'orbit-2', angle: 315 },
  { name: 'Git', icon: GitBranch, color: 'text-orange-600', orbit: 'orbit-3', angle: 90 },
  { name: 'Cloud', icon: Cloud, color: 'text-cyan-400', orbit: 'orbit-3', angle: 270 },
];

const SkillOrbit = memo(function SkillOrbit() {
  const containerRef = useRef(null);
  const isInView = useGsapInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section id="skill-orbit-section" className="py-24 md:py-32 w-full relative bg-[#04050a] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center" ref={containerRef}>
        
        {/* Header */}
        <Gsap.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
            Core <span className="text-blue-500">Ecosystem</span>
          </h2>
          <p className="text-white/40 max-w-lg mx-auto text-sm md:text-base font-light">
            An interactive visualization of my technical universe. Hover over the nodes to explore the technologies powering my solutions.
          </p>
        </Gsap.div>

        {/* Orbit Visualization */}
        <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
          
          {/* Central Node */}
          <div className="relative z-20 w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-600/10 border border-blue-500/30 flex items-center justify-center backdrop-blur-xl group cursor-default shadow-[0_0_50px_rgba(37,99,235,0.15)] transition-all duration-500 hover:border-blue-500/60 hover:shadow-[0_0_70px_rgba(37,99,235,0.25)]">
             <div className="text-center">
               <p className="font-black text-white text-[10px] md:text-xs tracking-widest uppercase">Ridho</p>
               <p className="font-mono text-[8px] text-blue-400 uppercase tracking-tighter">System Root</p>
             </div>
             <div className="absolute -inset-4 border border-blue-500/10 rounded-full animate-[ping_4s_infinite]" />
          </div>

          {/* Orbit Rings */}
          <div className="absolute w-[40%] aspect-square border border-white/5 rounded-full" />
          <div className="absolute w-[70%] aspect-square border border-white/5 rounded-full" />
          <div className="absolute w-[100%] aspect-square border border-white/5 rounded-full" />

          {/* Skill Nodes */}
          {SKILLS.map((skill, i) => {
            const orbitSize = skill.orbit === 'orbit-1' ? '40%' : skill.orbit === 'orbit-2' ? '70%' : '100%';
            const duration = skill.orbit === 'orbit-1' ? '20s' : skill.orbit === 'orbit-2' ? '35s' : '50s';
            
            return (
              <div 
                key={skill.name}
                className="absolute flex items-center justify-center"
                style={{ 
                  width: orbitSize, 
                  height: orbitSize,
                  animation: `spin ${duration} linear infinite`,
                  animationDelay: `-${skill.angle * 100}ms`
                }}
              >
                <div 
                  className="absolute group"
                  style={{ 
                    top: 0, 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)',
                    animation: `spin ${duration} linear infinite reverse`,
                    animationDelay: `-${skill.angle * 100}ms`
                  }}
                >
                  <div className="relative flex flex-col items-center gap-2">
                    <div className={`w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:bg-blue-500/10 group-hover:border-blue-500/40 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] cursor-pointer`}>
                      <skill.icon size={20} className={`${skill.color} transition-transform duration-500 group-hover:rotate-12`} />
                    </div>
                    <span className="font-mono text-[8px] md:text-[10px] text-white/30 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

        {/* CSS for custom spinning */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}} />

      </div>
    </section>
  );
});

export default SkillOrbit;
