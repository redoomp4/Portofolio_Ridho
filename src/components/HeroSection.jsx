import { memo, useRef, useState, useEffect, useCallback } from 'react';
import { Gsap, useGsapReducedMotion, useGsapScroll, useGsapTransform } from '../utils/gsapAnimate';
import { Download, ArrowUpRight, Terminal } from 'lucide-react';

/* ─── Jakarta clock ─── */
const jakartaFmt = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
});

const LocationTimeBadge = () => {
  const ref = useRef(null);
  useEffect(() => {
    const go = () => { if (ref.current) ref.current.textContent = jakartaFmt.format(new Date()); };
    go(); const id = setInterval(go, 1000); return () => clearInterval(id);
  }, []);
  return (
    <div className="flex items-center gap-3 sm:gap-5 font-mono text-xs uppercase tracking-[0.15em] text-blue-100/50">
      <span className="font-bold text-blue-100/70">Based in Indonesia</span>
      <div className="w-px h-3 bg-blue-100/15" />
      <div className="flex items-center gap-1.5 tabular-nums">
        <span className="text-blue-100/40 hidden sm:inline">LOCAL:</span>
        <span ref={ref} className="font-bold text-blue-100/70" />
      </div>
    </div>
  );
};

/* ─── Typing terminal lines ─── */
const TERMINAL_LINES = [
  { prompt: "ridho@portofolio:~$", cmd: "whoami", output: "Muhammad Ridho Alfarod" },
  { prompt: "ridho@portofolio:~$", cmd: "cat origin.txt", output: "Informatics Student @ ITK" },
  { prompt: "ridho@portofolio:~$", cmd: "ls expertise/", output: "cloud-computing  web-development  cyber-security" },
  { prompt: "ridho@portofolio:~$", cmd: "ssh projects@future", output: "Connecting to innovations...\nAccess Granted ✓" },
];

const TerminalWindow = memo(function TerminalWindow({ isRevealed }) {
  const [lines, setLines] = useState([]);
  const [typing, setTyping] = useState("");
  const [curLine, setCurLine] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [phase, setPhase] = useState("idle"); // idle | typing | output | done
  const bottomRef = useRef(null);

  // Start after hero reveals
  useEffect(() => {
    if (!isRevealed) return;
    const t = setTimeout(() => setPhase("typing"), 1200);
    return () => clearTimeout(t);
  }, [isRevealed]);

  // Typing animation
  useEffect(() => {
    if (phase !== "typing" || curLine >= TERMINAL_LINES.length) return;
    const { cmd } = TERMINAL_LINES[curLine];

    if (charIdx < cmd.length) {
      const speed = 30 + Math.random() * 40;
      const id = setTimeout(() => {
        setTyping(cmd.substring(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      }, speed);
      return () => clearTimeout(id);
    } else {
      // Done typing, show output
      const id = setTimeout(() => {
        setLines(prev => [...prev, {
          prompt: TERMINAL_LINES[curLine].prompt,
          cmd: TERMINAL_LINES[curLine].cmd,
          output: TERMINAL_LINES[curLine].output,
        }]);
        setTyping("");
        setCharIdx(0);
        if (curLine + 1 < TERMINAL_LINES.length) {
          setCurLine(curLine + 1);
        } else {
          setPhase("done");
        }
      }, 400);
      return () => clearTimeout(id);
    }
  }, [phase, curLine, charIdx]);

  // Auto-scroll
  useEffect(() => {
    if (bottomRef.current?.parentElement) {
      bottomRef.current.parentElement.scrollTop = bottomRef.current.parentElement.scrollHeight;
    }
  }, [lines, typing]);

  return (
    <Gsap.div
      initial={false}
      animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-[580px] mx-auto lg:mx-0"
    >
      <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#0c0c10]/90 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.5),0_0_40px_rgba(37,99,235,0.08)]">
        {/* Chrome bar */}
        <div className="flex items-center gap-2.5 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
          </div>
          <div className="flex items-center gap-1.5 ml-3">
            <Terminal size={11} className="text-white/25" />
            <span className="font-mono text-[10px] text-white/25 tracking-wider">ridho@portofolio — bash</span>
          </div>
        </div>

        {/* Terminal body */}
        <div className="p-4 font-mono text-[11px] md:text-[12px] leading-[1.8] max-h-[240px] overflow-y-auto scrollbar-none">
          {lines.map((l, i) => (
            <div key={i}>
              <div className="flex gap-2 flex-wrap">
                <span className="text-blue-400 shrink-0">{l.prompt}</span>
                <span className="text-white">{l.cmd}</span>
              </div>
              <div className="text-emerald-400/70 whitespace-pre ml-0 mb-2">{l.output}</div>
            </div>
          ))}

          {/* Currently typing */}
          {phase === "typing" && curLine < TERMINAL_LINES.length && (
            <div className="flex gap-2">
              <span className="text-blue-400 shrink-0">{TERMINAL_LINES[curLine].prompt}</span>
              <span className="text-white">{typing}<span className="inline-block w-2 h-4 bg-blue-400 animate-pulse ml-0.5 align-middle" /></span>
            </div>
          )}

          {/* Done cursor */}
          {phase === "done" && (
            <div className="flex gap-2">
              <span className="text-blue-400">ridho@portofolio:~$</span>
              <span className="inline-block w-2 h-4 bg-blue-400 animate-pulse ml-0.5 align-middle" />
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>
    </Gsap.div>
  );
});

/* ─── Main Hero ─── */
const HeroSection = memo(function HeroSection({ isRevealed = true }) {
  const containerRef = useRef(null);
  const reduceMotion = useGsapReducedMotion();
  const [enableParallax, setEnableParallax] = useState(false);
  const [enableAmbientMotion, setEnableAmbientMotion] = useState(false);

  const { scrollYProgress } = useGsapScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useGsapTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useGsapTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    if (typeof window === 'undefined' || reduceMotion) { setEnableParallax(false); setEnableAmbientMotion(false); return; }
    const mq = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)');
    const u = () => { setEnableParallax(mq.matches); setEnableAmbientMotion(mq.matches); };
    u();
    mq.addEventListener?.('change', u) || mq.addListener?.(u);
    return () => { mq.removeEventListener?.('change', u) || mq.removeListener?.(u); };
  }, [reduceMotion]);

  return (
    <header ref={containerRef} id="hero-section" className="min-h-[100svh] w-full relative bg-[#0A0A0B] selection:bg-blue-600 selection:text-white overflow-hidden flex flex-col items-center justify-center pt-20 pb-16">

      {/* ── Background ── */}
      <Gsap.div
        initial={false}
        animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        style={enableParallax ? { y: bgY } : undefined}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        {/* Blue grid — larger, subtler, faded at edges */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'linear-gradient(to right, #2563eb 1px, transparent 1px), linear-gradient(to bottom, #2563eb 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            ...(enableAmbientMotion && isRevealed ? { animation: 'hero-grid-scroll 20s linear infinite' } : {}),
          }}
        />

        {/* Radial glow */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(37,99,235,0.14), transparent 50%), radial-gradient(circle at 70% 60%, rgba(29,78,216,0.08), transparent 50%)'
        }} />

        {/* Concentric rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[85vw] max-w-[900px] max-h-[900px] rounded-full border border-blue-500/[0.06]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[650px] max-h-[650px] rounded-full border border-blue-500/[0.06]" />

        {/* Orbs */}
        <div className="absolute top-1/2 left-1/2 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-blue-500 rounded-full blur-[100px] lg:blur-[140px] opacity-[0.08]"
          style={enableAmbientMotion && isRevealed ? { animation: 'hero-orb-1 10s ease-in-out infinite', willChange: 'transform' } : { transform: 'translate3d(-50%,-50%,0)' }} />
        <div className="absolute top-1/4 right-[15%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-cyan-500 rounded-full blur-[100px] opacity-[0.05]"
          style={enableAmbientMotion && isRevealed ? { animation: 'hero-orb-2 12s 2s ease-in-out infinite', willChange: 'transform' } : undefined} />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[#0A0A0B] [mask-image:radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-75" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0B] to-transparent pointer-events-none" />
      </Gsap.div>

      {/* ── Content ── */}
      <Gsap.div
        style={enableParallax ? { y: contentY } : undefined}
        className="relative z-10 w-full max-w-[1280px] px-5 sm:px-6 md:px-12"
      >
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">

          {/* LEFT: Text content */}
          <Gsap.div
            initial={false}
            animate={isRevealed ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 20, filter: 'blur(4px)' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Location badge */}
            <div className="mb-6">
              <LocationTimeBadge />
            </div>

            {/* Name */}
            <h1 className="text-[clamp(3rem,10vw,6.5rem)] font-black uppercase tracking-tighter text-white leading-[0.85]">
              RIDHO
            </h1>
            <h1 className="text-[clamp(3rem,10vw,6.5rem)] font-black uppercase tracking-tighter text-transparent leading-[0.85] mt-1 font-outline-blue opacity-80">
              ALFAROD
            </h1>

            {/* Tagline */}
            <Gsap.div
              initial={false}
              animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="mt-6"
            >
              <h2 className="text-[clamp(1.1rem,3vw,1.6rem)] font-bold text-white tracking-tight flex items-center flex-wrap gap-2">
                A Dedicated <span className="bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded-md ring-1 ring-blue-500/20">IT Enthusiast</span> Exploring the Tech Frontier<span className="text-blue-500 font-extrabold">.</span>
              </h2>
              <p className="font-sans text-sm md:text-base text-blue-100/50 max-w-xl leading-7 mt-3">
                Informatics Student @ ITK — specializing in the intersection of <span className="text-white">Cloud Computing</span>, <span className="text-white">Cyber Security</span>, and <span className="text-white">Web Development</span>.
              </p>
            </Gsap.div>

            {/* CTA */}
            <Gsap.div
              initial={false}
              animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4 mt-8"
            >
              <button
                onClick={() => document.getElementById('project-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-mono text-sm font-bold uppercase tracking-wider hover:bg-blue-500 transition-all duration-300 cursor-pointer shadow-[0_8px_30px_rgba(37,99,235,0.25)]"
              >
                View Projects <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <a
                href="/cv.pdf"
                download
                className="group flex items-center gap-2 bg-white/[0.05] text-white border border-white/10 px-6 py-3 rounded-lg font-mono text-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-all duration-300"
              >
                Resume <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </Gsap.div>
          </Gsap.div>

          {/* RIGHT: Live terminal */}
          <div className="hidden lg:block">
            <TerminalWindow isRevealed={isRevealed} />
          </div>
        </div>
      </Gsap.div>
    </header>
  );
});

export default HeroSection;
