/**
 * Playwright Script: Download Brand Logos (Final Version)
 *
 * This script downloads high-quality logos for integration partners
 * with fallback strategies for reliable downloads.
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
 * Try downloading from multiple sources until one succeeds
 */
async function downloadWithFallback(request, sources, filename) {
  for (let i = 0; i < sources.length; i++) {
    try {
      console.log(`Attempting source ${i + 1}/${sources.length} for ${filename}...`);
      return await downloadWithRequest(request, sources[i], filename);
    } catch (error) {
      if (i === sources.length - 1) {
        throw new Error(`All sources failed for ${filename}`);
      }
      console.log(`  Source ${i + 1} failed, trying next...`);
    }
  }
}

test.describe('Download Brand Logos - Primary Sources', () => {

  test('Download GitHub Logo', async ({ request }) => {
    const sources = [
      'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
      'https://cdn.simpleicons.org/github/181717'
    ];
    await downloadWithFallback(request, sources, 'github.png');
  });

  test('Download Microsoft Azure Logo', async ({ request }) => {
    const sources = [
      'https://azure.microsoft.com/svghandler/azure/?width=600&height=315',
      'https://cdn.simpleicons.org/microsoftazure/0078D4'
    ];
    await downloadWithFallback(request, sources, 'azure.svg');
  });

  test('Download Jira Logo', async ({ request }) => {
    const sources = [
      'https://cdn.simpleicons.org/jira/0052CC',
      'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/jira.svg'
    ];
    await downloadWithFallback(request, sources, 'jira.svg');
  });

  test('Download Salesforce Logo', async ({ request }) => {
    const sources = [
      'https://cdn.simpleicons.org/salesforce/00A1E0',
      'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/salesforce.svg'
    ];
    await downloadWithFallback(request, sources, 'salesforce.svg');
  });

  test('Download Microsoft 365 Logo', async ({ request }) => {
    // Microsoft 365 uses a different slug in SimpleIcons
    const sources = [
      'https://cdn.simpleicons.org/microsoftoffice/D83B01',
      'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/microsoftoffice.svg'
    ];
    await downloadWithFallback(request, sources, 'microsoft-365.svg');
  });

  test('Download NetSuite Logo', async ({ request }) => {
    // NetSuite logo - using alternative sources
    const sources = [
      'https://cdn.simpleicons.org/netsuite/1871BB',
      'https://www.svgrepo.com/show/303253/netsuite-logo.svg'
    ];
    await downloadWithFallback(request, sources, 'netsuite.svg');
  });

});

test.describe('Download Additional Brand Logos', () => {

  test('Download Slack Logo', async ({ request }) => {
    const sources = [
      'https://cdn.simpleicons.org/slack/4A154B',
      'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/slack.svg'
    ];
    await downloadWithFallback(request, sources, 'slack.svg');
  });

  test('Download Microsoft Teams Logo', async ({ request }) => {
    const sources = [
      'https://cdn.simpleicons.org/microsoftteams/6264A7',
      'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/microsoftteams.svg'
    ];
    await downloadWithFallback(request, sources, 'microsoft-teams.svg');
  });

  test('Download Dropbox Logo', async ({ request }) => {
    const sources = [
      'https://cdn.simpleicons.org/dropbox/0061FF',
      'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/dropbox.svg'
    ];
    await downloadWithFallback(request, sources, 'dropbox.svg');
  });

  test('Download Google Workspace Logo', async ({ request }) => {
    const sources = [
      'https://cdn.simpleicons.org/google/4285F4',
      'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/google.svg'
    ];
    await downloadWithFallback(request, sources, 'google-workspace.svg');
  });

  test('Download Oracle Logo', async ({ request }) => {
    const sources = [
      'https://cdn.simpleicons.org/oracle/F80000',
      'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/oracle.svg'
    ];
    await downloadWithFallback(request, sources, 'oracle.svg');
  });

  test('Download Atlassian Logo', async ({ request }) => {
    const sources = [
      'https://cdn.simpleicons.org/atlassian/0052CC',
      'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/atlassian.svg'
    ];
    await downloadWithFallback(request, sources, 'atlassian.svg');
  });

  test('Download ServiceNow Logo', async ({ request }) => {
    const sources = [
      'https://cdn.simpleicons.org/servicenow/62D84E',
      'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/servicenow.svg'
    ];
    await downloadWithFallback(request, sources, 'servicenow.svg');
  });

  test('Download Zoom Logo', async ({ request }) => {
    const sources = [
      'https://cdn.simpleicons.org/zoom/2D8CFF',
      'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/zoom.svg'
    ];
    await downloadWithFallback(request, sources, 'zoom.svg');
  });

});

test.describe('Verify Downloaded Logos', () => {

  test('List all downloaded logos', async () => {
    // Wait a bit for all downloads to complete
    await new Promise(resolve => setTimeout(resolve, 1000));

    const files = fs.readdirSync(LOGOS_DIR).filter(f => !f.endsWith('.md'));

    console.log('\n========================================');
    console.log('DOWNLOADED LOGOS SUMMARY');
    console.log('========================================');

    if (files.length === 0) {
      console.log('No logos downloaded yet.');
    } else {
      files.sort().forEach(file => {
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
    const files = fs.readdirSync(LOGOS_DIR).filter(f => !f.endsWith('.md'));

    for (const file of files) {
      const filePath = path.join(LOGOS_DIR, file);
      const stats = fs.statSync(filePath);

      // Check file size is between 300 bytes and 500KB
      expect(stats.size).toBeGreaterThan(300); // > 300 bytes
      expect(stats.size).toBeLessThan(500 * 1024); // < 500KB
    }

    console.log(`✓ All ${files.length} logos have valid file sizes`);
  });

  test('Verify file extensions are image formats', async () => {
    const files = fs.readdirSync(LOGOS_DIR).filter(f => !f.endsWith('.md'));
    const validExtensions = ['.png', '.svg', '.jpg', '.jpeg', '.webp'];

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      expect(validExtensions).toContain(ext);
    }

    console.log(`✓ All ${files.length} logos have valid image extensions`);
  });

  test('Verify required brand logos exist', async () => {
    const files = fs.readdirSync(LOGOS_DIR).filter(f => !f.endsWith('.md'));
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
    const files = fs.readdirSync(LOGOS_DIR).filter(f => !f.endsWith('.md'));

    let readme = `# Brand Logos\n\n`;
    readme += `This directory contains high-quality brand logos for AVA integrations.\n\n`;
    readme += `**Total Logos:** ${files.length}\n\n`;
    readme += `## Available Logos\n\n`;
    readme += `| Brand | File | Size | Format |\n`;
    readme += `|-------|------|------|--------|\n`;

    files.sort().forEach(file => {
      const stats = fs.statSync(path.join(LOGOS_DIR, file));
      const sizeKB = (stats.size / 1024).toFixed(2);
      const ext = path.extname(file).toUpperCase().replace('.', '');
      const name = path.parse(file).name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      readme += `| ${name} | \`${file}\` | ${sizeKB} KB | ${ext} |\n`;
    });

    readme += `\n## Usage\n\n`;
    readme += `These logos can be used in:\n`;
    readme += `- Documentation (markdown, HTML)\n`;
    readme += `- Marketing materials\n`;
    readme += `- AVA application UI\n`;
    readme += `- Integration pages\n\n`;
    readme += `### Example Usage\n\n`;
    readme += `\`\`\`markdown\n`;
    readme += `![GitHub Logo](./logos/brands/github.png)\n`;
    readme += `\`\`\`\n\n`;
    readme += `\`\`\`html\n`;
    readme += `<img src="/logos/brands/github.png" alt="GitHub" width="100" />\n`;
    readme += `\`\`\`\n\n`;
    readme += `## Sources\n\n`;
    readme += `- SimpleIcons CDN: https://cdn.simpleicons.org/\n`;
    readme += `- Official brand resources\n`;
    readme += `- GitHub Assets\n`;
    readme += `- Microsoft/Azure CDN\n\n`;
    readme += `## License\n\n`;
    readme += `These logos are trademarks of their respective owners. `;
    readme += `Use in accordance with each brand's usage guidelines.\n\n`;
    readme += `---\n\n`;
    readme += `**Generated:** ${new Date().toLocaleString()}\n`;
    readme += `**Method:** Playwright automated download\n`;

    const readmePath = path.join(LOGOS_DIR, 'README.md');
    fs.writeFileSync(readmePath, readme);

    console.log(`✓ Generated README.md in logos/brands/`);
    console.log(`  Path: ${readmePath}`);
  });

  test('Generate logo manifest JSON', async () => {
    const files = fs.readdirSync(LOGOS_DIR).filter(f => !f.endsWith('.md'));

    const manifest = {
      generated: new Date().toISOString(),
      total: files.length,
      logos: []
    };

    files.sort().forEach(file => {
      const stats = fs.statSync(path.join(LOGOS_DIR, file));
      const name = path.parse(file).name;
      const ext = path.extname(file).replace('.', '');

      manifest.logos.push({
        name: name,
        displayName: name
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' '),
        filename: file,
        path: `./logos/brands/${file}`,
        format: ext,
        size: stats.size,
        sizeKB: parseFloat((stats.size / 1024).toFixed(2))
      });
    });

    const manifestPath = path.join(LOGOS_DIR, 'manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

    console.log(`✓ Generated manifest.json`);
    console.log(`  Path: ${manifestPath}`);
    console.log(`  Contains: ${manifest.total} logos`);
  });

});
