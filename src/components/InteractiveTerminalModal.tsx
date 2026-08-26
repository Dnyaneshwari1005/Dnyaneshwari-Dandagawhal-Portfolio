import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Terminal, X, Minimize2, Maximize2, Trash2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface InteractiveTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InteractiveTerminalModal({ isOpen, onClose }: InteractiveTerminalModalProps) {
  if (!isOpen) return null;

  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
    {
      command: 'system-init',
      output: `AETHERSMITH CLI [v2.4.0-arcanist]
Host: dnyaneshwari-dandagawhal (Python Backend & AI Engineer)
Type 'help' to inspect available system commands.`
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let response = '';

    switch (cmd) {
      case 'help':
      case 'commands':
        response = `Available Commands:
  • drdo        - Inspect DRDO NLP data assistant metrics & architecture
  • rag         - Simulate CodeSense AI FAISS retrieval
  • mongodb     - Test QueryBridge AI schema-injected query engine
  • skills      - Output complete Technical Grimoire stack
  • projects    - List selected engineering systems
  • education   - Display academic records & CGPA
  • contact     - Output direct dispatch coordinates
  • clear       - Flush terminal history`;
        break;

      case 'drdo':
        response = `[DRDO Software Development Internship - AI & Backend]
• Project: AI-Powered Natural Language Data Assistant
• Turnaround Reduction: 2-3 days -> UNDER 30 SECONDS (Self-Serve)
• Stakeholder Scope: 3-5 teams, 50+ queries/week without manual SQL
• Core Stack: FastAPI, Schema Injection, LLM AST validation, Output constraints`;
        break;

      case 'rag':
      case 'codesense':
        response = `[CodeSense AI - Vector RAG Pipeline]
• Embeddings: HuggingFace all-MiniLM-L6-v2
• Vector Index: FAISS FlatIP with cosine similarity (Latency: 14ms)
• LLM Engine: Groq Llama-3-70B
• Auto-Documentation: AST generator wrote Google-style docstrings for 727+ functions across 10+ repos`;
        break;

      case 'mongodb':
      case 'querybridge':
        response = `[QueryBridge AI - MongoDB Natural Language Query Pipeline]
• Dual-prompt safety pipeline with schema AST injection
• 85% query success rate across 50 test cases
• Blocked destructive operations ($where, system commands, writes)
• Exposed as RESTful FastAPI endpoint`;
        break;

      case 'skills':
        response = `[Technical Grimoire]
Languages: Python, JavaScript, SQL, HTML, CSS
Backend & APIs: FastAPI, REST API Design, OOP, Microservices
AI / GenAI: LLMs, RAG, Prompt Engineering, Embeddings, LangChain, NLP
Databases: MongoDB, MySQL, FAISS (Vector DB)
Core CS: DSA, Async Programming, System Design
Frontend: React.js, Streamlit, Git/GitHub, NumPy/Pandas`;
        break;

      case 'projects':
        response = `[Selected Projects]
1. CodeSense AI: RAG Codebase Intelligence & Auto-Docstring Generator
2. QueryBridge AI: Natural-Language MongoDB REST Service
3. Insta Viral AI: Multimodal Reel Virality & Caption AI System`;
        break;

      case 'education':
        response = `[Education & Academic Honors]
B.E. Computer Science - Dhole Patil College of Engineering, Pune (2022 - 2026)
CGPA: 9.72 / 10.0
Honors: Smart India Hackathon 2024 MVP, Kshitij Festival 1st Prize Winner`;
        break;

      case 'contact':
        response = `[Contact Coordinates]
Email: ${PERSONAL_INFO.email}
Location: Pune, Maharashtra, India
Status: Available for Backend, AI/ML, and Software Developer roles`;
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        response = `Command not recognized: '${cmd}'. Type 'help' for the list of available commands.`;
    }

    setHistory((prev) => [...prev, { command: inputVal, output: response }]);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B0E14]/85 backdrop-blur-md">
      <div
        className="bg-[#0B0E14] border border-[#1F4B3F] w-full max-w-2xl rounded shadow-2xl overflow-hidden flex flex-col h-[520px] max-h-[85vh] animate-in fade-in zoom-in-95 duration-200 font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#10131a] border-b border-[#1F4B3F]/40 select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#93000a]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ba880f]"></div>
            <div className="w-3 h-3 rounded-full bg-[#1F4B3F]"></div>
            <span className="text-xs text-[#a2d0c0] ml-2 flex items-center gap-1.5">
              <Terminal size={13} className="text-[#f7bd48]" />
              <span>aethersmith@folio:~</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setHistory([])}
              title="Clear terminal"
              className="p-1 text-[#9c8f7b] hover:text-[#e1e2eb] transition-colors"
            >
              <Trash2 size={13} />
            </button>
            <button
              onClick={onClose}
              className="p-1 text-[#9c8f7b] hover:text-[#f7bd48] transition-colors"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Output Stream */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-[#f7bd48]">
                <span className="text-[#a2d0c0]">dnyaneshwari@dev:~$</span>
                <span>{item.command}</span>
              </div>
              <pre className="text-[#d3c4af] whitespace-pre-wrap leading-relaxed pl-4 border-l border-[#1F4B3F]/30">
                {item.output}
              </pre>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input prompt */}
        <form onSubmit={handleCommand} className="flex items-center gap-2 px-4 py-3 bg-[#10131a] border-t border-[#1F4B3F]/40">
          <span className="text-xs text-[#a2d0c0] font-bold select-none">$</span>
          <input
            type="text"
            autoFocus
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'drdo', 'rag', 'skills'..."
            className="flex-1 bg-transparent text-xs text-[#f7bd48] outline-none placeholder-[#9c8f7b]/50"
          />
          <button
            type="submit"
            className="text-[11px] uppercase tracking-wider text-[#a2d0c0] hover:text-[#f7bd48] px-2 py-0.5 rounded border border-[#1F4B3F]/50"
          >
            Exec
          </button>
        </form>
      </div>
    </div>
  );
}
