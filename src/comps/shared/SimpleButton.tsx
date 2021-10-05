import React from "react";
import styles from "./SimpleButton.module.scss";

export type SimpleButtonProps = {
  caption: string,
  linkTo: string
}
export const SimpleButton = ({caption, linkTo}: SimpleButtonProps) => (
  <a href={linkTo} className={styles.wrapper}>
    <span>{caption}</span>
  </a>
)
