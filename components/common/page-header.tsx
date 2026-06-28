interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-10 border-b border-border pb-8 md:mb-14 md:pb-10">
      <p className="section-label">
        <span>Portfolio</span>
        {title}
      </p>
      <div className="mt-5 grid gap-5 md:grid-cols-[1.15fr_0.85fr] md:items-end">
        <h1 className="font-heading text-5xl leading-none sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="max-w-xl text-base leading-7 text-muted-foreground md:justify-self-end">
          {description}
        </p>
      </div>
    </div>
  );
}
