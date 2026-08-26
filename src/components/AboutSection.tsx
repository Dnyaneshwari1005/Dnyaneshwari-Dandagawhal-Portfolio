import { PERSONAL_INFO } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 space-y-8">
      {/* Section Header */}
      <div className="flex items-center gap-4">
        <h2 className="font-serif text-3xl md:text-4xl text-[#f7bd48] font-normal tracking-tight">
          About
        </h2>
        <div className="h-px bg-[#1F4B3F]/40 flex-grow"></div>
      </div>

      {/* Parchment Cream Scholarly Folio */}
      <div
        id="about-card"
        className="bg-[#EDE0C8] text-[#0B0E14] p-8 md:p-12 border border-[#9c8f7b]/40 relative overflow-hidden shadow-md select-text"
      >
        {/* Geometric Corner Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#0B0E14]/30 m-3 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#0B0E14]/30 m-3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#0B0E14]/30 m-3 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#0B0E14]/30 m-3 pointer-events-none"></div>

        {/* Parchment Content */}
        <div className="max-w-3xl space-y-6 relative z-10">
          {PERSONAL_INFO.aboutParagraphs.map((para, index) => (
            <p
              key={index}
              className="font-sans text-base md:text-lg leading-relaxed text-[#10131a]/95 font-normal"
            >
              {para}
            </p>
          ))}
        </div>

        {/* Scholarly Seal mark */}
        <div className="mt-8 pt-6 border-t border-[#0B0E14]/15 flex flex-wrap items-center justify-between gap-4 text-xs font-mono tracking-wider text-[#0B0E14]/70 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#B8860B] rounded-full"></span>
            <span>Focus: High-Throughput REST APIs &amp; RAG Systems</span>
          </div>
          <div className="italic text-[#0B0E14]/60">
            Pune, Maharashtra, India
          </div>
        </div>
      </div>
    </section>
  );
}
