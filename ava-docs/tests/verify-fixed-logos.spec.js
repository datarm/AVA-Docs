/**
 * Verify Fixed Logos Report
 *
 * This test generates a summary report of the downloaded logo files.
 */

const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const LOGOS_DIR = path.join(__dirname, '..', 'logos', 'brands');

test('Generate Logo Fix Summary Report', async () => {
  console.log('\n');
  console.log('='.repeat(70));
  console.log('LOGO FIX SUMMARY REPORT');
  console.log('='.repeat(70));
  console.log('\n');

  const logos = [
    {
      name: 'Microsoft 365',
      file: 'microsoft-365.svg',
      originalSize: 119,
      targetSize: 5120,
      sources: [
        'https://www.logo.wine/a/logo/Office_365/Office_365-Logo.wine.svg',
        'https://www.svgrepo.com/download/303162/office-365-logo.svg',
        'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/office-365-icon.svg',
      ]
    },
    {
      name: 'NetSuite',
      file: 'netsuite.svg',
      originalSize: 14,
      targetSize: 5120,
      sources: [
        'https://www.svgrepo.com/download/342094/oracle-netsuite.svg',
        'https://cdn.worldvectorlogo.com/logos/netsuite-1.svg',
      ],
      placeholder: true
    },
  ];

  let results = [];

  for (const logo of logos) {
    const filePath = path.join(LOGOS_DIR, logo.file);

    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      const content = fs.readFileSync(filePath);

      // Check format
      const isSVG = content.toString('utf-8', 0, 100).includes('<svg');
      const isPNG = content[0] === 0x89 && content[1] === 0x50 && content[2] === 0x4E && content[3] === 0x47;
      const format = isPNG ? 'PNG' : (isSVG ? 'SVG' : 'Unknown');

      const sizeKB = (stats.size / 1024).toFixed(2);
      const isValid = stats.size > logo.targetSize;
      const improved = stats.size > logo.originalSize;

      const result = {
        name: logo.name,
        file: logo.file,
        originalSize: logo.originalSize,
        newSize: stats.size,
        sizeKB: sizeKB,
        format: format,
        isValid: isValid,
        improved: improved,
        placeholder: logo.placeholder || false,
        status: isValid ? 'FIXED' : (improved ? 'IMPROVED' : 'FAILED')
      };

      results.push(result);

      console.log(`${logo.name}:`);
      console.log(`  File: ${logo.file}`);
      console.log(`  Original Size: ${logo.originalSize} bytes`);
      console.log(`  New Size: ${stats.size} bytes (${sizeKB} KB)`);
      console.log(`  Format: ${format}`);
      console.log(`  Status: ${result.status}`);

      if (logo.placeholder) {
        console.log(`  Note: Placeholder SVG created (all external sources failed)`);
      } else if (isValid) {
        console.log(`  Source: ${logo.sources[0]}`);
      }

      console.log('');
    } else {
      console.log(`${logo.name}:`);
      console.log(`  Status: FILE NOT FOUND`);
      console.log('');

      results.push({
        name: logo.name,
        file: logo.file,
        status: 'NOT FOUND'
      });
    }
  }

  console.log('='.repeat(70));
  console.log('SUMMARY');
  console.log('='.repeat(70));
  console.log('');

  const fixed = results.filter(r => r.status === 'FIXED').length;
  const improved = results.filter(r => r.status === 'IMPROVED').length;
  const failed = results.filter(r => r.status === 'FAILED' || r.status === 'NOT FOUND').length;

  console.log(`Total Logos: ${logos.length}`);
  console.log(`Fixed (>5KB): ${fixed}`);
  console.log(`Improved (but <5KB): ${improved}`);
  console.log(`Failed: ${failed}`);
  console.log('');

  // Details for each logo
  results.forEach(r => {
    const statusIcon = r.status === 'FIXED' ? '✓' :
                       r.status === 'IMPROVED' ? '~' : '✗';
    const note = r.placeholder ? ' (placeholder)' : '';
    console.log(`  ${statusIcon} ${r.name}: ${r.status}${note}`);
  });

  console.log('');
  console.log('='.repeat(70));
  console.log('');

  console.log('RECOMMENDATIONS:');
  console.log('');

  const microsoft365 = results.find(r => r.name === 'Microsoft 365');
  if (microsoft365 && microsoft365.status === 'FIXED') {
    console.log(`  ✓ Microsoft 365: Successfully downloaded from logo.wine`);
    console.log(`    - High quality SVG format`);
    console.log(`    - File size: ${microsoft365.sizeKB} KB`);
    console.log(`    - Ready for production use`);
  }
  console.log('');

  const netsuite = results.find(r => r.name === 'NetSuite');
  if (netsuite && netsuite.placeholder) {
    console.log(`  ⚠ NetSuite: Placeholder SVG created`);
    console.log(`    - All external logo sources failed or returned rate-limited responses`);
    console.log(`    - Current placeholder is a simple branded SVG`);
    console.log(`    - Recommendations:`);
    console.log(`      1. Contact NetSuite/Oracle for official brand assets`);
    console.log(`      2. Download manually from: https://www.svgrepo.com/svg/342094/oracle-netsuite`);
    console.log(`      3. Keep current placeholder if adequate for your needs`);
  }
  console.log('');

  console.log('='.repeat(70));
  console.log('');

  // Assertions
  expect(results.filter(r => r.status !== 'NOT FOUND').length).toBe(logos.length);
  expect(microsoft365.status).toBe('FIXED');
});
