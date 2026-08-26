import { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, Sparkles, Terminal } from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export default function HeroSection({ onOpenResume, onOpenTerminal }: HeroSectionProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="hero" className="min-h-[780px] md:min-h-[820px] flex flex-col justify-center pt-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Content */}
        <div className="md:col-span-8 space-y-7">
          {/* Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#a2d0c0] shadow-[0_0_10px_rgba(162,208,192,0.8)] animate-pulse"></div>
            <span className="font-sans text-xs md:text-sm font-semibold text-[#a2d0c0] tracking-[0.2em] uppercase">
              {PERSONAL_INFO.title}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-[#f7bd48] font-normal leading-[1.08] tracking-tight">
            Dnyaneshwari<br />
            Dandagawhal
          </h1>

          {/* Narrative description */}
          <p className="font-sans text-base sm:text-lg text-[#d3c4af] max-w-2xl leading-relaxed">
            Python backend and AI developer building production-grade REST APIs and Generative AI systems. Delivered an AI-powered natural language data assistant at DRDO, reducing data-retrieval turnaround from{' '}
            <span className="text-[#e1e2eb] font-semibold underline decoration-[#f7bd48]/40 underline-offset-4">
              2-3 days to under 30 seconds
            </span>
            .
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="#projects"
              id="hero-view-projects-btn"
              className="px-6 py-3 border border-[#1F4B3F] text-[#a2d0c0] hover:bg-[#1F4B3F]/20 hover:border-[#a2d0c0] text-sm tracking-wider uppercase font-semibold rounded transition-all active:scale-98 flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowDown size={15} className="text-[#a2d0c0]" />
            </a>

            <button
              onClick={onOpenResume}
              id="hero-download-resume-btn"
              className="px-6 py-3 border border-[#4f4535] text-[#d3c4af] hover:text-[#e1e2eb] hover:border-[#9c8f7b] hover:bg-[#191c22] text-sm tracking-wider uppercase font-semibold rounded transition-all cursor-pointer"
            >
              Download Resume
            </button>

            <button
              onClick={onOpenTerminal}
              id="hero-terminal-btn"
              className="px-4 py-3 bg-[#191c22]/80 border border-[#1F4B3F]/60 text-[#d1c5ae] hover:text-[#f7bd48] hover:border-[#f7bd48] text-xs font-mono rounded transition-all flex items-center gap-2"
              title="Launch Interactive DRDO/RAG System Architecture CLI"
            >
              <Terminal size={14} className="text-[#f7bd48]" />
              <span>Explore CLI Architecture</span>
            </button>
          </div>
        </div>

        {/* Right Column: Interactive AI Hub Graphic */}
        <div className="md:col-span-4 flex justify-center md:justify-end mt-8 md:mt-0">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border border-[#1F4B3F]/40 bg-[#191c22]/70 flex items-center justify-center relative overflow-hidden group shadow-2xl shadow-[#0B0E14] cursor-pointer"
          >
            {/* Radial glow background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(31,75,63,0.35)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle_at_center,rgba(247,189,72,0.18)_0%,transparent_70%)] transition-all duration-700"></div>

            {/* Orbiting ring */}
            <div className="absolute inset-4 rounded-full border border-[#1F4B3F]/20 border-dashed animate-[spin_40s_linear_infinite]"></div>
            <div className="absolute inset-12 rounded-full border border-[#f7bd48]/10 animate-[spin_25s_linear_infinite_reverse]"></div>

            {/* Central Node & Network Vector */}
            <svg
              className={`w-28 h-28 transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Connected Lines */}
              <line x1="50" y1="50" x2="25" y2="25" stroke={isHovered ? '#f7bd48' : '#1F4B3F'} strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="50" y1="50" x2="75" y2="25" stroke={isHovered ? '#a2d0c0' : '#1F4B3F'} strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="50" y1="50" x2="25" y2="75" stroke={isHovered ? '#a2d0c0' : '#1F4B3F'} strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="50" y1="50" x2="75" y2="75" stroke={isHovered ? '#f7bd48' : '#1F4B3F'} strokeWidth="1.5" strokeDasharray="3 3" />
              <line x1="50" y1="50" x2="50" y2="15" stroke={isHovered ? '#f7bd48' : '#1F4B3F'} strokeWidth="1.5" />
              <line x1="50" y1="50" x2="50" y2="85" stroke={isHovered ? '#a2d0c0' : '#1F4B3F'} strokeWidth="1.5" />

              {/* Outer Nodes */}
              <circle cx="25" cy="25" r="5" fill="#10131a" stroke={isHovered ? '#f7bd48' : '#1F4B3F'} strokeWidth="2" />
              <circle cx="75" cy="25" r="5" fill="#10131a" stroke={isHovered ? '#a2d0c0' : '#1F4B3F'} strokeWidth="2" />
              <circle cx="25" cy="75" r="5" fill="#10131a" stroke={isHovered ? '#a2d0c0' : '#1F4B3F'} strokeWidth="2" />
              <circle cx="75" cy="75" r="5" fill="#10131a" stroke={isHovered ? '#f7bd48' : '#1F4B3F'} strokeWidth="2" />
              <circle cx="50" cy="15" r="4" fill="#10131a" stroke={isHovered ? '#f7bd48' : '#1F4B3F'} strokeWidth="2" />
              <circle cx="50" cy="85" r="4" fill="#10131a" stroke={isHovered ? '#a2d0c0' : '#1F4B3F'} strokeWidth="2" />

              {/* Center Core Node */}
              <circle cx="50" cy="50" r="10" fill={isHovered ? '#255144' : '#1F4B3F'} stroke={isHovered ? '#f7bd48' : '#a2d0c0'} strokeWidth="2.5" />
              <circle cx="50" cy="50" r="4" fill="#f7bd48" className="animate-pulse" />
            </svg>

            {/* Hover tooltip hint */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="text-[11px] font-mono tracking-widest text-[#a2d0c0]/70 uppercase">
                {isHovered ? '⚡ RAG & REST Graph' : 'AI Systems Hub'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Tags Strip */}
      <div className="mt-20 pt-8 border-t border-[#1F4B3F]/30 flex flex-wrap items-center gap-x-8 gap-y-4 text-[#d3c4af] font-mono text-xs tracking-widest uppercase opacity-90">
        {PERSONAL_INFO.heroTags.map((tag) => (
          <span key={tag} className="flex items-center gap-2.5 hover:text-[#f7bd48] transition-colors cursor-default">
            <span className="w-1.5 h-1.5 bg-[#B8860B] rounded-full shadow-[0_0_4px_#B8860B]"></span>
            <span>{tag}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
