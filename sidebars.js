/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/quick-start',
        'getting-started/installation',
        'getting-started/interface-overview',
        'getting-started/first-steps',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        {
          type: 'category',
          label: 'AVA Chat',
          items: [
            'features/chat/overview',
            'features/chat/using-documents',
            'features/chat/meeting-notes',
            'features/chat/sharing',
          ],
        },
        {
          type: 'category',
          label: 'AVA Tasks',
          items: [
            'features/tasks/overview',
            'features/tasks/superprompt',
            'features/tasks/task-library',
            'features/tasks/automation',
          ],
        },
        {
          type: 'category',
          label: 'Knowledge Search',
          items: [
            'features/knowledge-search/overview',
            'features/knowledge-search/knowledge-bases',
            'features/knowledge-search/citations',
            'features/knowledge-search/corpus-management',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'User Guides',
      items: [
        'guides/advanced-prompting',
        'guides/workspace-management',
        'guides/collaboration',
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      items: [
        'admin/security',
        'admin/sharepoint-setup',
        'admin/user-management',
      ],
    },
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        'release-notes/changelog',
      ],
    },
  ],
};

export default sidebars;