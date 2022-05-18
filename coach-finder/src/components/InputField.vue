<template>
  <div class="input-field">
    <label class="input-label" :for="name">{{ label }}</label>
    <textarea
      v-if="type === 'textarea'"
      :aria-label="label"
      :name="name"
      :class="classNames"
      v-model="value"
      :required="true"
      @input="check"
    />
    <input
      v-else
      :type="type"
      :aria-label="label"
      :name="name"
      :class="classNames"
      v-model="value"
      :required="true"
      @input="check"
    />
    <p v-if="invalid" class="error">{{ errorMsg }}</p>
  </div>
</template>

<script>
export default {
  emits: ["input"],
  props: ["type", "rules", "label", "name", "classNames", "errorMsg"],
  data() {
    return { invalid: null, value: null };
  },
  methods: {
    check() {
      this.invalid = false;
      if (this.rules.minimum !== null)
        this.invalid |= this.value.length < this.rules.minimum;
      if (this.rules.regex) this.invalid |= !this.rules.regex.test(this.value);

      if (!this.invalid) this.$emit("input", this.value, !this.invalid);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-field {
  width: 100%;
}
.input-label {
  font-weight: bold;
  display: inline-block;
  padding-bottom: 10px;
}
.input {
  padding: 5px;
  outline: none;
  width: 100%;
  border: 1px solid #eee;
  line-height: 1.5;
  font-size: 16px;
  &:focus {
    outline: none;
    border: 1px solid #8129a4;
    background-color: #c985e41f;
  }
}
.textarea {
  resize: none;
  height: 10em;
}
.error {
  color: red;
  padding-top: 10px;
}
</style>
