<template>
  <v-toolbar class="cyan" dark fluid>
    <v-toolbar-title>
      <router-link to="/">
        <v-btn class="cyan">TabTracker</v-btn>
      </router-link>
    </v-toolbar-title>
    <!-- TODO : Implement me -->
    <!-- <v-toolbar-items>
      <v-btn flate> Browse</v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <router-link to="/login">
        <v-btn class="cyan"> Login </v-btn>
      </router-link>
      <router-link to="/register">
        <v-btn class="cyan"> Sign Up </v-btn>
      </router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style scoped></style>
