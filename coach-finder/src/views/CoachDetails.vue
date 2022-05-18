<template>
  <div class="flex-column coaches-container" v-if="coach">
    <base-container class="coach-data">
      <h3 class="coach-data__title">{{ coach.name }}</h3>
      <p class="coach-data__salary">${{ coach.salary }}/hour</p>
    </base-container>
    <router-view></router-view>
    <base-container>
      <category-box
        :className="category"
        :value="category"
        v-for="category in coach.categories"
        :key="category"
    /></base-container>
  </div>
</template>

<script>
import BaseContainer from "@/components/BaseComponents/BaseContainer.vue";
import CategoryBox from "@/components/BaseComponents/CategoryBox.vue";

export default {
  props: ["id"],
  components: { BaseContainer, CategoryBox },
  data() {
    return { coach: {} };
  },

  beforeMount() {
    this.coach = this.$store.getters.coach({ id: this.id });
    if (!this.coach) {
      return this.$router.push("/404", () => {
        console.log("navigation failed");
      });
    }
  },
};
</script>

<style lang="scss">
.coach-data__title {
  font-weight: bold;
  font-size: 20px;
  letter-spacing: -1px;
  margin-bottom: 15px;
}
.coach-data__salary {
  font-weight: bold;
}
.coach-data__category {
  @include custom-button(white, $main-color, $main-color, 20px, 10px, 20px);
}
</style>
