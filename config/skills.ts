import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "AI & Machine Learning",
    description:
      "Machine Learning, Deep Learning, PyTorch, Neural Networks, Regression, Classification, Clustering, Reinforcement Learning, Embeddings, Similarity Search",
    icon: Icons.sparkles,
  },
  {
    name: "Backend & APIs",
    description: "Python, FastAPI, RESTful APIs, PHP, SQL, MySQL",
    icon: Icons.settings,
  },
  {
    name: "Programming Languages",
    description: "Python, C++, Java, Kotlin, JavaScript, HTML, CSS, x86 Assembly",
    icon: Icons.laptop,
  },
  {
    name: "Tools & Deployment",
    description: "Docker, Git, GitHub, Android Studio, SFML, OpenGL/Glut",
    icon: Icons.settings,
  },
  {
    name: "App & Web Development",
    description:
      "Kotlin, Android Studio, RESTful APIs, PHP, HTML, CSS, JavaScript",
    icon: Icons.laptop,
  },
  {
    name: "Core CS Concepts",
    description:
      "Data Structures, OOP, Operating Systems, Computer Networks, Secure Coding",
    icon: Icons.gitRepoIcon,
  },
];

export const skills = skillsUnsorted;

export const featuredSkills = skills.slice(0, 6);
