const portfolioData = {
  personal: {
    name: "Deepanshu Singh",
    title: "Sr. R&D Engineer - Applied AI & GenAI",
    tagline: "I build scalable AI workflows.",
    description:
      "I'm a Senior R&D Engineer specializing in Artificial Intelligence, LLM Evaluation Frameworks, and RAG pipelines. I focus on mapping unstructured data to intelligent, data-driven solutions and automating complex engineering workflows.",
    email: "2019deepanshu@gmail.com",
    phone: "+91 7895285472",
    github: "https://github.com/Deepanshu422",
    linkedin: "https://www.linkedin.com/in/deepanshu-singh-936929195/",
    resumePath: "/docs/Deepanshu_Singh_Resume-AI-Eng.pdf",
    image: "/images/image.png",
  },

  experience: [
    {
      role: "Sr. R&D Engineer",
      type: "Research and Development",
      company: "Intervue.io",
      date: "07/2024 - Present",
      location: "Remote",
      bullets: [
        { label: "AI Workflow Engineering & Evaluation", text: "Researched, designed, tested, and implemented AI/LLM-powered workflows for Plagiarism Detection, Coding Evaluation, JD/Resume Parsing, and technical assessment generation. Designed evaluation criteria and prompts, iterated on outputs, and validated solutions for accuracy, consistency, and contextual relevance." },
        { label: "Applied AI & Retrieval Systems", text: "Developed a RAG-based Rubric Intelligence System featuring a two-stage retrieval pipeline using LangChain, Python, PostgreSQL (pgvector), and OpenAI's text-embedding-3-small model. Implemented Hybrid Semantic Search with a Cross-Encoder reranker and strict Pydantic schema validation to map unstructured requirements across 10K+ rubric records." },
        { label: "LLM Evaluation & Prompt Engineering", text: "Built systematic evaluation workflows for LLM-powered hiring applications by testing prompts against hundreds of test inputs across multiple LLMs (GPT, Gemini, Groq, etc.). Compared outputs against defined evaluation criteria, analyzed failure cases, and optimized prompts through repeated evaluation cycles to improve reliability and effectiveness." },
        { label: "AI-Enabled Automation", text: "Built workflow automation using JavaScript and Google Apps Script to streamline assessment creation, validation, and quality-control processes, reducing repetitive manual work and enabling scalable evaluation operations." },
        { label: "Research & Evaluation Frameworks", text: "Defined SOPs for technical research, evaluation-framework design, and data curation, standardizing the translation of evolving technical requirements into structural evaluation criteria across 100+ profiles and 8K+ rubrics." },
        { label: "R&D Leadership & Product Integration", text: "Led a 4-member R&D team and collaborated with Product, Engineering, Customer Success, Product Support, and Operations teams to conduct UAT, analyze user feedback and performance metrics, validate AI solutions, and drive PoCs toward production readiness." },
      ],
      techStack: "Python, LangChain, Prompt Engineering, LLMs, RAG, Embeddings, PostgreSQL (pgvector, FTS), Hybrid Semantic Search, Vector DBs, Pydantic, JavaScript",
    },
    {
      role: "R&D Intern",
      company: "Intervue.io",
      date: "11/2023 - 07/2024",
      location: "Remote",
      bullets: [
        { text: "Researched various roles, skills, tools, and frameworks to develop scalable and structured Rubric-Based evaluation frameworks." },
        { text: "Automated research workflows using JavaScript and Google Apps Script, improving operational efficiency." },
      ],
    },
    {
      role: "SDE Intern",
      company: "ZeMoSo Technologies",
      date: "02/2023 - 07/2023",
      location: "Hyderabad",
      bullets: [
        { text: "Developed responsive frontend modules in ReactJS/TypeScript and Material UI, integrating REST APIs for internal workflows." },
      ],
      techStack: "HTML/CSS, JavaScript, TypeScript, ReactJS, Material UI, Git",
    },
  ],

  projects: [
    {
      title: "Autonomous Finance Tracker AI Agent",
      github: "#",
      live: "#",
      bullets: [
        { label: "AI Agent Architecture", text: "Architected a multimodal WhatsApp-native AI agent with both Speech-to-Text (STT) and Text-to-Text (TTT) capabilities, integrating whisper-large-v3-turbo for real-time voice note transcription and chaining all inputs into an LLM parser with strict JSON Schema constraints." },
        { label: "Backend & Automation", text: "Engineered a Supabase (PostgreSQL) backend featuring Role-Based Access Control (RBAC) for in-chat admin approvals, and integrated APScheduler to push automated weekly WhatsApp reports." },
        { label: "System Analytics UI", text: "Built a real-time Streamlit administrative dashboard to visualize live system metrics, track spending trends, and manage user onboarding queues." },
      ],
      techStack: "Python, FastAPI, Pydantic, Node.js (whatsapp-web.js), Supabase (PostgreSQL), Streamlit, LLM API, Prompt Engineering, Multimodal AI",
    },
  ],

  skills: [
    {
      category: "AI / LLM",
      items: "LLMs, Prompt Engineering, RAG, Semantic Search, Hybrid Search, Embeddings, Cross-Encoder Reranking, Qdrant, LLM APIs, Multimodal AI, Speech-to-Text (Whisper), Text-to-Text",
    },
    {
      category: "Frameworks & Languages",
      items: "Python, LangChain, Asyncio, JavaScript, TypeScript, FastAPI, Streamlit",
    },
    {
      category: "Automation & Tools",
      items: "Workflow Automation, Google Apps Script, Git/GitHub",
    },
  ],

  education: {
    degree: "B.Tech in Electronics & Communication",
    institution: "GL Bajaj Institute of Technology & Management",
    date: "2019 - 2023",
    location: "Greater Noida",
    cgpa: "8.2 / 10.0",
  },
};

export default portfolioData;
