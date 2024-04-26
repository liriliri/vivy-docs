# 前言 

本文档不仅是 VIVY 软件的使用手册，还适合刚入门接触使用 Stable Diffusion 绘画的新手通过 VIVY 学习 AI 绘画相关知识。

## Stable Diffusion

Stable Diffusion 是一个 2022 年发布的文本到图像生成模型。除了根据文本描述生成图像外，它还可以对图像进行局部重绘、扩图、风格转化等操作。其源代码和模型权重已分别在 [GitHub](https://github.com/CompVis/stable-diffusion) 和 [Hugging Face](https://huggingface.co/CompVis) 上开源，可以在大多数配置了一定性能显卡的电脑硬件上运行。

得益于 Stable Diffusion 的开源特性，众多开发者在其基础上进行优化、功能完善、添加用户界面使之更加易于使用，衍生出了无数 AI 绘画的相关网站和应用。

## Stable Diffusion web UI

[Stable Diffusion web UI](https://github.com/AUTOMATIC1111/stable-diffusion-webui)，简称 SD-WebUI，是一个基于 [Gradio](https://www.gradio.app/) 库实现的 Stable Diffusion 浏览器界面。它开源免费、入门简单、功能强大，有丰富的第三方插件，成为了目前最受欢迎的本地应用之一。想要更多了解 SD-WebUI 的使用方法，国内用户可以通过 B 站上的相关[教程视频](https://bilibili.com/video/BV1As4y127HW)进行学习了解。

![Stable Diffusion web UI](/webui.png)

尽管 SD-WebUI 已经将 Stable Diffusion 的使用门槛降低了不少，相对繁琐的安装步骤和环境配置还是让普通用户感到头疼。为解决这个问题，网络上除了有大量的 SD-WebUI 安装配置教程外，还提供了各式各样的整合包，比如使用人数最多的[秋叶整合包](https://www.bilibili.com/opus/923836599107584017)。

此外，SD-WebUI 基于 Gradio 前后端一体的架构虽能够快速搭建界面，缺点也很明显。功能复杂时维护成本会越来越高，实现上严重依赖于 Gradio 提供的页面样式和交互组件，无法做到面向工业级别的应用场景。虽然通过第三方插件可以增强 SD-WebUI 的功能，但是这些插件实际使用中会因为产生冲突或者版本升级导致不可用，同时界面和交互上因开发人员众多无法保持一致的风格。

瑕不掩瑜，SD-WebUI 是一款很棒的开源软件，它甚至提供接口调用来执行各类任务。基于该功能，其它开发者可以方便地将 AI 绘画的功能集成到其它软件中去，比如 PhotoShop，或者定制界面，比如各类在线 AI 绘画网站。

## VIVY

VIVY 是一款内置 SD-WebUI 并基于其 [API](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/API) 重新编写用户界面的桌面应用。相比于 SD-WebUI，VIVY 可以一键安装直接打开使用，不用安装插件便能拥有提示词高亮补全、图库浏览、任务队列、工程保存导入等实用功能。

![VIVY](/zh/screenshot.png)

通过阅读接下来的文档，你可以学习到如何通过 VIVY 进行图像生成，同时了解 AI 绘画的基本概念和过程方法。