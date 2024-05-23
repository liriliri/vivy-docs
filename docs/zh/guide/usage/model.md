# 模型管理

点击工具栏 <Icon name="model"/> 按钮打开模型管理器，其功能包括查看、添加、删除以及使用模型。模型种类通过左上角选择框切换，一共有[四种](/zh/guide/sd/model)：Stable Diffusion Checkpoint 模型、VAE 模型、Embedding 模型和 LoRA 模型。

![模型管理器](/zh/model_manager.png)

## 添加删除

下载模型后，先切换到对应的模型类型，点击工具栏上的 <Icon name="add"/> 选择模型文件添加到模型库中。选中需要操作的模型，点击 <Icon name="delete"/> 删除模型。类型选择框旁边的 <Icon name="open-file"/> 是用来打开模型存储路径，直接在文件夹操作也能对模型添加删除。

通过 <Icon name="add"/> 添加模型时会将模型文件复制一份到模型文件夹内，默认路径如下：

* macOS: `/Users/<用户名>/Library/Application Support/vivy/models`
* Windows: `C:\Users\<用户名>\AppData\Roaming\vivy\models`

::: tip Windows 下如果 C 盘空间不足，在设置中将模型位置设置到其它盘。
:::

## 查看使用

模型数量过多时，通过工具栏中的输入框输入文本进行过滤。选中模型后，下方会显示当前模型的预览图，没有的话直接下载图片拖拽到预览区即可。想要使用当前选中项，点击右上角的**应用**按钮设置模型。

::: tip LoRA 模型含有元数据时点击 <Icon name="info"/> 查看。