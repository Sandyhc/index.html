// api/osint.js
import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch'; // Polyfill might be needed depending on environment

export default async function (request, response) {
  const { domain } = request.query;

  if (!domain) {
    return response.status(400).send('Missing domain parameter');
  }

  try {
    // Example OSINT data fetch (using a hypothetical public API)
    const apiResponse = await fetch(`api.example-osint.com{encodeURIComponent(domain)}`);
    
    if (!apiResponse.ok) {
      throw new Error('Failed to fetch data from external OSINT API');
    }

    const data = await apiResponse.json();
    response.status(200).json(data);
    
  } catch (error) {
    console.error(error);
    response.status(500).send('Error during OSINT data retrieval');
  }
}
