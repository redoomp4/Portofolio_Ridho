import { memo, useState, lazy, Suspense, useRef, useEffect } from 'react';
import { Gsap } from '../utils/gsapAnimate';
import { Trophy, ArrowUpRight, MapPin, Cloud, Server, GitBranch, Shield, Terminal, Cpu, Activity, Globe, Zap, Database } from 'lucide-react';

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
  const uptimeRef = useRef(null);

  // Simulated uptime counter
  useEffect(() => {
    const start = Date.now();
    const update = () => {
      if (!uptimeRef.current) return;
      const diff = Math.floor((Date.now() - start) / 1000);
      const d = Math.floor(diff / 86400);
      const h = Math.floor((diff % 86400) / 3600);
      const m = Math.floor((diff % 3600) / 60);
      const s = diff % 60;
      uptimeRef.current.textContent = `${String(d).padStart(2,'0')}d ${String(h).padStart(2,'0')}h ${String(m).padStart(2,'0')}m ${String(s).padStart(2,'0')}s`;
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

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
                  <Trophy size={14} className="text-blue-400" />
                  <p className="font-mono text-[10px] md:text-[11px] font-bold text-white/90 leading-tight uppercase tracking-wider">
                    2nd Place Winner – LKS IT Network System Administration 2023
                  </p>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* ── Card 2: Bio ── */}
          <BentoCard span="md:col-span-1 lg:col-span-2" delay={0.05}>
            <div className="p-6 md:p-8 flex flex-col justify-between h-full">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/28 mb-5">About Me</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                  Student Informatics<br />
                  <span className="text-blue-400">& IT Enthusiast.</span>
                </h2>
                <p className="text-[14px] text-white/50 leading-[1.85] max-w-2xl">
                  Mahasiswa Semester 4 Informatika di Institut Teknologi Kalimantan yang memiliki ketertarikan pada bidang Cloud Computing, Web Development, dan Cyber Security. Memiliki pengalaman dalam pengembangan aplikasi desktop menggunakan Java dan website menggunakan HTML, CSS, JavaScript, serta database MySQL. Aktif dalam organisasi kampus dan berpengalaman mengerjakan berbagai proyek akademik berbasis web dan Artificial Intelligence.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {['Problem Solving', 'Teamwork', 'Critical Thinking','Communication'].map(s => (
                  <span key={s} className="font-mono text-[10px] uppercase tracking-wider font-bold text-white/50 border border-white/[0.08] px-3 py-1.5 rounded-md hover:border-blue-500/40 hover:text-blue-400 transition-all cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* ── Card 3: Status ── */}
          <BentoCard delay={0.08}>
            <div className="p-6 flex flex-col justify-between h-full min-h-[180px]">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/28">Status</p>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
              </div>
              <div>
                <p className="text-3xl font-black text-emerald-400 mb-1">OPEN</p>
                <p className="font-mono text-[10px] text-white/35 uppercase tracking-wider">Available for Work</p>
              </div>
            </div>
          </BentoCard>

          {/* ── Card 4: Location ── */}
          <BentoCard delay={0.1}>
            <div className="p-6 flex flex-col justify-between h-full min-h-[180px]">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/28">Location</p>
                <MapPin size={14} className="text-white/25" />
              </div>
              <div>
                <p className="text-3xl font-black text-white mb-1">🇮🇩</p>
                <p className="font-mono text-[10px] text-white/35 uppercase tracking-wider">Indonesia</p>
              </div>
            </div>
          </BentoCard>

          {/* ── Card 5: Uptime Counter ── */}
          <BentoCard span="md:col-span-1" delay={0.12}>
            <div className="p-6 flex flex-col justify-between h-full min-h-[180px]">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/28">Session Uptime</p>
                <Activity size={14} className="text-blue-400/50" />
              </div>
              <div>
                <p ref={uptimeRef} className="text-2xl font-black text-blue-400 tabular-nums font-mono mb-1">
                  00d 00h 00m 00s
                </p>
                <p className="font-mono text-[10px] text-white/35 uppercase tracking-wider">Since page load</p>
              </div>
            </div>
          </BentoCard>

          {/* ── Card 6: Specializations ── */}
          <BentoCard span="md:col-span-2 lg:col-span-3" delay={0.14}>
            <div className="p-6 md:p-8 flex flex-col h-full">
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/28 mb-6">Expertise & Specialization</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover/item:border-blue-500/40 transition-all">
                    <Cloud size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-tight mb-1">Cloud Infrastructure</h4>
                    <p className="text-[11px] text-white/40 leading-relaxed">Designing scalable, high-availability environments using AWS & Azure with focus on reliability.</p>
                  </div>
                </div>
                <div className="flex gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover/item:border-purple-500/40 transition-all">
                    <Terminal size={18} className="text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-tight mb-1">DevOps Automation</h4>
                    <p className="text-[11px] text-white/40 leading-relaxed">Building seamless CI/CD pipelines and automating infrastructure provisioning with Terraform.</p>
                  </div>
                </div>
                <div className="flex gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover/item:border-emerald-500/40 transition-all">
                    <Globe size={18} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-tight mb-1">Web Development</h4>
                    <p className="text-[11px] text-white/40 leading-relaxed">Crafting responsive frontend interfaces and robust backend systems using modern frameworks.</p>
                  </div>
                </div>
                <div className="flex gap-4 group/item">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 group-hover/item:border-orange-500/40 transition-all">
                    <Shield size={18} className="text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-tight mb-1">System Security</h4>
                    <p className="text-[11px] text-white/40 leading-relaxed">Implementing security-best practices, network hardening, and identity management across clusters.</p>
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
