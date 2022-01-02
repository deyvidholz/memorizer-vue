import Vue from "vue";
import { find } from "../services/database";

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
    closeDialog(dialogName) {
      this.state.dialogs[dialogName].show = false;
    },
    routeTo(routeName) {
      if (this.$route.name === routeName) {
        return;
      }

      this.$router.push({ name: routeName });
    },
    loadFromDatabase() {
      this.state.words = find();
    },
  },
});
