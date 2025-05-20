// (GraphQL API endpoint using Yoga)

import { GraphQLContext, createContext } from "../../../graphql/context";
import axios from "axios";
import { createYoga, createSchema } from "graphql-yoga";

const PDL_API_ENDPOINT = "https://api.peopledatalabs.com/v5/company/enrich";

export const typeDefs = `#graphql
type CompanySearch {
  id: ID!
  searchedAt: String!
  companyName: String!
  displayName: String
  website: String
  industry: String
  country: String
  isFromUS: Boolean!
  isFromCanada: Boolean!
}

type Query {
  getCompanyInfo(companyName: String!): CompanySearch
  recentSearches(limit: Int): [CompanySearch!]!
}

type Mutation {
  searchAndAddCompany(companyName: String!): CompanySearch!
}
`;

const resolvers = {
  Mutation: {
    async searchAndAddCompany(
      _parent: any,
      args: { companyName: string },
      context: GraphQLContext
    ) {
      const { companyName } = args;

      if (!companyName) {
        throw new Error("Company name is required");
      }

try {
    // Check if we already have this company in our database (case insensitive search)
    const existingSearch = await context.prisma.companySearch.findFirst({
      where: {
        companyName: {
          equals: companyName.trim(),
          mode: 'insensitive'
        }
      },
      orderBy: {
        searchedAt: 'desc'
      }
    });

    // If found in database, return it
    if (existingSearch) {
      console.log(`Found existing record for ${companyName}`);
      return existingSearch;
    }

    console.log('existingSearch', existingSearch);

    // Not found in database, fetch from PDL API
    console.log(`No existing record found for ${companyName}, fetching from API`);
    
    const apiKey = process.env.PDL_API_KEY;

    if (!apiKey) {
      throw new Error("API key not configured");
    }

    const response = await axios.get(PDL_API_ENDPOINT, {
      params: {
        name: companyName,
      },
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    });

    const companyData = response.data;
    console.log('companyData', companyData);

    let isFromUS = false;
    let isFromCanada = false;

    // Check location data 
    if (companyData.location?.country === "united states") {
      isFromUS = true;
    } else if (companyData.location?.country === "canada") {
      isFromCanada = true;
    } else if (companyData.location) {
      isFromCanada = false
      isFromUS = false;
    }

    const savedSearch = await context.prisma.companySearch.create({
      data: {
        companyName: companyName.trim(),
        displayName: companyData.display_name || companyName.trim(),
        website: companyData.website,
        country: companyData.location?.country,
        industry: companyData.industry,
        isFromUS,
        isFromCanada,
      },
    });

    return savedSearch;
  } catch (error: any) {
    console.error("PDL API Error:", error.response?.data || error.message);

    // Handle PDL API specific errors
    if (error.response?.status === 404) {
      throw new Error("Company not found");
    }

    if (error.response?.status === 401 || error.response?.status === 403) {
      throw new Error("API authentication error");
    }

    throw new Error("Failed to fetch company data");
  }
    },
  },
};

export const schema = createSchema({
  typeDefs,
  resolvers,
});

const { handleRequest } = createYoga({
  schema,
  context: createContext,
  graphqlEndpoint: "/api/company",
  fetchAPI: { Response },
});

export { handleRequest as GET, handleRequest as POST };
