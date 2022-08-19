<template>
  <div class="preview-container" :style="computedStyle">
    <img
      class="img-container"
      :src="params.url"
      ref="previewImage"
      @load="loadImage"
      alt=""
    />
    <span class="close-btn" @click="handleClose">
      <Icon name="close"></Icon>
    </span>
  </div>
</template>

<script>
export default {
  name: "s-preview",
  props: {
    params: Object,
  },
  data() {
    return {
      computedStyle: null,
    };
  },
  methods: {
    loadImage() {
      if (this.$el.offsetHeight >= document.documentElement.clientHeight) {
        this.computedStyle = {
          height: document.documentElement.clientHeight - 100 + "px",
          overflow: "auto",
        };
      }
    },
    handleClose() {
      this.$emit("close");
    },
  },
};
</script>

<style >
</style>