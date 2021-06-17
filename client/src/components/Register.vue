<template>
  <v-layout row mt-5>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 py-5 text-center">
          <v-text-field v-model="email" label="Email" />
          <br />
          <v-text-field label="Password" v-model="password" />
          <br />
          <div class="error" v-html="error" />
          <br />
          <v-btn color="cyan" dark @click="register">Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from "../services/AuthenticationService.js";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
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
