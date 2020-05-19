export const namespaced = true;

export const state = {
  zoom: 11,
  center: { lat: 48.85098698229346, lng: 2.3619751606993806 },
  bounds: null,
  polyLatLngs: [],
  showPolygoneCreation: false,
};

export const mutations = {
  ADD_POLY_POINT(state, payload) {
    state.polyLatLngs.push([payload.latlng.lat, payload.latlng.lng]);
  },
  REMOVE_LAST_POINT(state) {
    state.polyLatLngs.pop();
  },
};

export const actions = {
  zoomUpdated({ state }, zoom) {
    state.zoom = zoom;
  },
  centerUpdated({ state }, center) {
    state.center = center;
  },
  boundsUpdated({ state }, bounds) {
    state.bounds = bounds;
  },
  addPolyPoint({ commit, state }, point) {
    if (state.showPolygoneCreation) {
      commit("ADD_POLY_POINT", point);
      console.log(state.polyLatLngs);
    }
  },
  removeLastPoint({ commit }) {
    commit("REMOVE_LAST_POINT");
  },
};
