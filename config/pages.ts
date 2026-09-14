import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Computer Science portfolio for Ibraheem Aziz.",
    metadata: {
      title: "Ibraheem Aziz - Computer Science Portfolio",
      description:
        "Computer Science student focused on AI/ML, backend systems, mobile apps, and practical software projects.",
    },
  },
  skills: {
    title: "Skills",
    description:
      "Technical strengths across AI/ML, backend, mobile, web, systems programming, and databases.",
    metadata: {
      title: "Skills",
      description:
        "Ibraheem Aziz's skills across Python, PyTorch, FastAPI, Docker, Kotlin, Android, C++, Java, PHP, SQL, and core computer science.",
    },
  },
  projects: {
    title: "Projects",
    description: "Selected full-stack, mobile, desktop, AI, and systems projects.",
    metadata: {
      title: "Projects",
      description:
        "Ibraheem Aziz's software engineering projects across Android, PHP, MySQL, Java Swing, Python, OpenAI API, C++, POSIX, SFML, and OpenGL.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect about AI/ML, backend, mobile, or cybersecurity work.",
    metadata: {
      title: "Contact",
      description:
        "Contact Ibraheem Aziz for AI/ML, backend, and software project opportunities.",
    },
  },
  resume: {
    title: "Resume",
    description: "Ibraheem Aziz's resume.",
    metadata: {
      title: "Resume",
      description: "Ibraheem Aziz's resume.",
    },
  },
  experience: {
    title: "Experience",
    description:
      "Hands-on AI/ML, backend, cybersecurity, internship, and community teaching experience.",
    metadata: {
      title: "Experience",
      description:
        "Ibraheem Aziz's AI/ML, backend, cybersecurity, and internship experience timeline.",
    },
  },
};
