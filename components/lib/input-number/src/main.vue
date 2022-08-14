<template>
  <div class="input-number-inner">
    <Input v-model="inputValue" center>
      <div
        class="cursor-pointer"
        :class="{ 'is-disabled': decreaseDisabled }"
        slot="prepend"
        @click="handleClick('decrease')"
      >
        <Icon name="Decrease"></Icon>
      </div>
      <div
        class="cursor-pointer"
        :class="{ 'is-disabled': increaseDisabled }"
        slot="append"
        @click="handleClick('increase')"
      >
        <Icon name="increase"></Icon>
      </div>
    </Input>
  </div>
</template>

<script>
export default {
  name: "InputNumber",
  props: {
    value: {
      type: Number,
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
        let { max, min } = this;
        let limit = [
          {
            validate: (value) => value >= this.max,
            res: max,
          },
          {
            validate: (value) => value <= this.mim,
            res: min,
          },
          {
            validate: (value) => true,
            res: newValue * 1,
          },
        ];

        let _value = limit.find((v) => v.validate(newValue)).res;
        this.$emit("input", _value);
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
        this.inputValue += this.step;
      } else {
        this.inputValue -= this.step;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../css/input-number.scss";
</style>