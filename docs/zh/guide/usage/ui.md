# 用户界面

VIVY 的主界面分为五个部分，顶部是**工具栏**，底下是**状态栏**，左侧边栏是**提示词与参数输入**，右上是**图片预览区**，右下是**图库浏览**。除工具栏和状态栏外，其余三部分均可自由调整界面大小。

![主界面](/zh/screenshot.png)

## 工具栏

工具栏左边是模型选择区域，第一栏选择**底模**，第二栏选择 **VAE 模型**，旁边的 <Icon name="model"/> 点击打开[模型管理器](/zh/guide/usage/model)。工具栏右侧 <Icon name="sidebar-fill"/> 可以切换侧边栏的显示，<Icon name="setting"/> 是设置面板的入口。

## 侧边栏

侧边栏上半部分是提示词的输入部分，包括提示词与反向提示词。提示词下边是生成图像的触发按钮，按钮右侧可以调整同时生成的图片数量，数量大将占用更多的显存。侧边栏下半部分是生成参数的输入部分，具体内容可阅读[文生图](/zh/guide/usage/txt2img)和[图生图](/zh/guide/usage/img2img)。

::: tip 生成按钮右键呼出菜单可一次性创建多个任务。
:::

## 图片预览

图片预览区的功能是查看生成图像情况，通过鼠标对图片快捷地进行缩放移动。另外，按方向键 `←` 和 `→` 可切换上一张和下一张图片，`Delete` 键则将删除图片。顶部工具栏功能包括：<Icon name="save"/> 保存图片、<Icon name="info"/> 图片生成信息、<Icon name="delete"/> 删除图片和 <Icon name="fullscreen"/> 最大化，剩下的按钮均是针对当前图片的各种处理操作，具体内容可阅读[图片处理](/zh/guide/usage/img-processing)。

![图片预览](/zh/image_viewer.png)

## 图库浏览

除了生成的图片外，生成中以及未生成的图片同样会显示出来，能够直观地查看任务执行状态。同时，图片显示大小可通过 <Icon name="zoom-in"/> 和 <Icon name="zoom-out"/> 灵活调整。在图片上右键呼出菜单，点击选项将图片发送到图生图以及 ControlNet 中。顶部工具栏的功能还包括：<Icon name="save"/> 批量保存图片、<Icon name="open-file"/> 导入图片、<Icon name="left"/> 和 <Icon name="right"/> 调整图片顺序、<Icon name="stop"/> 和 <Icon name="pause"/> 控制任务执行，<Icon name="delete-all"/> 删除所有图片和 <Icon name="fullscreen"/> 最大化。

![图库浏览](/zh/image_list.png)

## 状态栏

底部状态栏主要显示当前选择图片的生成信息。鼠标悬浮在某些设置上时，也会显示对应的说明。此外，还包括三个辅助面板的入口：<Icon name="download"/> 模型下载管理器、<Icon name="terminal"/> SD-WebUI 日志查看终端、实时显示软件 CPU 和内存占用的系统信息面板。