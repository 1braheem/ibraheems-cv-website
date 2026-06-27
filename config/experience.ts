import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  duration?: string;
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "ncra-uav-dependability-lab",
    position: "Backend & Cybersecurity Intern",
    company: "NCRA-UAV Dependability Lab",
    location: "Rawalpindi, Pakistan",
    startDate: new Date("2025-07-01"),
    endDate: new Date("2025-08-01"),
    duration: "July 2025 - Aug 2025",
    description: [
      "Contributed to backend development of a 2D UAV monitoring and simulation system in a research environment.",
      "Worked on system reliability, including data handling, performance optimization, and multi-agent coordination.",
      "Applied cybersecurity concepts to support system resilience and secure operations.",
    ],
    achievements: [
      "Supported backend development for UAV monitoring and simulation workflows.",
      "Improved reliability-oriented data handling and coordination logic.",
      "Practiced security-minded development in a dependability lab setting.",
    ],
    skills: ["Backend", "Cybersecurity", "Docker", "Python", "Database Systems"],
    logo: "/ibraheem-profile.jpg",
  },
  {
    id: "community-computing-initiative",
    position: "Volunteer Computing Instructor",
    company: "Community Computing Initiative",
    location: "Rawalpindi, Pakistan",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-01"),
    duration: "Community Engagement",
    description: [
      "Conducted a computing lab introducing basic programming using Scratch to local students.",
      "Fundraised and provided essential resources while delivering hands-on sessions to build foundational computer skills.",
    ],
    achievements: [
      "Introduced local students to programming fundamentals.",
      "Delivered hands-on computing sessions using Scratch.",
      "Helped provide resources required for the lab.",
    ],
    skills: ["OOP", "Computer Networks", "Data Structures"],
    logo: "/ibraheem-profile.jpg",
  },
];
