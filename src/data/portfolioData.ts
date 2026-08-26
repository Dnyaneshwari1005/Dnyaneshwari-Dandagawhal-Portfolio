import { Project, SkillCategory, ExperienceItem, EducationItem, AchievementItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Dnyaneshwari Dandagawhal',
  title: 'Backend & AI Engineer',
  brand: 'AETHERSMITH',
  email: 'dandagawhaldnyaneshwari@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  heroBio: 'Python backend and AI developer building production-grade REST APIs and Generative AI systems. Delivered an AI-powered natural language data assistant at DRDO, reducing data-retrieval turnaround from 2-3 days to under 30 seconds.',
  heroTags: ['FastAPI', 'LangChain', 'RAG Architecture', 'Python', 'System Design'],
  aboutParagraphs: [
    'I am a Python backend and AI developer with hands-on experience building production-style REST APIs (FastAPI) and Generative AI systems, including LLMs, RAG pipelines, LangChain, and Prompt Engineering.',
    'During my Software Development Internship at DRDO, I architected an AI-powered natural language data assistant that empowered non-technical stakeholders to query complex organizational datasets without SQL, dramatically reducing technical-team dependency.',
    'With a strong foundation in Object-Oriented Programming, Data Structures & Algorithms, and database design (MongoDB, MySQL), I am currently seeking a Software Developer, Backend, or AI/ML Engineer role to build scalable, intelligent systems that solve complex, real-world problems.'
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'SQL', 'HTML', 'CSS']
  },
  {
    title: 'Backend & APIs',
    skills: ['FastAPI', 'REST API Design & Dev', 'OOP']
  },
  {
    title: 'AI / GenAI',
    skills: ['LLMs', 'RAG', 'Prompt Engineering', 'Embeddings', 'LangChain', 'NLP']
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'FAISS (Vector DB)']
  },
  {
    title: 'Core CS',
    skills: ['DSA', 'Async Programming', 'Microservices', 'System Design']
  },
  {
    title: 'Frontend & Tools',
    skills: ['React.js', 'Streamlit', 'Git/GitHub', 'NumPy/Pandas']
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'Defence Research and Development Organisation (DRDO)',
    role: 'Software Development Intern · AI & Backend',
    period: 'Sept 2023 – Aug 2024',
    location: 'Pune, India',
    bullets: [
      {
        text: 'Architected an AI-powered NLP assistant enabling non-technical stakeholders to query large organisational datasets without SQL, removing technical-team dependency for routine requests across 3-5 teams, 50+ queries/week.',
        highlight: '3-5 teams, 50+ queries/week'
      },
      {
        text: 'Reduced data-retrieval turnaround from a 2-3 day manual process to a self-serve interface that delivers results in under 30 seconds via FastAPI + LLM query generation with schema injection and output constraints.',
        highlight: 'under 30 seconds'
      },
      {
        text: 'Collaborated with a 2-member engineering team to design, validate, and deploy the query pipeline against real organisational datasets; participated in architecture reviews and iterative testing.',
        highlight: '2-member engineering team'
      }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'codesense-ai',
    title: 'CodeSense AI',
    tags: ['LANGCHAIN', 'PYTHON', 'GROQ (LLAMA 3)', 'FAISS'],
    iconType: 'open_in_new',
    demoType: 'rag',
    bullets: [
      'Built a RAG-powered codebase intelligence tool: embeds any GitHub repo into FAISS vector store for semantic Q&A with source file references; AST-based auto-doc engine generated Google-style docstrings for 727+ undocumented functions across 10+ repos.',
      'Designed a dual-mode pipeline: memory-enabled conversational Q&A chain + auto-documentation engine, combining HuggingFace embeddings and FAISS ANN search to maximise retrieval accuracy and minimise irrelevant LLM context.'
    ],
    demoDetails: {
      description: 'Interactive demonstration of the CodeSense AI Vector Ingestion & Semantic Retrieval Engine.',
      architecture: [
        'GitHub Repository Clone & Python AST parsing (Abstract Syntax Tree)',
        'HuggingFace all-MiniLM-L6-v2 Embeddings with Chunk Overlap',
        'FAISS Approximate Nearest Neighbor (IndexFlatIP / HNSW)',
        'Groq-accelerated Llama-3-70B inference for low-latency Q&A responses'
      ],
      sampleInput: 'How does the session token authentication middleware validate expired tokens?',
      sampleOutput: `Found relevant source in: src/middleware/auth.py (Lines 42-68, Similarity: 0.94)

\`\`\`python
async def verify_jwt_session(token: str = Depends(oauth2_scheme)) -> UserSession:
    """Validates signature and expiration timestamp with 60s clock-skew leeway."""
    payload = decode_token(token)
    if payload.get("exp") < time.time() - 60:
        raise HTTPException(status_code=401, detail="Session expired")
    return UserSession(**payload)
\`\`\`

Explanation: The middleware uses a 60-second leeway buffer to handle clock skew before rejecting expired JWT signatures.`
    }
  },
  {
    id: 'querybridge-ai',
    title: 'QueryBridge AI',
    tags: ['FASTAPI', 'MONGODB', 'PROMPT ENGINEERING'],
    iconType: 'code',
    demoType: 'nlp_query',
    bullets: [
      'Architected a natural-language MongoDB query engine using a dual-prompt pipeline with schema injection and strict output constraints; blocked unsafe operations and achieved 85% query success rate across 50 test cases, returning human-readable results with data visualisations.',
      'Exposed the full NLP-to-query pipeline as a RESTful FastAPI service, enabling clean front-end consumption and third-party API integration.'
    ],
    demoDetails: {
      description: 'Interactive simulator of the schema-injected MongoDB aggregation pipeline generator.',
      architecture: [
        'Schema metadata injection with type enforcement',
        'Dual-prompt AST validator (blocks $where, system commands, and malicious writes)',
        'FastAPI async executor with JSON serializer & chart aggregation',
        'Confidence score estimator (85% verified benchmark across 50 test cases)'
      ],
      sampleInput: 'Find top 5 highest budget projects completed in 2023 with total expenditures',
      sampleOutput: `Generated MongoDB Aggregation Pipeline:
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
Execution Status: Sanitized & Validated (0.024s) | 5 Documents Returned`
    }
  },
  {
    id: 'insta-viral-ai',
    title: 'Insta Viral AI',
    badge: 'Final Year Project',
    tags: ['FASTAPI', 'GEMINI API', 'STREAMLIT'],
    iconType: 'video_library',
    demoType: 'video_scoring',
    bullets: [
      'Built an end-to-end AI content system for Instagram creators: scores reel virality and generates niche-specific captions, and hashtags improvement tips benchmarked against scraped viral videos; cut processing time from 90s to 30s (60% throughput gain).',
      'Engineered async video pipeline, eliminating upload blocking; sole backend/system lead, owned FastAPI service architecture, async pipeline design, and full Gemini AI integration across the project.'
    ],
    demoDetails: {
      description: 'AI-powered multimodal Reel assessment pipeline with Gemini AI integration.',
      architecture: [
        'Asynchronous video frame extractor and audio transcription',
        'Gemini 1.5/Flash Multimodal API with custom virality heuristics',
        'Benchmark database of 10,000+ top-performing niche video metadata',
        'FastAPI asynchronous worker reducing processing time from 90s to 30s'
      ],
      sampleInput: 'Tech review reel: 15s smartphone battery test with fast cuts & voiceover',
      sampleOutput: `Virality Score: 88 / 100 [High Potential]

Key Strengths:
✓ Strong visual hook within first 1.8 seconds (battery explosion graphic)
✓ High audio clarity & pacing (145 WPM voiceover)

Optimized Caption:
"Is this the end of portable chargers? 🔋⚡ We pushed the latest flagship to 0% in under 4 hours under heavy stress test. Drop your daily screen time in comments! 👇"

Recommended Tags: #TechReview #BatteryTest #SmartphoneLife #TechHacks #GadgetGuide`
    }
  }
];

export const EDUCATION_DATA: EducationItem = {
  degree: 'B.E. Computer Science',
  institution: 'Dhole Patil College of Engineering, Pune',
  period: 'Aug 2022 – Aug 2026',
  gpa: '9.72',
  gpaMax: '10.0',
  coursework: [
    'Data Structures & Algorithms',
    'Machine Learning',
    'DBMS',
    'Operating Systems',
    'Web Technologies',
    'OOP'
  ]
};

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: 'Smart India Hackathon 2024',
    category: 'Hackathon',
    description: 'Delivered a fully functional e-learning platform MVP within the 36-hour deadline, demonstrating full-stack development, rapid prototyping, and cross-functional team collaboration under pressure.',
    icon: 'trophy'
  },
  {
    title: 'Cultural Accolades',
    category: 'Cultural',
    description: 'Won 1st Prize in One-Act Play and 1st Prize in Rangoli at Kshitij Cultural Festival; also performed as a dancer, reflecting strong communication, creativity, stage confidence, and team coordination.',
    icon: 'sparkles'
  },
  {
    title: 'NSS Volunteer',
    category: 'Community Outreach',
    description: 'Led community outreach via notebook & pencil donation drives and NSS Winter Camp activities; demonstrates initiative, social responsibility, and leadership outside academics.',
    icon: 'heart-handshake'
  }
];
