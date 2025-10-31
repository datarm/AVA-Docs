/**
 * Download Missing Logos - Microsoft 365 and NetSuite
 */

const { test } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const LOGOS_DIR = path.join(__dirname, '..', 'logos', 'brands');

test('Download Microsoft 365 Logo (Microsoft Office)', async ({ request }) => {
  // Using Microsoft Office logo as Microsoft 365
  const logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg';

  try {
    const response = await request.get(logoUrl);
    const buffer = await response.body();
    const filePath = path.join(LOGOS_DIR, 'microsoft-365.svg');

    fs.writeFileSync(filePath, buffer);
    console.log(`✓ Downloaded: microsoft-365.svg (${(buffer.length / 1024).toFixed(2)} KB)`);
  } catch (error) {
    console.error(`Failed to download Microsoft 365 logo: ${error.message}`);
  }
});

test('Download NetSuite Logo', async ({ request }) => {
  // Using an SVG version of NetSuite logo
  const logoUrl = 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/netsuite.svg';

  try {
    const response = await request.get(logoUrl);
    const buffer = await response.body();
    const filePath = path.join(LOGOS_DIR, 'netsuite.svg');

    fs.writeFileSync(filePath, buffer);
    console.log(`✓ Downloaded: netsuite.svg (${(buffer.length / 1024).toFixed(2)} KB)`);
  } catch (error) {
    console.error(`Failed to download NetSuite logo: ${error.message}`);

    // Fallback: Create a simple SVG placeholder
    const placeholderSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="200" height="60" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="60" fill="#1871BB"/>
  <text x="100" y="35" font-family="Arial, sans-serif" font-size="20" fill="white" text-anchor="middle">
    NetSuite
  </text>
</svg>`;

    const filePath = path.join(LOGOS_DIR, 'netsuite.svg');
    fs.writeFileSync(filePath, placeholderSvg);
    console.log(`✓ Created placeholder: netsuite.svg`);
  }
});
