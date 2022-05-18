<template>
  <div :class="className">
    <div class="filters__choice">
      <input
        id="frontend"
        type="checkbox"
        name="frontend"
        aria-label="frontend"
        :checked="areas.frontend"
        @change="changeCallback"
      />
      <label for="frontend">Frontend</label>
    </div>
    <div class="filters__choice">
      <input
        id="backend"
        type="checkbox"
        name="backend"
        aria-label="backend"
        @change="changeCallback"
        :checked="areas.backend"
      />
      <label for="backend">Backend</label>
    </div>
    <div class="filters__choice">
      <input
        id="career"
        type="checkbox"
        name="career"
        aria-label="career"
        @change="changeCallback"
        :checked="areas.career"
      />
      <label for="career">Career</label>
    </div>
  </div>
</template>

<script>
export default {
  props: ["className", "changeCallback", "areas"],
  mounted() {},
};
</script>

<style lang="scss">
.filters__choice {
  label {
    margin-left: 5px;
    font-weight: bold;
  }
}
</style>
