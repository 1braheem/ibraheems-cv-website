import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ibraheem Aziz - Computer Science Portfolio",
    short_name: "Ibraheem Aziz",
    description:
      "Computer Science student focused on AI/ML, backend systems, mobile apps, and practical software projects.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/ibraheem-profile.jpg",
        sizes: "1024x1024",
        type: "image/jpeg",
      },
      {
        src: "/ibraheem-profile.jpg",
        sizes: "1024x1024",
        type: "image/jpeg",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "machine learning",
      "android",
      "backend",
      "cybersecurity",
      "full stack",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
