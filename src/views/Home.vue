<template>
  <div class="centralized">
    <div class="container text-center">
      <p>What is the translation for...</p>
      <h1 class="display-4 orange--text text--darken-3">Grape</h1>

      <AddNewWordTextField class="mt-8" />
      <ReadyButton />
      <AddNewWordDialog />
    </div>
  </div>
</template>

<script>
import AddNewWordTextField from "@/components/home/AddNewWordTextField";
import ReadyButton from "@/components/home/ReadyButton";
import AddNewWordDialog from "@/components/home/AddNewWordDialog";

export default {
  name: "Home",

  components: {
    AddNewWordTextField,
    ReadyButton,
    AddNewWordDialog,
  },
};
</script>
