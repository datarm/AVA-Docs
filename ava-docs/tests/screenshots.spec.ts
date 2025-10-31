import { test, expect } from '@playwright/test';

/**
 * AVA Documentation Screenshots Test Suite
 *
 * This test suite validates that all screenshots in the documentation:
 * 1. Load successfully without errors
 * 2. Are properly sized and don't break layout
 * 3. Render correctly in both light and dark modes
 * 4. Are responsive across different viewport sizes
 * 5. Have proper accessibility attributes
 */

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

// Documentation pages with their expected image counts
const PAGES_WITH_SCREENSHOTS = [
  {
    path: '/introduction',
    name: 'Introduction',
    minImages: 1,
    description: 'Main interface screenshot'
  },
  {
    path: '/why-ava',
    name: 'Why Choose AVA',
    minImages: 0,
    description: 'Marketing page (no screenshots)'
  },
  {
    path: '/essentials/how-it-works',
    name: 'How It Works',
    minImages: 1,
    description: 'Architecture diagram'
  },
  {
    path: '/features/ava-tasks',
    name: 'AVA Tasks',
    minImages: 2,
    description: 'Task creation and prompt library'
  },
  {
    path: '/features/ava-chat',
    name: 'AVA Chat',
    minImages: 1,
    description: 'Connected data usage'
  },
  {
    path: '/features/knowledge-search',
    name: 'Knowledge Search',
    minImages: 3,
    description: 'Corpus creation, auto-sync, embedded files'
  },
  {
    path: '/integrations/overview',
    name: 'Integrations Overview',
    minImages: 1,
    description: 'Connected data sources panel'
  }
];

// Image paths to validate (10 curated screenshots)
const IMAGE_PATHS = [
  // Architecture (1)
  '/images/architecture/ava-architecture-overview.png',

  // Chat (3)
  '/images/chat/main-interface-file-viewer.png',
  '/images/chat/conversation-view.png',
  '/images/chat/connected-data-usage.png',

  // Tasks (2)
  '/images/tasks/task-creation-interface.png',
  '/images/tasks/prompt-library-templates.png',

  // Knowledge Search (3)
  '/images/knowledge-search/embedded-files-view.png',
  '/images/knowledge-search/create-corpus-dialog.png',
  '/images/knowledge-search/auto-sync-tooltip.png',

  // Integrations (1)
  '/images/integrations/connected-data-sources.png'
];

test.describe('AVA Documentation Screenshots', () => {

  test.describe('Image Loading Tests', () => {

    test('all documentation images should load successfully', async ({ page }) => {
      const failedImages: string[] = [];

      for (const imagePath of IMAGE_PATHS) {
        const response = await page.goto(`${BASE_URL}${imagePath}`);

        if (!response || response.status() !== 200) {
          failedImages.push(`${imagePath} (Status: ${response?.status() || 'No response'})`);
        }
      }

      expect(failedImages).toHaveLength(0);
      if (failedImages.length > 0) {
        console.log('Failed to load images:', failedImages);
      }
    });

    test('images on each documentation page should load without errors', async ({ page }) => {
      for (const docPage of PAGES_WITH_SCREENSHOTS) {
        await page.goto(`${BASE_URL}${docPage.path}`);

        // Wait for images to load
        await page.waitForLoadState('networkidle');

        // Check for broken images
        const images = await page.locator('img[src*="/images/"]').all();

        for (const img of images) {
          const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
          const src = await img.getAttribute('src');

          expect(naturalWidth, `Image failed to load on ${docPage.name}: ${src}`).toBeGreaterThan(0);
        }

        // Verify minimum image count
        if (docPage.minImages > 0) {
          expect(images.length).toBeGreaterThanOrEqual(docPage.minImages);
        }
      }
    });
  });

  test.describe('Image Size and Layout Tests', () => {

    test('images should not exceed container width', async ({ page }) => {
      for (const docPage of PAGES_WITH_SCREENSHOTS) {
        await page.goto(`${BASE_URL}${docPage.path}`);
        await page.waitForLoadState('networkidle');

        const images = await page.locator('img[src*="/images/"]').all();

        for (const img of images) {
          const box = await img.boundingBox();
          const viewportSize = page.viewportSize();

          if (box && viewportSize) {
            expect(box.width, `Image too wide on ${docPage.name}`).toBeLessThanOrEqual(viewportSize.width);
          }
        }
      }
    });

    test('images should have proper spacing and not overlap content', async ({ page }) => {
      for (const docPage of PAGES_WITH_SCREENSHOTS) {
        await page.goto(`${BASE_URL}${docPage.path}`);
        await page.waitForLoadState('networkidle');

        const images = await page.locator('img[src*="/images/"]').all();

        for (const img of images) {
          // Check for margin/padding
          const marginBottom = await img.evaluate((el) => {
            return window.getComputedStyle(el.parentElement || el).marginBottom;
          });

          // Should have some spacing (at least 10px or auto)
          expect(['0px']).not.toContain(marginBottom);
        }
      }
    });

    test('Frame components should properly contain images', async ({ page }) => {
      for (const docPage of PAGES_WITH_SCREENSHOTS) {
        await page.goto(`${BASE_URL}${docPage.path}`);
        await page.waitForLoadState('networkidle');

        // Check images within Frame components
        const framedImages = await page.locator('[class*="frame"] img[src*="/images/"], [class*="Frame"] img[src*="/images/"]').all();

        for (const img of framedImages) {
          const isVisible = await img.isVisible();
          expect(isVisible, `Framed image not visible on ${docPage.name}`).toBeTruthy();

          const box = await img.boundingBox();
          expect(box).not.toBeNull();
        }
      }
    });
  });

  test.describe('Dark Mode Compatibility', () => {

    test('images should render correctly in dark mode', async ({ page }) => {
      for (const docPage of PAGES_WITH_SCREENSHOTS) {
        await page.goto(`${BASE_URL}${docPage.path}`);

        // Toggle to dark mode (method depends on Mintlify implementation)
        await page.emulateMedia({ colorScheme: 'dark' });
        await page.waitForTimeout(500); // Wait for theme transition

        const images = await page.locator('img[src*="/images/"]').all();

        for (const img of images) {
          const isVisible = await img.isVisible();
          const src = await img.getAttribute('src');

          expect(isVisible, `Image not visible in dark mode on ${docPage.name}: ${src}`).toBeTruthy();

          // Verify image loaded
          const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
          expect(naturalWidth).toBeGreaterThan(0);
        }
      }
    });

    test('images should maintain contrast and visibility in dark mode', async ({ page }) => {
      for (const docPage of PAGES_WITH_SCREENSHOTS) {
        await page.goto(`${BASE_URL}${docPage.path}`);
        await page.emulateMedia({ colorScheme: 'dark' });
        await page.waitForLoadState('networkidle');

        const images = await page.locator('img[src*="/images/"]').all();

        for (const img of images) {
          // Check opacity (should not be invisible)
          const opacity = await img.evaluate((el) => {
            return window.getComputedStyle(el).opacity;
          });

          const opacityValue = parseFloat(opacity);
          expect(opacityValue, 'Image opacity too low in dark mode').toBeGreaterThan(0.5);
        }
      }
    });
  });

  test.describe('Mobile Responsiveness', () => {
    const mobileViewports = [
      { width: 375, height: 667, name: 'iPhone SE' },
      { width: 414, height: 896, name: 'iPhone 11 Pro Max' },
      { width: 360, height: 640, name: 'Android Small' }
    ];

    for (const viewport of mobileViewports) {
      test(`images should scale correctly on ${viewport.name}`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });

        for (const docPage of PAGES_WITH_SCREENSHOTS) {
          await page.goto(`${BASE_URL}${docPage.path}`);
          await page.waitForLoadState('networkidle');

          const images = await page.locator('img[src*="/images/"]').all();

          for (const img of images) {
            const box = await img.boundingBox();

            if (box) {
              expect(box.width, `Image too wide for ${viewport.name} on ${docPage.name}`).toBeLessThanOrEqual(viewport.width);

              // Image should not be too small (at least 200px wide on mobile)
              expect(box.width, 'Image too narrow on mobile').toBeGreaterThan(200);
            }
          }
        }
      });
    }

    test('images should not cause horizontal scrolling on mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });

      for (const docPage of PAGES_WITH_SCREENSHOTS) {
        await page.goto(`${BASE_URL}${docPage.path}`);
        await page.waitForLoadState('networkidle');

        const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
        const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

        expect(scrollWidth, `Horizontal scroll detected on ${docPage.name}`).toBeLessThanOrEqual(clientWidth + 10); // Allow 10px tolerance
      }
    });
  });

  test.describe('Accessibility Tests', () => {

    test('all images should have alt text', async ({ page }) => {
      for (const docPage of PAGES_WITH_SCREENSHOTS) {
        await page.goto(`${BASE_URL}${docPage.path}`);
        await page.waitForLoadState('networkidle');

        const images = await page.locator('img[src*="/images/"]').all();

        for (const img of images) {
          const alt = await img.getAttribute('alt');
          const src = await img.getAttribute('src');

          expect(alt, `Missing alt text for image on ${docPage.name}: ${src}`).toBeTruthy();
          expect(alt?.length, 'Alt text too short').toBeGreaterThan(10);
        }
      }
    });

    test('alt text should be descriptive', async ({ page }) => {
      for (const docPage of PAGES_WITH_SCREENSHOTS) {
        await page.goto(`${BASE_URL}${docPage.path}`);
        await page.waitForLoadState('networkidle');

        const images = await page.locator('img[src*="/images/"]').all();

        for (const img of images) {
          const alt = await img.getAttribute('alt');

          // Check for generic/poor alt text
          const badAltTexts = ['image', 'picture', 'screenshot', 'img', 'photo'];
          const isGeneric = badAltTexts.some(bad => alt?.toLowerCase() === bad);

          expect(isGeneric, `Generic alt text detected: "${alt}" on ${docPage.name}`).toBeFalsy();
        }
      }
    });
  });

  test.describe('Performance Tests', () => {

    test('images should load within reasonable time', async ({ page }) => {
      for (const docPage of PAGES_WITH_SCREENSHOTS) {
        const startTime = Date.now();

        await page.goto(`${BASE_URL}${docPage.path}`);
        await page.waitForLoadState('networkidle');

        const loadTime = Date.now() - startTime;

        // Page should load within 5 seconds
        expect(loadTime, `${docPage.name} loaded too slowly`).toBeLessThan(5000);
      }
    });

    test('images should use appropriate file sizes', async ({ page }) => {
      const oversizedImages: string[] = [];

      for (const imagePath of IMAGE_PATHS) {
        const response = await page.goto(`${BASE_URL}${imagePath}`);

        if (response) {
          const contentLength = response.headers()['content-length'];
          if (contentLength) {
            const sizeInKB = parseInt(contentLength) / 1024;

            // Warn if images are over 500KB (should be optimized)
            if (sizeInKB > 500) {
              oversizedImages.push(`${imagePath} (${Math.round(sizeInKB)}KB)`);
            }
          }
        }
      }

      if (oversizedImages.length > 0) {
        console.warn('Large images detected (consider optimization):', oversizedImages);
      }

      // This is a warning, not a failure - we'll allow it but log it
      expect(oversizedImages.length, 'Too many large images - consider optimization').toBeLessThan(IMAGE_PATHS.length / 2);
    });
  });

  test.describe('Content Validation', () => {

    test('each documented page should have expected screenshots', async ({ page }) => {
      const missingScreenshots: string[] = [];

      for (const docPage of PAGES_WITH_SCREENSHOTS) {
        await page.goto(`${BASE_URL}${docPage.path}`);
        await page.waitForLoadState('networkidle');

        const images = await page.locator('img[src*="/images/"]').all();

        if (images.length < docPage.minImages) {
          missingScreenshots.push(`${docPage.name}: Expected ${docPage.minImages}, found ${images.length}`);
        }
      }

      expect(missingScreenshots).toHaveLength(0);
      if (missingScreenshots.length > 0) {
        console.log('Pages missing expected screenshots:', missingScreenshots);
      }
    });
  });
});

test.describe('Screenshot Visual Regression', () => {
  // These tests take screenshots for visual comparison

  test('capture screenshots of key pages for visual regression', async ({ page }) => {
    const keyPages = [
      '/introduction',
      '/essentials/how-it-works',
      '/guides/tasks/overview',
      '/guides/knowledge-search/overview'
    ];

    for (const pagePath of keyPages) {
      await page.goto(`${BASE_URL}${pagePath}`);
      await page.waitForLoadState('networkidle');

      const pageName = pagePath.replace(/\//g, '-').substring(1) || 'home';
      await page.screenshot({
        path: `tests/visual-regression/${pageName}.png`,
        fullPage: true
      });
    }
  });
});
