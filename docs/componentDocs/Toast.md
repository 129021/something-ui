# Toast轻提示

简单的消息提示框

## 基础用法

气泡信息提示

<template>
 <s-button  @click="showToast">点击出现 Toast</s-button>
</template>


<script>
export default {
    methods:{
  showToast() {
      this.$toast({
        message: "hello world",
        duration: 8000,
        onClose: () => {
        console.log('Toast closed');
        },
      });
    },
    }
}
</script>

::: details 查看代码
```html
<template>
 <s-button  @click="showToast">点击出现 Toast</s-button>
</template>


<script>
export default {
    methods:{
  showToast() {
      this.$toast({
        message: "hello world",
        duration: 3000,
        onClose: () => {
          alert("close");
        },
      });
    },
    }
}
</script>
```
:::


## 携带回调函数

Toast提示可以携带回调函数

<template>
 <s-button  @click="showToastCallback">点击出现 Toast</s-button>
</template>


<script>
export default {
    methods:{
  showToast() {
      this.$toast({
        message: "hello world",
        duration: 1000,
        onClose: () => {
        //   alert("close");
        console.log('toast closed');
        },
      });
    },

    showToastCallback(){
        this.$toast({
            message:'我是Toast',
            onClose:()=>{
            this.$message({
                message:'我是回调函数',
                type:'success',
                position:'center'
            })
            }
           
        })
    }
    }
}
</script>

::: details 查看代码
```html
<template>
 <s-button  @click="showToast">点击出现 Toast</s-button>
</template>


<script>
export default {
    methods:{
  showToastCallback(){
        this.$toast({
            message:'我是Toast',
            onClose:()=>{
            this.$message({
                message:'我是回调函数',
                type:'success',
                position:'center'
            })
            }
           
        })
    }
    }
}
</script>
```
:::

## Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
--- | --- | --- | --- | ---
message | 消息文字 | string | 	— |	—
duration | 显示时间，毫秒。设为0则不会自动关闭 | number | — | 3000