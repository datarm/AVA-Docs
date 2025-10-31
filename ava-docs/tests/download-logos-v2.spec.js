/**
 * Playwright Script: Download Brand Logos (Version 2)
 *
 * This script downloads high-quality logos for integration partners
 * using alternative methods and public CDN sources.
 */

const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const LOGOS_DIR = path.join(__dirname, '..', 'logos', 'brands');

// Ensure logos directory exists
if (!fs.existsSync(LOGOS_DIR)) {
  fs.mkdirSync(LOGOS_DIR, { recursive: true });
}

/**
 * Download file using Playwright's request context
 */
async function downloadWithRequest(request, url, filename) {
  try {
    const response = await request.get(url);

    if (!response.ok()) {
      throw new Error(`HTTP ${response.status()}: ${response.statusText()}`);
    }

    const buffer = await response.body();
    const filePath = path.join(LOGOS_DIR, filename);

    fs.writeFileSync(filePath, buffer);
    console.log(`✓ Downloaded: ${filename} (${(buffer.length / 1024).toFixed(2)} KB)`);

    return filePath;
  } catch (error) {
    console.error(`✗ Failed to download ${filename}: ${error.message}`);
    throw error;
  }
}

/**
 * Download by navigating to a page and extracting the logo
 */
async function extractLogoFromPage(page, url, selector, filename) {
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });

    // Find the logo element
    const logoElement = await page.locator(selector).first();
    await logoElement.waitFor({ timeout: 5000 });

    // Get the source URL
    let logoSrc = await logoElement.getAttribute('src');

    // Make absolute URL if relative
    if (!logoSrc.startsWith('http')) {
      logoSrc = new URL(logoSrc, url).href;
    }

    console.log(`Found logo at: ${logoSrc}`);

    // Download the image
    const response = await page.request.get(logoSrc);
    const buffer = await response.body();
    const filePath = path.join(LOGOS_DIR, filename);

    fs.writeFileSync(filePath, buffer);
    console.log(`✓ Downloaded: ${filename} (${(buffer.length / 1024).toFixed(2)} KB)`);

    return filePath;
  } catch (error) {
    console.error(`✗ Failed to extract ${filename}: ${error.message}`);
    throw error;
  }
}

test.describe('Download Brand Logos - Primary Sources', () => {

  test('Download GitHub Logo', async ({ request }) => {
    // GitHub mark (PNG with transparent background)
    const logoUrl = 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png';
    await downloadWithRequest(request, logoUrl, 'github.png');
  });

  test('Download Microsoft Azure Logo', async ({ request }) => {
    // Azure logo SVG
    const logoUrl = 'https://azure.microsoft.com/svghandler/azure/?width=600&height=315';
    await downloadWithRequest(request, logoUrl, 'azure.svg');
  });

  test('Download Jira Logo from SimpleIcons', async ({ request }) => {
    // Using SimpleIcons CDN for Jira logo
    const logoUrl = 'https://cdn.simpleicons.org/jira/0052CC';
    await downloadWithRequest(request, logoUrl, 'jira.svg');
  });

  test('Download Salesforce Logo from SimpleIcons', async ({ request }) => {
    // Using SimpleIcons CDN for Salesforce logo
    const logoUrl = 'https://cdn.simpleicons.org/salesforce/00A1E0';
    await downloadWithRequest(request, logoUrl, 'salesforce.svg');
  });

  test('Download Microsoft 365 Logo from SimpleIcons', async ({ request }) => {
    // Using SimpleIcons CDN for Microsoft 365 logo
    const logoUrl = 'https://cdn.simpleicons.org/microsoft/5E5E5E';
    await downloadWithRequest(request, logoUrl, 'microsoft-365.svg');
  });

  test('Download NetSuite Logo from Wikipedia', async ({ request }) => {
    // NetSuite logo from Wikimedia Commons
    const logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/NetSuite_logo.svg/320px-NetSuite_logo.svg.png';
    await downloadWithRequest(request, logoUrl, 'netsuite.png');
  });

});

test.describe('Download Additional Brand Logos', () => {

  test('Download Slack Logo', async ({ request }) => {
    const logoUrl = 'https://cdn.simpleicons.org/slack/4A154B';
    await downloadWithRequest(request, logoUrl, 'slack.svg');
  });

  test('Download Microsoft Teams Logo', async ({ request }) => {
    const logoUrl = 'https://cdn.simpleicons.org/microsoftteams/6264A7';
    await downloadWithRequest(request, logoUrl, 'microsoft-teams.svg');
  });

  test('Download Dropbox Logo', async ({ request }) => {
    const logoUrl = 'https://cdn.simpleicons.org/dropbox/0061FF';
    await downloadWithRequest(request, logoUrl, 'dropbox.svg');
  });

  test('Download Google Workspace Logo', async ({ request }) => {
    const logoUrl = 'https://cdn.simpleicons.org/google/4285F4';
    await downloadWithRequest(request, logoUrl, 'google-workspace.svg');
  });

  test('Download Oracle Logo', async ({ request }) => {
    const logoUrl = 'https://cdn.simpleicons.org/oracle/F80000';
    await downloadWithRequest(request, logoUrl, 'oracle.svg');
  });

  test('Download Atlassian Logo', async ({ request }) => {
    const logoUrl = 'https://cdn.simpleicons.org/atlassian/0052CC';
    await downloadWithRequest(request, logoUrl, 'atlassian.svg');
  });

});

test.describe('Verify Downloaded Logos', () => {

  test('List all downloaded logos', async () => {
    // Wait a bit for all downloads to complete
    await new Promise(resolve => setTimeout(resolve, 1000));

    const files = fs.readdirSync(LOGOS_DIR);

    console.log('\n========================================');
    console.log('DOWNLOADED LOGOS SUMMARY');
    console.log('========================================');

    if (files.length === 0) {
      console.log('No logos downloaded yet.');
    } else {
      files.forEach(file => {
        const stats = fs.statSync(path.join(LOGOS_DIR, file));
        const sizeKB = (stats.size / 1024).toFixed(2);
        const ext = path.extname(file);
        console.log(`✓ ${file.padEnd(30)} ${sizeKB.padStart(8)} KB  [${ext}]`);
      });

      console.log('========================================');
      console.log(`Total: ${files.length} logos`);
      console.log('========================================\n');
    }

    expect(files.length).toBeGreaterThan(0);
  });

  test('Verify file sizes are reasonable', async () => {
    const files = fs.readdirSync(LOGOS_DIR);

    for (const file of files) {
      const filePath = path.join(LOGOS_DIR, file);
      const stats = fs.statSync(filePath);

      // Check file size is between 500 bytes and 500KB
      expect(stats.size).toBeGreaterThan(500); // > 500 bytes
      expect(stats.size).toBeLessThan(500 * 1024); // < 500KB
    }

    console.log(`✓ All ${files.length} logos have valid file sizes`);
  });

  test('Verify file extensions are image formats', async () => {
    const files = fs.readdirSync(LOGOS_DIR);
    const validExtensions = ['.png', '.svg', '.jpg', '.jpeg', '.webp'];

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      expect(validExtensions).toContain(ext);
    }

    console.log(`✓ All ${files.length} logos have valid image extensions`);
  });

  test('Verify required brand logos exist', async () => {
    const files = fs.readdirSync(LOGOS_DIR);
    const requiredBrands = [
      'github',
      'azure',
      'jira',
      'salesforce',
      'microsoft-365',
      'netsuite'
    ];

    const downloadedBrands = files.map(f => path.parse(f).name);

    console.log('\n========================================');
    console.log('REQUIRED BRANDS CHECK');
    console.log('========================================');

    requiredBrands.forEach(brand => {
      const exists = downloadedBrands.includes(brand);
      console.log(`${exists ? '✓' : '✗'} ${brand.padEnd(20)} ${exists ? 'FOUND' : 'MISSING'}`);
      expect(exists).toBeTruthy();
    });

    console.log('========================================\n');
  });

  test('Generate README for logos directory', async () => {
    const files = fs.readdirSync(LOGOS_DIR);

    let readme = `# Brand Logos\n\n`;
    readme += `This directory contains high-quality brand logos for AVA integrations.\n\n`;
    readme += `**Total Logos:** ${files.length}\n\n`;
    readme += `## Available Logos\n\n`;

    files.forEach(file => {
      const stats = fs.statSync(path.join(LOGOS_DIR, file));
      const sizeKB = (stats.size / 1024).toFixed(2);
      const ext = path.extname(file);
      const name = path.parse(file).name;

      readme += `- **${name}** - \`${file}\` (${sizeKB} KB, ${ext})\n`;
    });

    readme += `\n## Usage\n\n`;
    readme += `These logos can be used in documentation, marketing materials, and the AVA application.\n\n`;
    readme += `**Downloaded:** ${new Date().toISOString()}\n`;
    readme += `**Source:** Official brand resources and SimpleIcons CDN\n`;

    const readmePath = path.join(LOGOS_DIR, 'README.md');
    fs.writeFileSync(readmePath, readme);

    console.log(`✓ Generated README.md in logos/brands/`);
  });

});
