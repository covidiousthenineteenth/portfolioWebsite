export interface Project {
    title: string;
    description: string;
    link: string;
    image?: string;
  }
  
  export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
  }
  
  export interface Certification {
    name: string;
    issuer: string;
    date: string;
  }
  
  export interface Skill {
    name: string;
    level: number; // 0-100
  }
  
  export const projects: Project[] = [
    { title: "Project 1", description: "Description here", link: "https://github.com/yourusername/project1" },
    // Add more...
  ];
  
  export const experiences: Experience[] = [
    { title: "Job Title", company: "Company", period: "Dates", description: "Details" },
    // Add more...
  ];
  
  export const educations: Experience[] = [
    { title: "Degree", company: "School", period: "Dates", description: "Details" },
    // Add more...
  ];
  
  export const certifications: Certification[] = [
    { name: "Cert Name", issuer: "Issuer", date: "Date" },
    // Add more...
  ];
  
  export const skills: Skill[] = [
    { name: "TypeScript", level: 90 },
    { name: "Next.js", level: 85 },
    // Add more (for radar chart)...
  ];
  
  export const funFacts: string[] = [
    "Coded my first app at age 12.",
    // Add more...
  ];