<template>
  <section class="content">
    <slot></slot>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.content {
  width: 70%;
  max-width: 700px;
  min-width: 350px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  text-align: left;
  margin-top: 30px;
}
</style>
