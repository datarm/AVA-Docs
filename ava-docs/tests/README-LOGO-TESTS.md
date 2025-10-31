# Logo Download Tests - Quick Reference

## Overview

Automated Playwright tests for downloading and managing brand logos for AVA documentation.

## Quick Start

### First Time Setup
```bash
cd c:\Repos\AVA-Docs\ava-docs
npm install --save-dev @playwright/test
npx playwright install chromium
```

### Download All Logos
```bash
npx playwright test download-logos-final.spec.js --reporter=list
npx playwright test download-missing-logos.spec.js --reporter=list
```

## Test Files

### Main Scripts

| File | Purpose | Status |
|------|---------|--------|
| `download-logos-final.spec.js` | Primary download script with 14 logos | Production Ready |
| `download-missing-logos.spec.js` | Supplementary for Microsoft 365 & NetSuite | Production Ready |
| `download-logos-v2.spec.js` | Alternative approach | Backup |
| `download-logos.spec.js` | Initial version | Deprecated |

### Configuration
- `playwright.config.js` - Playwright settings

### Documentation
- `logo-download-report.md` - Detailed download report
- `README-LOGO-TESTS.md` - This file

## Commands

### Download Logos
```bash
# Download all logos
npx playwright test download-logos-final.spec.js

# Download specific brand
npx playwright test download-logos-final.spec.js --grep "GitHub"
```

### Verify Downloads
```bash
# List all downloaded logos
npx playwright test download-logos-final.spec.js --grep "List all downloaded"

# Verify file sizes
npx playwright test download-logos-final.spec.js --grep "Verify file sizes"

# Check required brands
npx playwright test download-logos-final.spec.js --grep "Verify required brand"
```

### Generate Documentation
```bash
# Generate README and manifest
npx playwright test download-logos-final.spec.js --grep "Generate"
```

### Run All Tests
```bash
# Run complete test suite
npx playwright test download-logos-final.spec.js --reporter=list

# Run with HTML report
npx playwright test download-logos-final.spec.js --reporter=html
```

## Test Structure

### Download Brand Logos - Primary Sources
- Download GitHub Logo
- Download Microsoft Azure Logo
- Download Jira Logo
- Download Salesforce Logo
- Download Microsoft 365 Logo
- Download NetSuite Logo

### Download Additional Brand Logos
- Download Slack Logo
- Download Microsoft Teams Logo
- Download Dropbox Logo
- Download Google Workspace Logo
- Download Oracle Logo
- Download Atlassian Logo
- Download ServiceNow Logo (optional)
- Download Zoom Logo

### Verify Downloaded Logos
- List all downloaded logos
- Verify file sizes are reasonable
- Verify file extensions are image formats
- Verify required brand logos exist
- Generate README for logos directory
- Generate logo manifest JSON

## Expected Results

### Success Criteria
- 14 logos downloaded (13 required + 1 bonus)
- All files between 300 bytes and 500KB
- Valid image formats (PNG, SVG)
- README.md generated
- manifest.json generated

### File Locations
```
c:\Repos\AVA-Docs\ava-docs\logos\brands\
├── atlassian.svg
├── azure.svg
├── dropbox.svg
├── github.png
├── google-workspace.svg
├── jira.svg
├── manifest.json
├── microsoft-365.svg
├── microsoft-teams.svg
├── netsuite.svg
├── oracle.svg
├── README.md
├── salesforce.svg
├── slack.svg
└── zoom.svg
```

## Troubleshooting

### Test Fails
```bash
# Check if logos directory exists
ls c:\Repos\AVA-Docs\ava-docs\logos\brands

# Re-run with verbose output
npx playwright test download-logos-final.spec.js --reporter=list --debug
```

### Missing Logos
```bash
# Run supplementary script
npx playwright test download-missing-logos.spec.js --reporter=list
```

### Network Issues
The scripts include fallback sources. If primary CDN fails, it will try alternative sources.

## Maintenance

### Refresh All Logos
```bash
# Delete existing logos
rm -rf c:\Repos\AVA-Docs\ava-docs\logos\brands\*.svg
rm -rf c:\Repos\AVA-Docs\ava-docs\logos\brands\*.png

# Re-download
npx playwright test download-logos-final.spec.js --reporter=list
npx playwright test download-missing-logos.spec.js --reporter=list
```

### Update Playwright
```bash
npm update @playwright/test
npx playwright install chromium
```

## Integration

### Use in Markdown
```markdown
![GitHub](../logos/brands/github.png)
```

### Use in HTML
```html
<img src="/logos/brands/azure.svg" alt="Azure" width="100" />
```

### Use in React
```jsx
import logo from '../logos/brands/salesforce.svg';
<img src={logo} alt="Salesforce" />
```

## Performance

- Total execution time: ~10-15 seconds
- Parallel test execution: 12 workers
- Total download size: ~50KB (all logos)

## Browser Requirements

- Chromium (auto-installed by Playwright)
- No manual browser interaction required
- Runs in headless mode

## CI/CD Integration

Add to your build pipeline:
```yaml
- name: Download Brand Logos
  run: |
    npm install --save-dev @playwright/test
    npx playwright install chromium
    npx playwright test download-logos-final.spec.js
```

## Support

- Playwright Docs: https://playwright.dev/
- AVA Docs: c:\Repos\AVA-Docs\ava-docs\CLAUDE.md
- Test Reports: c:\Repos\AVA-Docs\ava-docs\tests\logo-download-report.md

---

**Last Updated:** October 24, 2025
**Maintainer:** AVA Documentation Team
**Status:** Production Ready
