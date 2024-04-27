# 安装

VIVY 支持 [Windows x64](https://release.liriliri.io/VIVY-0.11.0-win.7z) 和 [macOS ARM](https://release.liriliri.io/VIVY-0.11.0-arm64.dmg) 两个平台。

## Windows

VIVY 是跑在本地电脑上的 Stable Diffusion 应用，对所在设备的性能有一定的要求。

因为模型文件较大，建议内存不少于 **16 GB**，相应的存储空间至少在 **20 GB** 以上。对于显卡，建议显存至少 **4 GB** 以上。由于需要用到 [CUDA](https://developer.nvidia.com/cuda-toolkit) 加速，使用**英伟达显卡**效果最好。当然没有独显也可以用 CPU 花几百倍时间生成，基本不可用。

SD-WebUI 官方版本尚未支持 AMD 显卡，因此在 VIVY 中无法直接使用，请阅读 [AMD 显卡](/zh/guide/usage/amd.md)。

下载[安装包](https://release.liriliri.io/VIVY-0.11.0-win.7z)并解压到指定路径，双击打开 **VIVY.exe** 即可启动运行。

::: tip 首次启动会稍慢一点，二次启动因为缓存速度会快上一点。
:::

## macOS

macOS 平台对内存和存储空间的要求与 Windows 一致，仅支持 ARM 芯片，直接下载[安装包](https://release.liriliri.io/VIVY-0.11.0-win.7z)并安装运行即可。