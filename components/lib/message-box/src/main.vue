<template>
  <div class="mask">
    <transition name="message-fade">
      <div class="s-message-box" v-if="visible">
        <div class="s-message-box__header">{{ title }}</div>
        <div class="s-message-box__content">{{ content }}</div>
        <div class="s-message-box__footer">
          <template v-if="type === 'confirm'">
            <Button size="small" @click="cancelHandle">取消</Button></template
          >

          <Button type="primary" size="small" @click="confirmHandle">
            确定
          </Button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
  props: {
    title: {
      type: String,
      default: "温馨提示",
    },
    content: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "confirm",
    },
    onOK: Function,
    onCancel: Function,
  },
  data() {
    return {
      visible: false,
    };
  },

  mounted() {
    this.createElement();
  },
  methods: {
    createElement() {
      this.visible = true;
      document.body.appendChild(this.$el);
    },

    cancelHandle() {
      this.onCancel();
      this.close();
    },
    confirmHandle() {
      this.onOK();
      this.close();
    },

    close() {
      this.visible = false;
    },
    destroyElement() {
      this.$destroy();
    },
  },

  deforeDestory() {
    this.$el.parentNode.removeChild(this.$el);
  },

  watch: {
    visible(newValue) {
      if (!newValue) {
        this.$el.addEventListener("transitionend", this.destroyElement);
      }
    },
  },
};
</script>

<style >

</style>