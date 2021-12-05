import React from "react";

export type BlogContentProps = {
  slug?: string;
};
export const BlogContent: React.VFC<BlogContentProps> = ({ slug }) => {
  return <div>Slug: {slug}</div>;
};
