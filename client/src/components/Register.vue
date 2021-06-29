<template>
  <v-layout row mt-5>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <v-text-field v-model="email" label="Email" />
        <br />
        <v-text-field label="Password" v-model="password" type="password" />
        <br />
        <div class="error white--text" v-html="error" />
        <br />
        <v-btn color="cyan" dark @click="register">Register</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from "../services/AuthenticationService.js";
import Panel from "./Panel.vue";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  components: { Panel },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
        console.log(response.data);
      } catch (err) {
        this.error = err.response.data.error;
      }
    },
  },
};
</script>
<style></style>
