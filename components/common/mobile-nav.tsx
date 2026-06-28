import Link from "next/link";
import * as React from "react";

import { useLockBody } from "@/hooks/use-lock-body";

interface MobileNavProps {
  items: any[];
  children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody();

  return (
    <div className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-auto border-t border-border bg-background p-6 lg:hidden">
      <nav className="mx-auto grid max-w-lg divide-y divide-border border-y border-border">
        {items.map((item, index) => (
          <Link
            key={item.href}
            href={item.disabled ? "#" : item.href}
            className="group flex min-h-16 items-center justify-between py-4 text-lg font-semibold"
          >
            <span className="flex items-center gap-4">
              <span className="text-xs font-bold text-[hsl(var(--signal))]">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.title}
            </span>
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        ))}
      </nav>
      {children ? (
        <div className="mx-auto mt-8 max-w-lg">{children}</div>
      ) : null}
    </div>
  );
}
