<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "s-radiogroup",
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