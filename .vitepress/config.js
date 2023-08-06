import { defineConfig } from 'vitepress';
import { withMermaid } from 'vitepress-plugin-mermaid';
import markdownItAttrs from 'markdown-it-attrs';

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: 'markdown blog',
  description: 'A markdown driven blog',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Articles', link: '/articles/' },
      { text: 'Notes', link: '/notes/' },
    ],

    sidebar: [
      {
        text: 'Home',
        items: [{ text: 'Notes', link: '/notes/' }],
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
  mermaid: {
    startOnLoad: true,
  },
  base: '/personal-blog/',
});
/* export default defineConfig({
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
      md.use(markdownItAttrs)
    },
  },
});
 */