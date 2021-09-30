import React from "react";
import { PageWrapper } from "~/comps/layout/PageWrapper";
import { LogoImage } from "~/comps/shared/LogoImage";

import styles from "./Main.module.scss";

export const Main = () => (
  <PageWrapper>
    <LogoImage className={styles.logoImage} />
  </PageWrapper>
);
