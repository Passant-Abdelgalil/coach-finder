<template>
  <coaches-header :key="componentKey" />
  <base-container class="coaches-container">
    <base-button
      :className="['coaches-container--refresh', { 'not-filled': true }]"
      :clickHandler="refresh"
      value="Refresh"
    />
    <router-link to="/register" custom v-slot="{ navigate }"
      ><base-button
        :className="[{ 'not-filled': false }]"
        :clickHandler="navigate"
        value="Register"
    /></router-link>
    <coach-component
      v-for="coach in filteredCoaches"
      :key="coach.id"
      :name="coach.name"
      :salary="coach.salary"
      :categories="coach.categories"
      :id="coach.id"
    />
    <h1 v-if="noCoaches" class="no-coaches">No coaches found.</h1>
  </base-container>
</template>

<script>
import CoachesHeader from "@/components/coaches/FilterCoaches.vue";
import CoachComponent from "@/components/coaches/CoachCard.vue";
import BaseContainer from "@/components/BaseComponents/BaseContainer.vue";
import BaseButton from "@/components/BaseComponents/BaseButton.vue";

export default {
  components: { CoachesHeader, CoachComponent, BaseContainer, BaseButton },
  data() {
    return {
      componentKey: 0,
    };
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters.filterCoaches;
    },
    noCoaches() {
      return !this.filteredCoaches || !this.filteredCoaches.length;
    },
  },
  methods: {
    refresh() {
      this.componentKey++;
    },
  },
};
</script>

<style lang="scss">
.coaches-container {
  margin-top: 20px;
}
.no-coaches {
  font-size: 22px;
  color: $main-color;
}
</style>
