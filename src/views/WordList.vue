<template>
  <div class="container mt-12">
    <h1 class="display-2 text-center orange--text text--darken-3">
      List of Words
    </h1>

    <div
      class="d-flex flex-column justify-start mt-5"
      v-if="state.words.length"
    >
      <Word
        v-for="word in state.words"
        :key="word.id"
        :id="word.id"
        :name="word.name"
        :sequentialHits="word.sequentialHits"
      />
    </div>

    <p class="text-center mt-12" v-else>No words found</p>
  </div>
</template>

<script>
import Word from "@/components/word-list/Word";

export default {
  name: "Home",

  components: {
    Word,
  },

  created() {
    this.loadFromDatabase(true);
  },
};
</script>
