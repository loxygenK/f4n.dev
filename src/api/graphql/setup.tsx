import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { Setupper, SetupperProps } from "../setup";

const apolloClient = new ApolloClient({
  // TODO: Change this from the environment variable
  uri: "http://localhost:8000",
  cache: new InMemoryCache(),
});

export class GraphQLSetupper implements Setupper {
  APIProvider({ children }: SetupperProps): React.ReactElement {
    return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
  }
}
