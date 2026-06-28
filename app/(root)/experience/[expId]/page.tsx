import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { AnimatedSection } from "@/components/common/animated-section";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { experiences } from "@/config/experience";
import { siteConfig } from "@/config/site";

interface ExperienceDetailPageProps {
  params: Promise<{ expId: string }>;
}

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

export async function generateMetadata({
  params,
}: ExperienceDetailPageProps): Promise<Metadata> {
  const { expId } = await params;
  const experience = experiences.find((item) => item.id === expId);

  if (!experience) return { title: "Experience Not Found" };

  return {
    title: `${experience.position} at ${experience.company} | Experience`,
    description: `Detailed information about my role as ${experience.position} at ${experience.company}.`,
    alternates: { canonical: `${siteConfig.url}/experience/${expId}` },
  };
}

export default async function ExperienceDetailPage({
  params,
}: ExperienceDetailPageProps) {
  const { expId } = await params;
  const experience = experiences.find((item) => item.id === expId);

  if (!experience) redirect("/experience");

  const tabItems = [
    {
      value: "summary",
      label: "Summary",
      content: (
        <div className="py-8">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Role summary
          </p>
          <ul className="divide-y divide-border border-y border-border">
            {experience.description.map((description, index) => (
              <li
                key={description}
                className="grid grid-cols-[2rem_1fr] gap-3 py-4 leading-7"
              >
                <span className="text-xs font-bold text-[hsl(var(--signal))]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {description}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      value: "achievements",
      label: "Achievements",
      content: (
        <div className="py-8">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Key achievements
          </p>
          <ul className="divide-y divide-border border-y border-border">
            {experience.achievements.map((achievement, index) => (
              <li
                key={achievement}
                className="grid grid-cols-[2rem_1fr] gap-3 py-4 leading-7"
              >
                <span className="text-xs font-bold text-[hsl(var(--signal))]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      value: "skills",
      label: "Skills",
      content: (
        <div className="py-8">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Technologies and skills
          </p>
          <ChipContainer textArr={experience.skills} />
          <p className="mt-5 text-sm leading-6 text-muted-foreground">
            These are the primary technologies and skills utilized during my
            time at {experience.company}.
          </p>
        </div>
      ),
    },
  ];

  return (
    <ClientPageWrapper>
      <article className="container max-w-5xl py-10 md:py-16">
        <AnimatedSection>
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icons.chevronLeft className="h-4 w-4" /> Back to experience
          </Link>
        </AnimatedSection>

        <AnimatedSection
          delay={0.1}
          className="mt-8 border-b border-border pb-10"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            {experience.logo ? (
              <div className="flex h-20 w-20 flex-none items-center justify-center border border-border bg-white p-3">
                <Image
                  src={experience.logo}
                  alt={experience.company}
                  width={80}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </div>
            ) : null}
            <div className="min-w-0 flex-1">
              <p className="section-label">
                <span>
                  {getDurationText(
                    experience.startDate,
                    experience.endDate,
                    experience.duration
                  )}
                </span>
                {experience.location}
              </p>
              <h1 className="mt-5 font-heading text-4xl leading-none sm:text-5xl lg:text-6xl">
                {experience.position}
              </h1>
              <p className="mt-4 flex items-center gap-2 text-lg font-semibold text-muted-foreground">
                {experience.company}
                {experience.companyUrl ? (
                  <Link
                    href={experience.companyUrl}
                    target="_blank"
                    aria-label={`Visit ${experience.company}`}
                  >
                    <Icons.externalLink className="h-4 w-4" />
                  </Link>
                ) : null}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-10">
          <ResponsiveTabs items={tabItems} defaultValue="summary" />
        </AnimatedSection>

        <AnimatedSection
          delay={0.3}
          className="mt-10 border-t border-border pt-8"
        >
          <Button variant="outline" asChild>
            <Link href="/experience">
              <Icons.chevronLeft className="mr-2 h-4 w-4" /> View all experience
            </Link>
          </Button>
        </AnimatedSection>
      </article>
    </ClientPageWrapper>
  );
}
