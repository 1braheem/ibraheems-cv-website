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
        "inline-flex h-8 items-center gap-2 rounded-full border border-border bg-background/60 px-3 text-xs text-muted-foreground backdrop-blur transition-colors hover:bg-accent hover:text-foreground",
        className
      )}
    >
      <Icons.link className="h-3.5 w-3.5" />
      <span className="font-medium">LinkedIn</span>
    </Link>
  );
}
