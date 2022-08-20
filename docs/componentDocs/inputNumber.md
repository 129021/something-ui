# InputNumber计数器

仅允许输入标准的数字值，可定义范围

## 基础用法

<s-inputnumber
        v-model="count"
        :step="1"
        :max="10"
        :min="1"
        style="width:300px; margin:10px 0">
</s-inputnumber>

<script>
  export default {
    data() {
      return {
        count: 1
      };
    },
  };
</script>


::: details 查看代码
```html
<s-inputnumber
        v-model="count"
        :step="1"
        :max="10"
        :min="1"
        style="width:300px; margin:10px 0">
</s-inputnumber>

<script>
  export default {
    data() {
      return {
        count: 1
      };
    },
  };
</script>
```
:::



## 禁用状态

<s-inputnumber
       disabled
        v-model="count2"
        :step="1"
        style="width:300px; margin:10px 0">
</s-inputnumber>

<script>
  export default {
    data() {
      return {
        count: 1
      };
    },
  };
</script>


::: details 查看代码
```html
<s-inputnumber
        disabled
        v-model="count"
        :step="1"
        style="width:300px; margin:10px 0">
</s-inputnumber>

<script>
  export default {
    data() {
      return {
        count: 1
      };
    },
  };
</script>
```
:::

## 步数

允许定义递增递减的步数控制

<s-inputnumber
        v-model="count3"
        :step="2"
        style="width:300px; margin:10px 0">
</s-inputnumber>

<script>
  export default {
    data() {
      return {
        count: 1
      };
    },
  };
</script>


::: details 查看代码
```html
<s-inputnumber
        v-model="count"
        :step="2"
        :max="10"
        :min="1"
        style="width:300px; margin:10px 0">
</s-inputnumber>

<script>
  export default {
    data() {
      return {
        count: 1
      };
    },
  };
</script>
```
:::




## 限定计数范围

超出或小于范围 禁止操作

<s-inputnumber
        v-model="count4"
        :step="1"
        :max="10"
        :min="1"
        style="width:300px; margin:10px 0">
</s-inputnumber>

<script>
  export default {
    data() {
      return {
        count: 1
      };
    },
  };
</script>


::: details 查看代码
```html
<s-inputnumber
        v-model="count"
        :step="1"
        :max="10"
        :min="1"
        style="width:300px; margin:10px 0">
</s-inputnumber>

<script>
  export default {
    data() {
      return {
        count: 1
      };
    },
  };
</script>
```
:::

## 精度

<s-inputnumber
        :precision='2'
        v-model="count5"
        :step="0.1"
        style="width:300px; margin:10px 0">
</s-inputnumber>

<script>
  export default {
    data() {
      return {
        count: 1
      };
    },
  };
</script>


::: details 查看代码
```html
<s-inputnumber
        :precision='2'
        v-model="count"
        :step="1"
        style="width:300px; margin:10px 0">
</s-inputnumber>

<script>
  export default {
    data() {
      return {
        count: 1
      };
    },
  };
</script>
```
:::

::: tip
`precision` 的值必须是一个非负整数，并且不能小于 `step` 的小数位数。
:::

## 尺寸

额外提供了 medium、small 两种尺寸的数字输入框

<s-inputnumber
        medium
        :precision='2'
        v-model="count6"
        :step="0.1"
        style="width:300px; margin:10px 0">
</s-inputnumber>

<s-inputnumber
        :precision='2'
        v-model="count7"
        :step="0.1"
        style="width:300px; margin:10px 0">
</s-inputnumber>

<s-inputnumber
        size="small"
        :precision='2'
        v-model="count8"
        :step="0.1"
        style="width:300px; margin:10px 0">
</s-inputnumber>

<script>
  export default {
    data() {
      return {
        count: 1,
        count2: 1,
        count3: 1,
        count4: 1,
        count5: 1,
        count6: 1,
        count7: 1,
        count8: 1,
      };
    },
  };
</script>

::: details 查看代码
```html
<s-inputnumber
        medium
        :precision='2'
        v-model="count6"
        :step="0.1"
        style="width:300px; margin:10px 0">
</s-inputnumber>

<s-inputnumber
        :precision='2'
        v-model="count7"
        :step="0.1"
        style="width:300px; margin:10px 0">
</s-inputnumber>

<s-inputnumber
        size="small"
        :precision='2'
        v-model="count8"
        :step="0.1"
        style="width:300px; margin:10px 0">
</s-inputnumber>

<script>
  export default {
    data() {
      return {
        count: 1,
        count1: 1,
        count2: 1,
      };
    },
  };
</script>
```
:::

::: tip
`precision` 的值必须是一个非负整数，并且不能小于 `step` 的小数位数。
:::

## Attributes

参数 |	说明	| 类型 | 可选值 |	默认值
--- | --- | --- | --- | --- 
value/v-model | 	绑定值 | 	number | 	— |	0
min	 | 设置计数器允许的最小值	| number |	— |	-Infinity
max	 | 设置计数器允许的最大值 |	number |	— |	Infinity
step |	计数器步长 |	number |	— |	1
precision |	数值精度 |	number |	— |	—
disabled |	是否禁用计数器	| boolean |	— |	false
name |	原生属性	| string |	— |	—


## Events

事件名称 |	说明 |	回调参数
--- |--- |---
change |	绑定值被改变时触发 |	currentValue, oldValue
blur |	在组件 Input 失去焦点时触发 |	(event: Event)
focus |	在组件 Input 获得焦点时触发 |	(event: Event)

## Methods

方法名 |	说明 |	参数
--- |  --- | ---
focus |	使 input 获取焦点 |	-