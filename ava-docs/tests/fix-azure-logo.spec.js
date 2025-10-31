/**
 * Fix Azure Logo - Download correct SVG version
 */

const { test } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const LOGOS_DIR = path.join(__dirname, '..', 'logos', 'brands');

test('Download Azure Logo - Correct SVG', async ({ request }) => {
  // Using SimpleIcons for Azure
  const logoUrl = 'https://cdn.simpleicons.org/microsoftazure/0078D4';

  try {
    const response = await request.get(logoUrl);
    const buffer = await response.body();
    const filePath = path.join(LOGOS_DIR, 'azure.svg');

    fs.writeFileSync(filePath, buffer);
    console.log(`✓ Downloaded: azure.svg (${(buffer.length / 1024).toFixed(2)} KB)`);
  } catch (error) {
    console.error(`Failed to download Azure logo: ${error.message}`);
  }
});
