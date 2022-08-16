<template>
  <div class="mask">
    <transition
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
    </transition>
    <div class="modal-content" v-if="visible">
      <TempComponent @close="close"> </TempComponent>
    </div>
  </div>
</template>

<script>
export default {
  name: " Modal",
  data() {
    return {
      visible: false,
    };
  },

  components: {
    TempComponent: null,
  },

  mounted() {
    this.createElement();
  },

  methods: {
    createElement() {
      this.visible = true;
      document.body.appendChild(this.$el);
    },

    close() {
      this.visible = false;
    },

    destoryElement() {
      this.$destroy();
    },
  },

  beforeDestroy() {
    this.$el.parentNode.removeChild(this.$el);
  },

  watch: {
    visible(newValue) {
      if (!newValue) {
        this.$el.addEventListener("animationend", this.destoryElement, false);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../../css/modal.scss";
</style>