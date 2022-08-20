# Uploader上传图片

通过点击或者拖拽上传图片

## 基础用法

这时候用户看到的是blob或者base64的图片

<template>
    <s-uploader
      accept="image/png, image/jpeg"
      :size="500 * 1024"
      :on-success="uploadSuccess"
      :on-error="uploadError"
    >
      <div class="uploader-area" slot="uploader-area">
        <s-icon name="increase"></s-icon>
        <div class="s-uploader--text">将文件拖到此处，或<em>点击上传</em></div>
      </div>
      <div class="s-uploader--tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </s-uploader>
</template>

<script>
export default {
    methods: {
          uploadSuccess() {},
    uploadError(msg) {
      this.$message({
        message: msg,
      });
    },
    },
}
</script>

::: details 查看代码
```html
<template>
    <s-uploader
      accept="image/png, image/jpeg"
      :size="500 * 1024"
      :on-success="uploadSuccess"
      :on-error="uploadError"
    >
      <div class="uploader-area" slot="uploader-area">
        <s-icon name="increase"></s-icon>
        <div class="s-uploader--text">将文件拖到此处，或<em>点击上传</em></div>
      </div>
      <div class="s-uploader--tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </s-uploader>
</template>

<script>
export default {
    methods: {
          uploadSuccess() {},
    uploadError(msg) {
      this.$message({
        message: msg,
      });
    },
    },
}
</script>
```
:::

## 多文件上传

可上传多张图片，最大上传数量可自己决定

<template>
    <s-uploader
      accept="image/png, image/jpeg"
      :size="500 * 1024"
      :on-success="uploadSuccess1"
      :on-error="uploadError1"
      :limit="3"
      :multiple="true"
    >
      <div class="uploader-area" slot="uploader-area">
        <s-icon name="increase"></s-icon>
        <div class="s-uploader--text">将文件拖到此处，或<em>点击上传</em></div>
      </div>
      <div class="s-uploader--tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </s-uploader>
</template>

<script>
export default {
    methods: {
          uploadSuccess() {},
    uploadError(msg) {
      this.$message({
        message: msg,
      });
    },        uploadSuccess1() {},
    uploadError1(msg) {
      this.$message({
        message: msg,
      });
    },
    },
}
</script>

::: details 查看代码
```html
<template>
    <s-uploader
      accept="image/png, image/jpeg"
      :size="500 * 1024"
      :on-success="uploadSuccess"
      :on-error="uploadError"
      :limit="3"
      :multiple="true"
    >
      <div class="uploader-area" slot="uploader-area">
        <s-icon name="increase"></s-icon>
        <div class="s-uploader--text">将文件拖到此处，或<em>点击上传</em></div>
      </div>
      <div class="s-uploader--tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </s-uploader>
</template>

<script>
export default {
    methods: {
          uploadSuccess() {},
    uploadError(msg) {
      this.$message({
        message: msg,
      });
    },
    
    },
}
</script>
```
:::


## 拖拽上传

使用鼠标拖拽图片至上传框实现上传

<template>
    <s-uploader
      accept="image/png, image/jpeg"
      :size="500 * 1024"
      :on-success="uploadSuccess2"
      :on-error="uploadError2"
      :limit="3"
      :multiple="true"
    >
      <div class="uploader-area" slot="uploader-area">
        <s-icon name="increase"></s-icon>
        <div class="s-uploader--text">将文件拖到此处，或<em>点击上传</em></div>
      </div>
      <div class="s-uploader--tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </s-uploader>
</template>

<script>
export default {
    methods: {
          uploadSuccess() {},
    uploadError(msg) {
      this.$message({
        message: msg,
      });
    },
              uploadSuccess1() {},
    uploadError1(msg) {
      this.$message({
        message: msg,
      });
    },          uploadSuccess2() {},
    uploadError2(msg) {
      this.$message({
        message: msg,
      });
    },
    },
}
</script>

::: details 查看代码
```html
<template>
    <s-uploader
      accept="image/png, image/jpeg"
      :size="500 * 1024"
      :on-success="uploadSuccess2"
      :on-error="uploadError2"
      :limit="3"
      :multiple="true"
    >
      <div class="uploader-area" slot="uploader-area">
        <s-icon name="increase"></s-icon>
        <div class="s-uploader--text">将文件拖到此处，或<em>点击上传</em></div>
      </div>
      <div class="s-uploader--tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </s-uploader>
</template>

<script>
export default {
    methods: {
          uploadSuccess() {},
    uploadError(msg) {
      this.$message({
        message: msg,
      });
    },
    },
}
</script>
```
:::



## Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
multiple |	是否支持多选文件 |	boolean |	— |	—
accept |	接受上传的文件类型 |	string |	— |	—
drag |	是否启用拖拽上传 |	boolean |	— |	false
limit |	最大允许上传个数 |	number |	— |	—
onSuccess | 成功回调函数 | Function | — |	—
onError | 失败回调函数 | Function | — |	—
