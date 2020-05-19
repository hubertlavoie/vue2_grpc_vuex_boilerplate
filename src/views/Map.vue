<template>
  <span>
    <v-container fluid fill-height pa-0>
      <v-layout>
        <div v-if="main.showPolygoneCreation" class="box"></div>
        <l-map
          ref="map"
          style="height: 100%; width: 100%"
          :zoom="main.zoom"
          :center="main.center"
          @update:zoom="zoomUpdated"
          @update:center="centerUpdated"
          @update:bounds="boundsUpdated"
          :options="{ zoomControl: false }"
          @click="addPolyPoint"
          :style="main.showPolygoneCreation ? 'cursor:crosshair' : null"
        >
          <l-control-zoom position="bottomleft"></l-control-zoom>
          <l-tile-layer
            url="https://2.base.maps.api.here.com/maptile/2.1/maptile/newest/normal.day.grey/{z}/{x}/{y}/256/png8?app_id=FjmbCOTX28czbriR6l5r&app_code=RV_WNQATAzgUtvTTmN-11Q&lg=fr"
          ></l-tile-layer>
          <l-polygon :lat-lngs="main.polyLatLngs" color="#1565C0"></l-polygon>
        </l-map>
      </v-layout>
    </v-container>
  </span>
</template>

<script>
import { LMap, LTileLayer, LControlZoom, LPolygon } from "vue2-leaflet";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    LMap,
    LTileLayer,
    LControlZoom,
    LPolygon,
  },
  computed: {
    ...mapState(["main"]),
  },
  methods: {
    ...mapActions("main", [
      "zoomUpdated",
      "centerUpdated",
      "boundsUpdated",
      "addPolyPoint",
    ]),
  },
};
</script>

<style lang="scss" scoped>
.box {
  -webkit-box-shadow: 10px 11px 9px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 10px 11px 9px -10px rgba(0, 0, 0, 0.57);
  box-shadow: 10px 11px 9px -10px rgba(0, 0, 0, 0.57);
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000;
  width: 400px;
  background: #fff;
  height: 400px;
}
</style>
