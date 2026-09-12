import { defineConfig } from 'vitepress';
import { phases } from './curriculum.mjs';

export default defineConfig({
  title: 'FDE Fieldbook',
  description: 'Learn to discover, build, deploy and own enterprise AI systems. A practical AI/FDE curriculum by iNewTech.',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  head: [['meta', { name: 'theme-color', content: '#147d64' }]],
  themeConfig: {
    siteTitle: 'FDE Fieldbook',
    nav: [
      { text: 'Study plan', link: '/plan/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Resources', link: '/resources/' },
      { text: 'Question bank', link: '/practice/' },
      { text: 'References', link: '/references/' }
    ],
    sidebar: [
      { text: 'The fieldbook', items: [
        { text: 'Start here', link: '/' },
        { text: 'Your study plan', link: '/plan/' },
        { text: 'System design track', link: '/plan/system-design' },
        { text: 'Learning contract', link: '/guide/learning-contract' },
        { text: 'How to study', link: '/guide/how-to-study' },
        { text: 'Mentor skill', link: '/guide/mentor-skill' },
        { text: 'Resource hub', link: '/resources/' },
        { text: 'Readiness diagnostic', link: '/guide/diagnostic' },
        { text: 'Questions and answers', link: '/guide/q-and-a' }
      ]},
      ...phases.map(p => ({ text: p.title, collapsed: true, items: p.items.map(([id, title]) => ({ text: title, link: `/learn/${id}` })) })),
      { text: 'Practice and delivery', collapsed: false, items: [
        { text: 'Project briefs', link: '/projects/' },
        { text: 'Question bank', link: '/practice/' },
        { text: 'Video and reading library', link: '/references/' },
        { text: 'Syllabus coverage', link: '/plan/coverage' },
        { text: 'Publish and contribute', link: '/guide/publishing' }
      ]}
    ],
    outline: { level: [2, 3], label: 'On this page' },
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/iNewTech/ai-fde-fieldbook' }],
    editLink: { pattern: 'https://github.com/iNewTech/ai-fde-fieldbook/edit/main/docs/:path', text: 'Improve this page' },
    footer: { message: 'Independent learning material by iNewTech. No institutional affiliation.' }
  }
});
