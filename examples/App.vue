<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Demo></Demo>
    <Card
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
    </Card>
    <Button type="primary" disabled round icon="danger"></Button>
    <Button type="danger" round @click="handleClick"></Button>

    <Icon name="info"></Icon>

    <div class="input-warpper">
      <Input
        placeholder="please input the password"
        clearable
        center
        medium
        :value="msg"
        @input="(data) => (msg = data)"
      >
        <template slot="prepend">https:// </template>
        <template slot="append">.com </template>
      </Input>
    </div>

    <h1>{{ msg }}</h1>
    <!-- <input clearable> -->

    <div class="input-warpper">
      <InputNumber v-model="count" :step="1" :max="10" :min="1"></InputNumber>
    </div>

    <Radio v-model="sex" label="male"></Radio>
    <Radio v-model="sex" label="female"></Radio>

    <RadioGroup v-model="group_sex">
      <Radio label="male"></Radio>
      <Radio label="female"></Radio>
    </RadioGroup>
    <h1>{{ group_sex }}</h1>

    <CheckBox v-model="checked" label="basketball"></CheckBox>
    <p>是否选中：{{ checked ? "选中" : "未选中" }}</p>

    <CheckBox v-model="hobby" label="basketball"></CheckBox>
    <CheckBox v-model="hobby" label="football"></CheckBox>
    <CheckBox v-model="hobby" label="pingpang"></CheckBox>

    <CheckBoxGroup v-model="animals">
      <CheckBox label="aa"></CheckBox>
      <CheckBox label="fol"></CheckBox>
      <CheckBox label="ping"></CheckBox>
    </CheckBoxGroup>

    <Button type="danger" @click="showMessage">click me</Button>
    <Button type="warning" @click="showMessage1">click me</Button>

    <!-- messagebox  -->
    <Button type="primary" @click="showMessageBox">messagebox</Button>

    <!-- modal  -->
    <Button type="primary" @click="showModal">showModal</Button>

    <!-- toast -->
    <Button type="primary" @click="showToast">toast</Button>
  </div>
</template>

<script>
import Hello from "./hello.vue";
export default {
  name: "App",

  methods: {
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
        onOK: () => {
          alert("OK");
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
