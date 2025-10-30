---
sidebar_position: 2
title: Installation & Setup
---

# Installation & Setup

AVA is a cloud-based application that requires no installation on your local machine. However, there are several setup steps to ensure optimal performance and access.

## Browser Requirements

### Supported Browsers

AVA works best with modern web browsers:

| Browser | Minimum Version | Recommended |
|---------|----------------|-------------|
| Google Chrome | 90+ | ✅ Latest version |
| Microsoft Edge | 90+ | ✅ Latest version |
| Mozilla Firefox | 88+ | ✅ Latest version |
| Safari | 14+ | ✅ Latest version |

:::warning Browser Compatibility
Internet Explorer is not supported. Please upgrade to Microsoft Edge for the best experience.
:::

## System Requirements

### Minimum Requirements
- **Operating System**: Windows 10/11, macOS 10.15+, or Linux (Ubuntu 20.04+)
- **RAM**: 4GB
- **Internet Connection**: Stable broadband (minimum 5 Mbps)
- **Screen Resolution**: 1280x768

### Recommended Requirements
- **RAM**: 8GB or more
- **Internet Connection**: 25 Mbps or faster
- **Screen Resolution**: 1920x1080 or higher
- **Multiple monitors**: Supported for enhanced productivity

## Network Configuration

### Required Domains

Ensure your firewall allows access to:

```
*.datarm.ai
*.microsoft.com
*.microsoftonline.com
*.sharepoint.com
*.office365.com
```

### Proxy Settings

If your organization uses a proxy:

1. Configure your browser to use the corporate proxy
2. Ensure WebSocket connections are allowed
3. Verify SSL/TLS inspection doesn't block AVA

## Microsoft 365 Integration

### Prerequisites

- Active Microsoft 365 subscription
- User account with appropriate licenses
- SharePoint Online access (for Knowledge Search)
- Teams access (for meeting transcriptions)

### Permissions Required

Your account needs:

- ✅ Read access to SharePoint sites
- ✅ Access to Teams meetings and recordings
- ✅ Email read permissions (for email integration)
- ✅ OneDrive access (for file management)

## Mobile Access

### iOS Setup

1. Open Safari on your iPhone/iPad
2. Navigate to your AVA URL
3. Tap the Share button
4. Select "Add to Home Screen"
5. Name it "AVA" and tap Add

### Android Setup

1. Open Chrome on your Android device
2. Navigate to your AVA URL
3. Tap the menu (three dots)
4. Select "Add to Home screen"
5. Confirm the name and tap Add

## Browser Extensions

### Recommended Extensions

Enhance your AVA experience with:

- **Password Manager**: For secure credential management
- **Grammar Checker**: To improve your prompts
- **Screenshot Tool**: For capturing and sharing

### Extensions to Disable

Some extensions may interfere with AVA:

- Ad blockers (whitelist AVA domain)
- Script blockers
- Aggressive privacy extensions

## Optimizing Performance

### Browser Settings

1. **Enable Hardware Acceleration**
   - Chrome/Edge: Settings → System → Use hardware acceleration
   - Firefox: Settings → Performance → Use recommended performance settings

2. **Clear Cache Regularly**
   - Clear browser cache monthly
   - Keep cookies for AVA domain

3. **Disable Unnecessary Extensions**
   - Reduce memory usage
   - Improve page load times

### Network Optimization

- Use wired connection when possible
- Close bandwidth-heavy applications
- Consider QoS settings for AVA domain

## Troubleshooting Setup Issues

### Login Problems

| Issue | Solution |
|-------|----------|
| SSO loop | Clear cookies and cache, try incognito mode |
| Access denied | Contact IT administrator for permissions |
| MFA issues | Ensure authenticator app is synced |

### Performance Issues

| Issue | Solution |
|-------|----------|
| Slow loading | Check network speed, disable extensions |
| Freezing | Update browser, clear cache |
| Features missing | Verify browser compatibility |

## Administrator Setup

### For IT Administrators

1. **User Provisioning**
   - Add users to AVA security group
   - Assign appropriate licenses
   - Configure SharePoint permissions

2. **Knowledge Base Setup**
   - Create SharePoint document libraries
   - Configure indexing for Knowledge Search
   - Set up corpus permissions

3. **Security Configuration**
   - Enable conditional access policies
   - Configure data loss prevention (DLP)
   - Set up audit logging

## Next Steps

Once your setup is complete:

1. 🚀 [Complete the Quick Start Guide](/docs/getting-started/quick-start)
2. 🔍 [Explore the Interface](/docs/getting-started/interface-overview)
3. 💬 [Try your first AVA Chat](/docs/features/chat/overview)

## Getting Help

:::info Support Channels
- **Technical Issues**: Contact your IT helpdesk
- **AVA Support**: [avasupport@datarm.ai](mailto:avasupport@datarm.ai)
- **Documentation**: You're already here! 😄
:::

---

**Ready to go?** Head to the [Interface Overview](/docs/getting-started/interface-overview) to learn about AVA's layout and features!