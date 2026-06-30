import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "App & Web Development",
    description:
      "Kotlin, Android Studio, RESTful APIs, PHP, HTML, CSS, JavaScript",
    icon: Icons.laptop,
  },
  {
    name: "Programming",
    description: "C++, Python, Java, x86 Assembly",
    icon: Icons.laptop,
  },
  {
    name: "Tools & Databases",
    description: "SQL, MySQL, Docker, SFML, OpenGL/Glut",
    icon: Icons.settings,
  },
  {
    name: "Backend & Cybersecurity",
    description:
      "Data handling, performance optimization, multi-agent coordination, secure operations",
    icon: Icons.sparkles,
  },
  {
    name: "Core CS Concepts",
    description:
      "Data Structures, OOP, Operating Systems, Database Systems, Computer Networks",
    icon: Icons.gitRepoIcon,
  },
];

export const skills = skillsUnsorted;

export const featuredSkills = skills.slice(0, 6);
