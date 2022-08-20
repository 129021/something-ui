<template>
  <svg class="icon" aria-hidden="true" @click="handlerClick">
    <use :xlink:href="IconName"></use>
  </svg>
</template>

<script>
// import "./js/iconfont";
export default {
  name: "s-icon",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  mounted () {
    import('../components/js/iconfont').then(icon => {})
  },
  computed: {
    IconName() {
      return `#icon-${this.name}`;
    },
  },

  methods: {
    handlerClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped lang="scss">
@import './css/icon.scss'

</style>