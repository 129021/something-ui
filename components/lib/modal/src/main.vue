<template>
  <div class="mask">
    <transition
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
      <div class="modal-content" v-if="visible">
        <TempComponent
          @close="close"
          :params="params"
          @success="successCallback"
          @fail="failCallback"
        >
        </TempComponent>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "s-modal",
  data() {
    return {
      visible: false,
    };
  },

  props: {
    template: null,
    params: Object,
    success: Function,
    fail: Function,
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

    successCallback(data) {
      this.success(data);
      this.close();
    },

    failCallback(data) {
      this.fail(data);
      this.close();
    },
  },

  beforeDestroy() {
    this.$el.parentNode.removeChild(this.$el);
  },

  watch: {
    visible(newValue) {
      if (!newValue) {
        console.log("动画结束了");
        // this.$el.addEventListener("transitionend", this.destroyElement);
        this.$el.addEventListener("animationend", this.destoryElement, false);
      }
    },
  },
};
</script>

<style >
</style>