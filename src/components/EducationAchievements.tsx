import { EDUCATION_DATA, ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { GraduationCap, Trophy, Sparkles, HeartHandshake, BookOpen, Award } from 'lucide-react';

export default function EducationAchievements() {
  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case 'trophy':
        return <Trophy size={18} className="text-[#f7bd48] mt-0.5" />;
      case 'sparkles':
        return <Sparkles size={18} className="text-[#a2d0c0] mt-0.5" />;
      case 'heart-handshake':
        return <HeartHandshake size={18} className="text-[#a2d0c0] mt-0.5" />;
      default:
        return <Award size={18} className="text-[#f7bd48] mt-0.5" />;
    }
  };

  return (
    <section id="education" className="scroll-mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="font-serif text-3xl md:text-4xl text-[#f7bd48] font-normal tracking-tight">
              Education
            </h2>
            <div className="h-px bg-[#1F4B3F]/40 flex-grow"></div>
          </div>

          <div
            id="education-card"
            className="bg-[#191c22] border-l-4 border-[#B8860B] border-y border-r border-[#1F4B3F]/30 p-6 md:p-8 rounded-r space-y-4 shadow-lg hover:border-[#1F4B3F]/70 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl text-[#e1e2eb] font-normal">
                  {EDUCATION_DATA.degree}
                </h3>
                <p className="font-sans text-sm text-[#a2d0c0] mt-1 font-medium">
                  {EDUCATION_DATA.institution}
                </p>
              </div>
              <div className="p-2 bg-[#10131a] rounded border border-[#1F4B3F]/40">
                <GraduationCap size={20} className="text-[#f7bd48]" />
              </div>
            </div>

            <div className="flex flex-wrap justify-between items-center text-sm text-[#d3c4af] pt-2">
              <span className="font-mono text-xs text-[#9c8f7b]">{EDUCATION_DATA.period}</span>
              <span className="font-bold text-[#EDE0C8] bg-[#1F4B3F] px-2.5 py-1 rounded text-xs tracking-wide shadow-sm border border-[#a2d0c0]/30">
                CGPA: {EDUCATION_DATA.gpa} / {EDUCATION_DATA.gpaMax}
              </span>
            </div>

            <div className="mt-4 pt-4 border-t border-[#1F4B3F]/30">
              <span className="text-xs text-[#9c8f7b] font-mono block mb-2 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen size={12} className="text-[#f7bd48]" />
                <span>Relevant Coursework</span>
              </span>
              <p className="text-sm text-[#d3c4af] leading-relaxed">
                {EDUCATION_DATA.coursework.join(', ')}
              </p>
            </div>
          </div>
        </div>

        {/* Achievements Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <h2 className="font-serif text-3xl md:text-4xl text-[#f7bd48] font-normal tracking-tight">
              Achievements
            </h2>
            <div className="h-px bg-[#1F4B3F]/40 flex-grow"></div>
          </div>

          <ul className="space-y-4">
            {ACHIEVEMENTS_DATA.map((ach, idx) => (
              <li
                key={idx}
                id={`achievement-item-${idx}`}
                className="bg-[#191c22] border border-[#4f4535]/30 p-5 rounded flex gap-4 items-start hover:border-[#1F4B3F]/70 hover:bg-[#1d2026] transition-all duration-200 shadow-md"
              >
                <div className="p-2 bg-[#10131a] rounded border border-[#1F4B3F]/30 shrink-0">
                  {getAchievementIcon(ach.icon)}
                </div>
                <div className="space-y-1">
                  <span className="font-serif text-lg text-[#e1e2eb] font-medium block">
                    {ach.title}
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#d3c4af] leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
