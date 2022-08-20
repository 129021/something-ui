# Radio单选框

在一组备选项中进行单选

## 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

  <s-radio v-model="sex" label="male"></s-radio>
  <s-radio v-model="sex" label="female"></s-radio>
  <s-radio v-model="sex" label="other"></s-radio>

  <script>
  export default {
    data () {
      return {
        sex: 'male'
      };
    }
  }
</script>


::: details 查看代码
```html
  <s-radio v-model="sex" label="male"></s-radio>
  <s-radio v-model="sex" label="female"></s-radio>
  <s-radio v-model="sex" label="other"></s-radio>

  <script>
  export default {
    data () {
      return {
        sex: 'male'
      };
    }
  }
</script>
```
:::


## 单选框组

适用于在多个互斥的选项中选择的场景

<s-radiogroup v-model="ball">
  <s-radio label="basketball"></s-radio>
  <s-radio label="football"></s-radio>
  <s-radio label="tennis"></s-radio>
</s-radiogroup>

<script>
  export default {
    data () {
      return {
        ball:'football',
                sex: 'male'
      };
    }
  }
</script>

::: details 查看代码
```html
  <s-radiogroup v-model="ball">
  <s-radio label="basketball"></s-radio>
  <s-radio label="football"></s-radio>
  <s-radio label="tennis"></s-radio>
</s-radiogroup>

<script>
  export default {
    data () {
      return {
        ball:'football'
      };
    }
  }
</script>
```
:::


## Radio Attributes

参数 |	说明 |	类型 |	可选值 |	默认值
--- |  --- | --- | --- | ---
value/v-model | 	绑定值 |	string/number/boolean |	— |	—
label |	Radio的 value |	string/number/boolean |	— |	—
name |  	原生 name 属性 |	string |	— |	—

## Radio Events

事件名称 |  	说明 |	回调参数
--- | --- | ---
change |	绑定值变化时触发的事件 |	选中的 Radio label 值
