import { gql, QueryResult, useQuery } from "@apollo/client";
import { Skill, SkillType } from "~/api/graphql/autogen/scheme";

const FetchSkills = gql`
  query FetchSkill {
    skills {
      name
      skillType
      level
      emoji
    }
  }
`;
type FetchSkillsResponse = { skills: Skill[] };
export const useSkillsAPI = (): QueryResult<FetchSkillsResponse> =>
  useQuery<FetchSkillsResponse>(FetchSkills);

export const useSkillsTypeFilteredAPI = (
  type: SkillType
): QueryResult<FetchSkillsResponse> => {
  const skillAPIReturn = useSkillsAPI();

  if (skillAPIReturn.data === undefined) return skillAPIReturn;

  return {
    ...skillAPIReturn,
    data: {
      skills: skillAPIReturn.data.skills.filter((s) => s.skillType === type),
    },
  };
};
