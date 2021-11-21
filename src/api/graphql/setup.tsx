import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { Setupper, SetupperProps } from "../setup";

const apolloClient = new ApolloClient({
  uri: PRODUCTION
    ? "https://api.f4n.dev/graphql"
    : "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});

export class GraphQLSetupper implements Setupper {
  APIProvider({ children }: SetupperProps): React.ReactElement {
    return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
  }
}
