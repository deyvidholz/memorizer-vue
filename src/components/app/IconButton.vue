<template>
  <v-btn color="teal" dark large :width="width ? width + 'px' : null">
    <v-icon> {{ icon }} </v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "mdi-check",
    },
    width: {
      type: String,
      default: null,
    },
  },
};
</script>
