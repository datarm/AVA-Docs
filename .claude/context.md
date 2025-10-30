# AVA Documentation - Project Context

## About AVA

AVA (AI Virtual Assistant) is an enterprise-grade AI platform that provides:
- **AVA Chat**: ChatGPT-style conversations in a secure environment
- **AVA Tasks**: Automated workflows with SuperPrompt technology
- **Knowledge Search**: RAG-powered document search with citations

The platform operates entirely within the customer's Microsoft Azure environment, ensuring complete data privacy and corporate compliance.

## Documentation Philosophy

This documentation follows these principles:
1. **User-Centric**: Focus on what users need to accomplish
2. **Progressive Disclosure**: Start simple, add complexity as needed
3. **Visual Learning**: Include screenshots and diagrams
4. **Practical Examples**: Real-world use cases and examples
5. **Searchable**: Well-structured for easy discovery

## Target Audiences

### Primary Users
- **Business Users**: Need quick start guides and feature overviews
- **Power Users**: Want advanced techniques and automation
- **Administrators**: Require setup, security, and management docs
- **Developers**: Need API documentation and integration guides

### Reading Patterns
- Most users start with Getting Started
- Feature documentation is reference material
- Admin docs are accessed during setup
- Guides are for specific tasks

## Content Strategy

### Tone and Voice
- Professional but approachable
- Clear and concise
- Avoid jargon where possible
- Use active voice
- Include helpful tips and warnings

### Documentation Types
1. **Tutorials**: Step-by-step learning paths
2. **How-To Guides**: Task-oriented instructions
3. **Reference**: Technical specifications
4. **Explanations**: Conceptual understanding

## Technical Decisions

### Why Docusaurus?
- Modern React-based framework
- Built-in search capabilities
- Excellent markdown support
- Version management
- GitHub Pages integration
- Active community

### Styling Choices
- **Purple Theme**: Matches AVA brand identity
- **Gradient Design**: Modern, professional appearance
- **React Icons**: Consistent iconography
- **Dark Mode**: Accessibility and user preference

## Migration Context

### Legacy Documentation
The `Legacy Documentation/` folder contains the original docs:
- Written in basic Markdown
- Contains valuable screenshots
- Some content outdated but historically important
- Preserved for reference during migration

### Migration Strategy
1. **Phase 1**: Structure and navigation (✅ Complete)
2. **Phase 2**: Core content migration (🚧 In Progress)
3. **Phase 3**: Enhanced features (📋 Planned)
4. **Phase 4**: Search and versioning (📋 Planned)

## Integration Points

### GitHub Repository
- Main branch: `main`
- Deployment branch: `gh-pages` (auto-generated)
- Issues for documentation requests
- Pull requests for contributions

### AVA Platform
- Development: https://dev.datarm.app
- Production: https://ava.[company].com
- API endpoints documented separately

### Microsoft 365
- SharePoint integration for Knowledge Search
- Teams integration for meeting transcripts
- Outlook integration for email processing

## Known Challenges

### Technical
- Algolia search requires API keys (currently disabled)
- Large images need optimization
- Mobile navigation could be improved

### Content
- Some features rapidly evolving
- Need more real-world examples
- API documentation incomplete
- Video tutorials planned but not created

## Future Enhancements

### Short Term (Next Sprint)
- Complete content migration
- Add more screenshots
- Improve mobile experience
- Create video tutorials

### Medium Term (Next Quarter)
- Implement Algolia search
- Add version dropdown
- Create interactive demos
- Build component library

### Long Term (Next Year)
- Internationalization (i18n)
- AI-powered documentation search
- Integrated feedback system
- Auto-generated API docs

## Success Metrics

### Quantitative
- Page load time < 2 seconds
- Search success rate > 80%
- Documentation coverage > 90%
- Mobile usage > 30%

### Qualitative
- User satisfaction scores
- Support ticket reduction
- Time to first successful action
- Documentation completeness

## Maintenance Notes

### Regular Updates Needed
- Release notes (monthly)
- Feature documentation (as released)
- Screenshots (quarterly)
- Security updates (as needed)

### Review Cycle
- Technical review: Before each release
- Content review: Quarterly
- Full audit: Annually
- User feedback: Continuous

## Resources and References

### Internal
- AVA Product Roadmap
- DataRM Brand Guidelines
- Security Compliance Docs
- User Research Reports

### External
- [Docusaurus Documentation](https://docusaurus.io)
- [React Best Practices](https://react.dev)
- [Markdown Guide](https://www.markdownguide.org)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Contact Points

- **Documentation Team**: docs@datarm.ai
- **Product Team**: product@datarm.ai
- **Support Team**: avasupport@datarm.ai
- **Security Team**: security@datarm.ai

---

*This context document helps Claude Code understand the broader picture of the AVA documentation project.*