import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "App & Web Development",
    description:
      "Kotlin, Android Studio, RESTful APIs, PHP, HTML, CSS, JavaScript",
    rating: 5,
    icon: Icons.laptop,
  },
  {
    name: "Programming",
    description: "C++, Python, Java, x86 Assembly",
    rating: 5,
    icon: Icons.laptop,
  },
  {
    name: "Tools & Databases",
    description: "SQL, MySQL, Docker, SFML, OpenGL/Glut",
    rating: 5,
    icon: Icons.settings,
  },
  {
    name: "Backend & Cybersecurity",
    description:
      "Data handling, performance optimization, multi-agent coordination, secure operations",
    rating: 4,
    icon: Icons.sparkles,
  },
  {
    name: "Core CS Concepts",
    description:
      "Data Structures, OOP, Operating Systems, Database Systems, Computer Networks",
    rating: 5,
    icon: Icons.gitRepoIcon,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
