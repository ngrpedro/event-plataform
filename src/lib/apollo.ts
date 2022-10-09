import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl91ryo9t2btd01ul2lpr7wzd/master",
  cache: new InMemoryCache(),
});
