import { useState, type FormEvent } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, Mail, Copy, Check, Send, CheckCircle2, Github, Linkedin, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Opportunity Inquiry',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0E14]/85 backdrop-blur-md">
      <div
        className="bg-[#191c22] border border-[#1F4B3F] w-full max-w-xl rounded shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F4B3F]/40 bg-[#10131a]">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-[#a2d0c0] rounded-full animate-pulse"></div>
            <div>
              <h3 className="font-serif text-xl text-[#f7bd48]">Contact &amp; Dispatch</h3>
              <p className="text-xs text-[#a2d0c0] font-mono">Dnyaneshwari Dandagawhal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#d3c4af] hover:text-[#f7bd48] transition-colors rounded"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Quick Email Copy Box */}
          <div className="bg-[#10131a] p-4 rounded border border-[#1F4B3F]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#1F4B3F]/30 rounded text-[#f7bd48]">
                <Mail size={18} />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#9c8f7b] block">
                  Direct Email
                </span>
                <span className="text-xs sm:text-sm font-mono text-[#e1e2eb] select-all">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 bg-[#1F4B3F]/40 hover:bg-[#1F4B3F]/80 text-[#EDE0C8] text-xs font-mono rounded flex items-center gap-1.5 border border-[#1F4B3F]/70 transition-colors cursor-pointer"
              >
                {copied ? <Check size={14} className="text-[#a2d0c0]" /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-3 py-1.5 bg-[#B8860B] hover:bg-[#f7bd48] text-[#0B0E14] font-semibold text-xs rounded transition-colors"
              >
                Mailto
              </a>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#10131a] hover:bg-[#1F4B3F]/20 border border-[#1F4B3F]/40 hover:border-[#a2d0c0] rounded flex items-center gap-3 transition-colors text-xs text-[#d3c4af]"
            >
              <Github size={18} className="text-[#f7bd48]" />
              <div>
                <span className="font-semibold block text-[#e1e2eb]">GitHub</span>
                <span className="text-[10px] text-[#9c8f7b]">@aethersmith</span>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#10131a] hover:bg-[#1F4B3F]/20 border border-[#1F4B3F]/40 hover:border-[#a2d0c0] rounded flex items-center gap-3 transition-colors text-xs text-[#d3c4af]"
            >
              <Linkedin size={18} className="text-[#a2d0c0]" />
              <div>
                <span className="font-semibold block text-[#e1e2eb]">LinkedIn</span>
                <span className="text-[10px] text-[#9c8f7b]">Dnyaneshwari Dandagawhal</span>
              </div>
            </a>
          </div>

          {/* Message Form */}
          {formSubmitted ? (
            <div className="p-6 bg-[#10131a] border border-[#1F4B3F] rounded text-center space-y-3 animate-in fade-in">
              <CheckCircle2 size={36} className="text-[#a2d0c0] mx-auto" />
              <h4 className="font-serif text-xl text-[#f7bd48]">Dispatch Transmitted</h4>
              <p className="text-xs text-[#d3c4af] max-w-sm mx-auto">
                Thank you for reaching out! Your dispatch has been logged. I will respond to{' '}
                <span className="text-[#a2d0c0] font-mono">{formData.email || 'your email'}</span> promptly.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-2 text-xs text-[#a2d0c0] underline hover:text-[#f7bd48]"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#d3c4af] pb-1 border-b border-[#1F4B3F]/30">
                <MessageSquare size={13} className="text-[#f7bd48]" />
                <span>Send a Direct Dispatch</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-[#9c8f7b] block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-3 py-2 bg-[#10131a] border border-[#1F4B3F]/50 focus:border-[#f7bd48] rounded text-xs text-[#e1e2eb] outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-[#9c8f7b] block">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full px-3 py-2 bg-[#10131a] border border-[#1F4B3F]/50 focus:border-[#f7bd48] rounded text-xs text-[#e1e2eb] outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-[#9c8f7b] block">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Backend / AI Opportunity"
                  className="w-full px-3 py-2 bg-[#10131a] border border-[#1F4B3F]/50 focus:border-[#f7bd48] rounded text-xs text-[#e1e2eb] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-[#9c8f7b] block">Message</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Dnyaneshwari, we reviewed your DRDO NLP query system and would like to discuss..."
                  className="w-full px-3 py-2 bg-[#10131a] border border-[#1F4B3F]/50 focus:border-[#f7bd48] rounded text-xs text-[#e1e2eb] outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#B8860B] hover:bg-[#f7bd48] text-[#0B0E14] font-semibold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Send size={14} />
                <span>Send Dispatch</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
