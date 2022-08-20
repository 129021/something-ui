# Input输入框

通过鼠标或键盘输入字符

:::warning
Input 为受控组件，它总会显示 Vue 绑定值。

通常情况下，应当处理 input 事件，并更新组件的绑定值（或使用v-model）。否则，输入框内显示的值将不会改变。

不支持 v-model 修饰符。
:::

## 基础用法
<s-input placeholder="please input the password" v-model="msg" style="width:300px ;margin:30px 0"></s-input>
<script>
export default {
  data() {
    return {
      msg: ''
    }
  }
}
</script>


::: details 查看代码
```html
<s-input placeholder="please input the password" v-model="msg" ></s-input>
<script>
export default {
  data() {
    return {
      msg: ''
    }
  }
}
```
:::

## 禁用状态

<s-input  disabled v-model="msg2" style="width:300px ;margin:30px 0"></s-input>
<script>
export default {
  data() {
    return {
      msg2: ''
    }
  }
}
</script>


::: details 查看代码
```html
<s-input disabled v-model="msg" ></s-input>
<script>
export default {
  data() {
    return {
      msg: ''
    }
  }
}
```
:::

## 可清空

<s-input placeholder="please input the password" clearable v-model="msg3" style="width:300px ;margin:30px 0"></s-input>
<script>
export default {
  data() {
    return {
      msg3: ''
    }
  }
}
</script>


::: details 查看代码
```html
<s-input placeholder="please input the password" v-model="msg"  clearable></s-input>
<script>
export default {
  data() {
    return {
      msg: ''
    }
  }
}
```
:::


## 文本域

<s-input placeholder="please input the password" type="textarea" v-model="msg4" ></s-input>
<script>
export default {
  data() {
    return {
      msg4: ''
    }
  }
}
</script>


::: details 查看代码
```html
<s-input placeholder="please input the password" v-model="msg"  type="textarea"></s-input>
<script>
export default {
  data() {
    return {
      msg: ''
    }
  }
}
```
:::


## 文字居中

<s-input placeholder="please input the password" center v-model="msg5" style="width:300px ;margin:30px 0"></s-input>
<script>
export default {
  data() {
    return {
      msg5: ''
    }
  }
}
</script>


::: details 查看代码
```html
<s-input placeholder="please input the password" v-model="msg"  center></s-input>
<script>
export default {
  data() {
    return {
      msg: ''
    }
  }
}
```
:::

## 复合型输入框

可前置或后置元素，一般为标签或按钮

  <div class="input-warpper">
      <s-input
        placeholder="please input the password"
        clearable
        center
        medium
        v-model="msg6"
        style="margin:10px 0"
      >
        <template slot="prepend">https:// </template>
        <template slot="append">.com </template>
      </s-input>
    </div>

  <div class="input-warpper">
      <s-input
        placeholder="please input the password"
        clearable
        center
        medium
        v-model="msg7"
        style="margin:10px 0"
      >
        <template slot="prepend">https:// </template>
      </s-input>
    </div>

  <div class="input-warpper">
      <s-input
        placeholder="please input the password"
        clearable
        center
        medium
        v-model="msg8"
        style="margin:10px 0"
      >
        <template slot="append">.com </template>
      </s-input>
    </div>
<script>
export default {
  data() {
    return {
      msg6: '',
      msg7:'',
      msg8:''
    }
  }
}
</script>


::: details 查看代码
```html

   <div class="input-warpper">
      <s-input
        placeholder="please input the password"
        clearable
        center
        medium
        v-model="msg"
        style="margin:10px 0"
      >
        <template slot="prepend">https:// </template>
        <template slot="append">.com </template>
      </s-input>
    </div>

  <div class="input-warpper">
      <s-input
        placeholder="please input the password"
        clearable
        center
        medium
        v-model="msg1"
        style="margin:10px 0"
      >
        <template slot="prepend">https:// </template>
      </s-input>
    </div>

  <div class="input-warpper">
      <s-input
        placeholder="please input the password"
        clearable
        center
        medium
        v-model="msg2"
        style="margin:10px 0"
      >
        <template slot="append">.com </template>
      </s-input>
    </div>
<script>
export default {
  data() {
    return {
      msg: '',
      msg1:'',
      msg2:''
    }
  }
}
</script>
```
:::




## 尺寸

<s-input placeholder="please input the password"  v-model="msg9" style="margin:10px 0"></s-input>
<s-input placeholder="please input the password" v-model="msg10" style="margin:10px 0" size="medium" ></s-input>
<s-input placeholder="please input the password" v-model="msg11" style="margin:10px 0" size="small"></s-input>
<script>
export default {
  data() {
    return {
      msg: '',
      msg2: '',
      msg3: '',
      msg4: '',
      msg5: '',
      msg6: '',
      msg7: '',
      msg8: '',
      msg9: '',
      msg10: '',
      msg11: ''
    }
  }
}
</script>


::: details 查看代码
```html
<s-input placeholder="please input the password" v-model="msg" ></s-input>
<s-input placeholder="please input the password" v-model="msg" medium></s-input>
<s-input placeholder="please input the password" v-model="msg" small></s-input>
<script>
export default {
  data() {
    return {
      msg: ''
    }
  }
}
```
:::


## Input Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
type | 类型 | string | text，textarea 和其他[原生input的type值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text
value/v-model | 绑定值 | string/number | —	| —
maxlength | 原生属性，最大输入长度 | number | —	| —
minlength | 原生属性，最小输入长度 | number | —	| —
placeholder |	输入框占位文本 | 	string | 	—	| —
clearable	| 是否可清空 |	boolean |	—	| false
disabled	| 禁用	| boolean	| —	 | false
size	| 输入框尺寸，只在 type!="textarea" 时有效 |	string |	medium / small  |	—
name	| 原生属性	| string |	— |	—
readonly	| 原生属性，是否只读	|  boolean |	— |	false
max	 | 原生属性，设置最大值 |	— |	— |	—
min |	原生属性，设置最小值 |	— |	—	| —
step |	原生属性，设置输入字段的合法数字间隔 |	— |	— |	—
autofocus |  	原生属性，自动获取焦点 |	boolean |	true, false |	false
form	| 原生属性	| string |	—	| —


## Input Slots
name | 说明
--- | ---
prefix	 | 输入框前置内容，只对 `type="text"` 有效
append |	输入框后置内容，只对 `type="text"`有效



## Input Events
事件名称 | 说明 | 回调参数
--- | --- | ---
blur |   	在 Input 失去焦点时触发 |	(event: Event)
focus |	在 Input 获得焦点时触发 |	(event: Event)
change |	仅在输入框失去焦点或用户按下回车时触发 |	(value: string | number)
input |	在 Input 值改变时触发 |	(value: string | number)
clear |	在点击由 `clearable` 属性生成的清空按钮时触发 |	—


## Input Methods
方法名 | 说明 | 参数
--- | --- | --- 
focus | 使 input 获取焦点 |	—
blur |	使 input 失去焦点 |	—



