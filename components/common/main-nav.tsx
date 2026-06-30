"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Icons } from "@/components/common/icons";
import { MobileNav } from "@/components/common/mobile-nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: any[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  return (
    <div className="flex min-w-0 flex-1 items-center gap-8">
      <Link href="/" className="group flex min-w-0 items-center gap-3">
        <span className="flex h-9 w-9 flex-none items-center justify-center border border-foreground bg-foreground text-xs font-bold text-background transition-colors group-hover:bg-background group-hover:text-foreground">
          IA
        </span>
        <span className="min-w-0 leading-none">
          <span className="block truncate font-heading text-base">
            {siteConfig.brandName}
          </span>
          <span className="mt-1 hidden text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground sm:block">
            Computer Science Student
          </span>
        </span>
      </Link>

      {items?.length ? (
        <nav className="hidden items-center gap-1 lg:flex">
          {items.map((item) => {
            const itemPath = item.href.split("#")[0] || "/";
            const isActive =
              itemPath === "/"
                ? pathname === "/"
                : pathname.startsWith(itemPath);

            return (
              <Link
                key={item.href}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "relative px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground",
                  isActive && "text-foreground",
                  item.disabled && "cursor-not-allowed opacity-50"
                )}
              >
                {item.title}
                {isActive ? (
                  <span className="absolute inset-x-3 -bottom-[13px] h-0.5 bg-[hsl(var(--signal))]" />
                ) : null}
              </Link>
            );
          })}
        </nav>
      ) : null}

      <button
        type="button"
        className="ml-auto flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:bg-accent lg:hidden"
        onClick={() => setShowMobileMenu((current) => !current)}
        aria-label={showMobileMenu ? "Close navigation" : "Open navigation"}
        aria-expanded={showMobileMenu}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
      </button>

      {showMobileMenu && items ? (
        <MobileNav items={items}>{children}</MobileNav>
      ) : null}
    </div>
  );
}
