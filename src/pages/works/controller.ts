import { gql, QueryResult, useQuery } from "@apollo/client";
import { Work } from "~/api/graphql/autogen/scheme";

const FetchWork = gql`
  query FetchWork {
    works {
      name
      description
      repoUrl
      tags
      status
    }
  }
`;
export type FetchWorkResponse = { works: Work[] };
export const useWorksAPI = (): QueryResult<FetchWorkResponse> =>
  useQuery<FetchWorkResponse>(FetchWork);
