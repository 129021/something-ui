<template>
  <div>
    这是一个modal内容
    <Button type="primary" @click="closeMe">close</Button>
    <h2>我是传递过来的参数：{{ params.name }}</h2>
  </div>
</template>

<script>
export default {
  name: "Hello",
  props: {
    params: Object,
  },
  methods: {
    closeMe() {
      // this.$emit("close");
      this.$emit("success", {
        status: "success",
      });

      // this.fail("fail", {
      //   status: "fail",
      // });
    },
  },
};
</script>

<style>
</style>