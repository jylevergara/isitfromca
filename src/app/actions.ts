"use server";

import { neon } from "@neondatabase/serverless";
import prisma from "@/lib/prisma";

// Get a direct connection to the Neon database
const sql = neon(process.env.DATABASE_URL!);

/**
 * Get recent company searches directly from Neon DB
 * @param limit Number of searches to return (default: 10)
 */
export async function getRecentSearches(limit = 10) {
  const searches = await sql`
    SELECT * FROM "CompanySearch"
    ORDER BY "searchedAt" DESC
    LIMIT ${limit}
  `;
  return searches;
}

/**
 * Get statistics about company searches directly from Neon DB
 */
export async function getCompanySearchStats() {
  const stats = await sql`
    SELECT
      COUNT(*) as "totalSearches",
      SUM(CASE WHEN "isFromCanada" = true THEN 1 ELSE 0 END) as "canadianCompanies",
      SUM(CASE WHEN "isFromUS" = true THEN 1 ELSE 0 END) as "usCompanies",
      SUM(CASE WHEN "isFromCanada" = false AND "isFromUS" = false THEN 1 ELSE 0 END) as "otherCompanies"
    FROM "CompanySearch"
  `;
  
  const { totalSearches, canadianCompanies, usCompanies, otherCompanies } = stats[0];
  
  return {
    totalSearches: Number(totalSearches),
    canadianCompanies: Number(canadianCompanies),
    usCompanies: Number(usCompanies),
    otherCompanies: Number(otherCompanies),
    canadianPercentage: totalSearches > 0 ? (canadianCompanies / totalSearches) * 100 : 0,
    usPercentage: totalSearches > 0 ? (usCompanies / totalSearches) * 100 : 0,
    otherPercentage: totalSearches > 0 ? (otherCompanies / totalSearches) * 100 : 0
  };
}

/**
 * Get company searches by origin (Canada, US, or Other)
 * @param origin The origin to filter by ("Canada", "United States", or "Other")
 * @param limit Number of searches to return (default: 10)
 */
export async function getCompaniesByOrigin(origin: string, limit = 10) {
  let query;
  
  if (origin === "Canada") {
    query = sql`
      SELECT * FROM "CompanySearch"
      WHERE "isFromCanada" = true
      ORDER BY "searchedAt" DESC
      LIMIT ${limit}
    `;
  } else if (origin === "United States") {
    query = sql`
      SELECT * FROM "CompanySearch"
      WHERE "isFromUS" = true
      ORDER BY "searchedAt" DESC
      LIMIT ${limit}
    `;
  } else {
    query = sql`
      SELECT * FROM "CompanySearch"
      WHERE "isFromCanada" = false AND "isFromUS" = false
      ORDER BY "searchedAt" DESC
      LIMIT ${limit}
    `;
  }
  
  return await query;
}

/**
 * Search for companies by name directly from Neon DB
 * @param searchTerm The search term to look for in company names
 * @param limit Number of searches to return (default: 10)
 */
export async function searchCompaniesByName(searchTerm: string, limit = 10) {
  const companies = await sql`
    SELECT * FROM "CompanySearch"
    WHERE "companyName" ILIKE ${`%${searchTerm}%`}
    ORDER BY "searchedAt" DESC
    LIMIT ${limit}
  `;
  
  return companies;
}

/**
 * Alternative implementation using Prisma instead of direct SQL
 * Get recent company searches
 */
export async function getRecentSearchesPrisma(limit = 10) {
  return await prisma.companySearch.findMany({
    orderBy: {
      searchedAt: 'desc'
    },
    take: limit
  });
}
