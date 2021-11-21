import React from "react";
import { SkillType } from "~/api/graphql/autogen/scheme";
import { AwaitFetch } from "~/comps/shared/AwaitFetch";
import { Emoji } from "~/comps/shared/Emoji";
import { Skill } from "../atoms/Skill";
import { useSkillsTypeFilteredAPI } from "../controller";

import styles from "./SkillList.module.scss";

export type SkillListProps = {
  caption: string;
  emoji: string;
  skillType: SkillType;
};
export const SkillList: React.VFC<SkillListProps> = ({
  caption,
  emoji,
  skillType,
}) => {
  const { data, loading, error } = useSkillsTypeFilteredAPI(skillType);

  return (
    <div>
      <h2>
        <Emoji emoji={emoji} />
        {caption}
      </h2>
      <AwaitFetch data={data} loading={loading} error={error}>
        {(data) => (
          <div className={styles.skillListContainer}>
            {data.skills.map((s, i) => (
              <Skill caption={s.name} level={s.level} emoji={s.emoji} key={i} />
            ))}
          </div>
        )}
      </AwaitFetch>
    </div>
  );
};
