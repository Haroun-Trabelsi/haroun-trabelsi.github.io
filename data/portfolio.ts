export type Project = {
  title: string;
  description: string;
  tech: string[];
  status: "LIVE" | "BETA" | "DEV";
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
    description: "Very large scale AI Sales Assistants Built for Sellers",
    tech: ["React", "TypeScript", "FastAPI", "MongoDB", "Stripe","Qdrant","Groq"],
    status: "LIVE",
  },
  {
    title: "iDARA",
    description: "The AI Revolutionizing VFX Project Management, Especially for Matchmove and Rotoscoping",
    tech: ["React", "TypeScript", "MongoDB", "Express", "FastAPI", "Pytorch" ,"CI/CD" , "Docker"],
    status: "BETA",
  },
  {
    title: "Finances Management",
    description: "Manage all employees hours, invoices, and payments in one place.",
    tech: ["React", "MongoDB", "TypeScript", "Material UI", "Node.js"],
    status: "DEV",
  },
  {
    title: "Cars e-commerce",
    description: "Buy and sell used cars with ease on this sleek platform.",
    tech: ["Html", "Javascript", "Php"],
    status: "LIVE",
  },
  {
    title: "Art Auction App",
    description: "Mobile app for auctioning and bidding on artwork.",
    tech: ["React Native", "GraphQL", "PostgreSQL", "Symfony", "Image Encoding"],
    status: "BETA",
  },
  {
    title: "ANALYTICS PLATFORM",
    description: "Business intelligence dashboard with advanced data visualization.",
    tech: ["Angular", "D3.js", "Python", "Docker"],
    status: "LIVE",
  },
];

export const companies: Company[] = [
  { name: "Infotec", role: "Software Engineer", logo: "", color: "text-primary" },
  { name: "Vision Age VFX", role: "Tech Lead", logo: "", color: "text-secondary" },
  { name: "Everything To Gain", role: "Software Engineer", logo: "", color: "text-tertiary" },
  { name: "Freelance", role: "React Specialist", logo: "", color: "text-primary" },
  { name: "NETFLIX", role: "UI/UX Developer", logo: "", color: "text-secondary" },
  { name: "SPOTIFY", role: "Frontend Lead", logo: "", color: "text-tertiary" },
];

export const skills: Skill[] = [
  { name: "REACT", level: 95 },
  { name: "TYPESCRIPT", level: 90 },
  { name: "NODE.JS", level: 85 },
  { name: "PYTHON", level: 80 },
  { name: "NEXT.JS", level: 92 },
  { name: "TAILWIND", level: 88 },
];

export const experiences: Experience[] = [
  {
    company: "Everything To Gain",
    role: "Senior Full Stack Developer",
    period: "2025/08 - PRESENT",
    description:
      "Leading development of enterprise applications using React, Node.js, and cloud technologies.",
    color: "border-primary",
  },
  {
    company: "Vision Age VFX",
    role: "Frontend Lead",
    period: "2025/05 - 2025/08",
    description:
      "Built scalable web applications and mentored junior developers in modern frontend practices.",
    color: "border-secondary",
  },
  {
    company: "Infotec",
    role: "Full Stack Developer",
    period: "2024/06 - 2024/08",
    description:
      "Developed custom solutions for clients using various technologies and frameworks.",
    color: "border-tertiary",
  },
  {
    company: "FREELANCE",
    role: "Web Developer",
    period: "2016 - 2018",
    description:
      "Created websites and applications for small businesses and startups.",
    color: "border-primary",
  },
];
