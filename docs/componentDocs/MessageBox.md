# MessageBox弹框

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。

::: tip
从场景上说，MessageBox 的作用是美化系统自带的 alert、confirm 和 prompt，因此适合展示较为简单的内容。如果需要弹出较为复杂的内容，请使用 Dialog。
:::

## 消息提示

当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。

 <s-button  @click="showMessageBox">点击打开Message Box</s-button>

 <script>
  export default {
    methods: {
      showMessageBox() {
      this.$alert({
        title: "我是标题",
        content: "我是内容",
        onOk: () => {
        //   alert("OK");
          this.$message({
            message: "ok",
            duration: 1500,
            position: "center",
            type: "success",
          });
        },
        onCancel: () => {
          alert("cancel");
        },
      });
    },
    }
  }
</script>

::: details 查看代码
```html
<s-button type="primary" @click="showMessageBox">点击打开Message Box</s-button>

 <script>
  export default {
    methods: {
      showMessageBox() {
      this.$alert({
        title: "我是标题",
        content: "我是内容",
        onOk: () => {
        //   alert("OK");
          this.$message({
            message: "ok",
            duration: 1500,
            position: "center",
            type: "success",
          });
        },
        onCancel: () => {
          alert("cancel");
        },
      });
    },
    }
  }
</script>
```
:::


## 确认消息

提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。


<s-button  @click="showMessageBox2">点击打开Message Box</s-button>

 <script>
  export default {
    methods: {
        showMessageBox() {
      this.$alert({
        title: "我是标题",
        content: "我是内容",
        onOk: () => {
        //   alert("OK");
          this.$message({
            message: "ok",
            duration: 1500,
            position: "center",
            type: "success",
          });
        },
        onCancel: () => {
          alert("cancel");
        },
      });
    },
      showMessageBox2() {
      this.$confirm({
        title: "提示",
        content: "此操作将永久删除该文件, 是否继续?",
        onOk: () => {
          alert("删除成功");
        //   this.$message({
        //     message: "ok",
        //     duration: 1500,
        //     position: "center",
        //     type: "success",
        //   });
        },
        onCancel: () => {
          alert("已取消删除");
        },
      });
    },
    }
  }
</script>

::: details 查看代码
```html

<s-button  @click="showMessageBox2">点击打开Message Box</s-button>

 <script>
  export default {
    methods: {
      showMessageBox2() {
      this.$confirm({
        title: "提示",
        content: "此操作将永久删除该文件, 是否继续?",
        onOk: () => {
          alert("删除成功");
        },
        onCancel: () => {
          alert("已取消删除");
        },
      });
    },
    }
  }
</script>

```
:::

## 全局方法

如果你完整引入了 Element，它会为 Vue.prototype 添加如下全局方法： $alert, $confirm 。因此在 Vue instance 中可以采用本页面中的方式调用 `MessageBox`。调用参数为：

- `$alert(message, title, options)` 或 `$alert(message, options)`
- `$confirm(message, title, options)` 或 `$confirm(message, options)`

## 单独引用

如果单独引入 MessageBox：

```js
import 'something-ui/dist/css/demo.css';
import  MessageBox  from 'element-ui';
Vue.use( MessageBox )
```

那么对应于上述两个全局方法的调用方法依次为： MessageBox.alert, MessageBox.confirm ，调用参数与全局方法相同

## Options
 
参数 |	说明 |	类型 |	可选值 |	默认值
--- | --- | --- | --- | ---
title |	MessageBox | 标题 |	string | 	— |	—
content |	MessageBox | 消息正文内容 |	string |	— |	—
type |	消息类型，用于显示图标 |	string |	success/info/warning/error |	—




