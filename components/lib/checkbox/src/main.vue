<template>
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
</template>

<script>
export default {
  name: "CheckBox",
  inject: {
    CKGroup: {
      default: "",
    },
  },
  props: {
    label: String,
    value: [Boolean, Array],
  },
  computed: {
    CKValue: {
      get() {
        return this.isGroup ? this.CKGroup.value : this.value;
      },
      set(value) {
        if (this.isGroup) {
          this.CKGroup.$emit("input", value);
        } else {
          this.$emit("input", value);
        }
      },
    },

    isGroup() {
      return this.CKGroup;
    },

    isChecked() {
      if (this.isGroup) {
        return this.CKGroup.value.includes(this.label);
      } else {
        if (typeof this.value === "boolean") {
          return this.value;
        } else {
          return this.value.includes(this.label);
        }
      }
    },
  },
};
</script>

<style >

</style>