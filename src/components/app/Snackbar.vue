<template>
  <v-snackbar v-model="state.dialogs.snackbar.show" color="blue-grey darken-3">
    {{ state.dialogs.snackbar.text }}

    <template v-slot:action="{ attrs }">
      <v-btn
        color="pink"
        text
        v-bind="attrs"
        @click="state.dialogs.snackbar.show = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {};
</script>
