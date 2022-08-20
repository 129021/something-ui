<template>
  <div>
    我是一个modal 内容
    <s-button
      type="primary"
      @click="closeMe"
    >关闭</s-button>
  </div>
</template>

<script>
export default {
  props: {
    params: Object
  },
  methods: {
    closeMe() {
      this.$emit("close");
      this.$emit("success", {
        status: "success"
      });
      // this.$emit("fail", {
      //   status: "fail"
      // });
    }
  }
};
</script>

<style scoped>
</style>