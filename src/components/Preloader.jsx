import { useEffect, useState, useRef } from "react";
import { Gsap } from "../utils/gsapAnimate";

/* ─── Boot sequence lines ─── */
const BOOT_LINES = [
  { text: "RIDHO.PORTOFOLIO BIOS v4.2.1", delay: 0,    type: "header" },
  { text: "Copyright (c) 2026, Muhammad Ridho Alfarod", delay: 120, type: "dim" },
  { text: "", delay: 200, type: "blank" },
  { text: "Detecting hardware...", delay: 280, type: "info" },
  { text: "  CPU:  Cloud Architect Engine — 8 cores @ 3.6 GHz    [OK]", delay: 420, type: "ok" },
  { text: "  RAM:  DevOps Knowledge Base — 32 GB                 [OK]", delay: 540, type: "ok" },
  { text: "  GPU:  Infrastructure Vision Unit                    [OK]", delay: 640, type: "ok" },
  { text: "  NET:  Cloud Fabric Adapter — 10 Gbps                [OK]", delay: 720, type: "ok" },
  { text: "", delay: 780, type: "blank" },
  { text: "Loading kernel: ridho-cloud-v2.4.1-lts", delay: 850, type: "info" },
  { text: "Mounting filesystems...", delay: 980, type: "info" },
  { text: "  /dev/terraform    → /infra        mounted            [OK]", delay: 1080, type: "ok" },
  { text: "  /dev/kubernetes   → /orchestrate  mounted            [OK]", delay: 1160, type: "ok" },
  { text: "  /dev/cicd         → /pipeline     mounted            [OK]", delay: 1240, type: "ok" },
  { text: "", delay: 1300, type: "blank" },
  { text: "Starting services:", delay: 1360, type: "info" },
  { text: "  ● nginx-proxy           active (running)", delay: 1440, type: "service" },
  { text: "  ● docker-engine         active (running)", delay: 1520, type: "service" },
  { text: "  ● monitoring-stack      active (running)", delay: 1600, type: "service" },
  { text: "  ● portfolio-renderer    active (running)", delay: 1700, type: "service" },
  { text: "", delay: 1780, type: "blank" },
  { text: "All systems operational. Welcome, Ridho.", delay: 1860, type: "success" },
  { text: "Launching interface...", delay: 2050, type: "launch" },
];

const Preloader = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const containerRef = useRef(null);
  const bottomRef = useRef(null);

  // Reveal boot lines one by one
  useEffect(() => {
    const timers = BOOT_LINES.map((line, i) =>
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines]);

  // Exit when all lines are visible
  useEffect(() => {
    if (visibleLines === BOOT_LINES.length) {
      const timeout = setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 900);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [visibleLines, onComplete]);

  const getLineColor = (type) => {
    switch (type) {
      case "header":  return "text-blue-400 font-bold text-sm md:text-base";
      case "dim":     return "text-white/30";
      case "info":    return "text-white/60";
      case "ok":      return "text-white/50";
      case "service": return "text-white/50";
      case "success": return "text-emerald-400 font-bold";
      case "launch":  return "text-blue-400 animate-pulse";
      default:        return "text-white/40";
    }
  };

  const renderLine = (line, i) => {
    if (line.type === "blank") return <div key={i} className="h-3" />;

    // Highlight [OK] tags
    let content = line.text;
    if (content.includes("[OK]")) {
      const parts = content.split("[OK]");
      return (
        <Gsap.div
          key={i}
          initial={{ opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.15 }}
          className={`font-mono text-[11px] md:text-[13px] leading-[1.7] ${getLineColor(line.type)}`}
        >
          {parts[0]}<span className="text-emerald-400 font-bold">[OK]</span>{parts[1] || ""}
        </Gsap.div>
      );
    }

    // Highlight service status dots
    if (line.type === "service") {
      return (
        <Gsap.div
          key={i}
          initial={{ opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.15 }}
          className={`font-mono text-[11px] md:text-[13px] leading-[1.7] ${getLineColor(line.type)}`}
        >
          {"  "}<span className="text-emerald-400">●</span>{content.substring(3)}
        </Gsap.div>
      );
    }

    return (
      <Gsap.div
        key={i}
        initial={{ opacity: 0, x: -4 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.15 }}
        className={`font-mono text-[11px] md:text-[13px] leading-[1.7] whitespace-pre ${getLineColor(line.type)}`}
      >
        {content}
      </Gsap.div>
    );
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#04050a] text-white flex flex-col overflow-hidden transition-all duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isExiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Subtle blue gradient glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/[0.06] rounded-full blur-[100px] pointer-events-none" />

      {/* CRT scanlines */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.08)_50%)] bg-[length:100%_3px] opacity-60" />

      {/* Window chrome bar */}
      <div className="relative z-10 flex items-center gap-3 px-5 md:px-8 py-4 border-b border-white/[0.06] bg-white/[0.02]">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/60" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
        </div>
        <span className="font-mono text-[11px] text-white/30 tracking-wider ml-3">ridho@portofolio:~$ boot --portfolio</span>
        <div className="ml-auto font-mono text-[10px] text-white/20 tracking-wider hidden sm:block">
          {visibleLines < BOOT_LINES.length ? "BOOTING..." : "READY"}
        </div>
      </div>

      {/* Boot log content */}
      <div ref={containerRef} className="relative z-10 flex-1 overflow-y-auto px-5 md:px-8 py-6 scrollbar-none">
        {BOOT_LINES.slice(0, visibleLines).map((line, i) => renderLine(line, i))}

        {/* Blinking cursor */}
        {visibleLines < BOOT_LINES.length && (
          <span className="inline-block w-2.5 h-4 bg-blue-400 animate-pulse ml-0.5 mt-1" />
        )}
      </div>

      {/* Progress bar at very bottom */}
      <div className="relative z-10 h-1 bg-white/[0.04]">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 ease-out shadow-[0_0_12px_rgba(59,130,246,0.5)]"
          style={{ width: `${(visibleLines / BOOT_LINES.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Preloader;
