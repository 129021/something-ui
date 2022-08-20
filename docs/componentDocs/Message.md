# Message消息提示

常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。


## 基础用法

从顶部出现，3 秒后自动消失。

<template>
<s-button  @click="showMessage">打开消息提示</s-button>
</template>

   <script>
    export default{
        methods:{
            showMessage() {
            this.$message({
            message: "这是一条成功消息",
            duration: 3000,
            autoClose: true,
            position: "center",
             type: "success",
            });
            }, 
        }
    }
 </script>

 
::: details 查看代码
```html
 <s-button  @click="showMessage" >打开消息提示</s-button>

 <script>
    export default {
        methods: {
            showMessage() {
            this.$message({
            message: "我是一个message消息",
            duration: 3000,
            autoClose: true,
            position: "center",
             type: "success", 
            });
            },
        }
    }
 </script>
```
:::


## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

 <s-button type="primary" @click="showMessage2" title="click">成功</s-button>
  <s-button type="warning" @click="showMessage3" title="click">警告</s-button> 
  <s-button type="info" @click="showMessage4" title="click">消息</s-button>
 <s-button type="danger" @click="showMessage5" title="click">错误</s-button>

   <script>
    export default{
        methods:{
              showMessage() {
            this.$message({
            message: "这是一条成功消息",
            duration: 3000,
            autoClose: true,
            position: "center",
             type: "success",
            });
            }, 
            showMessage2() {
            this.$message({
            message: "这是一条成功消息",
            duration: 3000,
            autoClose: true,
            position: "center",
             type: "success",
            });
            }, showMessage3() {
            this.$message({
            message: "这是一条警告消息",
            duration: 3000,
            autoClose: true,
            position: "center",
             type: "warning",
            });
            }, showMessage4() {
            this.$message({
            message: "这是一条提示消息",
            duration: 3000,
            autoClose: true,
            position: "center",
            type: "info",
            });
            }, showMessage5() {
            this.$message({
            message: "这是一条失败消息",
            duration: 3000,
            autoClose: true,
            position: "center",
            type: "error",
            });
            },
        }
    }
 </script>


 ::: details 查看代码
```html
 <s-button  @click="showMessage2" title="click">成功</s-button>
  <s-button  @click="showMessage3" title="click">警告</s-button> 
  <s-button  @click="showMessage4" title="click">消息</s-button>
 <s-button  @click="showMessage5" title="click">错误</s-button>

   <script>
    export default{
        methods:{
            showMessage2() {
            this.$message({
            message: "这是一条成功消息",
            duration: 3000,
            autoClose: true,
            position: "center",
             type: "success",
            });
            }, showMessage3() {
            this.$message({
            message: "这是一条警告消息",
            duration: 3000,
            autoClose: true,
            position: "center",
             type: "warning",
            });
            }, showMessage4() {
            this.$message({
            message: "这是一条提示消息",
            duration: 3000,
            autoClose: true,
            position: "center",
            type: "info",
            });
            }, showMessage5() {
            this.$message({
            message: "这是一条失败消息",
            duration: 3000,
            autoClose: true,
            position: "center",
            type: "error",
            });
            },
        }
    }
 </script>
```
:::

## 可关闭

可以添加关闭按钮。

 <s-button  @click="showMessage6" title="click">可关闭</s-button>
   <script>
    export default{
        methods:{
            showMessage6() {
            this.$message({
            message: "这是一条可关闭消息",
            duration: 3000,
            autoClose: true,
            position: "center",
             type: "success",
            });
            },
        }
    }
 </script>


 ::: details 查看代码
```html
 <s-button  @click="showMessage6" title="click">可关闭</s-button>
   <script>
    export default{
        methods:{
            showMessage6() {
            this.$message({
            message: "这是一条可关闭消息",
            duration: 3000,
            autoClose: true,
            position: "center",
             type: "success",
            });
            }, 
        }
    }
 </script>
```
:::

##  不可自动关闭

不能自动关闭，只能手动关闭

 <s-button  @click="showMessage7" title="click">不可自动关闭</s-button>
   <script>
    export default{
        methods:{
            showMessage7() {
            this.$message({
            message: "这是一条不可自动关闭消息",
            autoClose: false,
            position: "center",
             type: "info",
            });
            },
        }
    }
 </script>


 ::: details 查看代码
```html
 <s-button  @click="showMessage7" title="click">不可自动关闭</s-button>
   <script>
    export default{
        methods: {
            showMessage7() {
            this.$message({
            message: "这是一条不可自动关闭消息",
            autoClose: false,
            position: "center",
             type: "info",
            });
            }, 
        }
    }
 </script>
```
:::

## 出现在不同的位置

Message消息提示 可以根据情况出现在屏幕的左中右三个地方

 <s-button  @click="showMessage8" title="click">左边</s-button>
 <s-button  @click="showMessage9" title="click">中间</s-button>
 <s-button  @click="showMessage10" title="click">右边</s-button>
   <script>
    export default{
        methods: {
             showMessage() {
            this.$message({
            message: "我是一个message消息",
            duration: 3000,
            autoClose: true,
            position: "center",
             type: "success", 
            });
            },
                 showMessage2() {
            this.$message({
            message: "这是一条成功消息",
            duration: 3000,
            autoClose: true,
            position: "center",
             type: "success",
            });
            }, showMessage3() {
            this.$message({
            message: "这是一条警告消息",
            duration: 3000,
            autoClose: true,
            position: "center",
             type: "warning",
            });
            }, showMessage4() {
            this.$message({
            message: "这是一条提示消息",
            duration: 3000,
            autoClose: true,
            position: "center",
            type: "info",
            });
            }, showMessage5() {
            this.$message({
            message: "这是一条失败消息",
            duration: 3000,
            autoClose: true,
            position: "center",
            type: "error",
            });
            },
              showMessage6() {
            this.$message({
            message: "这是一条可关闭消息",
            duration: 3000,
            autoClose: true,
            position: "center",
             type: "success",
            });
            },
            showMessage7() {
            this.$message({
            message: "这是一条不可自动关闭消息",
            autoClose: false,
            position: "center",
             type: "info",
            });
            }, 
            showMessage8() {
            this.$message({
            message: "消息出现在屏幕左边",
            autoClose: true,
            position: "left",
             type: "info",
            });
            }, 
             showMessage9() {
            this.$message({
            message: "消息出现在屏幕中间",
            autoClose: true,
            position: "center",
             type: "info",
            });
            }, 
             showMessage10() {
            this.$message({
            message: "消息出现在屏幕右边",
            autoClose: true,
            position: "right",
             type: "info",
            });
            }, 
        }
    }
 </script>


 ::: details 查看代码
```html
 <s-button  @click="showMessage8" title="click">左边</s-button>
 <s-button  @click="showMessage9" title="click">中间</s-button>
 <s-button  @click="showMessage10" title="click">右边</s-button>
   <script>
    export default{
        methods: {
            showMessage8() {
            this.$message({
            message: "消息出现在屏幕左边",
            autoClose: true,
            position: "left",
             type: "info",
            });
            }, 
             showMessage9() {
            this.$message({
            message: "消息出现在屏幕中间",
            autoClose: true,
            position: "center",
             type: "info",
            });
            }, 
             showMessage10() {
            this.$message({
            message: "消息出现在屏幕右边",
            autoClose: true,
            position: "right",
             type: "info",
            });
            }, 
        }
    }
 </script>
```
:::

## 全局方法

something-ui 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用` Message`。

## Options

参数 |	说明	| 类型 | 可选值 |	默认值
--- | --- | --- | --- | --- 
message |	消息文字 |	string |	—	| —
type |	主题 |	string |	success/warning/info/error |	info
duration |	显示时间, 毫秒。设为 0 则不会自动关闭 |	number |	— |	3000
onClose |	关闭时的回调函数, 参数为被关闭的 message 实例 |	function |	— |	—


## 方法

调用 Message 或 this.$message 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 `close `方法。


方法名 |	说明
--- | ---
close |	关闭当前的 Message


