import { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import ProjectDemoModal from './ProjectDemoModal';
import { ExternalLink, Code2, Video, Sparkles, Terminal } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedDemoProject, setSelectedDemoProject] = useState<Project | null>(null);

  const getProjectIcon = (iconType: string) => {
    switch (iconType) {
      case 'open_in_new':
        return <ExternalLink size={20} className="text-[#9c8f7b] group-hover:text-[#a2d0c0] transition-colors" />;
      case 'code':
        return <Code2 size={20} className="text-[#9c8f7b] group-hover:text-[#a2d0c0] transition-colors" />;
      case 'video_library':
        return <Video size={20} className="text-[#9c8f7b] group-hover:text-[#a2d0c0] transition-colors" />;
      default:
        return <ExternalLink size={20} className="text-[#9c8f7b] group-hover:text-[#a2d0c0] transition-colors" />;
    }
  };

  return (
    <section id="projects" className="scroll-mt-28 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <h2 className="font-serif text-3xl md:text-4xl text-[#f7bd48] font-normal tracking-tight">
          Selected Projects
        </h2>
        <div className="h-px bg-[#1F4B3F]/40 flex-grow"></div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {PROJECTS_DATA.map((project) => {
          const isLargeSpan = project.id === 'codesense-ai';

          return (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => setSelectedDemoProject(project)}
              className={`${
                isLargeSpan ? 'lg:col-span-12' : 'lg:col-span-6'
              } bg-[#191c22] border border-[#1F4B3F]/30 p-8 rounded hover:bg-[#1d2026] hover:border-[#1F4B3F]/80 transition-all duration-300 group flex flex-col justify-between cursor-pointer relative shadow-lg`}
            >
              <div>
                {/* Project Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#e1e2eb] group-hover:text-[#f7bd48] transition-colors font-normal">
                      {project.title}
                    </h3>
                    {project.badge && (
                      <span className="text-[11px] text-[#9c8f7b] italic block mt-0.5">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-1 rounded bg-[#10131a]/60 border border-[#1F4B3F]/20 group-hover:border-[#a2d0c0]/50 transition-colors">
                    {getProjectIcon(project.iconType)}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] uppercase tracking-wider font-semibold text-[#a2d0c0] font-mono bg-[#1F4B3F]/20 px-2 py-0.5 rounded border border-[#1F4B3F]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bullets */}
                <ul className="space-y-3.5 font-sans text-sm text-[#d3c4af] leading-relaxed">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-[#B8860B] mt-1 text-xs select-none">◆</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Action Hint */}
              <div className="mt-8 pt-4 border-t border-[#1F4B3F]/20 flex items-center justify-between text-xs font-mono text-[#9c8f7b]">
                <span className="group-hover:text-[#a2d0c0] transition-colors flex items-center gap-1.5">
                  <Sparkles size={12} className="text-[#f7bd48]" />
                  <span>Click to Inspect Pipeline / Architecture</span>
                </span>
                <span className="text-[#f7bd48] opacity-0 group-hover:opacity-100 transition-opacity">
                  Launch Demo →
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Project Demo Modal */}
      {selectedDemoProject && (
        <ProjectDemoModal
          project={selectedDemoProject}
          onClose={() => setSelectedDemoProject(null)}
        />
      )}
    </section>
  );
}
