// import { NextRequest, NextResponse } from 'next/server';
// import axios from 'axios';

// // PDL API endpoint for company enrichment
// const PDL_API_ENDPOINT = 'https://api.peopledatalabs.com/v5/company/enrich';

// export const runtime = 'edge';
// export async function POST(request: NextRequest) {
//   try {
//     // Get the API key from environment variables
//     const apiKey = process.env.PDL_API_URL;
    
//     if (!apiKey) {
//       return NextResponse.json(
//         { error: 'API key not configured' },
//         { status: 500 }
//       );
//     }

//     // Get the company name from the request body
//     const { companyName } = await request.json();
    
//     if (!companyName) {
//       return NextResponse.json(
//         { error: 'Company name is required' },
//         { status: 400 }
//       );
//     }

//     // Make request to People Data Labs API
//     const response = await axios.get(PDL_API_ENDPOINT, {
//       params: {
//         name: companyName,
//       },
//       headers: {
//         'X-Api-Key': apiKey,
//         'Content-Type': 'application/json',
//       },
//     });

//     // Extract relevant data from the response
//     const companyData = response.data;

//     // Determine if the company is from the US, Canada, or elsewhere
//     let origin = 'Other';
//     let isFromUS = false;
//     let isFromCanada = false;
    
//     // Check location data to determine origin
//     if (companyData.location?.country === 'united states') {
//       origin = 'United States';
//       isFromUS = true;
//     } else if (companyData.location?.country === 'canada') {
//       origin = 'Canada';
//       isFromCanada = true;
//     } else if (companyData.location) {
//       origin = companyData.location.country || 'unknown';
//     }

//     // Format the response
//     const formattedResponse = {
//       display_name: companyData.display_name || companyName,
//       website: companyData.website,
//       location: companyData.location,
//       origin,
//       isFromUS,
//       isFromCanada,
//     };

//     return NextResponse.json(formattedResponse);
//   } catch (error: unknown) {
//     const err = error as { 
//       response?: { 
//         status?: number; 
//         data?: unknown; 
//       }; 
//       message?: string;
//     };
    
//     console.error('PDL API Error:', err.response?.data || err.message);
    
//     // Handle PDL API specific errors
//     if (err.response?.status === 404) {
//       return NextResponse.json(
//         { error: 'Company not found' },
//         { status: 404 }
//       );
//     }
    
//     if (err.response?.status === 401 || err.response?.status === 403) {
//       return NextResponse.json(
//         { error: 'API authentication error' },
//         { status: 401 }
//       );
//     }
    
//     return NextResponse.json(
//       { error: 'Failed to fetch company data' },
//       { status: 500 }
//     );
//   }
// }
