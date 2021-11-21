import React from "react";
import { SkilledLevel } from "~/api/graphql/autogen/scheme";

export type SkillProps = {
  caption: string;
  level: SkilledLevel;
};
export const Skill: React.VFC<SkillProps> = ({ caption, level }) => (
  <div>
    <span>{caption}</span>
    <span>{level}</span>
  </div>
);
