import Vue from "vue";
import Vuex from "vuex";
import * as main from "@/store/modules/main.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { main },
});
