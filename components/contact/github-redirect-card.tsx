import { Icons } from "@/components/common/icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const gmailCompose =
  "https://mail.google.com/mail/?view=cm&fs=1&to=ibraheemaziz3568@gmail.com";

export default function GithubRedirectCard() {
  return (
    <aside className="border-t-4 border-[hsl(var(--signal))] bg-secondary/50 p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
        Direct contact
      </p>
      <h2 className="mt-5 font-heading text-3xl">Prefer your own inbox?</h2>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        Reach me directly for software engineering opportunities, project work,
        or technical collaboration.
      </p>

      <div className="mt-8 divide-y divide-border border-y border-border">
        <Link
          href={gmailCompose}
          target="_blank"
          className="group flex items-center justify-between gap-4 py-5"
        >
          <span>
            <span className="block text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
              Email
            </span>
            <span className="mt-1 block break-all font-semibold">
              {siteConfig.email}
            </span>
          </span>
          <Icons.externalLink className="h-5 w-5 flex-none transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
        <Link
          href={siteConfig.links.linkedin}
          target="_blank"
          className="group flex items-center justify-between gap-4 py-5"
        >
          <span>
            <span className="block text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
              LinkedIn
            </span>
            <span className="mt-1 block font-semibold">Ibraheem Aziz</span>
          </span>
          <Icons.externalLink className="h-5 w-5 flex-none transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </div>

      <dl className="mt-8 grid gap-5 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
            Location
          </dt>
          <dd className="mt-1 font-semibold">{siteConfig.location}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
            Phone
          </dt>
          <dd className="mt-1 font-semibold">{siteConfig.phone}</dd>
        </div>
      </dl>
    </aside>
  );
}
