import Link from "next/link";
import { redirect } from "next/navigation";

import { Icons } from "@/components/common/icons";
import ProjectDescription from "@/components/projects/project-description";
import ProjectGallery from "@/components/projects/project-gallery";
import ProjectMedia from "@/components/projects/project-media";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { Projects } from "@/config/projects";
import { cn, formatDateFromObj } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{ projectId: string }>;
}

export default async function Project({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const project = Projects.find((value) => value.id === projectId);

  if (!project) redirect("/projects");

  const projectScreens = project.pagesInfoArr.flatMap((page) =>
    page.imgArr.map((src) => ({
      description: page.description,
      src,
      title: page.title,
      variant: page.imageVariant,
    }))
  );

  return (
    <article className="container max-w-6xl py-10 md:py-16">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
      >
        <Icons.chevronLeft className="h-4 w-4" />
        All projects
      </Link>

      <header className="mt-8 grid gap-8 border-b border-border pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="section-label">
            <span>{project.type}</span>
            {formatDateFromObj(project.startDate)}
          </p>
          <h1 className="mt-5 max-w-4xl font-heading text-5xl leading-none sm:text-6xl lg:text-7xl">
            {project.companyName}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
            {project.shortDescription}
          </p>
          <ChipContainer textArr={project.category} />
        </div>
        <div className="flex gap-2">
          {project.githubLink ? (
            <Link
              href={project.githubLink}
              target="_blank"
              className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
            >
              <Icons.gitHub className="h-4 w-4" /> Source
            </Link>
          ) : null}
          {project.websiteLink ? (
            <Link
              href={project.websiteLink}
              target="_blank"
              className={cn(buttonVariants(), "gap-2")}
            >
              <Icons.externalLink className="h-4 w-4" /> Visit
            </Link>
          ) : null}
        </div>
      </header>

      <ProjectMedia
        src={project.companyLogoImg}
        alt={project.companyName}
        variant={project.imageVariant}
        className="my-10 aspect-video w-full"
        priority
      />

      <section className="grid gap-10 border-y border-border py-10 lg:grid-cols-[0.42fr_1fr] lg:gap-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Technology
          </p>
          <ChipContainer textArr={project.techStack} />
        </div>
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-[hsl(var(--signal))]">
            Case study
          </p>
          <h2 className="mb-6 font-heading text-3xl sm:text-4xl">
            What I built
          </h2>
          <ProjectDescription
            paragraphs={project.descriptionDetails.paragraphs}
            bullets={project.descriptionDetails.bullets}
          />
        </div>
      </section>

      {projectScreens.length > 0 ? (
        <ProjectGallery
          projectName={project.companyName}
          screens={projectScreens}
        />
      ) : null}

      <div className="mt-16 border-t border-border pt-8">
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
        >
          <Icons.chevronLeft className="h-4 w-4" /> All projects
        </Link>
      </div>
    </article>
  );
}
