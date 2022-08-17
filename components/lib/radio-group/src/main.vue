<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "RadioGroup",
  props: {
    value: {
      type: [String, Number],
    },
  },
  provide() {
    return {
      RadioGroup: this,
    };
  },
};
</script >

<style >

</style>