import React from "react";
import { ClientPageWrapper } from "./client-page-wrapper";
import PageHeader from "./page-header";

interface PageContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function PageContainer({
  title,
  description,
  children,
}: PageContainerProps) {
  return (
    <ClientPageWrapper>
      <div className="container pb-20 pt-10 md:pt-16">
        <PageHeader title={title} description={description} />
        <div className="max-w-full overflow-x-hidden">{children}</div>
      </div>
    </ClientPageWrapper>
  );
}
