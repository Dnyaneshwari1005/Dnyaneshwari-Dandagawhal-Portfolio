import { useState } from 'react';
import { PERSONAL_INFO, EXPERIENCE_DATA, PROJECTS_DATA, EDUCATION_DATA, ACHIEVEMENTS_DATA, SKILL_CATEGORIES } from '../data/portfolioData';
import { X, Printer, Download, Copy, Check, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);

  const plainResumeText = `Dnyaneshwari Dandagawhal
Backend & AI Engineer | Python, FastAPI, RAG, LLMs
Email: ${PERSONAL_INFO.email} | Location: Pune, India

ABOUT
${PERSONAL_INFO.heroBio}

EXPERIENCE
Defence Research and Development Organisation (DRDO)
Software Development Intern · AI & Backend (Sept 2023 – Aug 2024 | Pune, India)
- Architected an AI-powered NLP assistant enabling non-technical stakeholders to query large organisational datasets without SQL, removing technical-team dependency for routine requests across 3-5 teams, 50+ queries/week.
- Reduced data-retrieval turnaround from a 2-3 day manual process to a self-serve interface that delivers results in under 30 seconds via FastAPI + LLM query generation with schema injection and output constraints.
- Collaborated with a 2-member engineering team to design, validate, and deploy the query pipeline against real organisational datasets.

PROJECTS
1. CodeSense AI: RAG-powered codebase intelligence tool (LangChain, Python, Groq Llama-3, FAISS)
- Embeds GitHub repositories into FAISS vector store for semantic Q&A with source file references; AST-based auto-doc engine generated Google-style docstrings for 727+ functions across 10+ repos.
- Designed dual-mode pipeline: conversational Q&A chain + auto-doc engine with HuggingFace embeddings.

2. QueryBridge AI: Natural-language MongoDB Query Engine (FastAPI, MongoDB, Prompt Engineering)
- Dual-prompt pipeline with schema injection, blocking unsafe operations with 85% query success rate across 50 test cases.
- Exposed RESTful FastAPI service for frontend consumption.

3. Insta Viral AI: AI Content & Reel Virality System (FastAPI, Gemini API, Streamlit)
- End-to-end AI content scoring and caption generation benchmarked against viral videos; cut processing time from 90s to 30s (60% throughput gain).

EDUCATION
B.E. Computer Science | Dhole Patil College of Engineering, Pune (Aug 2022 – Aug 2026)
CGPA: 9.72 / 10.0
Coursework: DSA, Machine Learning, DBMS, OS, Web Tech, OOP

ACHIEVEMENTS
- Smart India Hackathon 2024: Delivered full MVP within 36 hours.
- Cultural Accolades: 1st Prize in One-Act Play & Rangoli at Kshitij Cultural Festival.
- NSS Volunteer: Community notebook & pencil donation drives and winter camp activities.`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(plainResumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const blob = new Blob([plainResumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Dnyaneshwari_Dandagawhal_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B0E14]/85 backdrop-blur-md">
      <div
        className="bg-[#191c22] border border-[#1F4B3F] w-full max-w-4xl rounded shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F4B3F]/40 bg-[#10131a]">
          <div className="flex items-center gap-3">
            <FileText size={20} className="text-[#f7bd48]" />
            <div>
              <h3 className="font-serif text-xl text-[#f7bd48]">Curriculum Vitae</h3>
              <p className="text-xs text-[#a2d0c0] font-mono">Dnyaneshwari Dandagawhal · AI &amp; Backend</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 bg-[#10131a] hover:bg-[#1F4B3F]/30 border border-[#1F4B3F]/50 text-xs text-[#d3c4af] rounded flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy plain text"
            >
              {copied ? <Check size={14} className="text-[#f7bd48]" /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3 py-1.5 bg-[#10131a] hover:bg-[#1F4B3F]/30 border border-[#1F4B3F]/50 text-xs text-[#d3c4af] rounded flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download size={14} />
              <span className="hidden sm:inline">Download</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-[#B8860B] hover:bg-[#f7bd48] text-[#0B0E14] font-semibold text-xs rounded flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer size={14} />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-[#d3c4af] hover:text-[#f7bd48] transition-colors rounded ml-2"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div className="p-6 md:p-10 overflow-y-auto bg-[#EDE0C8] text-[#0B0E14] font-sans selection:bg-[#1F4B3F] selection:text-[#EDE0C8]">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Header */}
            <div className="border-b-2 border-[#0B0E14]/30 pb-4">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#0B0E14] tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-semibold text-[#1F4B3F] mt-1 tracking-wider uppercase">
                {PERSONAL_INFO.title}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#0B0E14]/80 mt-2 font-mono">
                <span>{PERSONAL_INFO.email}</span>
                <span>•</span>
                <span>Pune, India</span>
                <span>•</span>
                <span>CGPA: 9.72 / 10.0</span>
              </div>
            </div>

            {/* Profile */}
            <div>
              <h2 className="font-serif text-lg font-bold text-[#0B0E14] uppercase tracking-wider border-b border-[#0B0E14]/20 pb-1 mb-2">
                Executive Profile
              </h2>
              <p className="text-xs leading-relaxed text-[#0B0E14]/90">
                {PERSONAL_INFO.aboutParagraphs.join(' ')}
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="font-serif text-lg font-bold text-[#0B0E14] uppercase tracking-wider border-b border-[#0B0E14]/20 pb-1 mb-3">
                Professional Experience
              </h2>
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="space-y-1 text-xs">
                  <div className="flex justify-between items-start font-semibold">
                    <span className="text-sm font-bold">{exp.company}</span>
                    <span className="font-mono text-[11px]">{exp.period}</span>
                  </div>
                  <div className="text-[#1F4B3F] font-semibold italic">{exp.role} | {exp.location}</div>
                  <ul className="list-disc pl-4 space-y-1 text-[#0B0E14]/90 mt-1">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b.text}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Selected Projects */}
            <div>
              <h2 className="font-serif text-lg font-bold text-[#0B0E14] uppercase tracking-wider border-b border-[#0B0E14]/20 pb-1 mb-3">
                Selected Engineering Projects
              </h2>
              <div className="space-y-3 text-xs">
                {PROJECTS_DATA.map((proj) => (
                  <div key={proj.id} className="space-y-1">
                    <div className="flex justify-between items-center font-semibold">
                      <span className="text-sm font-bold">{proj.title}</span>
                      <span className="font-mono text-[10px] text-[#1F4B3F]">{proj.tags.join(' • ')}</span>
                    </div>
                    <ul className="list-disc pl-4 space-y-1 text-[#0B0E14]/90">
                      {proj.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Grimoire */}
            <div>
              <h2 className="font-serif text-lg font-bold text-[#0B0E14] uppercase tracking-wider border-b border-[#0B0E14]/20 pb-1 mb-2">
                Technical Proficiencies
              </h2>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.title}>
                    <span className="font-semibold text-[#1F4B3F]">{cat.title}: </span>
                    <span className="text-[#0B0E14]/90">{cat.skills.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs border-t border-[#0B0E14]/20 pt-3">
              <div>
                <h3 className="font-serif font-bold uppercase text-[#0B0E14] mb-1">Education</h3>
                <p className="font-bold">{EDUCATION_DATA.degree}</p>
                <p className="text-[#1F4B3F]">{EDUCATION_DATA.institution}</p>
                <p className="font-mono text-[11px]">{EDUCATION_DATA.period} | CGPA: {EDUCATION_DATA.gpa}/10.0</p>
              </div>
              <div>
                <h3 className="font-serif font-bold uppercase text-[#0B0E14] mb-1">Honors &amp; Leadership</h3>
                <ul className="list-disc pl-4 space-y-0.5">
                  {ACHIEVEMENTS_DATA.map((ach, i) => (
                    <li key={i}><strong>{ach.title}:</strong> {ach.description.substring(0, 75)}...</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
