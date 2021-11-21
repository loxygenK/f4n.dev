import React from "react";
import { SkilledLevel } from "~/api/graphql/autogen/scheme";
import { combineClassName } from "~/utils/combineClassName";

import styles from "./Skill.module.scss";

const skilledLevelToCaption: { [key in SkilledLevel]: string } = {
  FAVORITE: "好んで使う",
  ADVANCED: "それなりに使える",
  EXPERIENCED: "経験アリ",
  BEGINNER: "初心者; 業務経験なし",
  STUDYING: "勉強中",
};

export type SkillProps = {
  caption: string;
  level: SkilledLevel;
};
export const Skill: React.VFC<SkillProps> = ({ caption, level }) => (
  <div className={styles.container}>
    <span className={styles.name}>{caption}</span>
    <span className={styles.level}>{skilledLevelToCaption[level]}</span>
  </div>
);
