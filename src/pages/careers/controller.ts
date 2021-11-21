import { gql, QueryResult, useQuery } from "@apollo/client";
import dayjs, { Dayjs } from "dayjs";
import { Career as CareerAPIEntity } from "~/api/graphql/autogen/scheme";

const FetchCareers = gql`
  query FetchCareers {
    careers {
      title
      when
    }
  }
`;
export type Career = Omit<CareerAPIEntity, "when"> & { when: Dayjs };
type FetchCareersAPIResponse = { careers: CareerAPIEntity[] };
export type UseCareersHookResponse = { careers: Career[] };
export const useCareersAPI = (): QueryResult<UseCareersHookResponse> => {
  const apiResult = useQuery<FetchCareersAPIResponse>(FetchCareers);

  if (apiResult.data === undefined) return apiResult;

  return {
    ...apiResult,
    data: {
      careers: apiResult.data.careers.map((c) => ({
        ...c,
        when: dayjs(c.when),
      })),
    },
  };
};
