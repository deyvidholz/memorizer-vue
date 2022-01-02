<template>
  <v-app id="main">
    <AppBar />

    <v-main>
      <router-view />

      <AddNewWordDialog />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/app/AppBar";
import AddNewWordDialog from "@/components/home/AddNewWordDialog";

export default {
  name: "App",

  components: {
    AppBar,
    AddNewWordDialog,
  },

  data: () => ({
    //
  }),
};
</script>
