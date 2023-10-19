import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VIVY",
  description: "VIVY Documentation",
  outDir: '../dist',
  themeConfig: {
    logo: {
      src: '/icon.png',
      width: 24,
      height: 24,
    },
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '更新日志', link: '/CHANGELOG.md'}
    ],
    sidebar: [],
    socialLinks: []
  },
  locales: {
    root: {
      label: '中文',
      lang: 'zh'
    },
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/' },
          { text: 'Changelog', link: '/en/CHANGELOG.md'}
        ]
      }
    }
  }
})
