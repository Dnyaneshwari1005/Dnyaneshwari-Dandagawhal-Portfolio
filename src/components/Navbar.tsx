import { useState, useEffect } from 'react';
import { UserCheck, FileText, Menu, X, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export default function Navbar({ onOpenContact, onOpenResume, onOpenTerminal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education'];
      const scrollPos = window.scrollY + 200;

      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
  ];

  return (
    <nav
      id="navbar"
      className={`sticky top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#10131a]/95 backdrop-blur-md border-[#1F4B3F]/40 shadow-lg shadow-[#0B0E14]/80'
          : 'bg-[#10131a]/90 backdrop-blur-sm border-[#1F4B3F]/20'
      }`}
    >
      <div className="flex justify-between items-center w-full px-6 md:px-16 py-4 max-w-[1140px] mx-auto">
        {/* Brand */}
        <a
          href="#hero"
          id="brand-logo"
          className="font-serif text-2xl md:text-[26px] font-bold tracking-tight text-[#f7bd48] hover:text-[#ffdea6] transition-colors flex items-center gap-2 group"
        >
          <span>{PERSONAL_INFO.brand}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#f7bd48] opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              id={`nav-link-${link.id}`}
              className={`text-sm tracking-wider uppercase font-medium transition-all duration-200 relative py-1 ${
                activeSection === link.id
                  ? 'text-[#f7bd48] font-semibold'
                  : 'text-[#d3c4af] hover:text-[#f7bd48]'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f7bd48] rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Interactive terminal launch */}
          <button
            onClick={onOpenTerminal}
            id="nav-terminal-btn"
            title="Open Interactive Architecture Terminal"
            className="flex items-center gap-1.5 px-3 py-2 bg-[#191c22] border border-[#1F4B3F]/50 text-[#a2d0c0] hover:text-[#f7bd48] hover:border-[#f7bd48]/60 text-xs font-mono tracking-wide rounded transition-colors"
          >
            <Terminal size={14} className="text-[#a2d0c0]" />
            <span>CLI</span>
          </button>

          <button
            onClick={onOpenContact}
            id="nav-contact-btn"
            className="flex items-center gap-2 px-4 py-2 bg-transparent border border-[#1F4B3F] text-[#a2d0c0] hover:bg-[#1F4B3F]/20 text-xs tracking-wider uppercase font-semibold rounded transition-colors cursor-pointer"
          >
            <UserCheck size={16} />
            <span>Contact</span>
          </button>

          <button
            onClick={onOpenResume}
            id="nav-resume-btn"
            className="flex items-center gap-2 px-4 py-2 bg-[#B8860B] hover:bg-[#f7bd48] text-[#0B0E14] text-xs tracking-wider uppercase font-semibold rounded transition-all active:scale-95 shadow-sm cursor-pointer"
          >
            <FileText size={16} />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu hamburger button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="px-3 py-1.5 bg-[#B8860B] text-[#0B0E14] text-xs font-semibold rounded"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle Navigation Menu"
            className="p-2 text-[#d3c4af] hover:text-[#f7bd48]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#10131a]/98 border-b border-[#1F4B3F]/40 px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-[#d3c4af] hover:text-[#f7bd48] tracking-wider uppercase py-1 border-b border-[#1F4B3F]/20"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2 pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#191c22] border border-[#1F4B3F] text-[#a2d0c0] text-xs uppercase tracking-wider rounded"
            >
              <Terminal size={16} />
              <span>Interactive CLI Playground</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-transparent border border-[#1F4B3F] text-[#a2d0c0] text-xs uppercase tracking-wider rounded"
            >
              <UserCheck size={16} />
              <span>Contact Me</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
