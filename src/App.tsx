import { useState } from 'react';
import ShaderBackground from './components/ShaderBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsGrimoire from './components/SkillsGrimoire';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationAchievements from './components/EducationAchievements';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import ResumeModal from './components/ResumeModal';
import InteractiveTerminalModal from './components/InteractiveTerminalModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleSkillSelect = (skill: string) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);
  };

  return (
    <div className="bg-[#10131a] text-[#e1e2eb] min-h-screen relative overflow-x-hidden selection:bg-[#1F4B3F] selection:text-[#EDE0C8]">
      {/* WebGL Canvas Shader Background with floating amber embers */}
      <ShaderBackground />

      {/* Sticky Top Navigation Bar */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content Container with scholarly spacing */}
      <main className="w-full max-w-[1140px] mx-auto px-6 md:px-16 pt-12 pb-32 space-y-28 md:space-y-36 relative z-10">
        {/* Hero Section */}
        <HeroSection
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        {/* About Section */}
        <AboutSection />

        {/* Technical Grimoire (Skills) */}
        <SkillsGrimoire
          selectedSkill={selectedSkill}
          onSkillSelect={handleSkillSelect}
        />

        {/* Experience Section (DRDO) */}
        <ExperienceSection />

        {/* Selected Projects (Bento Grid) */}
        <ProjectsSection />

        {/* Education & Achievements */}
        <EducationAchievements />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <InteractiveTerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
}
