import React from "react";
import { useParams } from "react-router-dom";
import { PageWrapper } from "~/comps/layout/PageWrapper";
import { BlogContent } from "./molecules/BlogContent";

export type BlogPathParameter = {
  slug: string;
};
export const Blog: React.VFC = () => {
  const { slug } = useParams<BlogPathParameter>();

  return (
    <PageWrapper>
      <BlogContent slug={slug} />
    </PageWrapper>
  );
};
