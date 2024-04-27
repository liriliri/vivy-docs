# 快速开始

本章将指导你如何使用 VIVY 生成自己第一幅 AI 绘画作品。

## 模型下载

让 AI 绘画必须下载一个模型才能生成图像，常用的模型下载站有：

* 国外有 [Civita](https://civitai.com/) 和 [Hugging Face](https://huggingface.co/)，需要科学上网
* 国内有 [哩布哩布AI](https://www.liblib.art/) 和 [吐司](https://tusiart.com/)

我们先下载 [GhostMix](https://www.liblib.art/modelinfo/cb8d7083b853b2361c243fdb03778b17) 这个模型到本地硬盘上。接着打开 VIVY，在顶部工具栏的左侧找到 <Icon name="model"/> 点击打开模型管理器。

![模型管理器](/zh/model_manager.png)

点击右上角的 <Icon name="add"/> 选择上一步下载的文件添加到模型库。之后在列表中选中模型，点击右上角的**应用**按钮加载模型。

::: warning 添加模型会将文件复制到 SD-WebUI 的模型文件夹内，Windows 默认路径在 C 盘。如果 C 盘空间不足，可以先在设置中将模型位置设置到其它路径上。
:::

选择模型不同将会直接影响到最终生成图像的风格样式。有兴趣的话，你可以下载其它模型进行尝试。

## 工程导入

想要 AI 绘画出心中理想的效果需要填写提示词及一众参数，这里我们暂时略过，直接下载 <Download href="/example.vivy" name="example.vivy"/> 文件通过菜单栏的 文件 -> 打开 导入工程文件。

![示例](/zh/example.png)

可以看到左侧的参数已经被填写完成，直接点击**生成**按钮开始生成图像。静静等待一段时间后，你的第一幅 AI 绘画就完成了。