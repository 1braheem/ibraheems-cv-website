import React from "react";

const ProjectDescription: React.FC<{
  paragraphs: string[];
  bullets: string[];
}> = ({ paragraphs, bullets }) => {
  return (
    <div className="text-base leading-8 text-muted-foreground">
      {paragraphs.map((paragraph, index) => (
        <p className="mb-4" key={index}>
          {paragraph}
        </p>
      ))}
      <ul className="mt-6 divide-y divide-border border-y border-border text-foreground">
        {bullets.map((bullet, index) => (
          <li key={index} className="grid grid-cols-[2rem_1fr] gap-3 py-4">
            <span className="text-xs font-bold text-[hsl(var(--signal))]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDescription;
