import Link from "next/link";

import { Icons } from "@/components/common/icons";
import ProjectMedia from "@/components/projects/project-media";
import ChipContainer from "@/components/ui/chip-container";
import { ProjectInterface } from "@/config/projects";

interface ProjectCardProps {
  project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full min-w-0 flex-col border border-border bg-card transition-colors hover:border-foreground">
      <Link href={`/projects/${project.id}`} className="block overflow-hidden">
        <ProjectMedia
          src={project.companyLogoImg}
          alt={project.companyName}
          variant={project.imageVariant}
          className="aspect-[16/10] h-auto w-full border-0 transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-2xl leading-tight">
            {project.companyName}
          </h3>
          <Icons.chevronRight className="mt-1 h-4 w-4 flex-none transition-transform group-hover:translate-x-1" />
        </div>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-muted-foreground">
          {project.shortDescription}
        </p>
        <ChipContainer textArr={project.category} />
        <Link
          href={`/projects/${project.id}`}
          className="mt-2 inline-flex min-h-11 items-center justify-between border-t border-border pt-4 text-sm font-bold"
        >
          Explore project
          <Icons.chevronRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
