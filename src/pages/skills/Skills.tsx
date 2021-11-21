import React from "react";
import { SkillType } from "~/api/graphql/autogen/scheme";
import { PageWrapper } from "~/comps/layout/PageWrapper";
import { Heading } from "~/comps/shared/Heading";
import { SkillList, SkillListProps } from "./molecules/SkillList";

import styles from "./Skills.module.scss";

const skillListTable: Map<
  SkillType,
  Omit<SkillListProps, "skillType">
> = new Map([
  ["FRONTEND", { emoji: "🎨", caption: "フロントエンド" }],
  ["BACKEND", { emoji: "💿", caption: "バックエンド" }],
  ["INFRASTRUCTURE", { emoji: "🏗️", caption: "インフラストラクチャー" }],
  ["UTILITY", { emoji: "🔨", caption: "その他" }],
]);

export const Skills = () => (
  <PageWrapper>
    <Heading sub="skills" emoji="📝">
      スキル
    </Heading>
    <div className={styles.container}>
      {Array.from(skillListTable.entries()).map(([k, v], i) => (
        <SkillList {...v} skillType={k} key={i} />
      ))}
    </div>
  </PageWrapper>
);
