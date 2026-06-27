import Rating from "@/components/skills/rating";
import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, id) => (
        <div
          key={id}
          className="relative overflow-hidden rounded-xl border border-border/80 bg-background/90 p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-sky-500 to-emerald-500 opacity-70" />
          <div className="flex h-[230px] flex-col justify-between rounded-md p-6 sm:h-[230px]">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
              <skill.icon size={28} />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
              <Rating stars={skill.rating} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
