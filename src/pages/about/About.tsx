import React from "react";
import {PageWrapper} from "~/comps/layout/PageWrapper";
import {Heading} from "~/comps/shared/Heading";

import styles from "./About.module.scss";
import {Avatar} from "./Avatar";
import {Introduction} from "./Introduction";

export const About = () => (
  <PageWrapper>
    <Heading sub="About" emoji="🙌">自己紹介</Heading>
    <div className={styles.container}>
      <Avatar />
      <Introduction />
    </div>
  </PageWrapper>
);
