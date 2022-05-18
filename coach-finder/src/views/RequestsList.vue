<template>
  <base-container class="requests-container">
    <h2 class="requests-container__heading">Requests Received</h2>
    <div class="flex-column">
      <div class="request-box" v-for="request in requests" :key="request">
        <p class="request-box__email">{{ request.email }}</p>
        <p class="request-box__body">{{ request.body }}</p>
      </div>
    </div>
  </base-container>
</template>

<script>
import BaseContainer from "@/components/BaseComponents/BaseContainer.vue";
export default {
  components: { BaseContainer },
  computed: {
    requests() {
      return this.$store.getters.requests;
    },
  },
};
</script>

<style lang="scss">
.requests-container {
  text-align: center;
  margin-top: 30px;
  min-width: 700px;
}
.requests-container__heading {
  padding-top: 20px;
  padding-bottom: 30px;
}
.flex-column {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
.request-box {
  width: 80%;
  padding: 20px;
  border: 1px solid #ccc;
  margin: auto;
  text-align: left;
}
.request-box__email {
  color: $main-color;
  font-weight: bold;
  padding-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: $second-color;
  }
}
</style>
