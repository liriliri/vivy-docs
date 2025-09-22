---
layout: page
title: Stable Diffusion Desktop App 
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
    title: 'Easy to Install',
    desc: 'With built-in Stable Diffusion web UI, simply download and install, no need for Python or Git installation and configuration.',
    image: '/model_manager.png',
  },
  {
    title: 'Easy to Use',
    desc: 'Supports task queue, allowing users to generate images while browsing and processing the results. It also supports adjusting the size of different areas in the interface.',
    image: '/sketch.png',
  },
  {
    title: 'Prompt Editting',
    desc: 'Enhances the experience of prompt editing by supporting features such as highlighting, formatting, tag autocomplete, and read parameters from generated images.',
    image: '/prompt_builder.png',
  }
]
</script>

<AppHome 
  title="VIVY Stable Diffusion Desktop App" 
  subtitle="VIVY is a desktop application for Stable Diffusion that rewrites Stable Diffusion web UI's user interface based on its API."
  :code="code"
  :version="version"
  :downloads="downloads"
  :features="features"
  :changelogUrl="`https://github.com/liriliri/vivy/releases/tag/v${version}`"
/>
