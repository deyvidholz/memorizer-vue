<template>
  <div class="centralized">
    <div class="container text-center">
      <p>What is the translation for...</p>
      <h1 class="display-4 orange--text text--darken-3">{{ word.name }}</h1>

      <v-text-field
        v-model="translation"
        solo
        clearable
        autofocus
        light
        class="mt-8"
        :placeholder="`What's the meaning for '${word.name}'?`"
        @keypress="enterToSubmit"
      />

      <Button text="Ready" :onClick="submit" width="200" />
      <Snackbar />
    </div>
  </div>
</template>

<script>
import Button from "@/components/app/Button";
import Snackbar from "@/components/app/Snackbar";

import { getRandomWord, update } from "../services/database";

export default {
  name: "Home",

  components: {
    Button,
    Snackbar,
  },

  data: () => ({
    word: null,
    translation: "",
  }),

  created() {
    this.getNewWord();
  },

  methods: {
    submit() {
      const isIncorrect =
        this.word.translation.toLowerCase() !==
        this.translation.trim().toLowerCase();

      this.clearFields();

      if (isIncorrect) {
        this.state.dialogs.snackbar.text = "Wrong answer";
        this.openDialog("snackbar");

        update(this.word.id, { sequentialHits: 0 });
        this.getNewWord();
        return;
      }

      this.state.dialogs.snackbar.text = "Correct!";
      this.openDialog("snackbar");

      update(this.word.id, { sequentialHits: this.word.sequentialHits + 1 });
      this.getNewWord();
    },

    enterToSubmit(event) {
      if (event.code !== "Enter") {
        return;
      }

      this.submit();
    },

    getNewWord() {
      this.word =
        this.word && this.word.id
          ? getRandomWord([this.word.id])
          : getRandomWord();
    },

    clearFields() {
      this.translation = "";
    },
  },
};
</script>
