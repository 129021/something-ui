<template>
  <div><slot></slot></div>
</template>

<script>
export default {
  name: "CheckBoxGroup",
  props: {
    value: {
      type: Array,
    },
  },
  provide() {
    return {
      CKGroup: this,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../../css/checkbox.scss";
</style>