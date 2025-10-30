// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AVA Documentation',
  tagline: 'Your AI-Powered Enterprise Assistant',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://datarm.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/AVA-Docs/',

  // GitHub pages deployment config.
  organizationName: 'datarm', // Usually your GitHub org/user name.
  projectName: 'AVA-Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          editUrl:
            'https://github.com/datarm/AVA-Docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/datarm/AVA-Docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/ava-social-card.jpg',
      announcementBar: {
        id: 'ava_3_release',
        content:
          '🎉 <b>AVA 3.0 is here!</b> Enhanced AI models, improved performance, and new enterprise features. <a href="/AVA-Docs/docs/release-notes">Learn more →</a>',
        backgroundColor: '#7B3FF2',
        textColor: '#ffffff',
        isCloseable: true,
      },
      navbar: {
        title: 'AVA',
        logo: {
          alt: 'AVA Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/blog', 
            label: 'Updates', 
            position: 'left'
          },
          {
            href: 'https://dev.datarm.app',
            label: 'Try AVA',
            position: 'right',
          },
          {
            href: 'https://github.com/datarm/AVA-Docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'AVA Chat',
                to: '/docs/features/chat/overview',
              },
              {
                label: 'AVA Tasks',
                to: '/docs/features/tasks/overview',
              },
              {
                label: 'Knowledge Search',
                to: '/docs/features/knowledge-search/overview',
              },
              {
                label: 'API Reference',
                to: '/docs/api',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Release Notes',
                to: '/docs/release-notes/changelog',
              },
              {
                label: 'Admin Guide',
                to: '/docs/admin/security',
              },
              {
                label: 'Advanced Guides',
                to: '/docs/guides/advanced-prompting',
              },
              {
                label: 'Best Practices',
                to: '/docs/guides/best-practices',
              },
              {
                label: 'Troubleshooting',
                to: '/docs/troubleshooting',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/datarm',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/datarm',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/datarm',
              },
              {
                label: 'YouTube',
                href: 'https://youtube.com/@datarm',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Contact DataRM',
                href: 'mailto:avasupport@datarm.ai',
              },
              {
                label: 'GitHub Issues',
                href: 'https://github.com/datarm/AVA-Docs/issues',
              },
              {
                label: 'Status Page',
                href: 'https://status.datarm.ai',
              },
              {
                html: `
                  <div style="margin-top: 1rem;">
                    <a href="https://dev.datarm.app" target="_blank" style="
                      display: inline-block;
                      background: linear-gradient(135deg, #7B3FF2, #9B5FF2);
                      color: white;
                      padding: 0.5rem 1.5rem;
                      border-radius: 6px;
                      text-decoration: none;
                      font-weight: 600;
                      transition: transform 0.2s;
                    " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                      Try AVA Now →
                    </a>
                  </div>
                `,
              },
            ],
          },
        ],
        copyright: `
          <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
            <div>Copyright © ${new Date().getFullYear()} DataRM. Built with Docusaurus.</div>
            <div style="font-size: 0.9rem; opacity: 0.8;">Empowering enterprises with secure AI solutions</div>
          </div>
        `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Algolia search - uncomment and configure when you have API keys
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: 'YOUR_APP_ID',
      //   // Public API key: it is safe to commit it
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'ava-docs',
      //   // Optional: see doc section below
      //   contextualSearch: true,
      //   // Optional: Algolia search parameters
      //   searchParameters: {},
      //   // Optional: path for search page that enabled by default (`false` to disable it)
      //   searchPagePath: 'search',
      // },
    }),
};

export default config;