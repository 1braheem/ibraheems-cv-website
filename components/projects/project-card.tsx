import Link from "next/link";

import { Icons } from "@/components/common/icons";
import ProjectMedia from "@/components/projects/project-media";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-border/80 bg-background/90 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-sky-500 to-emerald-500 opacity-70" />
      <ProjectMedia
        src={project.companyLogoImg}
        alt={project.companyName}
        variant={project.imageVariant}
        className="h-[210px] w-full flex-shrink-0"
      />
      <div className="pt-5 space-y-3 flex flex-col flex-grow">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
            {project.type}
          </span>
          <Icons.chevronRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
        </div>
        <h5 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {project.companyName}
        </h5>
        <p className="line-clamp-3 font-normal text-muted-foreground flex-grow">
          {project.shortDescription}
        </p>
        <div className="flex gap-2 flex-wrap">
          <ChipContainer textArr={project.category} />
        </div>
        <Link href={`/projects/${project.id}`} className="mt-auto">
          <Button variant={"default"} className="mt-2 w-full">
            Read more
            <Icons.chevronRight className="w-4 ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
