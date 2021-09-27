import React from "react";
import styles from "./ContentWrapper.module.scss";

export type ContentWrapperProps = {
  children: React.ReactNode;
};
export const ContentWrapper = (props: ContentWrapperProps) => (
  <div className={styles.contentWrapper}>{props.children}</div>
);
