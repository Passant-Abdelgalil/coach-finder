<template>
  <p class="category-box" :class="className">{{ value }}</p>
</template>

<script>
export default {
  props: ["value", "className"],
};
</script>

<style lang="scss" scoped>
.category-box {
  display: inline-block;
  padding: 8px 20px;
  color: white;
  border-radius: 25px;
  margin-right: 10px;
  text-transform: uppercase;
  font-size: 15px;
  &.frontend {
    background-color: $main-color;
  }
  &.backend {
    background-color: #8129a4;
  }
  &.career {
    background-color: #96165f;
  }
}
</style>
