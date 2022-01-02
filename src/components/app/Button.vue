<template>
  <v-btn
    color="teal"
    dark
    large
    :width="width ? width + 'px' : null"
    @click="handleClick"
  >
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
