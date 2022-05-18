<template>
  <base-container>
    <h1 class="coach-header__title">Find Your Coach</h1>
    <filters-container
      className="coach-header__filters"
      :changeCallback="notify"
      :areas="{ frontend, backend, career }"
    />
  </base-container>
</template>

<script>
import BaseContainer from "@/components/BaseComponents/BaseContainer.vue";
import FiltersContainer from "../FiltersContainer.vue";
export default {
  name: "CoachHeader",
  components: { BaseContainer, FiltersContainer },
  methods: {
    notify(e) {
      let payload = {};
      payload[e.currentTarget.id] = e.currentTarget.checked;
      this.$store.commit("updateFilters", payload);
    },
  },
  mounted() {
    this.$store.commit("loadFromLocalStorage");
  },
  computed: {
    frontend() {
      return this.$store.getters.filterValue({ filter: "frontend" });
    },
    backend() {
      return this.$store.getters.filterValue({ filter: "backend" });
    },
    career() {
      return this.$store.getters.filterValue({ filter: "career" });
    },
  },
};
</script>

<style lang="scss" scoped>
.coach-header__title {
  font-weight: bold;
  font-size: 20px;
}
.coach-header__filters {
  display: flex;
  column-gap: 20px;
  align-items: center;
}
</style>
