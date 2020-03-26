export const namespaced = true;
// const { Empty } = require("@/proto/stalkersvc_pb.js");
const { StalkerSVCClient } = require("@/proto/stalkersvc_grpc_web_pb");

export const state = {
  client: null
};

export const mutations = {
  SET_CLIENT(state) {
    state.client = new StalkerSVCClient(
      "http://" + "localhost" + ":8080",
      null,
      null
    );
  }
};

export const actions = {
  initialiseGrpcClient({ commit }) {
    commit("SET_CLIENT");
  }
};
