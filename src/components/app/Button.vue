<template>
  <v-btn color="teal" dark large :width="width ? width + 'px' : null">
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Button",
    },
    width: {
      type: String,
      default: null,
    },
  },
};
</script>
