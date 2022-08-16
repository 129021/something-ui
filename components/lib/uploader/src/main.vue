<template>
  <div class="s-uploader-wrapper">
    <div class="s-uploader-imagelist">
      <div
        class="s-uploader-container"
        @click="(event) => handleFileUploader(event, 'click')"
      >
        <slot name="uploader-area"></slot>
        <input
          type="file"
          class="s-file__invisible"
          ref="file"
          @change="(event) => handleFileUploader(event, 'change')"
        />
      </div>
    </div>

    <div>
      <slot name="tip"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Uploader",
  props: {
    accept: {
      type: String,
    },
    size: {
      type: Number,
    },
    onSuccess: Function,
    onError: Function,
  },
  data() {
    return {
      sourceFiles: [],
    };
  },
  methods: {
    handleFileUploader(event, type) {
      let handler = {
        click: () => {
          this.$refs.file.click();
        },
        change: (event) => {
          this.sourceFiles = event.target.files;
        },
      };

      handler[type](event);
    },
  },

  watch: {
    sourceFiles(value) {
      let files = Array.from(value);
      if (files.length <= 0) return;

      let { size, accept } = this;

      if (files.some((file) => file.size > size)) {
        // TODO:
       return  this.onError(`文件大小超过限制，最大上传不能超过${size}k`);
      }

      if (files.some((file) => !~accept.indexOf(file.type))) {
        // TODO:
       return  this.onError(`只接受${accept}类型的文件`);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../../css/uploader.scss";
</style>