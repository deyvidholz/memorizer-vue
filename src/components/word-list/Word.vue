<template>
  <div class="word">
    <div>
      <v-icon
        color="green darken-2"
        class="mr-2"
        small
        v-if="sequentialHits > 9"
      >
        mdi-brightness-1
      </v-icon>

      <v-icon v-else color="grey darken-1" class="mr-2" small>
        mdi-brightness-1
      </v-icon>

      {{ name }}
      <small>({{ sequentialHits }})</small>
    </div>

    <button text @click="removeWord(id)">
      <v-icon color="red">mdi-close</v-icon>
    </button>
  </div>
</template>

<script>
import { remove } from "../../services/database";

export default {
  props: ["id", "name", "translation", "sequentialHits"],

  methods: {
    removeWord(id) {
      remove(id);
      // @note could have also remove directly from store (which would consume less processing)
      this.loadFromDatabase();
    },
  },
};
</script>

<style scoped>
.word {
  width: 100%;
  background-color: #e5e5e5;
  color: #009688;
  font-weight: bold;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e9c46a;
}

.word:first-of-type {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.word:nth-last-of-type(1) {
  border-bottom: 0;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.word:nth-child(odd) {
  background-color: #e9c46a;
}
</style>
