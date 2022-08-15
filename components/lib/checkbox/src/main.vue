<template>
  <div>
    <label class="s-checkbox">
      <span class="s-checkbox--outer">
        <span
          class="s-checkbox--inner"
          :class="{ 'is-checked': isChecked }"
        ></span>
        <input
          type="checkbox"
          class="s-checkbox-native"
          :value="label"
          v-model="CKValue"
        />
      </span>
      <span class="checkbox__label">{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    label: String,
    value: [Boolean, Array],
  },
  computed: {
    CKValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },

    isChecked() {
      if (typeof this.value === "boolean") {
        return this.value;
      } else {
        return this.value.includes(this.label);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../../css/checkbox.scss";
</style>