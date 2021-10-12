import React from "react";
import {Link} from "react-router-dom";
import styles from "./SimpleButton.module.scss";

export type SimpleButtonProps = {
  caption: string;
  linkTo: string;
};
export const SimpleButton = ({ caption, linkTo }: SimpleButtonProps) => (
  <Link to={linkTo} className={styles.wrapper}>
    <span>{caption}</span>
  </Link>
);
