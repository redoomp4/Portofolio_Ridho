import { memo } from 'react';
import { Gsap } from '../utils/gsapAnimate';
import { Trophy, Cloud, Globe, ArrowUpRight } from 'lucide-react';

/* ─── Bento Card Wrapper ─── */
const BentoCard = ({ children, className = "", delay = 0, span = "" }) => (
  <Gsap.div
    initial={{ opacity: 0, y: 18, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ delay, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    className={`group relative rounded-2xl border border-white/[0.06] bg-[#111113] overflow-hidden hover:border-blue-500/20 transition-all duration-500 ${span} ${className}`}
  >
    {/* Subtle gradient overlay on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    <div className="relative z-10 h-full">{children}</div>
  </Gsap.div>
);

/* ─── Main Component ─── */
const AboutSection = memo(function AboutSection() {
  return (
    <section id="about-section" className="py-20 md:py-28 w-full relative bg-[#0A0A0B] overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute right-0 top-1/4 w-[520px] h-[520px] bg-blue-500/[0.05] rounded-full blur-[120px]" />
        <div className="absolute -left-24 bottom-0 w-[380px] h-[380px] bg-white/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* Section Label */}
        <Gsap.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16 md:mb-20"
        >
          <span className="w-[6px] h-[6px] rounded-full bg-blue-500 shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
          <span className="font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-[0.24em] text-white/32">
            01 — About
          </span>
          <div className="flex-1 h-px bg-white/[0.07]" />
        </Gsap.div>

        {/* ═══ BENTO GRID ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">

          {/* ── Card 1: Static Profile Photo (2x2) ── */}
          <BentoCard span="md:col-span-1 lg:col-span-2 lg:row-span-2" delay={0} className="p-0">
            <div className="relative w-full h-full min-h-[400px] lg:min-h-0 overflow-hidden">
              <img
                src="/profilee.webp"
                alt="Muhammad Ridho Alfarod"
                className="w-full h-full object-cover object-center grayscale-[15%] hover:grayscale-0 hover:scale-[1.03] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#111113]/30 to-transparent pointer-events-none" />
              
              {/* Achievement Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30 backdrop-blur-md group-hover:bg-blue-500/30 transition-all duration-500">
                  <Trophy size={14} className="text-blue-400 shrink-0" />
                  <p className="font-mono text-[10px] md:text-[11px] font-bold text-white/90 leading-tight uppercase tracking-wider">
                    2nd Place Winner – LKS IT Network System Administration 2023
                  </p>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* ── Card 2: Bio in English ── */}
          <BentoCard span="md:col-span-1 lg:col-span-2" delay={0.05}>
            <div className="p-6 md:p-8 flex flex-col justify-between h-full">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/28 mb-5">About Me </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                  Informatics Student<br />
                  <span className="text-blue-400">& Tech Explorer.</span>
                </h2>
                <p className="text-[14px] text-white/60 leading-[1.85] max-w-2xl font-sans">
                  Currently a 4th-semester Informatics student at Institut Teknologi Kalimantan with a strong passion for Cloud Computing, Web Development, and MLOps. I regularly build hands-on technical solutions—ranging from web applications (HTML, CSS, JS, MySQL) and desktop software in Java to practical Artificial Intelligence & MLOps pipelines. Alongside academic coursework and campus organization roles, I am constantly exploring emerging technology stacks and tackling complex engineering challenges.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Problem Solving', 'Teamwork', 'Critical Thinking', 'Adaptability'].map(s => (
                  <span key={s} className="font-mono text-[10px] uppercase tracking-wider font-bold text-white/50 border border-white/[0.08] px-3 py-1.5 rounded-md hover:border-blue-500/40 hover:text-blue-400 transition-all cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* ── Card 3: Open to Work ── */}
          <BentoCard span="md:col-span-2 lg:col-span-2" delay={0.08}>
            <div className="p-6 md:p-8 flex flex-col justify-between h-full">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/28 mb-5">Open to Work</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                  Open to <span className="text-blue-400">Work.</span>
                </h2>
                <p className="text-[14px] text-white/60 leading-[1.85] font-sans max-w-xl">
                  Looking for internship or project-based opportunities in <strong className="text-white/80">DevOps / Cloud Engineering</strong> and <strong className="text-white/80">Fullstack Web Development</strong>, supported by a solid foundation in computer networking.
                </p>
              </div>

              {/* Roles + CTA */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {['DevOps & Cloud', 'Fullstack Web Dev'].map(role => (
                    <span key={role} className="font-mono text-[10px] font-bold text-white/50 border border-white/[0.08] px-3 py-1.5 rounded-md">
                      {role}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-mono text-[11px] font-bold uppercase tracking-wider hover:bg-blue-500 transition-all duration-300 cursor-pointer shadow-[0_8px_30px_rgba(37,99,235,0.25)]"
                >
                  Get In Touch
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </BentoCard>

          {/* ── Card 4: DevOps & Cloud Skill Widget ── */}
          <BentoCard span="md:col-span-1 lg:col-span-2" delay={0.12} className="p-6 md:p-8">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Cloud size={18} />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] font-bold text-blue-400 uppercase tracking-widest block">
                        Skill 01
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                        DevOps & Cloud Engineering
                      </h3>
                    </div>
                  </div>
                  <span className="font-mono text-[9px] font-bold px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 uppercase tracking-wider">
                    Ready to Work
                  </span>
                </div>

                <p className="text-xs text-white/50 leading-relaxed font-sans mb-6">
                  Specialized in infrastructure containerization, CI/CD automation pipelines, cloud administration (GCP/AWS), and Linux system management.
                </p>

                {/* Tech Skills */}
                <div className="space-y-3">
                  <div>
                    <span className="font-mono text-[9px] text-white/35 uppercase tracking-wider block mb-1.5">
                      Cloud & Systems
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Google Cloud (GCP)', 'AWS', 'Linux System Administration', 'Virtualization'].map(skill => (
                        <span key={skill} className="font-mono text-[10px] font-semibold text-blue-200/80 bg-blue-500/[0.08] border border-blue-500/20 px-2.5 py-1 rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-[9px] text-white/35 uppercase tracking-wider block mb-1.5">
                      DevOps & Automation
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Docker', 'Kubernetes', 'Jenkins', 'Git & GitLab', 'Terraform'].map(skill => (
                        <span key={skill} className="font-mono text-[10px] font-semibold text-white/70 bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* ── Card 5: Fullstack Web Developer Skill Widget ── */}
          <BentoCard span="md:col-span-1 lg:col-span-2" delay={0.14} className="p-6 md:p-8">
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Globe size={18} />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] font-bold text-blue-400 uppercase tracking-widest block">
                        Skill 02
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                        Fullstack Web Developer
                      </h3>
                    </div>
                  </div>
                  <span className="font-mono text-[9px] font-bold px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 uppercase tracking-wider">
                    Ready to Work
                  </span>
                </div>

                <p className="text-xs text-white/50 leading-relaxed font-sans mb-6">
                  Architecting modern web applications with responsive frontend UI frameworks, scalable Node.js/Express backend APIs, and SQL databases.
                </p>

                {/* Tech Skills */}
                <div className="space-y-3">
                  <div>
                    <span className="font-mono text-[9px] text-white/35 uppercase tracking-wider block mb-1.5">
                      Frontend Technologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['React', 'Next.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5 / CSS3'].map(skill => (
                        <span key={skill} className="font-mono text-[10px] font-semibold text-blue-200/80 bg-blue-500/[0.08] border border-blue-500/20 px-2.5 py-1 rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-[9px] text-white/35 uppercase tracking-wider block mb-1.5">
                      Backend & Database
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Node.js', 'Express JS', 'Java', 'Python', 'MySQL', 'Supabase'].map(skill => (
                        <span key={skill} className="font-mono text-[10px] font-semibold text-white/70 bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
});

export default AboutSection;

