import Vue from "vue";
import Vuex from "vuex";
import * as grpc from "@/store/modules/grpc.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { grpc }
});
