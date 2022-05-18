<template>
  <button :class="className" @click="clickHandler">{{ value }}</button>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    clickHandler: {
      type: Function,
      required: true,
    },
    className: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  @include custom-button(white, $main-color, $main-color, 20px, 10px, 20px);
  margin-right: 5px;
  font-weight: bold;
}
.not-filled {
  background-color: white;
  color: $main-color;
  border: 1px solid $main-color;
}
</style>
