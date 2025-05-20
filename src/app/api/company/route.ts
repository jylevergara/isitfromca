// (GraphQL API endpoint using Yoga)

import { createYoga } from "graphql-yoga";
import { createContext } from "../../../graphql/context";
import { schema } from "../../../graphql/schema";

const { handleRequest } = createYoga({
  schema,
  context: createContext,
  graphqlEndpoint: "/api/company",
  fetchAPI: { Response },
});

// Only export the handler functions, not the schema or typeDefs
export { handleRequest as GET, handleRequest as POST };
