<template>
  <div class="input-number-inner">
    <s-input
      v-model="inputValue"
      :disabled="disabled"
      center
      @change="handleChange"
    >
      <div
        class="cursor-pointer"
        :class="{ 'is-disabled': decreaseDisabled }"
        slot="prepend"
        @click="handleClick('decrease')"
      >
        <s-icon name="Decrease"></s-icon>
      </div>
      <div
        class="cursor-pointer"
        :class="{ 'is-disabled': increaseDisabled }"
        slot="append"
        @click="handleClick('increase')"
      >
        <s-icon name="increase"></s-icon>
      </div>
    </s-input>
  </div>
</template>

<script>
export default {
  name: "s-inputnumber",
  props: {
    value: {
      type: [Number, String],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    step: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: +Infinity,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    precision: {
      type: Number,
    },
    size: {
      type: String,
      default: "",
      validator: (value) => {
        return ["", "medium", "small"].includes(value);
      },
    },
  },
  data() {
    return {
      count: 5,
    };
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        let { max, min, inputValue } = this;
        let limit = [
          {
            validate: (value) => !this.isNumber(value),
            res: inputValue,
          },
          {
            validate: (value) => value >= this.max,
            res: max,
          },
          {
            validate: (value) => value <= this.min,
            res: min,
          },
          {
            validate: (value) => true,
            res: newValue * 1,
          },
        ];

        let _value = limit.find((v) => v.validate(newValue)).res;
        this.$emit("input", _value.toFixed(this.precision));
      },
    },
    decreaseDisabled() {
      return this.disabled || this.inputValue <= this.min;
    },
    increaseDisabled() {
      return this.disabled || this.inputValue >= this.max;
    },
  },

  methods: {
    handleClick(type) {
      if (type == "increase") {
        if (this.increaseDisabled) return;
        this.inputValue = Number(this.inputValue) + this.step;
      } else {
        if (this.decreaseDisabled) return;
        this.inputValue = Number(this.inputValue) - this.step;
      }
    },
    isNumber(num) {
      return (
        !isNaN(num * 1) &&
        Object.prototype.toString.call(num * 1) === "[object Number]"
      );
    },
    handleChange() {
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped lang="scss" >
@import './css/input-number.scss'
</style>