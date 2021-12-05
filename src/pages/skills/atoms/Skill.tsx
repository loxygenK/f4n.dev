import React from "react";
import { SkilledLevel } from "~/api/graphql/autogen/scheme";
import { Emoji } from "~/comps/shared/Emoji";
import { Splitter } from "~/comps/shared/Splitter";

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
  emoji: string;
};
export const Skill: React.VFC<SkillProps> = ({ caption, level, emoji }) => (
  <div className={styles.container}>
    <span className={styles.name}>{caption}</span>
    <span className={styles.level}>
      <Emoji emoji={emoji} />
      <Splitter />
      {skilledLevelToCaption[level]}
    </span>
  </div>
);
