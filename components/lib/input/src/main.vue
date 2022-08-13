<template>
  <div class="inline-container">
    <template v-if="type === 'textarea'">
      <textarea
        class="s-textarea"
        v-bind="$attrs"
        v-on="myListeners"
        v-model="inputValue"
      ></textarea>
    </template>
    <template v-else>
      <div class="s-input-outer">
        <input
          type="text"
          class="s-input"
          :class="styleClass"
          v-bind="$attrs"
          v-on="myListeners"
          v-model="inputValue"
        />
        <span class="s-input-clear" @click="clearText" v-if="showClear">
          <Icon name="clear"></Icon>
        </span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
      validator: (value) => {
        return ["text", "textarea"].includes(value);
      },
    },
    size: {
      type: String,
      default: "",
      validator: (value) => {
        return ["medium", "small", "default"].includes(value);
      },
    },

    clearable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
  computed: {
    inputValue: {
      get() {
        return this.value;
      },

      set(value) {
        this.$emit("input", value);
      },
    },

    myListeners() {
      Object.assign(this.$listeners, {
        input: (event) => {
          this.$emit("input", event.target.value);
        },
      });
    },

    styleClass() {
      return {
        [`s-input--${this.size}`]: this.size,
      };
    },

    showClear() {
      return this.clearable && this.inputValue!== "";
    },
  },
  methods: {
    clearText() {
      this.inputValue = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../css/input.scss";
</style>