# AMD 显卡

SD-WebUI 尚未支持 AMD 显卡，目前对于 A 卡用户，[官方建议](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Install-and-Run-on-AMD-GPUs)是使用基于 SD-WebUI 进行二次开发的 [Direct-ml](https://github.com/lshqqytiger/stable-diffusion-webui-directml) 版本。想要在 A 卡上使用 VIVY，可以配置使用已安装的 SD-WebUI 替代内置的版本。 

## 配置 SD-WebUI 位置

这里以[秋叶 Direct-ml 整合包](https://www.bilibili.com/read/cv26557731/)为例。先将整合包下载安装并运行成功，然后点击 VIVY 工具栏右侧的 <Icon name="setting"/> 打开设置面板，将 **Stable Diffusion web UI 位置**设置为整合包安装路径，如：D:\sd-webui-aki-directml-v4.4。

## 配置 Python 位置

如果未将 Python 安装到全局并使用其启动 SD-WebUI，比如整合包一般使用的是内置的 Python，就必须设置 **Python 位置**才能正常使用，如：D:\sd-webui-aki-directml-v4.4\python\python.exe。

## 配置自定义参数

对于 Direct-ml 版本，还需要设置额外的启动参数启用才行。同样在设置面板中，将**自定义参数**一项设置为 --backend directml 即可正常在 VIVY 中使用 Direct-ml 版本的 SD-WebUI。