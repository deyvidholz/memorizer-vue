<template>
  <v-text-field
    v-model="meaning"
    solo
    clearable
    autofocus
    placeholder="Whats the meaning?"
    light
  />
</template>

<script>
export default {
  data: () => ({
    meaning: null,
  }),
};
</script>
