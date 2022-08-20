# Button按钮

常用的操作按钮。

### 基础用法

基础的按钮用法

<template>
<s-button   >默认按钮</s-button>
<s-button type="primary"  >主要按钮</s-button>
<s-button type="info"  >信息按钮</s-button>
<s-button type="warning"  >警告按钮</s-button>
<s-button type="danger"  >危险按钮</s-button>
</template>

::: details 查看代码
```html
<template>
<s-button   >默认按钮</s-button>
<s-button type="primary"  >主要按钮</s-button>
<s-button type="info"  >信息按钮</s-button>
<s-button type="warning"  >警告按钮</s-button>
<s-button type="danger"  >危险按钮</s-button>
</template>
```
:::
## 禁用状态

按钮不可用的状态

<template>
<s-button disabled   >默认按钮</s-button>
<s-button disabled type="primary"  >主要按钮</s-button>
<s-button disabled type="info"  >信息按钮</s-button>
<s-button disabled type="warning"  >警告按钮</s-button>
<s-button disabled type="danger"  >危险按钮</s-button>
</template>

::: details 查看代码
```html
<template>
<s-button disabled   >默认按钮</s-button>
<s-button disabled type="primary"  >主要按钮</s-button>
<s-button disabled type="info"  >信息按钮</s-button>
<s-button disabled type="warning"  >警告按钮</s-button>
<s-button disabled type="danger"  >危险按钮</s-button>
</template>
```
:::

## 圆角按钮

按钮四边带有圆角


<template>
<s-button round   >默认按钮</s-button>
<s-button round type="primary"  >主要按钮</s-button>
<s-button round type="info"  >信息按钮</s-button>
<s-button round type="warning"  >警告按钮</s-button>
<s-button round type="danger"  >危险按钮</s-button>
</template>

::: details 查看代码
```html
<template>
<s-button round   >默认按钮</s-button>
<s-button round type="primary"  >主要按钮</s-button>
<s-button round type="info"  >信息按钮</s-button>
<s-button round type="warning"  >警告按钮</s-button>
<s-button round type="danger"  >危险按钮</s-button>
</template>
```
:::

## 按钮图标

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::tip
图标集合可以参考Icon图标页
:::

<template>
<s-button icon="share"  >默认按钮</s-button>
<s-button icon="success" type="primary"  >主要按钮</s-button>
<s-button icon="info" type="info"  >信息按钮</s-button>
<s-button icon="warning" type="warning"  >警告按钮</s-button>
<s-button icon="delete" type="danger"  >危险按钮</s-button>
</template>

::: details 查看代码
```html
<template>
<s-button icon="share"  >默认按钮</s-button>
<s-button icon="success" type="primary"  >主要按钮</s-button>
<s-button icon="info" type="info"  >信息按钮</s-button>
<s-button icon="warning" type="warning"  >警告按钮</s-button>
<s-button icon="delete" type="danger"  >危险按钮</s-button>
</template>
```
:::

## 按钮点击事件

支持click点击事件，disabled状态下不可点击


<template>
<s-button type="primary" @click="handleClick">点我有惊喜</s-button>
<s-button type="info"  disabled>点坏鼠标也没用</s-button>
</template>

<script>
export default {
    methods: {
        handleClick(){
            alert('惊喜不惊喜');
        }
    },
}
</script>

::: details 查看代码
```html
<template>
<s-button type="primary" @click="handleClick">点我有惊喜</s-button>
<s-button type="info"  disabled>点坏鼠标也没用</s-button>
</template>

<script>
export default {
    methods: {
        handleClick(){
            alert('惊喜不惊喜');
        }
    },
}
</script>
```
:::



### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| ---  | ---  | --- | --- | --- |
type	| 类型 |	string	| primary/warning/danger/ info |	—
round |	是否圆角按钮 |	boolean |	— |	false
circle |	是否圆形按钮 |	boolean	| — |	false
disabled |	是否禁用状态 |	boolean |	— |	false
icon |	图标类名 |	string |	— |	—
native-type |	原生 type 属性 |	string |	button/submit/ reset |	button


