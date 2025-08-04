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
    { title: "Mathematic for kids", description: "Vite and React based Math game that challenges kids on basic math mental calculations", link: "https://mathematics-for-kidz.vercel.app" },
    { title: "Card Reader for Visually Impaired People", description: "built an application for blind people that allows them to scan any set of playing cards and use the app to take a picture and to get a description of it", link: "https://card-reader.meteoraapp.com/" },
    { title: "Crypto Token Exchange", description: "Designed and built Solidy based token exchanged and deployed multiple ERC-20 smart contracts using EVM", link: "https://covid-token-exchange.herokuapp.com/" },
    { title: "Be the GOAT Unity Based Game", description: "Built a 2d game that allow user to traverse through obstacles to reach a final destinatio &apos;valhalla&apos; ", link: "https://klaw117.itch.io/lawpomaproject?secret=GQgyLopRMcYQ8tqv5Knj1d8" },
    { title: "Space Smuggler Unity Based Game", description: "Built a 3d game about space smugglers who have to fly through space avoiding asteroids to deliver contraband", link: "https://klaw117.itch.io/lawpomamerchantproject?secret=L1TWgiB9HMCHTOTG2fsDP192i0" },
    // Add more...
  ];
  
  export const experiences: Experience[] = [
    { title: "Data Scientist", company: "The Boeing Company", period: "Feb 2023 - Present", description: "Write python, vsb scripts and xqueries to perform 100% accurary data validations of large volumes of XML based data" },
    { title: "PLM Process and Notes Team Lead", company: "The Boeing Company", period: "Feb 2019 - Feb 2023", description: "Lead a team that represents the company in code testing, documentation and acceptance of third party PLM and CAD based software delivery" },
    { title: "Application Manager", company: "The Boeing Company", period: "July 2017 - January 2019", description: "Conduct failure analysis of software development best practices and work with application subject matter experts to perform too risk analysis that complies with the Federal Aviation Administration (FAA)" },
    { title: "IT Engineer", company: "The Boeing Company", period: "June 2016 - July 2017", description: "Lead a team that represents the company in code testing, documentation and acceptance of third party PLM and CAD based software delivery" },
    { title: "PLM Process and Notes Team Lead", company: "The Boeing Company", period: "Feb 2019 - January 2023", description: "Performed end user support and software testing and developed test plans following AD&apos;S methodology" },
    // Add more...
  ];
  
  export const educations: Experience[] = [
    { title: "A.S., Computer Science", company: "Quinsigamond Community College", period: "September 2012 - May 2013", description: "obtained Associate of Science with the intent to transfer to a four year school" },
    { title: "B.S., Computer Science", company: "Rensselaer Polytechnic Institute", period: "September 2013 - May 2016", description: "graduate with a Bachelor of Science with specialization in data analytics" },
    { title: "M.S., Computer Science and Mechanical Engineering", company: "Washington University in Saint Louis", period: "September 2021 - May 2023", description: "studied part time while working and obtained a dual Masters degree" },
    // Add more...
  ];
  
  export const certifications: Certification[] = [
    { name: "React Software Developer", issuer: "Saint Louis University", date: "July 2025" },
    { name: "Solana Developer Bootcamp", issuer: "The Solana Foundation", date: "January 2024" },
    { name: "Machine Learning and Data Science", issuer: "GeeksforGeeks", date: "May 2023" },
    { name: "Solidity Blockchain Summer Bootcamp", issuer: "GeeksforGeeks", date: "July 2021" },
    { name: "Agile Methodology Summer Training", issuer: "The Boeing Company", date: "June 2018" },
    // Add more...
  ];
  
  export const skills: Skill[] = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Python", level: 70 },
    { name: "XQuery", level: 60 },
    { name: "data science", level: 65 },
    // Add more (for radar chart)...
  ];
  
  export const funFacts: string[] = [
    "I am incan descendant",
    "I am passionate about helping students prepare for the workforce.",
    "I watched LOTR extended edition trilogy in an entire day.",
    // Add more...
  ];