import React from "react";
import { AwaitFetch } from "~/comps/shared/AwaitFetch";
import { BlogBody } from "../atoms/BlogBody";
import { BlogHeader } from "../atoms/BlogHeader";
import { useBlogBody } from "../controller";

import styles from "./BlogContent.module.scss";

export type BlogContentProps = {
  slug: string;
};
export const BlogContent: React.VFC<BlogContentProps> = ({ slug }) => {
  const { loading, error, data } = useBlogBody({ slug });

  console.log(data);
  console.log(data?.blogBody.header.posted);

  return (
    <AwaitFetch loading={loading} error={error} data={data}>
      {(data) => (
        <div className={styles.blog}>
          <BlogHeader {...data.blogBody.header} />
          <BlogBody content={data.blogBody.body} />
        </div>
      )}
    </AwaitFetch>
  );
};
