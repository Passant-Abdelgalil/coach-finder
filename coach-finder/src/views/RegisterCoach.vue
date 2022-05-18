<template>
  <base-container>
    <h1>Register as a coach now!</h1>
    <form class="flex-column form" @submit.prevent="register">
      <input-field
        :classNames="['input']"
        label="firstname"
        name="firstname"
        type="text"
        errorMsg="name length must be at least 2 of only characters"
        :rules="nameRules"
        @input="firstNameChanged"
      />
      <input-field
        :classNames="['input']"
        label="secondname"
        name="secondname"
        type="text"
        errorMsg="name length must be at least 2 of only characters"
        :rules="nameRules"
        @input="secondNameChanged"
      />
      <input-field
        :classNames="['textarea', 'input']"
        label="description"
        name="description"
        type="textarea"
        errorMsg="description must be at least 5 characters"
        :rules="descriptionRules"
        @input="descriptionChanged"
      />
      <input-field
        :classNames="['input']"
        label="salary"
        name="salary"
        type="number"
        errorMsg="salary must be a valid number"
        :rules="salaryRules"
        @input="salaryChanged"
      />
      <filters-container
        className="coach-areas"
        :changeCallback="updateArea"
        :areas="categories"
      />
      <input
        type="submit"
        class="form--submit"
        aria-label="submit"
        value="Register"
        :disabled="!valid"
      />
    </form>
  </base-container>
</template>

<script>
import InputField from "@/components/InputField.vue";
import BaseContainer from "@/components/BaseComponents/BaseContainer.vue";
import FiltersContainer from "@/components/FiltersContainer.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  components: { InputField, FiltersContainer, BaseContainer },
  data() {
    return {
      validFirstName: false,
      validSecondName: false,
      validSalary: false,
      validDescription: false,
      categories: {
        frontend: false,
        backend: false,
        career: false,
      },
      firstName: null,
      secondName: null,
      description: null,
      salary: null,
    };
  },
  computed: {
    nameRules() {
      return { regex: /^[a-zA-Z]{2,}$/ };
    },
    salaryRules() {
      return { regex: /^[0-9]+$/ };
    },
    descriptionRules() {
      return { regex: /^[\W\S*]{5,}$/ };
    },
    valid() {
      return (
        this.validFirstName &&
        this.validSecondName &&
        this.validDescription &&
        this.validSalary
      );
    },
  },
  methods: {
    updateArea(e) {
      this.categories[e.target.id] = e.target.checked;
    },
    firstNameChanged(value, valid) {
      this.validFirstName = valid;
      this.firstName = this.validFirstName ? value : null;
    },
    secondNameChanged(value, valid) {
      this.validSecondName = valid;
      this.secondName = this.validSecondName ? value : null;
    },
    descriptionChanged(value, valid) {
      this.validDescription = valid;
      this.description = this.validDescription ? value : null;
    },
    salaryChanged(value, valid) {
      this.validSalary = valid;
      this.salary = this.validSalary ? value : null;
    },
    register() {
      let payload = {
        id: uuidv4(),
        name: this.firstName + " " + this.secondName,
        salary: this.salary,
        description: this.description,
        categories: Object.keys(this.categories).filter(
          (category) => this.categories[category]
        ),
      };
      this.$store.dispatch("registerCoach", payload);
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
.form {
  width: 95%;
  min-width: 300px;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 12px;
}
.coach-areas {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 20px 0;
}
.form--submit {
  width: fit-content;
  @include custom-button(white, $main-color, $main-color, 20px, 10px, 20px);
  padding: 10px 20px;
  margin: 0 auto;
  &:disabled {
    background-color: #eee;
    color: #888;
    cursor: not-allowed;
  }
}
</style>
