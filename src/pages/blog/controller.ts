import { gql, QueryResult, useQuery } from "@apollo/client";
import {
  Blog,
  BlogHeader,
  QueryBlogBodyArgs,
} from "~/api/graphql/autogen/scheme";
const FetchBlogBody = gql`
  query FetchBlogBody($slug: String!) {
    blogBody(slug: $slug) {
      header {
        slug
        title
        emoji
        posted
        tags
      }
      body
    }
  }
`;

export type FetchBlogBodyResponse = {
  blogBody: Blog;
};
export const useBlogBody = (
  args: QueryBlogBodyArgs
): QueryResult<FetchBlogBodyResponse> =>
  useQuery(FetchBlogBody, { variables: args });
