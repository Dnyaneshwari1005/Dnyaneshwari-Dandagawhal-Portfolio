import { PERSONAL_INFO } from '../data/portfolioData';
import { Code2, Users, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full py-12 bg-[#0b0e14] border-t border-[#1F4B3F]/30 text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 gap-8 max-w-[1140px] mx-auto">
        {/* Brand */}
        <div className="font-serif text-xl font-bold text-[#f7bd48] mb-4 md:mb-0 flex items-center gap-2">
          <span>{PERSONAL_INFO.brand}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#f7bd48]"></span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-4 md:mb-0">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="text-[#d3c4af] hover:text-[#B8860B] transition-colors duration-300 flex items-center gap-2 font-medium text-xs uppercase tracking-wider"
          >
            <Code2 size={16} />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[#d3c4af] hover:text-[#B8860B] transition-colors duration-300 flex items-center gap-2 font-medium text-xs uppercase tracking-wider"
          >
            <Users size={16} />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={onOpenContact}
            className="text-[#d3c4af] hover:text-[#B8860B] transition-colors duration-300 flex items-center gap-2 font-medium text-xs uppercase tracking-wider cursor-pointer"
          >
            <Mail size={16} />
            <span>Email</span>
          </button>
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="flex items-center gap-4 text-center md:text-right">
          <p className="text-[#9c8f7b] text-xs font-sans opacity-90">
            © 2024 Arcanist Engineering. Built with architectural precision.
          </p>
          <button
            onClick={scrollToTop}
            title="Scroll to top"
            className="p-1.5 bg-[#191c22] border border-[#1F4B3F]/40 hover:border-[#f7bd48] text-[#d3c4af] hover:text-[#f7bd48] rounded transition-colors"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
