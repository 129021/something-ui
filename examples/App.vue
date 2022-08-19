<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <s-demo></s-demo>
    <s-card
      imgSrc="react.png"
      summary="summary test test test"
      :width="370"
      :imgHeight="100"
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">level test</div>
          <div class="price">$199.00</div>
        </div>
      </template>
    </s-card>
    <s-button type="primary" disabled round icon="danger"></s-button>
    <s-button type="danger" round @click="handleClick"></s-button>
    <s-button type="danger">Hello</s-button>

    <s-icon name="info"></s-icon>

    <div class="input-warpper">
      <s-input
        placeholder="please input the password"
        clearable
        center
        medium
        :value="msg"
        @input="(data) => (msg = data)"
      >
        <template slot="prepend">https:// </template>
        <template slot="append">.com </template>
      </s-input>
    </div>

    <h1>{{ msg }}</h1>
    <!-- <input clearable> -->

    <div class="input-warpper">
      <s-inputnumber
        v-model="count"
        :step="1"
        :max="10"
        :min="1"
      ></s-inputnumber>
    </div>

    <s-radio v-model="sex" label="male"></s-radio>
    <s-radio v-model="sex" label="female"></s-radio>

    <s-radiogroup v-model="group_sex">
      <s-radio label="male"></s-radio>
      <s-radio label="female"></s-radio>
    </s-radiogroup>
    <h1>{{ group_sex }}</h1>

    <s-checkbox v-model="checked" label="basketball"></s-checkbox>
    <p>是否选中：{{ checked ? "选中" : "未选中" }}</p>

    <s-checkbox v-model="hobby" label="basketball"></s-checkbox>
    <s-checkbox v-model="hobby" label="football"></s-checkbox>
    <s-checkbox v-model="hobby" label="pingpang"></s-checkbox>

    <s-checkboxgroup v-model="animals">
      <s-checkbox label="aa"></s-checkbox>
      <s-checkbox label="fol"></s-checkbox>
      <s-checkbox label="ping"></s-checkbox>
    </s-checkboxgroup>

    <s-button type="danger" @click="showMessage">click me</s-button>
    <s-button type="warning" @click="showMessage1">click me</s-button>

    <!-- messagebox  -->
    <s-button type="primary" @click="showMessageBox">messagebox</s-button>

    <!-- modal  -->
    <s-button type="primary" @click="showModal">showModal</s-button>

    <!-- toast -->
    <s-button type="primary" @click="showToast">toast</s-button>

    <!-- uploader  -->

    <s-uploader
      accept="image/png, image/jpeg"
      :size="500 * 1024"
      :on-success="uploadSuccess"
      :on-error="uploadError"
      :limit="3"
      :multiple="true"
    >
      <div class="uploader-area" slot="uploader-area">
        <s-icon name="increase"></s-icon>
        <div class="s-uploader--text">将文件拖到此处，或<em>点击上传</em></div>
      </div>
      <div class="s-uploader--tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </s-uploader>

    <s-button>hello</s-button>
  </div>
</template>

<script>
import Hello from "./hello.vue";
export default {
  name: "App",

  methods: {
    uploadSuccess() {},
    uploadError(msg) {
      this.$message({
        message: msg,
      });
    },
    showToast() {
      this.$toast({
        message: "hello world",
        duration: 3000,
        onClose: () => {
          alert("close");
        },
      });
    },
    showModal() {
      this.$modal({
        template: Hello,
        params: {
          name: "我是外部传过来的参数",
        },
        success: (data) => {
          console.log(data);
        },
        fail: (data) => {
          console.log(data);
        },
      });
    },
    showMessageBox() {
      this.$alert({
        title: "我是标题",
        content: "我是内容",
        onOk: () => {
          alert("OK");
          // this.$message({
          //   message: "ok",
          //   duration: 1500,
          //   position: "center",
          //   type: "success",
          // });
        },
        onCancel: () => {
          alert("cancel");
        },
      });
    },
    handleClick() {
      alert(123);
    },

    showMessage() {
      this.$message({
        message: "我是一个message消息",
        duration: 3000,
        autoClose: false,
        position: "right",
        type: "warning",
      });
    },

    showMessage1() {
      this.$message({
        message: "我是一个message消息1",
        duration: 3000,
        autoClose: false,
        position: "center",
        type: "info",
      });
    },
  },
  data() {
    return {
      msg: "Hello,World",
      count: 5,
      sex: "male",
      group_sex: "female",
      checked: true,
      hobby: ["football"],
      animals: ["aa"],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.footer {
  display: flex;
  justify-content: space-between;
}

.level {
  /* display: flex; */

  /* flex:1; */

  font-size: 14px;
  color: red;
  padding-left: 10px;
  /* justify-content: space-between; */
  /* text-align: left; */
  /* padding-left: 10px; */
}

.price {
  /* display: flex; */
  /* flex:1; */
  font-size: 14px;
  color: red;
  padding-right: 10px;
  /* justify-content: space-between; */

  /* text-align: right; */
  /* padding-left: 10px; */
}

.input-warpper {
  width: 480px;
  margin: 100px auto;
}
</style>
