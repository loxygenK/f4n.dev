import React from "react";
import { Emoji } from "./Emoji";

import styles from "./Heading.module.scss";

export type HeadingProps = {
  children: string;
  emoji: string;
  sub: string;
};
export const Heading = ({ children, emoji, sub }: HeadingProps) => (
  <h1 className={styles.heading}>
    <Emoji emoji={emoji} />
    <span>{children}</span>
    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
    <span className={styles.subText}>// {sub}</span>
  </h1>
);
