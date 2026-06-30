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
    <section
      className="mt-16 border-t border-border pt-10"
      aria-labelledby="project-screens-heading"
    >
      <h2
        id="project-screens-heading"
        className="font-heading text-3xl leading-tight sm:text-4xl"
      >
        Project Screens
      </h2>

      <div
        className={cn(
          "mt-8",
          activeScreen.variant === "portrait" && "mx-auto max-w-[430px]"
        )}
        aria-live="polite"
      >
        <ProjectMedia
          src={activeScreen.src}
          alt={`${projectName} - ${activeScreen.title}`}
          variant={activeScreen.variant ?? "cover"}
          className={cn(
            "w-full",
            activeScreen.variant === "portrait"
              ? "aspect-[9/16] max-h-[76vh]"
              : "aspect-video"
          )}
          priority
        />
        <div className="grid gap-2 border-x border-b border-border p-5 sm:grid-cols-[0.65fr_1.35fr]">
          <h3 className="font-heading text-xl leading-tight">
            {activeScreen.title}
          </h3>
          {activeScreen.description ? (
            <p className="text-sm leading-6 text-muted-foreground">
              {activeScreen.description}
            </p>
          ) : null}
        </div>
      </div>

      {screens.length > 1 && (
        <div
          className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3"
          aria-label="Choose a project screen"
        >
          {screens.map((screen, index) => (
            <button
              key={`${screen.src}-${index}`}
              type="button"
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "group border-t-2 pt-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                activeIndex === index
                  ? "border-[hsl(var(--signal))] text-foreground"
                  : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
              )}
            >
              <ProjectMedia
                src={screen.src}
                alt=""
                variant={screen.variant ?? "cover"}
                className={cn("aspect-video w-full transition-colors")}
              />
              <span className="mt-2 block text-xs font-semibold leading-tight">
                {screen.title}
              </span>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
