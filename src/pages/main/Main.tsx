import React from "react";
import { PageWrapper } from "~/comps/layout/PageWrapper";
import { LogoImage } from "~/comps/shared/LogoImage";
import { SimpleButton } from "~/comps/shared/SimpleButton";
import { quickNavigations } from "../router/routing";

import styles from "./Main.module.scss";

export const Main = () => (
  <PageWrapper>
    <div className={styles.mainPageWrapper}>
      <LogoImage className={styles.logoImage} />
      <div className={styles.buttonList}>
        {quickNavigations.map((nav, i) => (
          <SimpleButton caption={nav.caption} linkTo={nav.path} key={i} />
        ))}
      </div>
    </div>
  </PageWrapper>
);
