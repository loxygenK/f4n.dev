import { gql, QueryResult, useQuery } from "@apollo/client";
import { Basic, Contact } from "~/api/graphql/autogen/scheme";

const fetchBasic = gql`
  query FetchBasic {
    basic {
      name {
        primary
        aka
      }
      introduction
      affiliation {
        location
        assign
      }
      age
    }
    contacts {
      service
      identifier
      url
    }
  }
`;
type FetchIntroductionResponse = { basic: Basic; contacts: Contact[] };

export const useBasicAPI = (): QueryResult<FetchIntroductionResponse> =>
  useQuery<FetchIntroductionResponse>(fetchBasic);
