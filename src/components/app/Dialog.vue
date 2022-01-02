<template>
  <v-dialog
    v-model="state.dialogs.addNewWord.show"
    transition="dialog-bottom-transition"
    max-width="600"
    dark
  >
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar
          color="blue-grey darken-3"
          class="yellow--text display-1"
          dark
        >
          <div class="text-center w100">
            {{ title }}
          </div>
        </v-toolbar>

        <v-card-text :class="`${backgroundColor}`">
          <div :class="`text-h2 pa-12 ${textColor}`">
            <slot />
          </div>
        </v-card-text>

        <v-card-actions class="justify-end" v-if="showCloseButton">
          <v-btn text @click="dialog.value = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    backgroundColor: {
      type: String,
      default: "",
    },
    textColor: {
      type: String,
      default: "white--text",
    },
    showCloseButton: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
