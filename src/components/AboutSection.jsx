import { memo, useState } from 'react';
import { Gsap } from '../utils/gsapAnimate';
import { Trophy, MapPin, Cloud, Shield, Terminal, Globe, Cpu } from 'lucide-react';

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

const EXPERTISE_DOMAINS = [
  {
    id: "cloud-devops",
    num: "01",
    title: "Cloud Infrastructure & DevOps",
    status: "READY",
    icon: Cloud,
    accent: "from-blue-500/20 via-indigo-500/10 to-transparent",
    iconBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    description: "Designing high-availability cloud environments (AWS/GCP), containerizing microservices with Docker & Kubernetes, and automating deployments via CI/CD pipelines.",
    tags: ["AWS / GCP", "Docker & K8s", "Linux Systems", "CI/CD"]
  },
  {
    id: "web-dev",
    num: "02",
    title: "Full-Stack Web Engineering",
    status: "ACTIVE",
    icon: Globe,
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    description: "Building responsive, modern user interfaces using React & Next.js, combined with robust backend APIs in Node.js/Express and persistent SQL databases.",
    tags: ["React & Next.js", "Node.js / Express", "MySQL / Supabase", "Tailwind CSS"]
  },
  {
    id: "ai-ml",
    num: "03",
    title: "Applied AI & Data Analytics",
    status: "OPTIMIZED",
    icon: Cpu,
    accent: "from-purple-500/20 via-pink-500/10 to-transparent",
    iconBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    description: "Developing Machine Learning classification models (XGBoost, Random Forest) with rigorous anti-data leakage pipelines (SMOTE) and interactive analytics dashboards.",
    tags: ["Python & Scikit-Learn", "XGBoost & SMOTE", "Streamlit", "Matplotlib Analytics"]
  },
  {
    id: "security-sys",
    num: "04",
    title: "System Administration & Security",
    status: "HARDENED",
    icon: Shield,
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
    iconBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    description: "Configuring secure Linux environments, network topology administration (LKS IT NSA 2nd Place Winner), and enforcing system security best practices.",
    tags: ["Linux Admin", "Network Hardening", "Java Desktop", "Security Best Practices"]
  }
];

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
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/28 mb-5">// ABOUT_ME.MD</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                  Informatics Student<br />
                  <span className="text-blue-400">& Tech Explorer.</span>
                </h2>
                <p className="text-[14px] text-white/60 leading-[1.85] max-w-2xl font-sans">
                  Currently a 4th-semester Informatics student at Institut Teknologi Kalimantan with a strong passion for Cloud Computing, Web Development, and Cybersecurity. I regularly build hands-on technical solutions—ranging from web applications (HTML, CSS, JS, MySQL) and desktop software in Java to practical Artificial Intelligence models. Alongside academic coursework and campus organization roles, I am constantly exploring emerging technology stacks and tackling complex engineering challenges.
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

          {/* ── Card 3: Status ── */}
          <BentoCard span="md:col-span-1 lg:col-span-1" delay={0.08}>
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
          <BentoCard span="md:col-span-1 lg:col-span-1" delay={0.1}>
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

          {/* ── Card 5: Creative Expertise & Specialization Showcase ── */}
          <BentoCard span="md:col-span-2 lg:col-span-4" delay={0.14} className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              {/* Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Terminal size={14} className="text-blue-400" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-blue-400 font-bold">
                      CAPABILITIES // TECHNICAL MATRIX
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    Expertise & Core Specializations
                  </h3>
                </div>

                <div className="flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] p-1 rounded-xl self-start sm:self-auto">
                  <span className="font-mono text-[10px] uppercase font-bold text-white/40 px-3 py-1">
                    Focus Areas: {EXPERTISE_DOMAINS.length}
                  </span>
                </div>
              </div>

              {/* 4 Domain Cards (Static display, non-clickable) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EXPERTISE_DOMAINS.map((domain) => {
                  const IconComp = domain.icon;
                  return (
                    <div
                      key={domain.id}
                      className="group/domain relative rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
                    >
                      {/* Subtle background glow gradient */}
                      <div className={`absolute -right-10 -bottom-10 w-36 h-36 bg-gradient-to-br ${domain.accent} rounded-full blur-2xl opacity-40 pointer-events-none`} />

                      {/* Card Header */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${domain.iconBg} transition-transform group-hover/domain:scale-105`}>
                            <IconComp size={18} />
                          </div>
                          <div>
                            <span className="font-mono text-[10px] font-bold text-white/30 uppercase tracking-widest block">
                              [{domain.num}] AREA
                            </span>
                            <h4 className="text-white font-bold text-base tracking-tight leading-snug">
                              {domain.title}
                            </h4>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-white/60 uppercase tracking-wider shrink-0">
                          {domain.status}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-white/50 leading-relaxed mb-4 font-sans">
                        {domain.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06]">
                        {domain.tags.map(tag => (
                          <span
                            key={tag}
                            className="font-mono text-[9px] font-semibold text-white/60 bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
});

export default AboutSection;

