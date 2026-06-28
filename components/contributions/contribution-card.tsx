import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { contributionsInterface } from "@/config/contributions";

interface ContributionCardProps {
  contributions: contributionsInterface[];
}

export default function ContributionCard({
  contributions,
}: ContributionCardProps) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {contributions.map((contribution, index) => (
        <Link
          href={contribution.link}
          target="_blank"
          key={contribution.repo}
          className="group grid gap-4 py-6 sm:grid-cols-[3rem_0.8fr_1.4fr_auto] sm:items-start"
        >
          <span className="text-xs font-bold text-[hsl(var(--signal))]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-heading text-lg">{contribution.repo}</h3>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
              {contribution.repoOwner}
            </p>
          </div>
          <p className="text-sm leading-6 text-muted-foreground">
            {contribution.contibutionDescription}
          </p>
          <Icons.externalLink className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      ))}
    </div>
  );
}
