# AVA Documentation - Claude Code Configuration

## Project Overview

This is the official documentation site for AVA (AI Virtual Assistant), an enterprise-grade AI platform that provides ChatGPT-style conversations, automated tasks, and knowledge search capabilities within secure corporate environments.

- **Framework**: Docusaurus v3.x
- **Language**: JavaScript/React
- **Package Manager**: npm
- **Deployment**: GitHub Pages
- **Repository**: https://github.com/datarm/AVA-Docs

## Common Commands

```bash
# Development
npm start              # Start dev server on http://localhost:3000/AVA-Docs/
npm run build         # Build production site
npm run serve         # Test production build locally
npm run clear         # Clear cache and generated files

# Deployment
npm run deploy        # Deploy to GitHub Pages (after building)

# Installation
npm install           # Install dependencies
```

## Project Structure

```
AVA-Docs/
├── docs/                    # Main documentation content (Markdown)
│   ├── intro.md            # Welcome page
│   ├── getting-started/    # Quick start guides
│   ├── features/           # Feature documentation
│   │   ├── chat/          # AVA Chat docs
│   │   ├── tasks/         # AVA Tasks docs
│   │   └── knowledge-search/ # Knowledge Search docs
│   ├── guides/            # User guides
│   ├── admin/             # Administrator documentation
│   └── release-notes/     # Version history
├── src/                   # Custom React components
│   ├── components/       # Reusable components
│   ├── css/             # Custom styles (theme)
│   └── pages/           # Custom pages (homepage)
├── static/              # Static assets
│   └── img/            # Images and icons
│       └── docs/       # Documentation screenshots
├── Legacy Documentation/ # Original docs (DO NOT DELETE - Reference only)
├── docusaurus.config.js # Main configuration
├── sidebars.js         # Navigation structure
└── package.json        # Dependencies and scripts
```

## Key Configuration Files

- **docusaurus.config.js**: Site configuration, metadata, plugin settings
- **sidebars.js**: Documentation navigation structure
- **src/css/custom.css**: Theme colors and custom styles
- **src/pages/index.js**: Custom homepage

## Styling Guidelines

### Brand Colors
- Primary: `#7B3FF2` (AVA Purple)
- Primary Light: `#9B5FF2`
- Primary Dark: `#6B2FE2`
- Gradient: `linear-gradient(135deg, #7B3FF2 0%, #9B5FF2 100%)`

### Icons
- Use `react-icons` library for consistency
- Primary icons: FaComments, FaBolt, FaSearch, FaLock, FaRocket, FaRobot

### Dark Mode
- All components must support dark mode
- Test visibility in both themes
- Use CSS variables for theme-aware colors

## Development Guidelines

### Before Making Changes
1. Always preserve the `Legacy Documentation/` folder
2. Check both light and dark modes after CSS changes
3. Maintain the purple theme throughout
4. Use existing React components when possible

### Adding Documentation
1. Create `.md` files in appropriate `docs/` subdirectory
2. Add frontmatter with `sidebar_position` and `title`
3. Update `sidebars.js` if adding new categories
4. Use proper markdown formatting with code blocks and admonitions

### Testing
```bash
npm run build    # This also validates links and references
npm run serve    # Test the production build locally
```

### Common Tasks

#### Add a New Documentation Page
1. Create `.md` file in `docs/` directory
2. Add frontmatter:
   ```yaml
   ---
   sidebar_position: 1
   title: Your Title
   ---
   ```
3. Write content using Markdown

#### Update Homepage
- Edit `src/pages/index.js` for structure
- Edit `src/pages/index.module.css` for styling

#### Add Images
1. Copy images to `static/img/` or `static/img/docs/`
2. Reference in markdown: `![alt text](/img/docs/image.png)`

## Deployment

### GitHub Pages Deployment
```bash
npm run build          # Build the site
npm run deploy         # Deploy to GitHub Pages
```

The site will be available at: https://datarm.github.io/AVA-Docs/

### Configuration for GitHub Pages
- Base URL: `/AVA-Docs/`
- Organization: `datarm`
- Project Name: `AVA-Docs`

## Important Notes

### DO NOT
- ❌ Delete or modify `Legacy Documentation/` folder
- ❌ Change the primary purple color without approval
- ❌ Remove react-icons dependency
- ❌ Uncomment Algolia search without proper API keys

### ALWAYS
- ✅ Test in both light and dark modes
- ✅ Run build before committing
- ✅ Maintain consistent icon usage
- ✅ Preserve existing URL structure

## Troubleshooting

### Port 3000 Already in Use
```bash
npx kill-port 3000
npm start
```

### Build Errors
```bash
npm run clear
npm install
npm run build
```

### Image Not Displaying
- Check image is in `static/img/` directory
- Use absolute path: `/img/filename.png`
- For docs images: `/img/docs/filename.png`

## Migration Status

### Completed ✅
- Basic Docusaurus setup
- Homepage with features
- Getting Started section
- Theme configuration
- Icon integration
- Dark mode support

### In Progress 🚧
- Content migration from Legacy Documentation
- Additional feature documentation
- Admin guides
- API documentation

### Planned 📋
- Algolia search integration
- Version management
- Internationalization
- Advanced components

## Support & Resources

- **AVA Support**: avasupport@datarm.ai
- **GitHub Issues**: https://github.com/datarm/AVA-Docs/issues
- **Docusaurus Docs**: https://docusaurus.io/docs
- **React Icons**: https://react-icons.github.io/react-icons/

## Quick Reference

### File Types
- `.md` - Documentation content
- `.js` - React components
- `.css` / `.module.css` - Styling
- `.json` - Configuration

### Useful Links
- Dev Server: http://localhost:3000/AVA-Docs/
- Production: https://datarm.github.io/AVA-Docs/
- AVA App: https://dev.datarm.app

---

*Last Updated: November 2024*
*Claude Code Configuration v1.0*