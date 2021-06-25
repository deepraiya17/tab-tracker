<template>
  <v-app>
    <page-header></page-header>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import PageHeader from "./components/Header.vue";
export default {
  name: "App",
  components: { PageHeader },
};
</script>
