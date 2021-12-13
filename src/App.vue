<template>
  <v-app>
    <v-app-bar app color="teal darken-3" dark fixed>
      <v-btn to="/" :ripple="false" plain>Dashboard</v-btn>
      <v-btn to="/About" :ripple="false" plain>About</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
