import { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Database, Cpu, Sparkles, Server, Layout, Search, Check } from 'lucide-react';

interface SkillsGrimoireProps {
  onSkillSelect?: (skill: string) => void;
  selectedSkill?: string | null;
}

export default function SkillsGrimoire({ onSkillSelect, selectedSkill }: SkillsGrimoireProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedSkill, setCopiedSkill] = useState<string | null>(null);

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Languages':
        return <Code size={18} className="text-[#a2d0c0]" />;
      case 'Backend & APIs':
        return <Server size={18} className="text-[#f7bd48]" />;
      case 'AI / GenAI':
        return <Sparkles size={18} className="text-[#a2d0c0]" />;
      case 'Databases':
        return <Database size={18} className="text-[#f7bd48]" />;
      case 'Core CS':
        return <Cpu size={18} className="text-[#a2d0c0]" />;
      case 'Frontend & Tools':
        return <Layout size={18} className="text-[#f7bd48]" />;
      default:
        return <Code size={18} className="text-[#a2d0c0]" />;
    }
  };

  const handleSkillClick = (skill: string) => {
    if (onSkillSelect) {
      onSkillSelect(skill);
    }
    setCopiedSkill(skill);
    setTimeout(() => setCopiedSkill(null), 1500);
  };

  return (
    <section id="skills" className="scroll-mt-28 space-y-8">
      {/* Header with Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-grow">
          <h2 className="font-serif text-3xl md:text-4xl text-[#f7bd48] font-normal tracking-tight">
            Technical Grimoire
          </h2>
          <div className="h-px bg-[#1F4B3F]/40 flex-grow hidden sm:block"></div>
        </div>

        {/* Quick Filter Search */}
        <div className="relative min-w-[220px]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9c8f7b]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search grimoire..."
            className="w-full pl-9 pr-3 py-1.5 bg-[#191c22] border border-[#1F4B3F]/40 focus:border-[#f7bd48] text-xs text-[#e1e2eb] rounded placeholder-[#9c8f7b]/60 outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#9c8f7b] hover:text-[#e1e2eb]"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Grid of Grimoire Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category) => {
          const filteredSkills = searchQuery
            ? category.skills.filter((s) =>
                s.toLowerCase().includes(searchQuery.toLowerCase())
              )
            : category.skills;

          if (searchQuery && filteredSkills.length === 0) return null;

          return (
            <div
              key={category.title}
              id={`skill-category-${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="bg-[#191c22] border border-[#1F4B3F]/30 rounded p-6 hover:border-[#1F4B3F]/80 hover:bg-[#1d2026] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-serif text-2xl text-[#e1e2eb] group-hover:text-[#a2d0c0] transition-colors font-normal">
                    {category.title}
                  </h3>
                  <div className="p-1.5 bg-[#10131a] rounded border border-[#1F4B3F]/30 group-hover:border-[#a2d0c0]/40 transition-colors">
                    {getCategoryIcon(category.title)}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {filteredSkills.map((skill) => {
                    const isSelected = selectedSkill === skill;
                    const isJustCopied = copiedSkill === skill;

                    return (
                      <button
                        key={skill}
                        onClick={() => handleSkillClick(skill)}
                        title={`Click to focus ${skill}`}
                        className={`px-3 py-1 text-xs tracking-wide rounded-sm transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-[#f7bd48] text-[#0B0E14] font-semibold shadow-md shadow-[#f7bd48]/20 border border-[#f7bd48]'
                            : 'bg-[#1F4B3F]/30 text-[#EDE0C8] hover:bg-[#1F4B3F]/60 hover:text-[#ffffff] border border-[#1F4B3F]/50 hover:border-[#a2d0c0]/60'
                        }`}
                      >
                        {isJustCopied && <Check size={11} className="text-[#a2d0c0]" />}
                        <span>{skill}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sub-label count */}
              <div className="mt-6 pt-3 border-t border-[#1F4B3F]/20 text-[11px] font-mono text-[#9c8f7b] flex justify-between items-center">
                <span>{category.skills.length} proficiencies</span>
                <span className="text-[#a2d0c0]/70 group-hover:text-[#f7bd48] transition-colors">
                  verified
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
