import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import { buttonVariants } from "@/components/ui/button";
import { certifications } from "@/config/certifications";
import { education } from "@/config/education";
import { experiences } from "@/config/experience";
import { featuredProjects } from "@/config/projects";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import profileImg from "@/public/ibraheem-profile.jpg";

export const metadata: Metadata = {
  title: { absolute: siteConfig.name },
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
};

const SectionLabel = ({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) => (
  <p className="section-label">
    <span>{number}</span>
    {children}
  </p>
);

export default function IndexPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.profileImage}`,
    jobTitle: "Computer Science Student",
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

      <section className="relative h-[82svh] min-h-[460px] max-h-[780px] overflow-hidden bg-black text-white">
        <Image
          src={profileImg}
          alt="Ibraheem Aziz"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%] md:object-[center_32%]"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative flex h-full flex-col justify-between py-8 md:py-12">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-white/80">
            <span className="h-2 w-2 bg-emerald-400" />
            Computer Science · FAST NUCES
          </div>

          <div className="max-w-4xl pb-2">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
              Backend · Systems · Mobile
            </p>
            <h1 className="max-w-3xl font-heading text-5xl leading-[0.98] sm:text-6xl md:text-7xl lg:text-8xl">
              Ibraheem Aziz
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
              Computer Science student building practical backend, desktop,
              mobile, and systems software.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className={buttonVariants({
                  size: "lg",
                  className:
                    "rounded-none bg-white text-black hover:bg-white/90 hover:text-black",
                })}
              >
                View selected work
                <Icons.chevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/resume"
                target="_blank"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "rounded-none border-white/60 bg-transparent text-white hover:bg-white hover:text-black",
                })}
              >
                <Icons.post className="mr-2 h-4 w-4" />
                Resume
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 border-t border-white/30 pt-4 text-xs uppercase tracking-[0.14em] text-white/70 sm:grid-cols-3 sm:gap-8">
            <span>Rawalpindi, Pakistan</span>
            <span className="hidden sm:block">
              Open to engineering opportunities
            </span>
            <Link
              href="/contact"
              className="hidden text-right text-white transition-colors hover:text-emerald-300 sm:block"
            >
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>

      <AnimatedSection direction="up" className="section-shell" id="services">
        <div className="section-grid">
          <div>
            <SectionLabel number="01">Capabilities</SectionLabel>
            <h2 className="section-title">
              Turning concepts into working software.
            </h2>
            <p className="section-copy">
              Practical software work grounded in computer science fundamentals,
              maintainable implementation, and dependable user flows.
            </p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr_1.5fr] sm:items-start"
              >
                <span className="text-xs font-bold text-[hsl(var(--signal))]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-lg">{service.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        direction="up"
        className="border-y border-border bg-secondary/35"
        id="projects"
      >
        <div className="section-shell">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel number="02">Selected work</SectionLabel>
              <h2 className="section-title max-w-2xl">
                Systems with real interfaces and real constraints.
              </h2>
            </div>
            <Link href="/projects" className="text-link w-fit">
              Explore every project <Icons.chevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid items-stretch gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" className="section-shell" id="experience">
        <div className="section-grid">
          <div>
            <SectionLabel number="03">Experience</SectionLabel>
            <h2 className="section-title">
              Research experience and community service.
            </h2>
            <p className="section-copy">
              Software development, backend engineering, and cybersecurity work
              across research and community environments.
            </p>
            <Link href="/experience" className="text-link mt-7 w-fit">
              Full timeline <Icons.chevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {experiences.slice(0, 3).map((experience) => (
              <ExperienceCard experience={experience} key={experience.id} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        direction="up"
        className="border-y border-border bg-foreground text-background"
      >
        <div className="section-shell">
          <SectionLabel number="04">Technical range</SectionLabel>
          <div className="mt-8 grid gap-px bg-background/25 sm:grid-cols-2 lg:grid-cols-3">
            {featuredSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex min-h-40 flex-col justify-between bg-foreground p-6"
              >
                <skill.icon size={28} />
                <div>
                  <h3 className="font-heading text-xl">{skill.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-background/65">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/skills"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold"
          >
            View complete skill set <Icons.chevronRight className="h-4 w-4" />
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" className="section-shell">
        <div className="mb-10">
          <SectionLabel number="05">Foundation</SectionLabel>
          <h2 className="section-title">Education and proof of work.</h2>
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="divide-y divide-border border-y border-border">
            {education.map((item) => (
              <div key={item.degree} className="py-6">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[hsl(var(--signal))]">
                  {item.duration}
                </p>
                <h3 className="mt-2 font-heading text-xl">{item.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.institution}
                </p>
                {item.details ? (
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.details}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Certifications
            </p>
            <div className="grid grid-cols-1 border-t border-border sm:grid-cols-2">
              {certifications.map((certification, index) => (
                <div
                  key={certification.title}
                  className="flex min-h-28 items-start gap-3 border-b border-border py-5 sm:odd:pr-5 sm:even:border-l sm:even:pl-5"
                >
                  <span className="text-xs font-bold text-[hsl(var(--signal))]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-semibold leading-6">
                    {certification.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <section className="border-t border-border bg-[hsl(var(--signal))] text-white">
        <div className="section-shell flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/75">
              Have a project or opportunity?
            </p>
            <h2 className="mt-4 max-w-3xl font-heading text-4xl sm:text-5xl md:text-6xl">
              Let’s build something dependable.
            </h2>
          </div>
          <Link
            href="/contact"
            className={buttonVariants({
              size: "lg",
              className:
                "w-fit rounded-none bg-white text-black hover:bg-black hover:text-white",
            })}
          >
            Contact me <Icons.chevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </ClientPageWrapper>
  );
}
