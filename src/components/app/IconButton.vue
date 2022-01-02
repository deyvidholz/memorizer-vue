<template>
  <v-btn
    color="teal"
    dark
    large
    :width="width ? width + 'px' : null"
    @click="handleClick"
  >
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
    onClick: {
      default: null,
    },
  },
  methods: {
    handleClick() {
      if (!this.onClick) {
        return;
      }

      this.onClick.call();
    },
  },
};
</script>
