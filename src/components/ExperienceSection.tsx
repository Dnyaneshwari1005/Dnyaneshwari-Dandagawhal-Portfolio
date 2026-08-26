import { useState } from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Building2, Calendar, MapPin, ChevronDown, ChevronUp, ShieldCheck, Zap } from 'lucide-react';

export default function ExperienceSection() {
  const [showArchBreakdown, setShowArchBreakdown] = useState(false);

  return (
    <section id="experience" className="scroll-mt-28 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <h2 className="font-serif text-3xl md:text-4xl text-[#f7bd48] font-normal tracking-tight">
          Experience
        </h2>
        <div className="h-px bg-[#1F4B3F]/40 flex-grow"></div>
      </div>

      <div className="relative pl-8 md:pl-0">
        {/* Timeline Center Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#1F4B3F]/40 -translate-x-1/2"></div>
        {/* Timeline Line (Mobile) */}
        <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-[#1F4B3F]/40"></div>

        {EXPERIENCE_DATA.map((exp, index) => (
          <div key={index} className="relative flex flex-col md:flex-row items-start justify-between group pt-4 pb-8">
            {/* Diamond Node */}
            <div className="absolute left-[-32px] md:left-1/2 top-6 md:top-8 w-4 h-4 border border-[#f7bd48] bg-[#10131a] md:-translate-x-1/2 group-hover:bg-[#f7bd48] transition-all duration-300 rotate-45 z-10 shadow-[0_0_8px_rgba(247,189,72,0.4)]"></div>

            {/* Desktop Left: Date & Location */}
            <div className="hidden md:block w-[45%] text-right pr-12 pt-6 space-y-1">
              <span className="font-sans text-sm font-semibold text-[#d3c4af] block tracking-wide">
                {exp.period}
              </span>
              <span className="font-sans text-xs text-[#a2d0c0] italic flex items-center justify-end gap-1.5">
                <MapPin size={12} />
                {exp.location}
              </span>
            </div>

            {/* Right Side Card (Desktop right, mobile full) */}
            <div className="w-full md:w-[45%] md:pl-12 pt-2 md:pt-6">
              {/* Mobile Header for date */}
              <div className="md:hidden mb-3 flex items-center justify-between text-xs">
                <span className="font-semibold text-[#d3c4af]">{exp.period}</span>
                <span className="text-[#a2d0c0] italic">{exp.location}</span>
              </div>

              <div
                id="experience-drdo-card"
                className="bg-[#1d2026] border border-[#4f4535]/40 p-6 md:p-8 rounded hover:border-[#1F4B3F]/90 transition-all duration-300 shadow-lg group-hover:shadow-[#0B0E14]"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-serif text-2xl text-[#e1e2eb] font-normal leading-snug">
                    {exp.company}
                  </h3>
                </div>

                <p className="font-sans text-sm font-semibold text-[#B8860B] mb-5 tracking-wide flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#f7bd48]" />
                  <span>{exp.role}</span>
                </p>

                <ul className="space-y-4 font-sans text-sm text-[#d3c4af] leading-relaxed">
                  <li className="flex gap-3 items-start">
                    <span className="text-[#B8860B] mt-1 text-xs select-none">◆</span>
                    <span>
                      Architected an AI-powered NLP assistant enabling non-technical stakeholders to query large organisational datasets without SQL, removing technical-team dependency for routine requests across{' '}
                      <strong className="text-[#e1e2eb] font-semibold">3-5 teams, 50+ queries/week</strong>.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#B8860B] mt-1 text-xs select-none">◆</span>
                    <span>
                      Reduced data-retrieval turnaround from a 2-3 day manual process to a self-serve interface that delivers results in{' '}
                      <strong className="text-[#f7bd48] font-semibold underline decoration-[#f7bd48]/40 underline-offset-2">
                        under 30 seconds
                      </strong>{' '}
                      via FastAPI + LLM query generation with schema injection and output constraints.
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#B8860B] mt-1 text-xs select-none">◆</span>
                    <span>
                      Collaborated with a 2-member engineering team to design, validate, and deploy the query pipeline against real organisational datasets; participated in architecture reviews and iterative testing.
                    </span>
                  </li>
                </ul>

                {/* Interactive architecture expansion */}
                <div className="mt-6 pt-4 border-t border-[#1F4B3F]/30">
                  <button
                    onClick={() => setShowArchBreakdown(!showArchBreakdown)}
                    className="text-xs font-mono text-[#a2d0c0] hover:text-[#f7bd48] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{showArchBreakdown ? 'Hide Pipeline Flow' : 'Inspect DRDO Pipeline Architecture'}</span>
                    {showArchBreakdown ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>

                  {showArchBreakdown && (
                    <div className="mt-4 p-4 bg-[#10131a] rounded border border-[#1F4B3F]/50 font-mono text-xs text-[#d3c4af] space-y-2 animate-fadeIn">
                      <div className="text-[#f7bd48] font-semibold flex items-center gap-1.5 pb-1 border-b border-[#1F4B3F]/30">
                        <Zap size={14} />
                        <span>System Pipeline Topology:</span>
                      </div>
                      <p className="text-[#a2d0c0]">1. User Prompt → Schema Filtering Layer (Metadata AST injection)</p>
                      <p className="text-[#a2d0c0]">2. FastAPI Async Handler → LLM SQL/NoSQL Generator with Guardrails</p>
                      <p className="text-[#a2d0c0]">3. Read-Only Query Sanitizer (Block DROP, DELETE, ALTER, WRITE)</p>
                      <p className="text-[#a2d0c0]">4. Execution Engine → Structured JSON Response (&lt;30s latency)</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
