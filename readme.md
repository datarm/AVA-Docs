# AVA Documentation Site

This repository contains the official documentation for **AVA by DataRM** - an enterprise-grade AI-powered data governance and risk management platform.

## Overview

AVA (AI Virtual Assistant) is DataRM's intelligent platform that provides:
- **Data Governance** - Access controls, compliance tracking, and audit logs
- **Risk Management** - Risk scoring, alert configuration, and reporting
- **AI Capabilities** - Intelligent search, automated classification, and anomaly detection
- **Enterprise Integrations** - Salesforce, Snowflake, Databricks, and custom connectors

## Documentation Approach

This documentation site is built using **Mintlify** - a modern documentation framework designed for API-first products.

### Structure

The documentation follows a comprehensive structure outlined in [ava-docs-structure](./ava-docs-structure):

```
ava-docs/
├── introduction.mdx              # Landing page
├── quickstart.mdx                # 5-min quickstart
├── essentials/                   # Core concepts (What is AVA, How it works, etc.)
├── getting-started/              # Onboarding path
├── guides/                       # Feature guides (governance, risk, integrations, AI)
├── api-reference/                # API documentation
├── sdk/                          # SDK documentation (Python, JavaScript, Java)
├── deployment/                   # Enterprise deployment guides
├── administration/               # Admin guides
├── compliance/                   # Compliance documentation (GDPR, CCPA, SOC2, HIPAA)
├── changelog.mdx                 # Product updates
└── support/                      # Support resources
```

### Configuration

The Mintlify configuration approach is detailed in [mint-json-approach.md](./mint-json-approach.md), which includes:
- Brand colors and theming
- Navigation structure
- API reference integration
- Analytics setup

## Development

### Prerequisites
- Node.js (recommended: v18+)
- Mintlify CLI

### Getting Started

1. Install Mintlify CLI:
```bash
npm i -g mintlify
```

2. Preview the documentation locally:
```bash
mintlify dev
```

3. Build the documentation:
```bash
mintlify build
```

### Project Files

- `mint.json` - Main Mintlify configuration file
- `*.mdx` - Documentation content files (Markdown with JSX support)
- `/logo/` - Brand logos (dark and light variants)
- `/favicon.svg` - Site favicon

## Deployment

The documentation is automatically deployed via Mintlify when changes are pushed to the main branch.

**Live Site**: https://docs.datarm.ai

### Mintlify Deployment

This repository is connected to Mintlify for automatic documentation deployment:

1. **GitHub Integration**: Connected to `datarm/AVA-Docs` repository
2. **Source Directory**: `/ava-docs` subdirectory
3. **Custom Domain**: docs.datarm.ai
4. **Auto-Deploy**: Pushes to `main` branch trigger automatic rebuilds

**First Deployment**: Initial Mintlify deployment will be to docs.datarm.ai upon connecting the GitHub repository to the Mintlify dashboard.

## Contributing

To contribute to the AVA documentation:

1. Create a new branch for your changes
2. Add or update `.mdx` files in the appropriate directory
3. Update `mint.json` if adding new pages or sections
4. Test locally using `mintlify dev`
5. Submit a pull request

### Content Guidelines

- Use clear, concise language
- Include code examples where applicable
- Add screenshots for UI-related features
- Follow the existing structure and formatting
- Ensure all links are valid

## Support

For questions or issues:
- **Documentation Issues**: Open an issue in this repository
- **Product Support**: Contact support@datarm.com
- **Sales/Demo**: Visit https://datarm.com/demo

## Resources

- [Mintlify Documentation](https://mintlify.com/docs)
- [DataRM Website](https://datarm.com)
- [AVA Product](https://app.datarm.com)

---

**Maintained by**: DataRM Documentation Team
**Last Updated**: November 2024
