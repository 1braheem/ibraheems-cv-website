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
        "Computer Science student focused on full-stack, mobile, backend, and cybersecurity systems.",
    },
  },
  skills: {
    title: "Skills",
    description:
      "Technical strengths across mobile, web, backend, systems programming, and databases.",
    metadata: {
      title: "Skills",
      description:
        "Ibraheem Aziz's software engineering skills across Kotlin, Android, C++, Python, Java, PHP, SQL, Docker, and core computer science.",
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
    description: "Let's connect about software engineering, backend, mobile, or cybersecurity work.",
    metadata: {
      title: "Contact",
      description:
        "Contact Ibraheem Aziz for software engineering opportunities.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Technical work, lab contributions, and community teaching initiatives.",
    metadata: {
      title: "Contributions",
      description:
        "Ibraheem Aziz's technical contributions in backend development, cybersecurity, and computing education.",
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
      "Hands-on backend, cybersecurity, research lab, and community teaching experience.",
    metadata: {
      title: "Experience",
      description:
        "Ibraheem Aziz's software engineering and internship experience timeline.",
    },
  },
};
