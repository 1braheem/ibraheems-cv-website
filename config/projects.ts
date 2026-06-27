import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
  imageVariant?: "cover" | "fit" | "logo" | "portrait";
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  imageVariant?: "cover" | "fit" | "logo" | "portrait";
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

const profileImage = "/ibraheem-profile.jpg";
const chronoRiftImage = "/projects/chrono-rift/chrono-rift-terminal.png";
const xonicImage = "/projects/xonic/xonix.webp";
const gameBoyImage = "/projects/gameboy/gameboy-arcade.jpg";
const centipedeImage = "/projects/centipede/centipede-gameplay.png";
const aerologixWorkspace = "/projects/aerologix/workspace-selection.png";
const aerologixDashboard = "/projects/aerologix/manager-dashboard.png";
const troyAssistant = "/projects/troy/troy-assistant.png";
const xonicMenu = "/projects/xonic/xonix-menu.png";
const gameBoySelection = "/projects/gameboy/game-selection.png";
const centipedeMenu = "/projects/centipede/main-menu.png";
const sociallyLogo = "/logo.jpg";
const troyLogo = "/troy-logo.jpg";
const aerologixLogo = "/aerologix-logo.svg.png";

export const Projects: ProjectInterface[] = [
  {
    id: "socially-instagram-clone",
    companyName: "Socially - Instagram Clone",
    type: "Professional",
    category: ["Android", "Mobile Dev", "Full Stack", "Database"],
    shortDescription:
      "Full-stack Android social media application replicating core Instagram features including feeds, posts, and user data management.",
    techStack: ["Kotlin", "Android Studio", "PHP", "MySQL"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-06-01"),
    companyLogoImg: sociallyLogo,
    imageVariant: "logo",
    pagesInfoArr: [
      {
        title: "Android Social App",
        description:
          "Kotlin front end with PHP and MySQL backend services for social media workflows.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed a full-stack social media application replicating core Instagram features including feeds and posts.",
      ],
      bullets: [
        "Designed UI/UX using XML and implemented app logic in Kotlin within Android Studio.",
        "Built backend services using PHP.",
        "Integrated MySQL for efficient user data management.",
      ],
    },
  },
  {
    id: "aerologix-mro",
    companyName: "Aerologix MRO - Aircraft Maintenance System",
    type: "Personal",
    category: ["Desktop App", "Backend", "Database"],
    shortDescription:
      "Desktop application for aircraft maintenance, repair, and overhaul operations with service request and inventory tracking.",
    techStack: ["Java", "Java Swing", "PHP", "MySQL"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-06-01"),
    companyLogoImg: aerologixLogo,
    imageVariant: "logo",
    pagesInfoArr: [
      {
        title: "Workspace Selection",
        description:
          "Role-based entry point for manager operations and engineer workflows.",
        imgArr: [aerologixWorkspace],
      },
      {
        title: "Manager Operations Console",
        description:
          "Responsive Java Swing dashboard for inventory, aircraft, engineers, issuance, and maintenance scheduling.",
        imgArr: [aerologixDashboard],
      },
      {
        title: "Aircraft Overview",
        description:
          "Fleet table and aircraft detail workspace for inspecting maintenance-relevant aircraft information.",
        imgArr: ["/projects/aerologix/aircraft-overview.png"],
      },
      {
        title: "Engineer Management",
        description:
          "Manager tools for reviewing engineers, assigning work, and updating availability and task status.",
        imgArr: ["/projects/aerologix/manage-engineers.png"],
      },
      {
        title: "Engineer Tool Requests",
        description:
          "Three-step engineer workflow for selecting a task, choosing inventory, and submitting a part request.",
        imgArr: ["/projects/aerologix/engineer-request-tool.png"],
      },
      {
        title: "Engineer Maintenance Updates",
        description:
          "Dedicated engineer workspace for reviewing and recording maintenance activity.",
        imgArr: ["/projects/aerologix/engineer-maintenance-updates.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed a desktop app to manage aircraft maintenance, repair, and overhaul operations.",
      ],
      bullets: [
        "Implemented backend logic for service requests.",
        "Added inventory tracking workflows.",
        "Built a Java Swing front-end interface for operational use.",
      ],
    },
  },
  {
    id: "troy-ai-voice-assistant",
    companyName: "Troy - AI Voice Assistant",
    type: "Personal",
    category: ["AI", "Automation", "Backend"],
    shortDescription:
      "Desktop voice assistant using Python speech processing, text-to-speech, OpenAI API integration, and automated web navigation.",
    techStack: ["Python", "OpenAI API", "Automation"],
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-12-01"),
    companyLogoImg: troyLogo,
    imageVariant: "logo",
    pagesInfoArr: [
      {
        title: "Voice Assistant Workflow",
        description:
          "Speech recognition, text-to-speech, OpenAI-powered query handling, and automated browser tasks.",
        imgArr: [troyAssistant],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed a desktop voice assistant using speech_recognition and pyttsx3 for automated audio processing.",
      ],
      bullets: [
        "Integrated the OpenAI API for complex query processing.",
        "Executed dynamic automated web navigation tasks.",
        "Combined speech input, language model output, and desktop automation.",
      ],
    },
  },
  {
    id: "chrono-rift-os-sync-game",
    companyName: "Chrono Rift - OS Sync Game",
    type: "Personal",
    category: ["C++", "Systems", "Game Dev"],
    shortDescription:
      "C++ multi-process game architecture using POSIX shared memory, semaphores, mutex locks, and Dockerized execution.",
    techStack: ["C++", "POSIX", "Docker", "Semaphores", "Mutex"],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-06-01"),
    companyLogoImg: chronoRiftImage,
    imageVariant: "cover",
    pagesInfoArr: [
      {
        title: "Multi-Process Game System",
        description:
          "Concurrent game processes coordinated through shared memory and synchronization primitives.",
        imgArr: [],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Engineered multi-process game architecture communicating concurrently via POSIX Shared Memory.",
      ],
      bullets: [
        "Used semaphores and mutex locks for strict process synchronization.",
        "Eliminated race conditions in concurrent gameplay logic.",
        "Packaged and tested the system with Docker.",
      ],
    },
  },
  {
    id: "xonic-game-and-arcade-clones",
    companyName: "Xonic - Multiplayer Arcade Platform",
    type: "Personal",
    category: ["C++", "Game Dev", "Systems"],
    shortDescription:
      "C++ and SFML multiplayer arcade platform with authentication, matchmaking, leaderboards, friends, profiles, saved games, and selectable themes.",
    techStack: ["C++", "SFML", "Data Structures", "OOP"],
    startDate: new Date("2023-09-01"),
    endDate: new Date("2024-05-01"),
    companyLogoImg: xonicImage,
    imageVariant: "cover",
    pagesInfoArr: [
      {
        title: "Xonic Main Menu",
        description:
          "The real SFML entry screen for the arcade territory battle experience.",
        imgArr: [xonicMenu],
      },
      {
        title: "Game Hub",
        description:
          "Central navigation for new and saved games, multiplayer, inventory, leaderboards, profiles, and friends.",
        imgArr: ["/projects/xonic/hub.png"],
      },
      {
        title: "Leaderboard",
        description:
          "Persistent ranking generated from real player score data.",
        imgArr: ["/projects/xonic/leaderboard.png"],
      },
      {
        title: "Theme Inventory",
        description:
          "AVL-tree-backed inventory with previews for selectable game themes.",
        imgArr: ["/projects/xonic/inventory.png"],
      },
      {
        title: "Friends Dashboard",
        description:
          "Social navigation for friend lists, player search, and received requests.",
        imgArr: ["/projects/xonic/friends.png"],
      },
      {
        title: "Player Profile",
        description:
          "Player score summary and recent win-loss history with protected credentials.",
        imgArr: ["/projects/xonic/profile.png"],
      },
      {
        title: "Controls",
        description:
          "Keyboard and mouse controls covering menus, solo play, multiplayer, login, and profiles.",
        imgArr: ["/projects/xonic/instructions.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Engineered a multiplayer Xonix platform with account management, saved progress, social features, and data-structure-driven game services.",
      ],
      bullets: [
        "Used a Min Heap for leaderboards and a priority queue for fair matchmaking.",
        "Implemented login and registration, player profiles, friend requests, and saved games.",
        "Added single-player and multiplayer modes with an AVL-tree-backed theme inventory.",
      ],
    },
  },
  {
    id: "gameboy-arcade",
    companyName: "GameBoy Arcade",
    type: "Personal",
    category: ["C++", "Game Dev", "Desktop App"],
    shortDescription:
      "Object-oriented SFML arcade collection featuring Snake, Hangman, and Wordle with audio, difficulty settings, achievements, and persistent leaderboards.",
    techStack: ["C++", "SFML", "OOP"],
    startDate: new Date("2023-09-01"),
    endDate: new Date("2023-12-01"),
    companyLogoImg: gameBoyImage,
    imageVariant: "fit",
    pagesInfoArr: [
      {
        title: "Game Selection",
        description:
          "A unified cartridge selector for Snake, Hangman, and Wordle.",
        imgArr: [gameBoySelection],
        imageVariant: "fit",
      },
      {
        title: "Snake",
        description:
          "Grid-based Snake gameplay with scoring, food spawning, movement controls, and pause support.",
        imgArr: ["/projects/gameboy/snake.png"],
        imageVariant: "fit",
      },
      {
        title: "Hangman",
        description:
          "Hangman board with lives, an on-screen keyboard, word slots, and incorrect-guess tracking.",
        imgArr: ["/projects/gameboy/hangman.png"],
        imageVariant: "fit",
      },
      {
        title: "Wordle",
        description:
          "Timed five-letter puzzle with an interactive keyboard, attempt grid, and score tracking.",
        imgArr: ["/projects/gameboy/wordle.png"],
        imageVariant: "fit",
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Built a desktop arcade application that brings three complete games into one cohesive GameBoy-inspired interface.",
      ],
      bullets: [
        "Designed reusable OOP systems for games, players, grids, menus, and input handling.",
        "Implemented Snake, Hangman, and Wordle with dedicated instructions and difficulty options.",
        "Added music, sound effects, achievements, high scores, and persistent leaderboard data.",
      ],
    },
  },
  {
    id: "centipede-sfml-arcade",
    companyName: "Centipede - SFML Arcade Game",
    type: "Personal",
    category: ["C++", "Game Dev", "Desktop App"],
    shortDescription:
      "A complete C++ recreation of the classic Centipede arcade game with progressive rounds, collision systems, audio, lives, menus, and persistent high scores.",
    techStack: ["C++", "SFML", "OOP"],
    startDate: new Date("2023-10-01"),
    endDate: new Date("2023-11-01"),
    companyLogoImg: centipedeImage,
    imageVariant: "fit",
    pagesInfoArr: [
      {
        title: "Main Menu",
        description:
          "Start, leaderboard, and high-score access presented over the game environment.",
        imgArr: [centipedeMenu],
        imageVariant: "fit",
      },
      {
        title: "Arcade Gameplay",
        description:
          "The live game board with the centipede, destructible mushrooms, player, projectile, and remaining lives.",
        imgArr: [centipedeImage],
        imageVariant: "fit",
      },
      {
        title: "Persistent Leaderboard",
        description:
          "Top-five score table loaded from the game’s saved leaderboard data.",
        imgArr: ["/projects/centipede/leaderboard.png"],
        imageVariant: "fit",
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed a playable Centipede recreation in C++ with SFML graphics and audio, built around a 30-by-30 game grid.",
      ],
      bullets: [
        "Implemented centipede, mushroom, projectile, and player collision systems.",
        "Added progressive rounds, lives, scoring, pause and game-over states, and player name entry.",
        "Persisted a top-five leaderboard and integrated background music and gameplay sound effects.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
