<!-- <template>
  <div class="mask">
    <transition name="message-fade">
      <div class="s-message-box" v-if="visible">
        <div class="s-message-box__header">{{ title }}</div>
        <div class="s-message-box__content">{{ content }}</div>
        <div class="s-message-box__footer">
          <template v-if="type === 'confirm'">
            <s-button size="small" @click="cancelHandle()">取消</s-button></template
          >

          <s-button type="primary" size="small" @click="confirmHandle()">
            确定
          </s-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "s-messagebox",
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

</style> -->

<template>
  <div class="mask">
    <transition name="message-fade">
      <div class="s-message-box" v-if="visible">
        <div class="s-message-box__header">
          {{ title }}
        </div>
        <div class="s-message-box__content">
          {{ content }}
        </div>
        <div class="s-message-box__footer">
          <template v-if="type === 'confirm'">
            <s-button size="small" @click="clickHandle('cancel')"
              >取消</s-button
            >
          </template>
          <s-button type="primary" size="small" @click="clickHandle('confirm')"
            >确定</s-button
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "s-messagebox",
  props: {
    title: {
      type: String,
      default: "温馨提示",
    },
    content: {
      type: String,
      default: "",
    },
    onOk: Function,
    onCancel: Function,
    type: {
      type: String,
      default: "confirm",
    },
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
    clickHandle(type) {
      if (type === "cancel") {
        this.onCancel();
      } else {
        this.onOk();
      }
      this.close();
    },
    close() {
      this.visible = false;
    },
    destroyElement() {
      this.$destroy();
    },
  },
  beforeDestroy() {
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