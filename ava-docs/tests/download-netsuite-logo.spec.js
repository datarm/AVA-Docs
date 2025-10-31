/**
 * Download NetSuite Logo - Alternative Approach
 *
 * Uses browser context to access logos from pages that may block direct API requests
 */

const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const LOGOS_DIR = path.join(__dirname, '..', 'logos', 'brands');
const MIN_FILE_SIZE = 5 * 1024; // 5KB minimum

test('Try to download NetSuite logo via browser', async ({ page }) => {
  console.log('\nAttempting to download NetSuite logo using browser context...\n');

  const sources = [
    {
      url: 'https://www.svgrepo.com/svg/342094/oracle-netsuite',
      selector: 'svg',
      name: 'SVG Repo'
    },
    {
      url: 'https://worldvectorlogo.com/logo/netsuite',
      selector: 'svg',
      name: 'World Vector Logo'
    },
  ];

  let success = false;

  for (const source of sources) {
    try {
      console.log(`Trying ${source.name}: ${source.url}`);

      await page.goto(source.url, { waitUntil: 'networkidle', timeout: 30000 });

      // Wait for SVG element
      await page.waitForSelector(source.selector, { timeout: 10000 });

      // Get SVG content
      const svgContent = await page.$eval(source.selector, el => {
        // Clone the SVG to avoid modifying the original
        const clonedSvg = el.cloneNode(true);

        // Ensure it has proper dimensions
        if (!clonedSvg.hasAttribute('width') && !clonedSvg.hasAttribute('viewBox')) {
          clonedSvg.setAttribute('width', '200');
          clonedSvg.setAttribute('height', '60');
        }

        // Return the outer HTML
        return clonedSvg.outerHTML;
      });

      // Validate size
      if (svgContent.length < MIN_FILE_SIZE) {
        console.log(`  ✗ SVG content too small: ${svgContent.length} bytes`);
        continue;
      }

      // Save the file
      const filePath = path.join(LOGOS_DIR, 'netsuite.svg');
      fs.writeFileSync(filePath, svgContent);

      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);

      console.log(`  ✓ Success! Downloaded from ${source.name}`);
      console.log(`  - File: netsuite.svg`);
      console.log(`  - Size: ${sizeKB} KB (${stats.size} bytes)`);
      console.log(`  - Source: ${source.url}`);

      success = true;
      break;

    } catch (error) {
      console.log(`  ✗ Failed: ${error.message}`);
    }
  }

  if (!success) {
    console.log('\n⚠ All browser-based attempts failed.');
    console.log('The placeholder SVG will remain in place.\n');
  }

  // Verify file exists
  const filePath = path.join(LOGOS_DIR, 'netsuite.svg');
  expect(fs.existsSync(filePath)).toBe(true);
});

test('Download NetSuite logo from alternative CDNs', async ({ request }) => {
  console.log('\nTrying alternative CDN sources for NetSuite logo...\n');

  // Try less common CDN sources
  const cdnSources = [
    'https://companieslogo.com/img/orig/N-3c8f5c3a.png',
    'https://logo.clearbit.com/netsuite.com',
    'https://img.logo.dev/netsuite.com',
    'https://avatars.githubusercontent.com/u/1230870',
  ];

  for (const url of cdnSources) {
    try {
      console.log(`Trying: ${url}`);

      const response = await request.get(url, { timeout: 30000 });

      if (!response.ok()) {
        console.log(`  ✗ HTTP ${response.status()}`);
        continue;
      }

      const buffer = await response.body();
      const fileSize = buffer.length;

      if (fileSize < 1024) {
        console.log(`  ✗ File too small: ${fileSize} bytes`);
        continue;
      }

      // Check if it's a valid image
      const isPNG = buffer[0] === 0x89 && buffer[1] === 0x50;
      const isSVG = buffer.toString('utf-8', 0, 100).includes('<svg');

      if (!isPNG && !isSVG) {
        console.log(`  ✗ Not a valid image file`);
        continue;
      }

      // Determine extension
      const extension = isPNG ? '.png' : '.svg';
      const fileName = 'netsuite' + extension;
      const filePath = path.join(LOGOS_DIR, fileName);

      // Only overwrite if it's better than current file
      if (fs.existsSync(path.join(LOGOS_DIR, 'netsuite.svg'))) {
        const currentStats = fs.statSync(path.join(LOGOS_DIR, 'netsuite.svg'));
        if (currentStats.size > MIN_FILE_SIZE) {
          console.log(`  ⚠ Skipping: Already have a good SVG logo`);
          continue;
        }
      }

      fs.writeFileSync(filePath, buffer);
      const sizeKB = (fileSize / 1024).toFixed(2);

      console.log(`  ✓ Success! Downloaded ${extension.toUpperCase()} version`);
      console.log(`  - File: ${fileName}`);
      console.log(`  - Size: ${sizeKB} KB`);
      console.log(`  - Source: ${url}`);

      return;

    } catch (error) {
      console.log(`  ✗ Failed: ${error.message}`);
    }
  }

  console.log('\n⚠ All CDN sources failed or returned small files.');
  console.log('The placeholder SVG will remain in place.\n');
});
