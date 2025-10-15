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
    description: "Internal VFX platform with automated task assignment, ML-powered difficulty estimation, and unified photogrammetry/motion reconstruction pipeline",
    tech: ["React", "TypeScript", "MongoDB", "Express", "FastAPI", "PyTorch", "CI/CD", "Docker"],
    status: "DEV",
    thumbnailPoster: "/images/idara_logo_dark_background.png",
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
      "Directed development of an internal web platform with automated task assignment and ML-powered difficulty estimation. Spearheaded cross-functional integration of photogrammetry and motion reconstruction outputs, streamlining VFX production timelines.",
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
