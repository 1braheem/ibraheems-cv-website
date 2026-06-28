import Link from "next/link";
import * as React from "react";

import { siteConfig } from "@/config/site";
import { SocialLinks } from "@/config/socials";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t border-border bg-background", className)}>
      <div className="container grid gap-10 py-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center bg-foreground text-xs font-bold text-background">
              IA
            </span>
            <div>
              <p className="font-heading">{siteConfig.brandName}</p>
              <p className="text-xs text-muted-foreground">
                Software Engineering Portfolio
              </p>
            </div>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            © 2026 {siteConfig.brandName}. Rawalpindi, Pakistan.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
          {SocialLinks.map((item) => (
            <Link
              href={item.link}
              target="_blank"
              key={item.name}
              className="transition-colors hover:text-[hsl(var(--signal))]"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="transition-colors hover:text-[hsl(var(--signal))]"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
