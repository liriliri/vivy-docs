---
layout: page
title: Stable Diffusion 桌面应用
---
<script setup>
import AppHome from '@share/components/AppHome.vue'
import code from '@theme/lib/code'

const version = "1.0.3"

const downloads = [
  {
    key: 'windows',
    name: 'Windows',
    ext: '.exe',
    href: `https://release.liriliri.io/vivy/VIVY-${version}-win-x64.7z`,
  },
  {
    key: 'mac',
    name: 'macOS Apple silicon',
    ext: '.dmg',
    href: `https://release.liriliri.io/vivy/VIVY-${version}-mac-arm64.dmg `,
  },
]

const features = [
  {
    title: '开箱即用',
    desc: '内置 Stable Diffusion web UI，下载安装即可使用，无需繁琐的 python、git 安装配置。',
    image: '/model_manager.png',
  },
  {
    title: '简单易用',
    desc: '支持任务队列，用户可边生成图片边对结果进行浏览处理，同时支持对界面各区域大小进行调整。',
    image: '/sketch.png',
  },
  {
    title: '提示词编辑',
    desc: '提高提示词编辑体验，支持高亮、格式化、中文翻译、标签补全提示、从图片中读取生成参数等功能。',
    image: '/prompt_builder.png',
  }
]
</script>

<AppHome 
  title="VIVY Stable Diffusion 桌面应用" 
  subtitle="VIVY 是内置 Stable Diffusion web UI 并基于其 API 重新编写用户界面的 Stable Diffusion 桌面应用。"
  :code="code"
  :version="version"
  :downloads="downloads"
  :features="features"
  :changelogUrl="`https://github.com/liriliri/vivy/releases/tag/v${version}`"
/>
