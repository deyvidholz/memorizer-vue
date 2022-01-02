import Vue from "vue";

Vue.mixin({
  computed: {
    state() {
      return this.$store.state;
    },
    store() {
      return this.$store;
    },
  },
  methods: {
    openDialog(dialogName) {
      this.state.dialogs[dialogName].show = true;
    },
  },
});
