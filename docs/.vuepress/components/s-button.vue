<template>
  <button
    class="s-button"
    :class="styleClass"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="icon"> 
    <s-icon :name="icon"></s-icon>
    </span>
    
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "s-button",
  props: {
    type: {
      type: String,
      default: "",
      validator: (value) => {
        return ["", "primary", "success", "warning", "danger"].includes(value);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
  },
  computed: {
    styleClass() {
      return {
        [`s-button--${this.type}`]: this.type,
        ["is-round"]: this.round,
        "is-disabled": this.disabled,
      };
    },
  },

  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>   

<style scoped lang="scss">
@import './css/s-button.scss'
</style>