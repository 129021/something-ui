# Modal对话框

对于复杂的弹窗内容，可以使用Modal组件，它可以弹出任何复杂的Vue组件文件



## 基础使用

可以在template中编写任意`Modal`内容

<s-button  @click="showModal">点击打开 Modal</s-button>

<script>
  import Hello from './examples/hello.vue'
  export default {
    methods: {
     showModal() {
      this.$modal({
        template: Hello,
        // params: {
        //   name: "我是外部传过来的参数",
        // },
        success: (data) => {
          console.log(data);
        },
        fail: (data) => {
          console.log(data);
        },
      });
    },
    }
  };
</script>

::: details 查看代码
```html
<s-button  @click="showModal">点击打开 Modal</s-button>

<script>
  import Hello from './examples/hello.vue'
  export default {
    methods: {
     showModal() {
      this.$modal({
        template: Hello,
        // params: {
        //   name: "我是外部传过来的参数",
        // },
        success: (data) => {
          console.log(data);
        },
        fail: (data) => {
          console.log(data);
        },
      });
    },
    }
  };
</script>
```
:::

## 传递参数

调用方可以向Modal里传递任何参数

<s-button  @click="passParams">点击打开 Modal</s-button>

<script>
  import Hello from './examples/demo.vue'
  export default {
    methods: {
        showModal() {
      this.$modal({
        template: Hello,
        // params: {
        //   name: "我是外部传过来的参数",
        // },
        success: (data) => {
          console.log(data);
        },
        fail: (data) => {
          console.log(data);
        },
      });
    },
     passParams() {
      this.$modal({
        template: Hello,
        params: {
          name: "我是外部传过来的参数",
        },
        success: (data) => {
          console.log(data);
        },
        fail: (data) => {
          console.log(data);
        },
      });
    },
    }
  };
</script>

## Attributes

参数 |	说明 |	类型 |	可选值 |	默认值
--- |  --- | --- | --- | ---
template | 弹框中的内容（是一个Vue文件） | Vue component | — |	—
params | 调用方向弹框（Vue）文件传递的参数 | Object | — |	—
success | 成功回调函数 | Function | — |	—
fail | 失败回调函数 | Function | — |	—





