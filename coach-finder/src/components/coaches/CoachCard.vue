<template>
  <base-container class="coach-container">
    <h3 class="coach-container__title">{{ name }}</h3>
    <p class="coach-container__salary">${{ salary }}/hour</p>
    <div class="coach-container__categories">
      <category-box
        v-for="category in categories"
        :className="category"
        :value="category"
        :key="category"
      />
    </div>
    <div class="coach-container__btns">
      <router-link
        :to="{ name: 'contact-coach', path: coachContactLink, params: { id } }"
        custom
        v-slot="{ navigate }"
      >
        <base-button
          :className="{ 'not-filled': true }"
          :clickHandler="navigate"
          value="Contact"
        />
      </router-link>
      <router-link
        :to="{ name: 'coach-details', path: coachDetailsLink, params: { id } }"
        custom
        v-slot="{ navigate }"
      >
        <base-button
          :className="{ 'not-filled': false }"
          :clickHandler="navigate"
          value="View Details"
        />
      </router-link>
    </div>
  </base-container>
</template>

<script>
import BaseContainer from "@/components/BaseComponents/BaseContainer.vue";
import BaseButton from "../BaseComponents/BaseButton.vue";
import CategoryBox from "../BaseComponents/CategoryBox.vue";
export default {
  components: { BaseContainer, BaseButton, CategoryBox },
  props: ["name", "salary", "categories", "id"],
  computed: {
    coachContactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
    coachDetailsLink() {
      return `${this.$route.path}/${this.id}`;
    },
  },
  methods: {
    contact() {
      this.$router.push({
        name: "contact",
        params: {
          name: this.name,
          salary: this.salary,
          categories: this.categories,
        },
      });
    },
    showDetails() {
      this.$router.push({ name: "coach-details", params: { id: this.id } });
    },
  },
};
</script>

<style lang="scss">
.coach-container {
  border: 1px solid #999;
  width: 100%;
  margin-top: 20px;
}
.coach-container__title {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 5px;
}
.coach-container__salary {
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 10px;
}
.coach-container__btns {
  text-align: right;
  padding-top: 10px;
}

.coach-container__categories {
  display: block;
}
</style>
