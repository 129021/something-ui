<template>
  <div class="mask">
    <transition name="fade">
      <div class="s-toast" v-if="visible">
        <span class="s-toast-content">我是Toast</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      visible: false,
    };
  },
  props: {
    message: {
      type: String,
      default: "我是toast，从props传过来的",
    },

    duration: {
      type: Number,
      default: 1500,
    },
  },
  mounted() {
    this.visible = true;

    document.body.appendChild(this.$el);
    this.startTimer();
  },

  methods: {
    startTimer() {
      let timer = setTimeout(() => {
        this.visible = false;
      }, this.duration);

      this.$once("hook:beforeDestory", () => {
        clearTimeout(timer);
        timer = null;
      });
    },

    destoryElement() {
      this.$destory();
    },
  },

  deforeDestory() {
    this.$el.removeEventListener("transitionend", this.destoryElement);
    this.$el.parentNode.removeChild(this.$el);
  },
  destory() {},

  watch: {
    visible(newValue) {
      if (!newValue) {
        this.$el.addEventListener("transitionend", this.destoryElement);
        this.$emit("onClose");
        document.body.removeChild(this.$el);

      }
    },
  },
};
</script>

<style >

</style>