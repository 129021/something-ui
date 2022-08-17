<template>
  <div class="s-uploader-wrapper">
    <div class="s-uploader-imagelist">
      <ul class="preview-images-list">
        <li v-for="(file, index) in previewImages" :key="index">
          <span class="preview-delete-icon">
            <Icon name="viewlarger" @click="previewImage(index)"></Icon>
            <Icon name="delete" @click="deleteImage(index)"></Icon>
          </span>
          <img :src="file.url" alt="" />
        </li>
      </ul>
      <div
        class="s-uploader-container"
        @click="(event) => handleFileUploader(event, 'click')"
        @drop="(event) => handleFileUploader(event, 'drop')"
        @dragover="prevent"
        @dragenter="prevent"
      >
        <slot name="uploader-area"></slot>
        <input
          type="file"
          class="s-file__invisible"
          ref="file"
          :multiple="multiple"
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
import Preview from "./preview.vue";
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
    limit: {
      type: Number,
      default: 3,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sourceFiles: [],
      tempImages: [],
      previewImages: [],
    };
  },
  methods: {
    prevent(event) {
      event.preventDefault();
    },
    previewImage(index) {
      this.$modal({
        template: Preview,
        params: {
          url: this.previewImages[index].url,
        },
      });
    },
    deleteImage(index) {
      this.previewImages.splice(index, 1);
    },
    handleFileUploader(event, type) {
      let handler = {
        click: () => {
          this.$refs.file.value = "";
          this.$refs.file.click();
        },
        change: (event) => {
          this.sourceFiles = event.target.files;
        },

        drop: (event) => {
          event.preventDefault();
          this.sourceFiles = event.dataTransfer.files;
        },
      };

      handler[type](event);
    },

    handleImages(files) {
      if (window.URL && window.URL.createObjectURL) {
        this.createObjectURL(files);
      } else {
        this.createBase64Image(files);
      }
    },

    createObjectURL(files) {
      let filesArray = files.map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));
      this.tempImages = filesArray;
    },

    createBase64Image(files) {
      const handleFile = function (file) {
        return new Promise((resolve, reject) => {
          let reader = new FileReader();
          reader.readAsDataURL(file);
          ReadableStream.onload = (e) => {
            resolve(e.target.result);
          };

          reader.onerror = (error) => {
            reject("文件读取失败");
          };
        });
      };

      let files_promises = files.map(handleFile);

      Promise.all(files_promises).then((results) => {
        this.tempImages = results.map((res, index) => {
          return {
            rul: res,
            file: files[index],
          };
        });
      });
    },
  },

  watch: {
    sourceFiles(value) {
      let files = Array.from(value);
      if (files.length <= 0) return;

      let { size, accept } = this;

      if (files.some((file) => file.size > size)) {
        // TODO:
        return this.onError(
          `文件大小超过限制，最大上传不能超过${Math.floor(size / 1024)}k`
        );
      }

      if (files.some((file) => !~accept.indexOf(file.type))) {
        // TODO:
        return this.onError(`只接受${accept}类型的文件`);
      }
      this.handleImages(files);
    },

    tempImages(value) {
      console.log("处理过后images");
      console.log(value);

      this.previewImages = [...this.previewImages, ...value];

      if (this.previewImages.length >= this.limit) {
        this.previewImages = this.previewImages.slice(0, this.limit);
        return this.onError(`最多上传${this.limit}个文件`);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../../css/uploader.scss";
</style>