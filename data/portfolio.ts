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
    description: "AI-powered sales research platform with automated CI/CD, contextual insights, and enhanced data retrieval using Qdrant & Redis",
    tech: ["React", "TypeScript", "FastAPI", "Qdrant", "Redis", "CI/CD"],
    status: "LIVE",
    thumbnailPoster: "/images/journeylanding.png",
    sections: [
      {
        type: "image",
        src: "/images/visionage.png",
        title: "Dashboard Overview",
        text: "Automated data retrieval and structured knowledge management improving sales research efficiency by ~40%."
      },
      {
        type: "video",
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        title: "Real-time Intelligence",
        text: "Advanced AI model APIs generating contextual insights organized by team, organization, and individual."
      },
      {
        type: "image",
        src: "/placeholder.jpg",
        title: "Deployment Pipeline",
        text: "Automated CI/CD pipelines streamlining workflows across staging and production environments."
      }
    ],
  },
  {
    title: "StrategicAI",
    description: "Modular, scalable automation platform with node-based workflows, supporting export to n8n and Make for advanced automation",
    tech: ["React", "Node.js", "TypeScript", "Automation", "REST APIs"],
    status: "LIVE",
    thumbnailPoster: "/images/StrategicAI.jpg",
  },
  {
    title: "Saleside",
    description: "AI-driven sales coaching platform providing real-time conversational guidance during live client calls, reducing response hesitation by ~45%",
    tech: ["React", "NLU", "Speech-to-Text", "AI APIs", "WebSockets"],
    status: "LIVE",
    thumbnailPoster: "/images/Saleside.jpg",
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
  {
    title: "Navigator AI",
    description: "Treasury management web app with invoice generation, cheque printing, TVA/tax calculation, and multi-settlement tracking",
    tech: ["React", "Express.js", "SQL", "REST APIs", "Git"],
    status: "DEV",
    thumbnailPoster: "/images/NavigatorAI.jpg",
  },
  
];

export const companies: Company[] = [
  { name: "EverythingToGain", role: "Junior Software Engineer", logo: "", color: "text-primary" },
  { name: "Vision Age VFX", role: "Tech Lead", logo: "", color: "text-secondary" },
  { name: "Infotec", role: "Software Engineering Intern", logo: "", color: "text-tertiary" },
];

export const skills: Skill[] = [
  // Frontend
  { name: "REACT", level: 90, category: "frontend" },
  { name: "ANGULAR", level: 75, category: "frontend" },
  { name: "HTML/CSS", level: 85, category: "frontend" },
  { name: "UI/UX DESIGN", level: 80, category: "frontend" },
  
  // Backend
  { name: "NODE.JS", level: 88, category: "backend" },
  { name: "EXPRESS.JS", level: 90, category: "backend" },
  { name: "SPRING BOOT", level: 82, category: "backend" },
  { name: "REDIS", level: 85, category: "backend" },
  { name: "SQL", level: 80, category: "backend" },
  
  // Tools
  { name: "GIT", level: 92, category: "tools" },
  { name: "DOCKER", level: 85, category: "tools" },
  { name: "CI/CD", level: 80, category: "tools" },
  { name: "SELENIUM", level: 78, category: "tools" },
  { name: "QDRANT", level: 82, category: "tools" },
  { name: "REST APIS", level: 88, category: "tools" },
  { name: "AGILE/SCRUM", level: 85, category: "tools" },
  
  // Languages
  { name: "JAVASCRIPT", level: 92, category: "languages" },
  { name: "TYPESCRIPT", level: 85, category: "languages" },
  { name: "PYTHON", level: 88, category: "languages" },
  { name: "JAVA", level: 80, category: "languages" },
  { name: "C++", level: 75, category: "languages" },
  { name: "C#", level: 72, category: "languages" },
];

export const experiences: Experience[] = [
  {
    company: "EverythingToGain",
    role: "Junior Software Engineer",
    period: "Aug 2025 - Oct 2025",
    description:
      "Integrated automated CI/CD pipelines and upgraded data storage architecture using Qdrant and Redis, enhancing real-time search capabilities and reducing retrieval latency for high-traffic features. Collaborated with development, QA, and DevOps teams across staging and production environments.",
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
