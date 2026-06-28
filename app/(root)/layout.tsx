import { GitHubStarBadge } from "@/components/common/github-star-badge";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <MainNav items={routesConfig.mainNav}>
            <div className="flex items-center gap-2 border-t border-border pt-5">
              <GitHubStarBadge className="w-full justify-center" />
              <ModeToggle />
            </div>
          </MainNav>
          <nav className="hidden items-center gap-2 md:flex">
            <GitHubStarBadge />
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
