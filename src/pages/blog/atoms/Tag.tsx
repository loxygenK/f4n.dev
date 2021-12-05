import React from "react";

import styles from "./Tag.module.scss";

export type TagProps = {
  caption: string;
};
export const Tag: React.VFC<TagProps> = ({ caption }) => (
  <span className={styles.tag}>{caption}</span>
);
