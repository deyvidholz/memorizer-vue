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
      clearable
      autofocus
      placeholder="Word"
      light
    />

    <v-text-field
      v-model="translation"
      solo
      clearable
      autofocus
      placeholder="Translation"
      light
    />

    <div class="text-center"><IconButton icon="mdi-plus" width="200" /></div>
  </Dialog>
</template>

<script>
import Dialog from "@/components/app/Dialog";
import IconButton from "@/components/app/IconButton";

export default {
  components: {
    Dialog,
    IconButton,
  },

  data: () => ({
    word: null,
    translation: null,
  }),
};
</script>
