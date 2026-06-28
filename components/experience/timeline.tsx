"use client";

import React from "react";

import { AnimatedSection } from "@/components/common/animated-section";
import ExperienceCard from "@/components/experience/experience-card";
import { ExperienceInterface } from "@/config/experience";

interface TimelineProps {
  experiences: ExperienceInterface[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = a.endDate === "Present" ? new Date() : a.endDate;
    const dateB = b.endDate === "Present" ? new Date() : b.endDate;
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="relative space-y-4 lg:pl-24">
      <div className="absolute bottom-0 left-8 top-0 hidden w-px bg-border lg:block" />
      {sortedExperiences.map((experience, index) => (
        <AnimatedSection
          key={experience.id}
          delay={0.06 * (index + 1)}
          direction="up"
          className="relative"
        >
          <span className="absolute -left-24 top-6 hidden w-16 bg-background pr-3 text-right text-xs font-bold text-[hsl(var(--signal))] lg:block">
            {String(index + 1).padStart(2, "0")}
          </span>
          <ExperienceCard experience={experience} />
        </AnimatedSection>
      ))}
    </div>
  );
};

export default Timeline;
