<template>
  <header-component />
  <router-view />
</template>
<script>
import headerComponent from "@/components/AppHeader.vue";
export default {
  components: { headerComponent },
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
</style>
