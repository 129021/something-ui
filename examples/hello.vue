<template>
  <div>
    这是一个modal内容
    <Button type="primary" @click="closeMe">close</Button>
  </div>
</template>

<script>
export default {
  methods: {
    closeMe() {
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>