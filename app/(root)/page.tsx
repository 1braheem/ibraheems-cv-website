import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ContributionCard from "@/components/contributions/contribution-card";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { certifications } from "@/config/certifications";
import { featuredContributions } from "@/config/contributions";
import { education } from "@/config/education";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import profileImg from "@/public/ibraheem-profile.jpg";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.name,
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.profileImage}`,
    jobTitle: "Computer Science Student and Software Engineering Intern",
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rawalpindi",
      addressCountry: "Pakistan",
    },
    sameAs: [siteConfig.links.linkedin].filter(Boolean),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.brandName,
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: "Worldwide",
    email: siteConfig.email,
    founder: siteConfig.authorName,
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-32 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Image
            src={profileImg}
            alt="Ibraheem Aziz"
            width={220}
            height={220}
            className="mb-2 aspect-square w-[58%] max-w-[14rem] rounded-full border-8 border-primary bg-primary object-cover object-[center_25%] shadow-lg"
            priority
          />
          <AnimatedText
            as="h1"
            delay={0.15}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Ibraheem Aziz
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.25}
            className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl"
          >
            Computer Science Student · Backend & Cybersecurity Intern
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.35}
            className="mt-4 max-w-[46rem] leading-normal text-muted-foreground text-sm sm:text-base"
          >
            Computer Science student at FAST NUCES with hands-on experience in
            full-stack and mobile development, Android applications, C++
            systems, backend programming, and cybersecurity-focused research
            work.
          </AnimatedText>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:space-x-4">
            <AnimatedText delay={0.45}>
              <Link
                href={"/projects"}
                className={buttonVariants({ size: "lg" })}
                aria-label="View projects"
              >
                <Icons.laptop className="mr-2 h-4 w-4" /> Projects
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.55}>
              <Link
                href={"/resume"}
                target="_blank"
                className={buttonVariants({ variant: "outline", size: "lg" })}
                aria-label="View resume"
              >
                <Icons.post className="mr-2 h-4 w-4" /> Resume
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.65}>
              <Link
                href={"/contact"}
                className={buttonVariants({ variant: "outline", size: "lg" })}
                aria-label="Contact Ibraheem Aziz"
              >
                <Icons.contact className="mr-2 h-4 w-4" /> Contact
              </Link>
            </AnimatedText>
          </div>
        </div>
      </section>
      <AnimatedSection
        direction="up"
        className="container space-y-8 py-16"
        id="services"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center section-heading">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
          >
            Services
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Mobile, web, backend, desktop, and systems programming work built
            around practical software engineering fundamentals.
          </AnimatedText>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-stretch">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              delay={0.1 * (index + 1)}
              direction="up"
              className="h-full"
            >
              <div className="relative rounded-lg border bg-background p-2 h-full">
                <div className="flex min-h-[210px] flex-col justify-between rounded-md p-6">
                  <Icons.sparkles size={42} />
                  <div className="space-y-2">
                    <h3 className="font-bold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-8 rounded-2xl border border-border/70 bg-muted/45 py-16"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center section-heading">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full items-stretch">
            {featuredProjects.map((exp, index) => (
              <AnimatedSection
                key={exp.id}
                delay={0.1 * (index + 1)}
                direction="up"
                className="h-full w-full min-w-0"
              >
                <ProjectCard project={exp} />
              </AnimatedSection>
            ))}
          </div>
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-8 py-16"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center section-heading">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
          >
            {pagesConfig.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.experience.description}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 md:w-full lg:grid-cols-3">
          {experiences.slice(0, 3).map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-8 rounded-2xl border border-border/70 bg-muted/45 py-16"
        id="contributions"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center section-heading">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
          >
            {pagesConfig.contributions.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.contributions.description}
          </AnimatedText>
        </div>
        <ContributionCard contributions={featuredContributions} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/contributions">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-8 rounded-2xl border border-border/70 bg-muted/45 py-16"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center section-heading">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-8 py-16"
        id="education"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center section-heading">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
          >
            Education
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Computer Science foundation with practical coursework in data
            structures, OOP, operating systems, databases, and networks.
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2">
          {education.map((item, index) => (
            <AnimatedSection
              key={item.degree}
              delay={0.1 * (index + 1)}
              direction="up"
              className="h-full"
            >
              <div className="relative h-full rounded-lg border bg-background/80 p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl">
                <div className="flex min-h-[190px] flex-col justify-between rounded-md p-6">
                  <Icons.post className="text-primary" size={42} />
                  <div className="space-y-2">
                    <h3 className="font-bold">{item.degree}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.institution}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.duration}
                    </p>
                    {item.details && (
                      <p className="text-sm text-muted-foreground">
                        {item.details}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
      <AnimatedSection
        direction="up"
        className="container space-y-8 rounded-2xl border border-border/70 bg-muted/45 py-16"
        id="certifications"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center section-heading">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
          >
            Certifications
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            Verified experience, community work, and core CS preparation that
            support practical engineering delivery.
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((certification, index) => (
            <AnimatedSection
              key={certification.title}
              delay={0.1 * (index + 1)}
              direction="up"
              className="h-full"
            >
              <div className="relative h-full rounded-lg border bg-background/80 p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl">
                <div className="flex min-h-[150px] flex-col justify-between rounded-md p-6">
                  <Icons.star className="text-primary" size={34} />
                  <h3 className="font-bold text-sm">
                    {certification.title}
                  </h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
