import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    words: [],
    dialogs: {
      addNewWord: {
        show: false,
      },
      snackbar: {
        show: false,
        text: null,
      },
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
