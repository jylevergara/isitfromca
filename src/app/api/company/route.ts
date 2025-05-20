// (GraphQL API endpoint using Yoga)

import { createYoga } from "graphql-yoga";
import { createContext } from "../../../graphql/context";
import { schema } from "../../../graphql/schema";
import { NextRequest } from "next/server";

// Create the yoga instance
const yoga = createYoga({
  schema,
  context: createContext,
  graphqlEndpoint: "/api/company",
  fetchAPI: { Response },
});

// Create proper Next.js route handlers that wrap the yoga handler
export async function GET(request: NextRequest) {
  return yoga.fetch(request);
}

export async function POST(request: NextRequest) {
  return yoga.fetch(request);
}
