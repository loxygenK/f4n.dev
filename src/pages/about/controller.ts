import { gql, useQuery } from "@apollo/client";
import { Basic } from "~/api/graphql/autogen/scheme";

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
  }
`;
type FetchIntroductionResponse = { basic: Basic };

export const useBasicAPI = () =>
  useQuery<FetchIntroductionResponse>(fetchBasic);
