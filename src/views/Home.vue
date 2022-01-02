<template>
  <div class="centralized">
    <div class="container text-center">
      <p>What is the translation for...</p>
      <h1 class="display-4 orange--text text--darken-3">Grape</h1>

      <TextField class="mt-8" />
      <ReadyButton />
    </div>
  </div>
</template>

<script>
import TextField from "@/components/home/TextField";
import ReadyButton from "@/components/home/ReadyButton";

export default {
  name: "Home",

  components: {
    TextField,
    ReadyButton,
  },
};
</script>
