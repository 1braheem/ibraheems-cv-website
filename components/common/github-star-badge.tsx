"use client";

import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type GitHubStarBadgeProps = {
  className?: string;
};

export function GitHubStarBadge({ className }: GitHubStarBadgeProps) {
  return (
    <Link
      href={siteConfig.links.linkedin}
      target="_blank"
      rel="noreferrer"
      aria-label="View Ibraheem Aziz on LinkedIn"
      className={cn(
        "inline-flex h-9 items-center gap-2 border border-border bg-background px-3 text-xs font-semibold text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background",
        className
      )}
    >
      <Icons.link className="h-3.5 w-3.5" />
      <span>LinkedIn</span>
    </Link>
  );
}
