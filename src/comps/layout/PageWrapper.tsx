import React from "react";
import { Header } from "../common/Header";
import styles from "./PageWrapper.module.scss";

export type PageWrapperProps = {
  title?: string;
  children: React.ReactNode;
};
export const PageWrapper = (props: PageWrapperProps) => (
  <div>
    <Header />
    <div className={styles.wrapper}>{props.children}</div>
  </div>
);
