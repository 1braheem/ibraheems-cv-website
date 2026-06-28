"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Icons } from "@/components/common/icons";
import { ExperienceInterface } from "@/config/experience";

const getDurationText = (
  startDate: Date,
  endDate: Date | "Present",
  duration?: string
) => {
  if (duration) return duration;
  const startYear = new Date(startDate).getFullYear();
  const endYear =
    typeof endDate === "string" ? "Present" : new Date(endDate).getFullYear();
  return `${startYear} - ${endYear}`;
};

interface ExperienceCardProps {
  experience: ExperienceInterface;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => (
  <article className="group border border-border bg-card p-5 transition-colors hover:border-foreground sm:p-6">
    <div className="flex items-start gap-4">
      {experience.logo ? (
        <div className="flex h-12 w-12 flex-none items-center justify-center border border-border bg-white p-2">
          <Image
            src={experience.logo}
            alt={experience.company}
            width={48}
            height={48}
            className="h-full w-full object-contain"
          />
        </div>
      ) : null}
      <div className="min-w-0 flex-1">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
          <div>
            <h3 className="font-heading text-lg leading-tight sm:text-xl">
              {experience.position}
            </h3>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">
              {experience.company} · {experience.location}
            </p>
          </div>
          <span className="flex-none text-xs font-bold uppercase tracking-[0.12em] text-[hsl(var(--signal))]">
            {getDurationText(
              experience.startDate,
              experience.endDate,
              experience.duration
            )}
          </span>
        </div>
        <p className="mt-4 line-clamp-2 text-sm leading-6 text-muted-foreground">
          {experience.description[0]}
        </p>
        <div className="mt-4 flex items-end justify-between gap-4 border-t border-border pt-4">
          <div className="flex flex-wrap gap-2">
            {experience.skills.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
          <Link
            href={`/experience/${experience.id}`}
            aria-label={`View ${experience.position} details`}
            className="flex h-9 w-9 flex-none items-center justify-center border border-border transition-colors hover:bg-foreground hover:text-background"
          >
            <Icons.chevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  </article>
);

export default ExperienceCard;
