# AVA Documentation

Modern, comprehensive documentation for AVA - Your AI-Powered Enterprise Assistant. Built with Docusaurus for a professional, searchable, and user-friendly experience.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/datarm/AVA-Docs.git
cd AVA-Docs

# Install dependencies
npm install

# Start the development server
npm start
```

The site will be available at `http://localhost:3000/AVA-Docs/`

## 📁 Project Structure

```
AVA-Docs/
├── docs/                    # Documentation content
│   ├── intro.md            # Welcome page
│   ├── getting-started/    # Quick start guides
│   ├── features/           # Feature documentation
│   │   ├── chat/          # AVA Chat docs
│   │   ├── tasks/         # AVA Tasks docs
│   │   └── knowledge-search/ # Knowledge Search docs
│   ├── guides/            # User guides
│   ├── admin/             # Administrator documentation
│   └── release-notes/     # Version history
├── src/                   # React components & custom pages
│   ├── components/       # Custom React components
│   ├── css/             # Custom styles
│   └── pages/           # Custom pages (homepage)
├── static/              # Static assets
│   └── img/            # Images and icons
├── .claude/             # Claude Code configuration
│   ├── commands.json    # Project commands
│   ├── context.md      # Project context
│   ├── preferences.json # Claude preferences
│   └── quick-reference.md # Quick command reference
├── Legacy Documentation/ # Original documentation (preserved)
├── CLAUDE.md           # Claude Code main configuration
└── docusaurus.config.js # Site configuration
```

## 🛠️ Development

### Available Scripts

- `npm start` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run serve` - Serve production build locally
- `npm run clear` - Clear cache

### Adding Documentation

1. Create a new `.md` file in the appropriate `docs/` subdirectory
2. Add frontmatter with sidebar position:
   ```markdown
   ---
   sidebar_position: 1
   title: Your Title
   ---
   ```
3. Write content using Markdown
4. The sidebar will update automatically

### Customization

- **Theme**: Edit colors in `src/css/custom.css`
- **Config**: Modify site settings in `docusaurus.config.js`
- **Homepage**: Edit `src/pages/index.js`
- **Components**: Add custom components in `src/components/`

## 🎨 Features

- ✅ **Modern Design**: Clean, professional interface with AVA branding
- ✅ **Dark Mode**: Automatic theme switching
- ✅ **Search Ready**: Configured for Algolia DocSearch
- ✅ **Responsive**: Works on all devices
- ✅ **Version Control**: Document versioning support
- ✅ **SEO Optimized**: Meta tags and structured data
- ✅ **Interactive**: Code highlighting, tabs, and admonitions

## 📝 Documentation Sections

### Getting Started
- Quick Start Guide
- Installation & Setup
- Interface Overview
- First Steps Tutorial

### Features
- **AVA Chat**: ChatGPT-style conversations
- **AVA Tasks**: Automated workflows with SuperPrompt
- **Knowledge Search**: RAG-powered document search

### Guides
- Advanced Prompting Techniques
- Workspace Management
- Collaboration Features

### Administration
- Security & Compliance
- SharePoint Integration
- User Management

## 🚢 Deployment

### GitHub Pages

1. Configure `docusaurus.config.js`:
   ```js
   url: 'https://datarm.github.io',
   baseUrl: '/AVA-Docs/',
   organizationName: 'datarm',
   projectName: 'AVA-Docs',
   ```

2. Deploy:
   ```bash
   npm run build
   npm run deploy
   ```

### Custom Domain

1. Update `url` in `docusaurus.config.js`
2. Add CNAME file to `static/` directory
3. Configure DNS settings

## 🔄 Migration Notes

The original documentation from `Legacy Documentation/` has been:
- ✅ Reorganized into logical sections
- ✅ Enhanced with better formatting
- ✅ Supplemented with new content
- ✅ Preserved in original form for reference

## 🤖 Claude Code Configuration

This project includes comprehensive Claude Code configuration to enhance AI-assisted development:

### Configuration Files

- **`CLAUDE.md`** - Main configuration file with project overview, commands, and guidelines
- **`.claude/commands.json`** - Structured command definitions and automation rules
- **`.claude/context.md`** - Detailed project context and documentation philosophy
- **`.claude/preferences.json`** - Project-specific preferences and settings
- **`.claude/quick-reference.md`** - Quick command reference and common patterns

### Benefits

When using Claude Code with this project, it will automatically:
- Know the correct commands for building, testing, and deploying
- Understand the project structure and conventions
- Follow the established coding style and patterns
- Provide context-aware suggestions
- Validate changes before committing

### Usage

Simply open this project with Claude Code, and it will automatically read the configuration files to understand the project context and provide better assistance.

## 📚 Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Markdown Guide](https://www.markdownguide.org/)
- [React Documentation](https://react.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Support

- **AVA Support**: avasupport@datarm.ai
- **Documentation Issues**: [GitHub Issues](https://github.com/datarm/AVA-Docs/issues)

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

**Built with ❤️ by DataRM using Docusaurus**