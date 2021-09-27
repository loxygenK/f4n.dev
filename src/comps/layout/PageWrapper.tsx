import React from "react";
import styles from "./PageWrapper.module.scss";

export type PageWrapperProps = {
  title?: string;
  children: React.ReactNode;
}
export const PageWrapper = (props: PageWrapperProps) => (
  <div className={styles.wrapper}>
    {props.children}
  </div>
)
