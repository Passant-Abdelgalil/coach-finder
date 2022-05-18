<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="header__logo">Find a Coach</router-link>
      <nav class="header__nav">
        <router-link to="/coaches" class="header__nav__item"
          >All Coaches</router-link
        >
        <router-link to="/requests" class="header__nav__item"
          >Requests</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style lang="scss" scoped>
.container {
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
.header {
  margin: 0;
  padding: 20px;
  background-color: $main-color;
}
.header__logo {
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
}
.header__nav {
  display: flex;
  &__item {
    display: block;
    color: $second-color;
    text-decoration: none;
    padding: 10px 20px;
    margin-right: 20px;
    border: 1px solid transparent;
  }
  .router-link-active {
    border-color: $second-color;
  }
}
</style>
