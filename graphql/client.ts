import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "// your url",
  cache: new InMemoryCache(),
  credentials: "include",
});
