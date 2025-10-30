# Quick Reference - AVA Documentation

## 🚀 Most Common Commands

```bash
npm start              # Start dev server
npm run build         # Build for production
npm run deploy        # Deploy to GitHub Pages
```

## 📝 Add New Documentation

### Create a new doc page:
1. Add file to `docs/[category]/new-page.md`
2. Add frontmatter:
```markdown
---
sidebar_position: 5
title: Page Title
---

# Page Title

Your content here...
```

## 🎨 Styling Quick Fixes

### Change primary color:
Edit `src/css/custom.css`:
```css
:root {
  --ifm-color-primary: #7B3FF2;
}
```

### Add custom CSS class:
```css
.my-custom-class {
  /* styles */
}
```

## 🖼️ Images

### Add image to docs:
1. Copy image to `static/img/docs/`
2. Reference in markdown:
```markdown
![Alt text](/img/docs/image.png)
```

## 🏗️ Common Patterns

### Info Box (Admonition):
```markdown
:::tip
Your tip content here
:::

:::warning
Warning content
:::

:::info
Information content
:::
```

### Code Block with Syntax Highlighting:
```markdown
```javascript
const example = "code here";
```
```

### Table:
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

## 🔧 Troubleshooting

### Port 3000 in use:
```bash
npx kill-port 3000
npm start
```

### Build fails:
```bash
npm run clear
npm install
npm run build
```

### Can't see changes:
1. Clear browser cache
2. Restart dev server
3. Run `npm run clear`

## 📦 Dependencies

### Add new package:
```bash
npm install package-name
```

### Update packages:
```bash
npm update
```

## 🚢 Deployment Checklist

- [ ] Run `npm run build` locally
- [ ] Fix any build errors
- [ ] Test in production mode: `npm run serve`
- [ ] Commit changes to git
- [ ] Run `npm run deploy`
- [ ] Verify at https://datarm.github.io/AVA-Docs/

## 🎯 File Locations

- **Docs**: `/docs/`
- **Images**: `/static/img/`
- **Components**: `/src/components/`
- **Homepage**: `/src/pages/index.js`
- **Theme**: `/src/css/custom.css`
- **Config**: `/docusaurus.config.js`
- **Sidebar**: `/sidebars.js`

## 💡 Pro Tips

1. **Always test dark mode** after CSS changes
2. **Use relative links** for internal navigation
3. **Optimize images** before adding (< 500KB)
4. **Run build** before committing
5. **Keep URLs lowercase** with hyphens

## 🔗 Important Links

- Dev: http://localhost:3000/AVA-Docs/
- Prod: https://datarm.github.io/AVA-Docs/
- Repo: https://github.com/datarm/AVA-Docs
- AVA: https://dev.datarm.app

---
*Last updated: November 2024*