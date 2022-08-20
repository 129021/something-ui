# Checkbox多选框

一组备选项中进行多选

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

<s-checkbox v-model="checked" label="备选项"></s-checkbox>

<script>
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
</script>


::: details 查看代码
```html
<s-checkbox v-model="checked" label="备选项"></s-checkbox>

<script>
  export default {
    data() {
      return {
        checked: true
      };
    }
  };
</script>
```
:::


## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

<s-checkboxgroup v-model="animals">
  <s-checkbox label="cat"></s-checkbox>
  <s-checkbox label="dog"></s-checkbox>
  <s-checkbox label="duck"></s-checkbox>
</s-checkboxgroup>

<script>
  export default {
    data () {
      return {
        animals: ['cat'],
         checked: true
      };
    }
  };
</script>

::: details 查看代码
```html
<s-checkboxgroup v-model="animals">
  <s-checkbox label="cat"></s-checkbox>
  <s-checkbox label="dog"></s-checkbox>
  <s-checkbox label="duck"></s-checkbox>
</s-checkboxgroup>

<script>
  export default {
    data () {
      return {
        animals: ['cat']
      };
    }
  };
</script>
```
:::

## Checkbox Attributes

参数 |	说明	| 类型	| 可选值	| 默认值
--- | --- | --- | --- | ---
value/v-model |	绑定值 |	string/number/boolean |	— |	—
label |	选中状态的值 |	string/number/boolean |	— |	—
name |	原生 | name  | 属性 |	string |	— |	—
checked	| 当前是否勾选	| boolean |	— |	false


## Checkbox Events

事件名称	 | 说明	| 回调参数
--- | --- | ---
change |   	当绑定值变化时触发的事件 |	更新后的值

