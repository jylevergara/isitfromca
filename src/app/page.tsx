"use client";

import React, { useState } from "react";
import axios from "axios";
import Logo from "@/components/Logo";

interface CompanyLocation {
  country: string;
}

interface CompanyResult {
  name: string;
  display_name: string;
  website?: string;
  location?: CompanyLocation;
  industry: string;
  isFromUS: boolean;
  isFromCanada: boolean;
}

const CompanyOriginChecker = () => {
  const [companyName, setCompanyName] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CompanyResult | null>(null);
  const [error, setError] = useState("");
  const company = result?.data?.searchAndAddCompany;

  function convertFirstLetterUppercase(word: string) {
    return word[0].toUpperCase() + word.slice(1)
  }

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!companyName.trim()) {
      setError("Please enter a company name");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      // Call API route that connects to People Data Labs
      const response = await axios.post("/api/company", {
        query: `mutation SearchCompany($companyName: String!) {
    searchAndAddCompany(companyName: $companyName) {
      id
      searchedAt
      companyName
      displayName
      website
      country
      industry
      isFromUS
      isFromCanada
    }
  }`,
        variables: {
          companyName: companyName.trim(),
        },
      });


      setResult(response.data);
    } catch (error: unknown) {
      console.error("Error fetching company data:", error);

      const err = error as {
        response?: {
          data?: {
            error?: string;
          };
        };
        message?: string;
      };

      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      } else {
        setError(
          "An error occurred while processing your request. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // Function to get the appropriate badge color based on origin
  const getBadgeColor = () => {
    if (!company) return "";

    if (company.isFromUS)
      return "bg-blue-100 text-blue-800 border border-blue-200";
    if (company.isFromCanada)
      return "bg-red-100 text-red-800 border border-red-200";
    return "bg-gray-100 text-gray-800 border border-gray-200";
  };

  // Function to get the flag emoji based on origin
  const getFlag = () => {
    if (!company) return "";

    if (company.isFromUS) return "🇺🇸";
    if (company.isFromCanada) return "🇨🇦";
    return "🌍";
  };

  // Clear input field
  const handleClearInput = () => {
    setCompanyName("");
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="container mx-auto px-4 py-6 max-w-lg sm:mt-20">
        <div className="flex justify-center mb-4">
          <Logo className="w-24 h-24 sm:w-32 sm:h-32" />
        </div>
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">
            Is It From Canada?
          </h1>
          <p className="text-gray-600 px-2">
            Check if a company is from Canada or not.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Enter a company name:
            </label>
            <div className="relative">
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-black bg-white"
                placeholder="e.g., Tim Hortons"
                autoComplete="off"
              />
              {companyName && (
                <button
                  type="button"
                  onClick={handleClearInput}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Searching...
              </span>
            ) : (
              "Check Origin"
            )}
          </button>
        </form>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
            <div className="flex items-start">
              <svg
                className="h-5 w-5 text-red-400 mt-0.5 mr-2 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{error}</span>
            </div>
          </div>
        )}

        {company && (
          <div className="p-4 sm:p-6 border border-gray-200 rounded-lg bg-gray-50 text-gray-600 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 pb-2 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-800">
                Company Information
              </h2>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getBadgeColor()}`}
              >
                {getFlag()} {convertFirstLetterUppercase(company.country)}
              </span>
            </div>

            <div className="space-y-3 text-gray-600">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                <span className="font-medium text-gray-700 sm:col-span-1">
                  Name:
                </span>
                <span className="sm:col-span-3">{company.display_name || company.displayName}</span>
              </div>

              {company.website && (
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                  <span className="font-medium text-gray-700 sm:col-span-1">
                    Website:
                  </span>
                  <span className="sm:col-span-3 break-words">
                    <a
                      href={`https://${company.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {company.website}
                    </a>
                  </span>
                </div>
              )}

              <div className="mt-4 pt-4 border-t border-gray-200">
                {company.isFromCanada ? (
                  <div className="flex flex-col sm:flex-row items-center p-3 bg-red-50 border border-red-100 rounded-lg">
                    <span className="text-4xl mb-2 sm:mb-0 sm:mr-3">🇨🇦</span>
                    <span className="text-lg font-bold text-red-600 text-center sm:text-left">
                      This company is from Canada
                    </span>
                  </div>
                ) : company.isFromUS ? (
                  <div className="flex flex-col sm:flex-row items-center p-3 bg-blue-50 border border-blue-100 rounded-lg">
                    <span className="text-4xl mb-2 sm:mb-0 sm:mr-3">🇺🇸</span>
                    <span className="text-lg font-bold text-blue-600 text-center sm:text-left">
                      This company is from the United States
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row items-center p-3 bg-gray-50 border border-gray-200 rounded-lg">
                    <span className="text-4xl mb-2 sm:mb-0 sm:mr-3">🌍</span>
                    <span className="text-lg font-bold text-gray-600 text-center sm:text-left">
                      This company is from {convertFirstLetterUppercase(company.country)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 text-xs text-gray-500 text-center">
          <p>
            © {new Date().getFullYear()} Is It From Canada - All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyOriginChecker;
