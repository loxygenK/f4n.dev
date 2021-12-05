import React from "react";
import ReactMarkdown from "react-markdown";

import styles from "./BlogBody.module.scss";

export type BlogBodyProps = {
  content: string;
};
export const BlogBody: React.VFC<BlogBodyProps> = ({ content }) => (
  <div className={styles.blog}>
    <ReactMarkdown>{content}</ReactMarkdown>
  </div>
);
