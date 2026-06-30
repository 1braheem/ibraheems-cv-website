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
    skills: ["Backend", "Cybersecurity", "Python", "Database Systems"],
    logo: "/ibraheem-profile.jpg",
  },
  {
    id: "community-computing-initiative",
    position: "CIVICS Community Service Volunteer",
    company: "CIVICS Community Service Program",
    location: "Rawalpindi, Pakistan",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-01"),
    duration: "8-10 Week CIVICS Program",
    description: [
      "Participated in an 8-10 week CIVICS community-service subject with different activities planned for local participants.",
      "Spent two weeks conducting a computing workshop that introduced basic computer skills and programming through Scratch.",
      "Supported fundraising, resource preparation, and the delivery of wider community-engagement activities.",
    ],
    achievements: [
      "Collaborated on planning and delivering activities throughout the CIVICS community-service program.",
      "Delivered a two-week hands-on computing workshop using Scratch.",
      "Helped coordinate fundraising and resources for community activities.",
    ],
    skills: ["Community Service", "Workshop Facilitation", "Scratch"],
    logo: "/ibraheem-profile.jpg",
  },
];
