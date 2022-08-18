<template>
  <div><slot></slot></div>
</template>

<script>
export default {
  name: "s-checkboxgroup",
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

<style >

</style>