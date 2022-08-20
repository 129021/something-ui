<template>
  <div class="inline-container">
    <template v-if="type === 'textarea'">
      <textarea
        class="s-textarea"
        :disabled="disabled"
        v-bind="$attrs"
        v-on="myListeners"
        v-model="inputValue"
      ></textarea>
    </template>
    <template v-else>
      <div class="inline-container" :class="className">
        <div class="s-input-prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </div>
        <div class="s-input-outer">
          <input
            type="text"
            class="s-input"
            :class="styleClass"
            :disabled="disabled"
            v-bind="$attrs"
            v-on="myListeners"
            v-model="inputValue"
          />
          <span class="s-input-clear" @click="clearText" v-if="showClear">
            <s-icon name="clear"></s-icon>
          </span>
        </div>

        <div class="s-input-append" v-if="$slots.append">
          <slot name="append"></slot>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "s-input",
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
        return ["","medium", "small"].includes(value);
      },
    },

    clearable: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    center: {
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
        "is-disabled": this.disabled,
        "is-center": this.center,
      };
    },

    showClear() {
      return this.clearable && this.inputValue !== "";
    },

    className() {
      return {
        "has-prepend": this.$slots.prepend,
        "has-append": this.$slots.append,
      };
    },
  },
  methods: {
    clearText() {
      this.inputValue = "";
    },
  },
};
</script>

<style scoped lang="scss">
@import './css/input.scss'
</style>