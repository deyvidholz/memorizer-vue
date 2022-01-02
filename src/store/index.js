import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dialogs: {
      addNewWord: {
        show: false,
      },
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
