<template>
  <Dialog
    title="New Word"
    backgroundColor="blue-grey darken-1"
    textColor="grey--text text--darken-4"
    :showCloseButton="false"
  >
    <v-text-field
      v-model="word"
      solo
      autofocus
      placeholder="Word"
      light
      @keypress="enterToSubmit"
    />

    <v-text-field
      v-model="translation"
      solo
      placeholder="Translation"
      light
      @keypress="enterToSubmit"
    />

    <div class="text-center">
      <IconButton icon="mdi-plus" width="200" :onClick="addNewWord" />
    </div>
  </Dialog>
</template>

<script>
import Dialog from "@/components/app/Dialog";
import IconButton from "@/components/app/IconButton";

import { create } from "../../services/database";

export default {
  components: {
    Dialog,
    IconButton,
  },

  data: () => ({
    word: null,
    translation: null,
  }),

  methods: {
    addNewWord() {
      if (!this.word || !this.translation) {
        return;
      }

      create(this.word, this.translation);

      this.loadFromDatabase();
      this.word = null;
      this.translation = null;
      this.closeDialog("addNewWord");
    },
    enterToSubmit(event) {
      if (event.code !== "Enter") {
        return;
      }

      this.addNewWord();
    },
  },
};
</script>
