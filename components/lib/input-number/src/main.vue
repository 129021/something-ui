<template>
  <div class="input-number-inner">
    <Input v-model="inputValue" center>
      <div
        class="cursor-pointer"
        slot="prepend"
        @click="handleClick('decrease')"
      >
        <Icon name="Decrease"></Icon>
      </div>
      <div
        class="cursor-pointer"
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
      set(value) {
        this.$emit("input", value);
      },
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