import { useState } from 'react';
import { Project } from '../types';
import { X, Play, CheckCircle, Copy, Check, Sparkles, Terminal, Code2, Video, Database } from 'lucide-react';

interface ProjectDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDemoModal({ project, onClose }: ProjectDemoModalProps) {
  if (!project) return null;

  const [inputQuery, setInputQuery] = useState(project.demoDetails.sampleInput);
  const [outputResult, setOutputResult] = useState<string>(project.demoDetails.sampleOutput);
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleRunDemo = () => {
    setIsRunning(true);
    setTimeout(() => {
      if (project.id === 'codesense-ai') {
        setOutputResult(`Found relevant source in: src/middleware/auth.py (Similarity: 0.96)

\`\`\`python
# [AST Generated Docstring]
async def verify_jwt_session(token: str = Depends(oauth2_scheme)) -> UserSession:
    """
    Validates signature, expiration timestamp, and claims.
    
    Args:
        token (str): Bearer JWT authentication token from request header.
    Returns:
        UserSession: Active validated user payload.
    Raises:
        HTTPException: 401 Unauthorized if expired or invalid.
    """
    payload = decode_token(token)
    if payload.get("exp") < time.time() - 60:
        raise HTTPException(status_code=401, detail="Session expired")
    return UserSession(**payload)
\`\`\`

FAISS Embedding Query Latency: 18ms | LLM Context Tokens: 412`);
      } else if (project.id === 'querybridge-ai') {
        setOutputResult(`Generated Sanitized MongoDB Query:
\`\`\`json
[
  {
    "$match": {
      "status": "COMPLETED",
      "completionDate": { "$gte": "2023-01-01T00:00:00Z", "$lte": "2023-12-31T23:59:59Z" }
    }
  },
  {
    "$project": {
      "title": 1,
      "budget": 1,
      "totalExpenditure": { "$sum": "$expenses.amount" }
    }
  },
  { "$sort": { "budget": -1 } },
  { "$limit": 5 }
]
\`\`\`
Schema Constraints: Validated (Strict No-Write Enforced)
Execution Time: 0.018s | Query Status: 200 OK`);
      } else {
        setOutputResult(`Virality Assessment Report:
- Predicted Engagement Index: 91 / 100 [High Virality Potential]
- First 3-Second Retention Likelihood: 84%
- Sound & Pacing Rating: Optimal (152 BPM beat sync)

Generated Multimodal Captions:
"🔥 We tested the most hyped battery claims so you don't have to! Which test should we run next? 👇"

Targeted Hashtags:
#TechReview #BatteryStressTest #TechTrends2024 #GadgetGeek #EngineeringLife

FastAPI Async Execution Time: 28.4s (68% faster than baseline)`);
      }
      setIsRunning(false);
    }, 600);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0E14]/80 backdrop-blur-md">
      <div
        className="bg-[#191c22] border border-[#1F4B3F] w-full max-w-3xl rounded shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1F4B3F]/40 bg-[#10131a]">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rotate-45 bg-[#f7bd48]"></div>
            <div>
              <h3 className="font-serif text-xl text-[#f7bd48]">{project.title} — System Inspector</h3>
              <p className="text-xs text-[#a2d0c0] font-mono">{project.tags.join(' · ')}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#d3c4af] hover:text-[#f7bd48] transition-colors rounded"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm font-sans">
          {/* Architecture Highlights */}
          <div className="bg-[#10131a] p-4 rounded border border-[#1F4B3F]/30 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#f7bd48] block">
              Architectural Pipeline
            </span>
            <ul className="space-y-1 text-xs text-[#d3c4af]">
              {project.demoDetails.architecture.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#a2d0c0] font-mono">0{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Input */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-[#d3c4af] flex justify-between">
              <span>Simulated Input Query</span>
              <span className="text-[#a2d0c0]">Interactive Mode</span>
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                className="flex-grow px-3 py-2 bg-[#10131a] border border-[#1F4B3F]/50 focus:border-[#f7bd48] rounded text-xs font-mono text-[#e1e2eb] outline-none"
              />
              <button
                onClick={handleRunDemo}
                disabled={isRunning}
                className="px-4 py-2 bg-[#B8860B] hover:bg-[#f7bd48] text-[#0B0E14] text-xs font-semibold uppercase tracking-wider rounded flex items-center gap-1.5 transition-all disabled:opacity-50 cursor-pointer"
              >
                <Play size={13} fill="currentColor" />
                <span>{isRunning ? 'Executing...' : 'Run Pipeline'}</span>
              </button>
            </div>
          </div>

          {/* Simulated Output Terminal */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-[#d3c4af] flex items-center gap-1.5">
                <Terminal size={14} className="text-[#a2d0c0]" />
                <span>Pipeline Output Stream</span>
              </span>
              <button
                onClick={handleCopy}
                className="text-xs text-[#a2d0c0] hover:text-[#f7bd48] flex items-center gap-1 transition-colors"
              >
                {copied ? <Check size={13} className="text-[#f7bd48]" /> : <Copy size={13} />}
                <span>{copied ? 'Copied' : 'Copy Output'}</span>
              </button>
            </div>

            <pre className="p-4 bg-[#0B0E14] border border-[#1F4B3F]/40 rounded font-mono text-xs text-[#a2d0c0] whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto">
              {outputResult}
            </pre>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#1F4B3F]/30 bg-[#10131a] flex justify-between items-center text-xs text-[#d3c4af]">
          <span className="font-mono text-[11px] text-[#9c8f7b]">Built with architectural precision &amp; safety</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#1F4B3F]/30 hover:bg-[#1F4B3F]/60 text-[#EDE0C8] border border-[#1F4B3F]/50 rounded text-xs transition-colors cursor-pointer"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
