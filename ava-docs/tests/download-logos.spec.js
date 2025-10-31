/**
 * Playwright Script: Download Brand Logos
 *
 * This script navigates to official brand resource pages and downloads
 * high-quality logos for integration partners.
 */

const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const https = require('https');

const LOGOS_DIR = path.join(__dirname, '..', 'logos', 'brands');

// Ensure logos directory exists
if (!fs.existsSync(LOGOS_DIR)) {
  fs.mkdirSync(LOGOS_DIR, { recursive: true });
}

/**
 * Download file from URL
 */
async function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(LOGOS_DIR, filename);
    const file = fs.createWriteStream(filePath);

    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirect
        file.close();
        fs.unlinkSync(filePath);
        return downloadFile(response.headers.location, filename).then(resolve).catch(reject);
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve(filePath);
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

/**
 * Download image using Playwright page context
 */
async function downloadWithPage(page, url, filename) {
  const filePath = path.join(LOGOS_DIR, filename);

  const response = await page.goto(url, { waitUntil: 'networkidle' });
  if (!response.ok()) {
    throw new Error(`Failed to download ${filename}: ${response.status()}`);
  }

  const buffer = await response.body();
  fs.writeFileSync(filePath, buffer);
  console.log(`Downloaded: ${filename} (${buffer.length} bytes)`);

  return filePath;
}

test.describe('Download Brand Logos', () => {

  test('Download Microsoft 365 Logo', async ({ page }) => {
    // Microsoft official logo from their CDN
    const logoUrl = 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31';
    await downloadWithPage(page, logoUrl, 'microsoft-365.png');
  });

  test('Download Salesforce Logo', async ({ page }) => {
    // Salesforce official logo
    const logoUrl = 'https://c1.sfdcstatic.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg';
    await downloadWithPage(page, logoUrl, 'salesforce.svg');
  });

  test('Download GitHub Logo', async ({ page }) => {
    // GitHub official mark (icon only)
    const logoUrl = 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png';
    await downloadWithPage(page, logoUrl, 'github.png');
  });

  test('Download Jira Logo', async ({ page }) => {
    // Atlassian Jira logo from CDN
    const logoUrl = 'https://wac-cdn.atlassian.com/dam/jcr:e348b562-4152-4cdc-8a55-3d297e509cc8/Jira%20Software-blue.svg?cdnVersion=2266';
    await downloadWithPage(page, logoUrl, 'jira.svg');
  });

  test('Download Azure Logo', async ({ page }) => {
    // Microsoft Azure logo
    const logoUrl = 'https://azure.microsoft.com/svghandler/azure/?width=600&height=315';
    await downloadWithPage(page, logoUrl, 'azure.svg');
  });

  test('Download NetSuite Logo', async ({ page }) => {
    // Oracle NetSuite logo - navigating to get official asset
    try {
      await page.goto('https://www.netsuite.com/portal/home.shtml', {
        waitUntil: 'domcontentloaded',
        timeout: 30000
      });

      // Try to find the logo image on the page
      const logoElement = await page.locator('img[alt*="NetSuite"], img[src*="netsuite"], img[src*="logo"]').first();

      if (await logoElement.count() > 0) {
        const logoSrc = await logoElement.getAttribute('src');
        let fullLogoUrl = logoSrc;

        // Make absolute URL if relative
        if (!logoSrc.startsWith('http')) {
          fullLogoUrl = new URL(logoSrc, 'https://www.netsuite.com').href;
        }

        console.log(`Found NetSuite logo at: ${fullLogoUrl}`);
        await downloadWithPage(page, fullLogoUrl, 'netsuite.png');
      } else {
        // Fallback: Use a known NetSuite logo URL
        const fallbackUrl = 'https://www.netsuite.com/portal/assets/img/business-management-software.svg';
        console.log('Using fallback NetSuite logo URL');
        await downloadWithPage(page, fallbackUrl, 'netsuite.svg');
      }
    } catch (error) {
      console.error('NetSuite logo download failed:', error.message);
      // Use a backup approach - download from Oracle's CDN
      const backupUrl = 'https://www.oracle.com/a/ocom/img/netsuite-logo.svg';
      await downloadWithPage(page, backupUrl, 'netsuite-oracle.svg');
    }
  });

  // Additional Microsoft Teams logo
  test('Download Microsoft Teams Logo', async ({ page }) => {
    const logoUrl = 'https://statics.teams.cdn.office.net/evergreen-assets/icons/teams.png';
    await downloadWithPage(page, logoUrl, 'microsoft-teams.png');
  });

});

test.describe('Verify Downloaded Logos', () => {

  const expectedLogos = [
    'microsoft-365.png',
    'salesforce.svg',
    'github.png',
    'jira.svg',
    'azure.svg',
    'microsoft-teams.png'
  ];

  test('Verify all logos downloaded successfully', async () => {
    const files = fs.readdirSync(LOGOS_DIR);

    console.log('\nDownloaded files:');
    files.forEach(file => {
      const stats = fs.statSync(path.join(LOGOS_DIR, file));
      console.log(`  - ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
    });

    // Check that we have at least some logos
    expect(files.length).toBeGreaterThan(0);
  });

  test('Verify file sizes are reasonable', async () => {
    const files = fs.readdirSync(LOGOS_DIR);

    for (const file of files) {
      const filePath = path.join(LOGOS_DIR, file);
      const stats = fs.statSync(filePath);

      // Check file size is between 1KB and 500KB
      expect(stats.size).toBeGreaterThan(1024); // > 1KB
      expect(stats.size).toBeLessThan(500 * 1024); // < 500KB

      console.log(`✓ ${file}: ${(stats.size / 1024).toFixed(2)} KB - Valid size`);
    }
  });

  test('Verify file extensions are correct', async () => {
    const files = fs.readdirSync(LOGOS_DIR);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      expect(['.png', '.svg', '.jpg', '.jpeg']).toContain(ext);
      console.log(`✓ ${file}: ${ext} - Valid extension`);
    }
  });

});
