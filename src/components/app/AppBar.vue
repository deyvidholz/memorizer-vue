<template>
  <v-app-bar app color="teal" dark>
    <h3
      class="d-flex align-center yellow--text cursor-pointer"
      @click="routeTo('Home')"
    >
      Memorizer
    </h3>

    <v-spacer></v-spacer>

    <v-btn text color="blue-grey darken-3" @click="openDialog('addNewWord')">
      <v-icon size="32">mdi-plus</v-icon>
    </v-btn>

    <v-btn text color="blue-grey darken-3" @click="routeTo('WordList')">
      <v-icon>mdi-view-list</v-icon>
    </v-btn>
  </v-app-bar>
</template>
