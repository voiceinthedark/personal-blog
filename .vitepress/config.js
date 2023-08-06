import { defineConfig } from 'vitepress';
import markdownItAttrs from 'markdown-it-attrs';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'markdown blog',
  description: 'A markdown driven blog',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Articles', link: '/articles/' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/voiceinthedark' },
    ],
  },
  srcDir: 'src',
  markdown: {
    lineNumbers: true,
    attrs: {
      leftDelimiter: '{',
      rightDelimiter: '}',
      allowedAttributes: [],
      disable: false,
    },
    config: (md) => {
      md.use(markdownItAttrs);
    },
  },
});
