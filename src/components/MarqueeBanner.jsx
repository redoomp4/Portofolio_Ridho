import { memo } from 'react';

const skills = [
  'Cloud Architecture',
  'CI/CD Pipelines',
  'Kubernetes',
  'Docker',
  'Terraform',
  'AWS / Azure',
  'Infrastructure as Code',
  'Site Reliability',
];

const MarqueeBanner = memo(function MarqueeBanner() {
  return (
    <div className="relative z-20 cursor-default select-none">
      <div className="bg-[#060608] shadow-[0_0_60px_rgba(37,99,235,0.06)]">

        {/* ── Row 1: Blue text on dark, scrolling left ── */}
        <div className="py-4 md:py-6 overflow-hidden relative group border-y border-blue-500/10">
          <div
            className="flex whitespace-nowrap gap-6 md:gap-14 will-change-transform group-hover:[animation-play-state:paused]"
            style={{ animation: 'marquee-scroll-left 28s linear infinite' }}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-6 md:gap-14 text-lg sm:text-2xl md:text-4xl font-black uppercase items-center">
                {skills.map((skill, j) => (
                  <span key={j} className="flex items-center gap-6 md:gap-14">
                    <span
                      className="text-blue-400 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_18px_rgba(59,130,246,0.6)]"
                    >
                      {skill}
                    </span>
                    <span className="text-blue-500/25 text-xs">⬡</span>
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#060608] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#060608] to-transparent z-10 pointer-events-none" />
        </div>

        {/* ── Row 2: Blue background, scrolling right ── */}
        <div className="py-2.5 md:py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 overflow-hidden relative group">
          <div
            className="flex whitespace-nowrap gap-6 md:gap-12 will-change-transform group-hover:[animation-play-state:paused]"
            style={{ animation: 'marquee-scroll-right 32s linear infinite' }}
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-6 md:gap-12 text-base sm:text-lg md:text-2xl font-black uppercase items-center">
                {skills.map((skill, j) => (
                  <span key={j} className="flex items-center gap-6 md:gap-12">
                    <span className="text-white hover:text-blue-100 transition-colors duration-300">{skill}</span>
                    <span className="text-white/25 text-xs">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>

          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-blue-600 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-blue-600 to-transparent z-10 pointer-events-none" />
        </div>

      </div>
    </div>
  );
});

export default MarqueeBanner;
