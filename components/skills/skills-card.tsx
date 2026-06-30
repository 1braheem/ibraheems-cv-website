import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, index) => (
        <article
          key={skill.name}
          className="flex min-h-56 flex-col justify-between border-b border-r border-border bg-card p-6 transition-colors hover:bg-secondary/60"
        >
          <div className="flex items-start justify-between">
            <skill.icon size={28} />
            <span className="text-xs font-bold text-[hsl(var(--signal))]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div>
            <h3 className="font-heading text-xl">{skill.name}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {skill.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
