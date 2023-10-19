import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'VIVY',
  description: 'VIVY Documentation',
  outDir: '../dist',
  themeConfig: {
    logo: {
      src: '/icon.png',
      width: 24,
      height: 24,
    },
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Changelog', link: '/CHANGELOG.md' },
    ],
    sidebar: [],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/liriliri/vivy-docs',
      },
    ],
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    zh: {
      label: '中文',
      lang: 'zh',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh/guide/' },
          { text: '更新日志', link: '/zh/CHANGELOG.md' },
        ],
      },
    },
  },
})
