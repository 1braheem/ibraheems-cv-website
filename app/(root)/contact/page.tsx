import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import GithubRedirectCard from "@/components/contact/github-redirect-card";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.14em] text-[hsl(var(--signal))]">
            Send a message
          </p>
          <ContactForm />
        </div>
        <div>
          <GithubRedirectCard />
        </div>
      </div>
    </PageContainer>
  );
}
