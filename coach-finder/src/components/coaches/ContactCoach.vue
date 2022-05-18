<template>
  <base-container class="flex-column">
    <h3 class="contact__title">Interested? Reach out now!</h3>
    <base-button
      :className="['contact--btn', { 'not-filled': false }]"
      value="Contact"
      :clickHandler="contact"
    />
    <form class="form flex-column" @submit.prevent="sendMessage">
      <input-field
        type="email"
        label="Your E-mail"
        name="email"
        errorMsg="Please enter a valid email"
        :classNames="['input']"
        :rules="emailRules"
        @input="emailChanged"
      />
      <input-field
        type="textarea"
        label="Message"
        name="message"
        errorMsg="message can not be less than 2 characters"
        :classNames="['input', 'textarea']"
        :rules="messageRules"
        @input="messageChanged"
      />

      <input
        class="form--btn"
        type="submit"
        value="Send Message"
        aria-label="send message"
        :disabled="invalid"
      />
    </form>
  </base-container>
</template>

<script>
import BaseContainer from "../BaseComponents/BaseContainer.vue";
import BaseButton from "../BaseComponents/BaseButton.vue";
import InputField from "@/components/InputField.vue";
import { v4 as uuidv4 } from "uuid";
export default {
  components: { BaseContainer, BaseButton, InputField },
  data() {
    return {
      email: null,
      body: null,
      invalidEmail: true,
      invalidMessage: true,
    };
  },
  computed: {
    emailRules() {
      return { regex: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ };
    },
    messageRules() {
      return { minimum: 2 };
    },
    invalid() {
      return this.invalidEmail || this.invalidMessage;
    },
  },
  methods: {
    sendMessage() {
      const payload = {
        id: uuidv4(),
        email: this.email,
        body: this.body,
      };
      this.$store.dispatch("insertRequest", payload);
      this.$router.push({ name: "all-coaches" });
    },
    contact() {},
    emailChanged(value, valid) {
      this.invalidEmail = !valid;
      if (this.invalidEmail) this.email = null;
      else this.email = value;
    },
    messageChanged(value, valid) {
      this.invalidMessage = !valid;
      if (this.invalidMessage) this.body = null;
      else this.body = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.contact--btn {
  @include custom-button(white, $main-color, $main-color, 20px, 10px, 20px);
  width: fit-content;
}

.contact__title {
  font-weight: bold;
  padding-top: 10px;
  letter-spacing: -1px;
}
.form {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
}

.form--btn {
  display: block;
  @include custom-button(white, $main-color, $main-color, 20px, 10px, 20px);
  margin: 0 auto;
  &:disabled {
    background-color: #eee;
    color: #ccc;
    cursor: not-allowed;
  }
}
</style>
