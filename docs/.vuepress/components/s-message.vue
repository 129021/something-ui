<template>
  <transition name="message-fade">
    <div
      class="s-message"
      :class="computedClass"
      v-if="visible"
      :style="computedStyle"
    >
      <div class="s-message__content">
        <span v-if="type">
          <s-icon :name="getIconName"></s-icon>
        </span>
        {{ message }}
        <span class="close-btn" @click="closeMessage">
          <s-icon name="clear"></s-icon>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "s-message",
  props: {
    message: {
      type: String,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String,
      default: "right",
    },

    type: {
      type: String,
      validator: (value) => {
        return ["success", "error", "info", "warning"].includes(value);
      },
    },
  },
  
  data() {
    return {
      visible: false,
      verticalTop: 0,
      baseOffset: 16,
    };
  },
  mounted() {
    if (this.autoClose) {
      this.startTimer();
    }

    this.createElement();
  },
  methods: {
    createElement() {
      this.visible = true;
      document.body.appendChild(this.$el);
    },

    closeMessage() {
      this.visible = false;
    },

    startTimer() {
      let timer = setTimeout(() => {
        this.visible = false;
      }, this.duration);
      this.$once("hook:beforeDestroy", () => {
        clearTimeout(timer);
        timer = null;
      });
    },
  },
  computed: {
    getIconName() {
      // TODO:success的icon不太对，增加一个带圆圈的success图标
      const ICONS = {
        success: "success",
        error: "clear",
        info: "info",
        warning: "warning",
      };

      return ICONS[this.type];
    },
    computedClass() {
      return {
        [`s-message--${this.type}`]: this.type,
      };
    },
    computedStyle() {
      return {
        top: this.verticalTop + "px",
        ...(this.LR_POSITION && {
          [`${this.position}`]: this.baseOffset + "px",
        }),
        ...(this.CENTER_POSITION && {
          left: "50%",
          marginLeft: "-190px",
        }),
      };
    },

    LR_POSITION() {
      return this.position === "left" || this.position === "right";
    },
    CENTER_POSITION() {
      return this.position === "center";
    },
  },

  deforeDestroy() {
    this.$el.parentNode.removeChild(this.$el);
  },

  watch: {
    visible(newValue) {
      if (!newValue) {
        this.$el.addEventListener("transitionend", () => {
          this.$destroy();
        });
        this.$emit("close");
      }
    },
  },
};
</script>

<style scoped lang="scss" >
@import './css/message.scss';
</style>