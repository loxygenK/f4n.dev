import React from "react";
import { PageWrapper } from "~/comps/layout/PageWrapper";
import { LogoImage } from "~/comps/shared/LogoImage";
import {SimpleButton} from "~/comps/shared/SimpleButton";

import styles from "./Main.module.scss";

export const Main = () => (
  <PageWrapper>
    <div className={styles.mainPageWrapper}>
      <LogoImage className={styles.logoImage} />
      <div className={styles.buttonList}>
        <SimpleButton caption="自己紹介" linkTo="/about"/>
        <SimpleButton caption="スキル" linkTo="/skills"/>
        <SimpleButton caption="実績" linkTo="/careers"/>
      </div>
    </div>
  </PageWrapper>
);
