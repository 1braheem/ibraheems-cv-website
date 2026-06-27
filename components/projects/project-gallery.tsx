"use client";

import { useState } from "react";

import ProjectMedia from "@/components/projects/project-media";
import { cn } from "@/lib/utils";

type MediaVariant = "cover" | "fit" | "logo" | "portrait";

export interface ProjectScreen {
  description?: string;
  src: string;
  title: string;
  variant?: MediaVariant;
}

interface ProjectGalleryProps {
  projectName: string;
  screens: ProjectScreen[];
}

export default function ProjectGallery({
  projectName,
  screens,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreen = screens[activeIndex];

  if (!activeScreen) return null;

  return (
    <section className="mb-7" aria-labelledby="project-screens-heading">
      <h2
        id="project-screens-heading"
        className="mb-5 font-heading text-3xl leading-tight"
      >
        Project Screens
      </h2>

      <div aria-live="polite">
        <h3 className="font-heading text-xl leading-tight">
          {activeScreen.title}
        </h3>
        {activeScreen.description && (
          <p className="mt-1 text-muted-foreground">
            {activeScreen.description}
          </p>
        )}
        <ProjectMedia
          src={activeScreen.src}
          alt={`${projectName} - ${activeScreen.title}`}
          variant={activeScreen.variant ?? "cover"}
          className="my-4 aspect-video w-full"
          priority
        />
      </div>

      {screens.length > 1 && (
        <div
          className="grid grid-cols-2 gap-3 sm:grid-cols-3"
          aria-label="Choose a project screen"
        >
          {screens.map((screen, index) => (
            <button
              key={`${screen.src}-${index}`}
              type="button"
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                activeIndex === index
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <ProjectMedia
                src={screen.src}
                alt=""
                variant={screen.variant ?? "cover"}
                className={cn(
                  "aspect-video w-full transition-colors",
                  activeIndex === index
                    ? "border-primary"
                    : "border-border/70 group-hover:border-primary/50"
                )}
              />
              <span className="mt-2 block text-sm font-semibold leading-tight">
                {screen.title}
              </span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
