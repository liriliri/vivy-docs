---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: VIVY
titleTemplate: Stable Diffusion 桌面应用

hero:
  name: "VIVY"
  text: "Stable Diffusion 桌面应用"
  tagline: VIVY 是内置 Stable Diffusion web UI 并基于其 API 重新编写用户界面的 Stable Diffusion 桌面应用。
  actions:
    - theme: brand
      text: 快速上手
      link: /guide/
    - theme: alt
      text: 下载 
      link: https://github.com/liriliri/vivy-docs/releases
  image:
    src: /screenshot.png
    alt: screenshot    

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(40px);
}

.VPHero .VPImage {
  max-width: 100%;
  max-height: 100%;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>
