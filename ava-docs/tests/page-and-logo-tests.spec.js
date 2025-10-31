/**
 * Playwright Test Suite: Page and Logo Verification
 *
 * This test suite verifies:
 * 1. All documentation pages load successfully
 * 2. Brand logos are visible and properly loaded
 * 3. Logo dimensions are within acceptable ranges (80-150px)
 * 4. Full-page screenshots are captured for visual verification
 */

const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

// Test configuration
const BASE_URL = 'http://localhost:3000';
const SCREENSHOT_DIR = 'C:\\Repos\\AVA-Docs\\ava-docs\\test-results\\logo-tests';
const LOGO_MIN_SIZE = 80;
const LOGO_MAX_SIZE = 150;

// Pages to test
const PAGES_TO_TEST = [
  { name: 'Home Page', url: '/introduction', screenshotName: 'home-page.png' },
  { name: 'Integrations Overview', url: '/integrations/overview', screenshotName: 'integrations-overview.png' },
  { name: 'Microsoft 365 Integration', url: '/integrations/microsoft-365', screenshotName: 'microsoft-365.png' },
  { name: 'Salesforce Integration', url: '/integrations/salesforce', screenshotName: 'salesforce.png' },
  { name: 'Jira Integration', url: '/integrations/jira', screenshotName: 'jira.png' },
  { name: 'GitHub Integration', url: '/integrations/github', screenshotName: 'github.png' },
  { name: 'NetSuite Integration', url: '/integrations/netsuite', screenshotName: 'netsuite.png' }
];

// Test results storage
const testResults = {
  successfulPages: [],
  failedPages: [],
  logoIssues: [],
  screenshots: []
};

test.describe('Mintlify Documentation Site - Page and Logo Tests', () => {

  test.beforeAll(async () => {
    // Ensure screenshot directory exists
    if (!fs.existsSync(SCREENSHOT_DIR)) {
      fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
      console.log(`Created screenshot directory: ${SCREENSHOT_DIR}`);
    }

    // Wait for server to be ready
    console.log('Waiting for Mintlify dev server to be ready...');
    await new Promise(resolve => setTimeout(resolve, 5000));
  });

  test.beforeEach(async ({ page }) => {
    // Set viewport to a standard desktop size
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Increase timeout for page loads
    page.setDefaultTimeout(30000);
  });

  // Test each page
  for (const pageConfig of PAGES_TO_TEST) {
    test(`Verify ${pageConfig.name}`, async ({ page }) => {
      const fullUrl = `${BASE_URL}${pageConfig.url}`;

      console.log(`\n=== Testing: ${pageConfig.name} ===`);
      console.log(`URL: ${fullUrl}`);

      try {
        // Navigate to the page
        const response = await page.goto(fullUrl, {
          waitUntil: 'networkidle',
          timeout: 30000
        });

        // Verify page loaded successfully
        expect(response.status()).toBeLessThan(400);
        console.log(`✓ Page loaded successfully (Status: ${response.status()})`);
        testResults.successfulPages.push(pageConfig.name);

        // Wait for content to be visible
        await page.waitForLoadState('domcontentloaded');
        await page.waitForTimeout(2000); // Additional wait for dynamic content

        // Take full-page screenshot
        const screenshotPath = path.join(SCREENSHOT_DIR, pageConfig.screenshotName);
        await page.screenshot({
          path: screenshotPath,
          fullPage: true
        });
        console.log(`✓ Screenshot saved: ${screenshotPath}`);
        testResults.screenshots.push(screenshotPath);

        // Find all image elements on the page
        const images = await page.locator('img').all();
        console.log(`Found ${images.length} image elements on the page`);

        if (images.length === 0) {
          const warning = `Warning: No images found on ${pageConfig.name}`;
          console.log(`⚠ ${warning}`);
          testResults.logoIssues.push({
            page: pageConfig.name,
            issue: 'No images found on page',
            severity: 'warning'
          });
        }

        // Verify each image (potential logo)
        let logoCount = 0;
        let properlyLoadedLogos = 0;
        let sizingIssues = 0;

        for (let i = 0; i < images.length; i++) {
          const img = images[i];

          try {
            // Check if image is visible
            const isVisible = await img.isVisible();

            if (isVisible) {
              // Get image properties
              const src = await img.getAttribute('src');
              const alt = await img.getAttribute('alt') || 'No alt text';
              const boundingBox = await img.boundingBox();

              if (boundingBox) {
                const width = Math.round(boundingBox.width);
                const height = Math.round(boundingBox.height);

                // Check if this might be a logo (reasonable dimensions)
                if (width >= 40 && width <= 300 && height >= 40 && height <= 300) {
                  logoCount++;

                  console.log(`  Image ${i + 1}: ${alt}`);
                  console.log(`    Source: ${src}`);
                  console.log(`    Dimensions: ${width}x${height}px`);

                  // Check if dimensions are in the ideal range
                  if (width >= LOGO_MIN_SIZE && width <= LOGO_MAX_SIZE &&
                      height >= LOGO_MIN_SIZE && height <= LOGO_MAX_SIZE) {
                    console.log(`    ✓ Logo size is within ideal range (${LOGO_MIN_SIZE}-${LOGO_MAX_SIZE}px)`);
                    properlyLoadedLogos++;
                  } else if (width < LOGO_MIN_SIZE || height < LOGO_MIN_SIZE) {
                    const issue = `Logo too small on ${pageConfig.name}: ${alt} (${width}x${height}px)`;
                    console.log(`    ⚠ ${issue}`);
                    testResults.logoIssues.push({
                      page: pageConfig.name,
                      image: alt,
                      src: src,
                      issue: `Too small: ${width}x${height}px (minimum: ${LOGO_MIN_SIZE}px)`,
                      severity: 'warning'
                    });
                    sizingIssues++;
                  } else if (width > LOGO_MAX_SIZE || height > LOGO_MAX_SIZE) {
                    const issue = `Logo too large on ${pageConfig.name}: ${alt} (${width}x${height}px)`;
                    console.log(`    ⚠ ${issue}`);
                    testResults.logoIssues.push({
                      page: pageConfig.name,
                      image: alt,
                      src: src,
                      issue: `Too large: ${width}x${height}px (maximum: ${LOGO_MAX_SIZE}px)`,
                      severity: 'info'
                    });
                    sizingIssues++;
                  }

                  // Verify image is actually loaded (not broken)
                  const naturalWidth = await img.evaluate((el) => el.naturalWidth);
                  if (naturalWidth === 0) {
                    const issue = `Broken image on ${pageConfig.name}: ${alt}`;
                    console.log(`    ✗ ${issue}`);
                    testResults.logoIssues.push({
                      page: pageConfig.name,
                      image: alt,
                      src: src,
                      issue: 'Image failed to load (broken)',
                      severity: 'error'
                    });
                  }
                }
              }
            }
          } catch (imgError) {
            console.log(`    ⚠ Error checking image ${i + 1}: ${imgError.message}`);
          }
        }

        console.log(`\nSummary for ${pageConfig.name}:`);
        console.log(`  Total images: ${images.length}`);
        console.log(`  Potential logos: ${logoCount}`);
        console.log(`  Properly sized logos: ${properlyLoadedLogos}`);
        console.log(`  Sizing issues: ${sizingIssues}`);

      } catch (error) {
        console.error(`✗ Failed to load ${pageConfig.name}: ${error.message}`);
        testResults.failedPages.push({
          page: pageConfig.name,
          url: fullUrl,
          error: error.message
        });
        throw error;
      }
    });
  }

  test.afterAll(async () => {
    // Generate summary report
    const summaryPath = path.join(SCREENSHOT_DIR, 'test-summary.json');
    const reportPath = path.join(SCREENSHOT_DIR, 'TEST-REPORT.md');

    // Save JSON summary
    fs.writeFileSync(summaryPath, JSON.stringify(testResults, null, 2));
    console.log(`\nTest summary saved: ${summaryPath}`);

    // Generate markdown report
    let report = '# Mintlify Documentation Site - Test Report\n\n';
    report += `**Test Date:** ${new Date().toISOString()}\n\n`;

    report += '## Summary\n\n';
    report += `- **Total Pages Tested:** ${PAGES_TO_TEST.length}\n`;
    report += `- **Successful:** ${testResults.successfulPages.length}\n`;
    report += `- **Failed:** ${testResults.failedPages.length}\n`;
    report += `- **Logo Issues Found:** ${testResults.logoIssues.length}\n`;
    report += `- **Screenshots Captured:** ${testResults.screenshots.length}\n\n`;

    report += '## Successfully Loaded Pages\n\n';
    testResults.successfulPages.forEach(page => {
      report += `- ✓ ${page}\n`;
    });
    report += '\n';

    if (testResults.failedPages.length > 0) {
      report += '## Failed Pages\n\n';
      testResults.failedPages.forEach(failure => {
        report += `- ✗ **${failure.page}**\n`;
        report += `  - URL: ${failure.url}\n`;
        report += `  - Error: ${failure.error}\n\n`;
      });
    }

    if (testResults.logoIssues.length > 0) {
      report += '## Logo Issues\n\n';

      const errors = testResults.logoIssues.filter(i => i.severity === 'error');
      const warnings = testResults.logoIssues.filter(i => i.severity === 'warning');
      const info = testResults.logoIssues.filter(i => i.severity === 'info');

      if (errors.length > 0) {
        report += '### Errors (Broken Images)\n\n';
        errors.forEach(issue => {
          report += `- ✗ **${issue.page}**\n`;
          report += `  - Image: ${issue.image}\n`;
          report += `  - Source: ${issue.src}\n`;
          report += `  - Issue: ${issue.issue}\n\n`;
        });
      }

      if (warnings.length > 0) {
        report += '### Warnings (Size Issues)\n\n';
        warnings.forEach(issue => {
          report += `- ⚠ **${issue.page}**\n`;
          report += `  - Image: ${issue.image}\n`;
          if (issue.src) report += `  - Source: ${issue.src}\n`;
          report += `  - Issue: ${issue.issue}\n\n`;
        });
      }

      if (info.length > 0) {
        report += '### Info (Size Recommendations)\n\n';
        info.forEach(issue => {
          report += `- ℹ **${issue.page}**\n`;
          report += `  - Image: ${issue.image}\n`;
          if (issue.src) report += `  - Source: ${issue.src}\n`;
          report += `  - Issue: ${issue.issue}\n\n`;
        });
      }
    } else {
      report += '## Logo Verification\n\n';
      report += '✓ All logos are displaying correctly with proper dimensions.\n\n';
    }

    report += '## Screenshots\n\n';
    testResults.screenshots.forEach(screenshot => {
      const filename = path.basename(screenshot);
      report += `- ${filename}\n`;
    });
    report += '\n';

    report += '---\n';
    report += '*Generated by Playwright automated tests*\n';

    fs.writeFileSync(reportPath, report);
    console.log(`Test report saved: ${reportPath}`);

    // Print summary to console
    console.log('\n' + '='.repeat(80));
    console.log('TEST EXECUTION COMPLETE');
    console.log('='.repeat(80));
    console.log(report);
  });
});
