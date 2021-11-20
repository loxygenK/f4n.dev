import React from "react";
import { GraphQLSetupper } from "./graphql/setup";

export type SetupperProps = React.PropsWithChildren<Record<string, unknown>>;
export interface Setupper {
  APIProvider({ children }: SetupperProps): React.ReactElement;
}

export function useAPI(): Setupper {
  // TODO: Change returning object

  return new GraphQLSetupper();
}
