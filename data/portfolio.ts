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
    description: "Production-grade AI sales assistant platform serving 10 enterprise clients with 98% uptime. Built sophisticated RAG pipeline with multi-collection vector search, real-time WebSocket streaming, session snapshots/forking system, and comprehensive subscription management. Contributed 25% of codebase including semantic search engine, background worker system, and Stripe integration.",
    tech: ["React 19", "TypeScript", "FastAPI", "MongoDB", "Qdrant", "Redis", "OpenAI GPT-4", "WebSockets", "ARQ", "Stripe", "Docker", "Pydantic", "Beanie ODM"],
    status: "LIVE",
    thumbnailPoster: "/images/journeylanding.png",
    slug: "journeyai",
    sections: [
      {
        type: "image",
        src: "/images/JourneyAI/chat.png", // ALT: Real-time chat interface showing AI assistant conversation with WebSocket streaming
        title: "Real-Time AI Chat with WebSocket Streaming",
        text: "Built sophisticated real-time chat system with 12+ specialized AI assistants (Account Strategy, Prospecting, Research, Closing). Implemented session-aware WebSocket architecture with event batching, preventing cross-session contamination and optimizing render performance. Token-by-token streaming with function call visualization."
      },
      {
        type: "image",
        src: "/images/JourneyAI/share.png", // ALT: Semantic search interface or code showing RAG pipeline with Qdrant vector search
        title: "Semantic Search Engine with RAG Pipeline",
        text: "Implemented multi-collection vector search across Artifacts, Messages, and Organization Files using OpenAI text-embedding-3-large model. Built AI categorization system with strict JSON validation for Qdrant storage. Features score thresholding, complex multi-tenant filters, and dynamic context injection into AI prompts."
      },
      {
        type: "image",
        src: "/images/JourneyAI/memories.png", // ALT: Session snapshots UI showing conversation branching and forking feature
        title: "Session Snapshots & Forking System",
        text: "Designed conversation branching feature allowing users to save states, fork from previous messages to explore alternative paths, and restore snapshots. Maintains full conversation history with vector embeddings for contextual awareness across forked sessions."
      },
      {
        type: "image",
        src: "/images/JourneyAI/Login.png", // ALT: System architecture diagram showing FastAPI, MongoDB, Qdrant, Redis, WebSocket components
        title: "Scalable Multi-Tenant Architecture",
        text: "Production FastAPI backend with async/await patterns, multi-tenant organization-level data isolation, and background job queue using ARQ (Redis-based). Comprehensive error handling with Loguru, RESTful API design with OpenAPI documentation, and Docker containerization for consistent deployments."
      },
      {
        type: "image",
        src: "/images/JourneyAI/chat.png", // ALT: Subscription management dashboard showing Stripe integration and pricing tiers
        title: "Stripe Subscription Management",
        text: "Complete Stripe integration with webhook lifecycle management, subscription tiers ($35/month Pro, $299/year), trial management, and customer portal. Automated email reports using Jinja2 templates with weekly/monthly analytics aggregation via background cron jobs."
      },
      {
        type: "image",
        src: "/images/JourneyAI/App.png", // ALT: Dynamic component rendering showing backend-driven UI updates
        title: "Dynamic Component Rendering System",
        text: "Built flexible JSON-to-React component engine enabling backend-driven UI updates without frontend deployments. Recursive component tree building with type-safe registry supporting 70+ components including SaveArtifactDropdown, FunctionToolCallAccordion, and EnhancedWebSearchIndicator."
      }
    ],
  },
  {
    title: "StrategicAI",
    description: "Enterprise-grade workflow automation platform with visual drag-and-drop builder and sophisticated export ecosystem. Built complete transformation system converting internal workflows to 3 platform-specific formats (Zapier, Make, n8n) with multi-mode export (API-based automatic, manual JSON, webhook). Features topological sorting for dependency resolution, variable resolution system, and real-time execution engine.",
    tech: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Drizzle ORM", "React Flow", "Passport.js", "Google OAuth", "OpenAI GPT-4", "shadcn/ui", "Tailwind CSS"],
    status: "LIVE",
    image: "/images/StrategicAI.jpg",
    slug: "strategicai",
    sections: [
      {
        type: "image",
        src: "/images/Strategic/Builder.png", // ALT: Visual workflow builder interface with drag-and-drop nodes connected by lines, showing React Flow canvas
        title: "Visual Workflow Builder with React Flow",
        text: "Built drag-and-drop interface for real-time visual workflow design with dynamic node connections and dependencies. Features catalog-driven UI with platform-specific parameter configuration, allowing users to design complex multi-step automations through an intuitive visual interface."
      },
      {
        type: "image",
        src: "/images/Strategic/platforms-export.jpg", // ALT: Export interface showing multi-platform options (Zapier, Make, n8n) with export mode selection
        title: "Sophisticated Multi-Platform Export Ecosystem",
        text: "Developed abstract transformer architecture supporting 3 export modes: Automatic (direct API-based workflow creation), Manual (JSON export with setup instructions), and Webhook (push to custom endpoints). Platform-specific transformers handle node type detection, connection mapping, and parameter transformation for Zapier, Make, and n8n formats."
      },
      {
        type: "image",
        src: "/images/Strategic/Workflow.png", // ALT: Workflow execution view showing step-by-step progress, real-time status updates, and results
        title: "Real-Time Workflow Execution Engine",
        text: "Built execution engine with topological sorting algorithm for dependency resolution and variable resolver system enabling dynamic data flow between steps using {{step_id.output_field}} syntax. Supports Google Docs, Gmail, OpenAI, Slack, Discord with OAuth token management and graceful error handling."
      },
      {
        type: "image",
        src: "/images/Strategic/cross-providers-sync.png", // ALT: Integration dashboard showing connected platforms: Google, OpenAI, Slack, Discord, PayPal, Stripe
        title: "Multi-Provider OAuth & Integration System",
        text: "Integrated multiple OAuth providers (Google OAuth 2.0) with token refresh handling and secure storage. Modular platform architecture with standardized action interfaces, catalog-driven configuration from action_catalog.json, and API key management for third-party services."
      },
      {
        type: "image",
        src: "/images/Strategic/PERN.webp", // ALT: System architecture diagram showing full-stack monorepo with shared TypeScript schemas
        title: "Type-Safe Full-Stack Architecture",
        text: "Full-stack TypeScript monorepo with shared schemas ensuring compile-time safety across frontend/backend. PostgreSQL with Drizzle ORM for type-safe queries, session management with PostgreSQL storage, and comprehensive error handling through centralized ErrorHandler service with transaction support."
      }
    ],
  },
  {
    title: "Saleside",
    description: "Production-ready enterprise AI sales coaching platform that joins meetings in real-time, analyzes conversations, and delivers instant coaching insights. Achieved 64% HTML size reduction and 400ms→0ms page transitions through client-side caching. Two-tier architecture with Flask frontend and Railway backend supporting 50+ API endpoints, 14-table PostgreSQL schema, and Socket.IO real-time updates with 10ms transcript batching.",
    tech: ["Flask", "Python", "Socket.IO", "PostgreSQL", "SQLAlchemy", "Groq API", "OpenAI GPT-4o", "Recall.ai", "Stripe", "JavaScript", "Gunicorn", "Railway", "Replit"],
    status: "LIVE",
    image: "/images/saleside/image (6).png",
    slug: "saleside",
    sections: [
      {
        type: "image",
        src: "/images/saleside/image (7).png", // ALT: Live meeting interface showing real-time transcript with AI coaching suggestions appearing alongside
        title: "Real-Time AI Meeting Coaching",
        text: "Built live meeting transcription system with speaker identification and instant AI-powered objection handling suggestions. Call stage detection (Discovery, Qualification, Presentation, Objection Handling, Closing) provides contextual guidance. Smart sales rep filtering prevents AI coaching on internal team conversations. Sub-second responses via Groq's ultra-fast LLM inference."
      },
      {
        type: "image",
        src: "/images/saleside/image (8).png", // ALT: System architecture diagram showing Flask (Replit) frontend, Railway backend, Socket.IO, and AI integrations
        title: "Two-Tier Microservice Architecture",
        text: "Distributed system with Flask application on Replit for UI/UX and Railway-hosted microservice for bot orchestration. Socket.IO with 15-second polling fallback ensures reliable real-time communication. Benefits: independent scaling, specialized server optimization, and fault tolerance preventing complete system failure."
      },
      {
        type: "image",
        src: "/images/saleside/image (9).png", // ALT: Performance metrics dashboard or before/after comparison showing 64% HTML reduction
        title: "Performance Optimization: 64% Size Reduction",
        text: "Optimized from 168KB single-file (3,422 lines) to 60KB HTML + 17KB CSS + 79KB JS with cache busting versioning (v2.9). Implemented LocalStorage caching with 5-minute expiration reducing page transitions from 400ms to instant. Features 10ms transcript batching, concurrent request handling with ThreadPoolExecutor (10-worker pool), and automatic cancellation of outdated LLM requests."
      },
      {
        type: "image",
        src: "/images/saleside/image (10).png", // ALT: Meeting summary page showing AI-generated summary, sentiment analysis, key takeaways, follow-up suggestions
        title: "AI-Powered Meeting Intelligence",
        text: "Automatic meeting summary generation using OpenAI GPT-4o with sentiment analysis, engagement tracking, and key takeaway extraction. Customer question detection with categorization and follow-up suggestion generation. Comprehensive 14-table database schema supporting conversation archive, coaching responses, tags, comments, and action tasks."
      },
      {
        type: "image",
        src: "/images/saleside/image (11).png", // ALT: Coach configuration interface showing customizable AI settings, company context, value proposition, objection handling frameworks
        title: "Customizable AI Coach Configuration",
        text: "Per-user AI coaching style customization with company context, value proposition settings, product descriptions, and technical specifications. Custom objection handling frameworks, competitor comparison data, and case studies integration. Call stage definitions with stage-specific guidance for tailored coaching experiences."
      },
      {
        type: "image",
        src: "/images/saleside/image (12).png", // ALT: Organization management dashboard showing multi-tenant setup, user roles, Stripe subscription management
        title: "Enterprise Multi-Tenant SaaS",
        text: "Built multi-organization support with seat-based licensing ($50/seat) and 7-day trial management. Role-based access control (Owner/Admin/Member) with user management dashboard. Complete Stripe integration for subscriptions, checkout flows, and customer portal. Organization-level data isolation ensuring secure multi-tenancy."
      }
    ],
  },
  {
    title: "iDARA",
    description: "Full-stack VFX production platform with Ftrack integration, ML-powered complexity estimation, and automated task assignment. Built 34+ React components, 36+ API endpoints, and multi-tier caching architecture. Currently piloted by 2+ VFX studios after Paris convention presentation.",
    tech: ["React", "TypeScript", "MongoDB", "Express.js", "FastAPI", "PyTorch", "Redis", "Ftrack SDK", "JWT Auth", "MFA", "Docker", "CI/CD"],
    status: "BETA",
    thumbnailPoster: "/images/idara_logo_dark_background.png",
    slug: "idara",
    sections: [
      {
        type: "image",
        src: "/images/idara-dashboard.png", // ALT: Main project dashboard showing Ftrack task integration with real-time status updates
        title: "Ftrack Integration & Project Dashboard",
        text: "Optimized Ftrack SDK integration with batch query optimization reducing API calls from N+1 to 2 queries per project load. Dynamic session management per user with field-specific queries minimizing payload size and latency."
      },
      {
        type: "image",
        src: "/images/idara-architecture.png", // ALT: System architecture diagram or code structure showing the modular backend (controllers, routes, middlewares folders)
        title: "Modular Architecture",
        text: "Built modular MERN stack with 14 controllers, 8 route modules, and 3 middleware layers. Implemented JWT authentication with MFA support, role-based access control, and secure session management across 36+ RESTful API endpoints."
      },
      {
        type: "image",
        src: "/images/idara-auth-flow.png", // ALT: Multi-step registration/authentication pages showing MFA setup
        title: "Authentication & Security",
        text: "Designed complete authentication flow with multi-step registration, MFA setup, and secure credential management. Custom UI/UX across 7 auth-related pages with responsive design using Material-UI and Tailwind CSS."
      },
      {
        type: "image",
        src: "/images/idara-caching.png", // ALT: Code snippet or diagram showing caching architecture (Redis + in-memory cache)
        title: "Multi-Tier Caching System",
        text: "Integrated Redis distributed caching with in-memory LRU cache for ML feature extraction and Ftrack API responses. Implemented cache invalidation strategy with TTL, reducing computational overhead for repeated queries."
      },
      {
        type: "image",
        src: "/images/idara-mock-data.png", // ALT: Screenshot showing the mock data system or demo mode with VFX shots
        title: "Comprehensive Mock Data System",
        text: "Created production-grade mock data system with 400+ shots across 3 VFX projects for NDA-compliant demonstrations. Automatic API fallback enabling offline presentations while protecting client-sensitive material."
      },
      {
        type: "image",
        src: "/images/idara-admin-dashboard.png", // ALT: Admin dashboard showing organization management, user roles, or message/feedback systems
        title: "Organization Management",
        text: "Built complete admin dashboard with organization management, collaborator role assignment, message systems, and feedback tracking. Designed for scalability to support multiple VFX production houses."
      }
    ],
  },
  
];

export const companies: Company[] = [
  { name: "Everything To Gain", role: "Software Engineer", logo: "", color: "text-primary" },
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
    company: "EverythingToGain",
    role: "Full Stack Engineer",
    period: "Aug 2025 - Oct 2025",
    description:
      "Contributed 25% of JourneyAI codebase serving 10 enterprise clients with 98% uptime. Implemented sophisticated RAG pipeline with multi-collection vector search (Qdrant), session snapshots/forking system, and background worker infrastructure (ARQ/Redis). Built complete Stripe subscription integration with webhook lifecycle management. Developed session-aware WebSocket architecture with event batching and dynamic component rendering system (70+ components). Integrated automated CI/CD pipelines across staging and production environments.",
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
