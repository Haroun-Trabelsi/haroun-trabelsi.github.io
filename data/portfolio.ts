export type ProjectMedia = {
  type: "video" | "image";
  src: string;
  title?: string;
  text?: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  status: "LIVE" | "BETA" | "DEV";
  image?: string; // optional thumbnail path in /public
  slug?: string; // optional custom slug; defaults to slugified title
  thumbnailPoster?: string; // list card poster image
  thumbnailVideo?: string; // list card hover video
  overviewVideo?: string; // detail hero video
  sections?: ProjectMedia[]; // alternating media/text sections
  impacts?: string[]; // key metrics displayed as badges on cards
  liveUrl?: string; // link to live project
};

export type Company = {
  name: string;
  role: string;
  logo: string;
  color: string; // tailwind text-* color class
};

export type Skill = {
  name: string;
  level: number; // percentage 0-100
  category: "frontend" | "backend" | "tools" | "languages";
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  color: string; // tailwind border-* color class
};

export const projects: Project[] = [
  {
    title: "JourneyAI",
    image: "/images/journeylanding.png",
    description: "Production-grade AI sales assistant platform serving 10+ enterprise clients with 98% uptime, developed over 8 months across EverythingToGain and Skaled (ongoing). Built sophisticated RAG pipeline with multi-collection vector search, real-time WebSocket streaming, session snapshots/forking system, and comprehensive subscription management. Contributed 25% of codebase including semantic search engine, background worker system, and Stripe integration.",
    tech: ["React 19", "TypeScript", "FastAPI", "MongoDB", "Qdrant", "Redis", "OpenAI GPT-4", "WebSockets", "ARQ", "Stripe", "Docker", "Pydantic", "Beanie ODM"],
    status: "LIVE",
    impacts: ["10+ Enterprise Clients", "98% Uptime", "70+ Components"],
    liveUrl: "https://meetjourney.ai/",
    thumbnailPoster: "/images/journeylanding.png",
    slug: "journeyai",
    sections: [
      {
        type: "image",
        src: "/images/JourneyAI/chat.png",
        title: "Real-Time AI Chat",
        text: "12+ specialized AI assistants with session-aware WebSocket streaming, event batching, and token-by-token function call visualization."
      },
      {
        type: "image",
        src: "/images/JourneyAI/share.png",
        title: "RAG Pipeline & Semantic Search",
        text: "Multi-collection vector search across Artifacts, Messages, and Files using OpenAI embeddings and Qdrant. Score thresholding, multi-tenant filters, and dynamic context injection."
      },
      {
        type: "image",
        src: "/images/JourneyAI/memories.png",
        title: "Session Snapshots & Forking",
        text: "Conversation branching with save states, fork from any message, and restore snapshots. Full history with vector embeddings for cross-session context."
      },
      {
        type: "image",
        src: "/images/JourneyAI/Login.png",
        title: "Multi-Tenant Architecture",
        text: "FastAPI backend with async patterns, organization-level data isolation, ARQ job queue (Redis), Loguru logging, and Docker containerization."
      },
      {
        type: "image",
        src: "/images/JourneyAI/App.png",
        title: "Dynamic Component Engine",
        text: "JSON-to-React rendering system with type-safe registry supporting 70+ components. Backend-driven UI updates without frontend deployments."
      }
    ],
  },
  {
    title: "StrategicAI",
    description: "Enterprise-grade workflow automation platform with visual drag-and-drop builder and sophisticated export ecosystem. Built complete transformation system converting internal workflows to 3 platform-specific formats (Zapier, Make, n8n) with multi-mode export (API-based automatic, manual JSON, webhook). Features topological sorting for dependency resolution, variable resolution system, and real-time execution engine.",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Drizzle ORM", "React Flow", "Passport.js", "Google OAuth", "OpenAI GPT-4", "shadcn/ui", "Tailwind CSS"],
    status: "LIVE",
    impacts: ["3 Platform Exports", "Real-Time Execution"],
    liveUrl: "https://strategy.ai/",
    image: "/images/StrategicAI.jpg",
    slug: "strategicai",
    sections: [
      {
        type: "image",
        src: "/images/Strategic/Builder.png",
        title: "Visual Workflow Builder",
        text: "Drag-and-drop interface with React Flow for visual workflow design. Catalog-driven UI with platform-specific parameter configuration for multi-step automations."
      },
      {
        type: "image",
        src: "/images/Strategic/platforms-export.jpg",
        title: "Multi-Platform Export",
        text: "3 export modes (Automatic API, Manual JSON, Webhook) with platform-specific transformers for Zapier, Make, and n8n. Handles node detection, connection mapping, and parameter transformation."
      },
      {
        type: "image",
        src: "/images/Strategic/Workflow.png",
        title: "Execution Engine",
        text: "Topological sorting for dependency resolution with dynamic data flow between steps. Supports Google Docs, Gmail, OpenAI, Slack, Discord with OAuth management."
      },
      {
        type: "image",
        src: "/images/Strategic/PERN.webp",
        title: "Type-Safe Full-Stack",
        text: "TypeScript monorepo with shared schemas, PostgreSQL + Drizzle ORM for type-safe queries, and centralized error handling with transaction support."
      }
    ],
  },
  {
    title: "Saleside",
    description: "Production-ready enterprise AI sales coaching platform that joins meetings in real-time, analyzes conversations, and delivers instant coaching insights. Achieved 64% HTML size reduction and 400ms→0ms page transitions through client-side caching. Two-tier architecture with Flask frontend and Railway backend supporting 50+ API endpoints, 14-table PostgreSQL schema, and Socket.IO real-time updates with 10ms transcript batching.",
    tech: ["Flask", "Python", "Socket.IO", "PostgreSQL", "SQLAlchemy", "Groq API", "OpenAI GPT-4o", "Recall.ai", "Stripe", "JavaScript", "Gunicorn", "Railway", "Replit"],
    status: "LIVE",
    impacts: ["64% Size Reduction", "0ms Page Transitions", "50+ Endpoints"],
    liveUrl: "https://saleside.ai/",
    image: "/images/saleside/image (6).png",
    slug: "saleside",
    sections: [
      {
        type: "image",
        src: "/images/saleside/image (7).png",
        title: "Real-Time AI Coaching",
        text: "Live meeting transcription with speaker identification and instant objection handling. Call stage detection (Discovery through Closing) with sub-second Groq LLM responses."
      },
      {
        type: "image",
        src: "/images/saleside/image (8).png",
        title: "Two-Tier Architecture",
        text: "Flask frontend + Railway microservice for bot orchestration. Socket.IO with polling fallback for reliable real-time communication and independent scaling."
      },
      {
        type: "image",
        src: "/images/saleside/image (9).png",
        title: "64% Size Reduction",
        text: "Optimized from 168KB single-file to 60KB HTML + 17KB CSS + 79KB JS. LocalStorage caching dropped page transitions from 400ms to instant."
      },
      {
        type: "image",
        src: "/images/saleside/image (10).png",
        title: "Meeting Intelligence",
        text: "GPT-4o powered summaries with sentiment analysis, engagement tracking, and follow-up suggestions. 14-table schema for conversation archive and coaching data."
      },
      {
        type: "image",
        src: "/images/saleside/image (11).png",
        title: "Custom AI Coach",
        text: "Per-user coaching customization with company context, objection frameworks, competitor data, and stage-specific guidance."
      },
      {
        type: "image",
        src: "/images/saleside/image (12).png",
        title: "Enterprise Multi-Tenant",
        text: "Seat-based licensing ($50/seat), role-based access (Owner/Admin/Member), Stripe subscriptions, and organization-level data isolation."
      }
    ],
  },
  {
    title: "iDARA",
    description: "Full-stack VFX production platform with Ftrack integration, ML-powered complexity estimation, and automated task assignment. Built 34+ React components, 36+ API endpoints, and multi-tier caching architecture. Currently piloted by 2+ VFX studios after Paris convention presentation.",
    tech: ["React", "TypeScript", "MongoDB", "Express.js", "FastAPI", "PyTorch", "Redis", "Ftrack SDK", "JWT Auth", "MFA", "Docker", "CI/CD"],
    status: "BETA",
    impacts: ["2+ VFX Studios", "34+ Components", "36+ Endpoints"],
    image: "/images/idara_logo_dark_background.png",
    slug: "idara"
  },
  
];

export const companies: Company[] = [
  { name: "Skaled", role: "Software Engineer", logo: "", color: "text-primary" },
  { name: "Everything To Gain", role: "Full Stack Engineer", logo: "", color: "text-primary" },
  { name: "Vision Age VFX", role: "Tech Lead", logo: "", color: "text-secondary" },
  { name: "Infotec", role: "Software Engineering Intern", logo: "", color: "text-tertiary" },
];

export const skills: Skill[] = [
  // Frontend
  { name: "REACT", level: 90, category: "frontend" },
  { name: "ANGULAR", level: 75, category: "frontend" },
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "UI/UX DESIGN", level: 80, category: "frontend" },
  { name: "TAILWIND CSS", level: 88, category: "frontend" },
  { name: "REACT FLOW", level: 80, category: "frontend" },
  
  // Backend
  { name: "NODE.JS", level: 88, category: "backend" },
  { name: "EXPRESS.JS", level: 90, category: "backend" },
  { name: "FASTAPI", level: 85, category: "backend" },
  { name: "SPRING BOOT", level: 82, category: "backend" },
  { name: "REDIS", level: 85, category: "backend" },
  { name: "MONGODB", level: 85, category: "backend" },
  { name: "POSTGRESQL", level: 88, category: "backend" },
  { name: "DRIZZLE ORM", level: 82, category: "backend" },
  
  // Tools
  { name: "GIT", level: 92, category: "tools" },
  { name: "DOCKER", level: 85, category: "tools" },
  { name: "CI/CD", level: 80, category: "tools" },
  { name: "SELENIUM", level: 78, category: "tools" },
  { name: "QDRANT", level: 82, category: "tools" },
  { name: "WEBSOCKETS", level: 85, category: "tools" },
  { name: "REST APIS", level: 88, category: "tools" },
  { name: "STRIPE API", level: 85, category: "tools" },
  { name: "OPENAI API", level: 88, category: "tools" },
  { name: "AGILE/SCRUM", level: 85, category: "tools" },
  
  // Languages
  { name: "JAVASCRIPT", level: 92, category: "languages" },
  { name: "TYPESCRIPT", level: 88, category: "languages" },
  { name: "PYTHON", level: 88, category: "languages" },
  { name: "JAVA", level: 80, category: "languages" },
  { name: "C++", level: 75, category: "languages" },
  { name: "C#", level: 72, category: "languages" },
];

export const experiences: Experience[] = [
  {
    company: "Skaled",
    role: "Software Engineer",
    period: "Oct 2025 - Present",
    description:
      "Continuing development of JourneyAI, scaling the platform to 10+ enterprise clients with 98% uptime. Expanded the RAG pipeline with advanced multi-collection vector search optimizations, built real-time WebSocket streaming with session-aware architecture and event batching, and grew the dynamic component rendering system to 70+ components. Driving feature development across the full stack including semantic search improvements, background worker optimization (ARQ/Redis), and Stripe subscription lifecycle management.",
    color: "border-primary",
  },
  {
    company: "EverythingToGain",
    role: "Full Stack Engineer",
    period: "Aug 2025 - Oct 2025",
    description:
      "Launched JourneyAI from early development to production, contributing 25% of the initial codebase. Built the core RAG pipeline with Qdrant vector search, session snapshots/forking system, and complete Stripe subscription integration with webhook lifecycle management. Established CI/CD pipelines across staging and production environments.",
    color: "border-primary",
  },
  {
    company: "Vision Age VFX",
    role: "Tech Lead",
    period: "May 2025 - Jul 2025",
    description:
      "Led full-stack development of internal VFX production platform (iDARA) building 34+ React components and 36+ API endpoints. Implemented optimized Ftrack SDK integration with batch query optimization and multi-tier caching (Redis + in-memory). Architected JWT authentication with MFA, role-based access control, and comprehensive mock data system. Platform currently piloted by 2+ VFX studios after successful Paris convention presentation.",
    color: "border-secondary",
  },
  {
    company: "Infotec",
    role: "Software Engineering Intern",
    period: "Jan 2025 - May 2025",
    description:
      "Designed and developed treasury management web app using React, Express.js, and SQL with features including invoice generation, cheque printing, TVA/tax calculation, and multi-settlement handling. Implemented version control with Git, reducing bug resolution time by 25% and improving system response time by 30%.",
    color: "border-tertiary",
  },
];
