<template>
  <v-app>
    <v-app-bar app color="blue-grey darken-4" dark>
      <v-spacer />

      <v-switch
        v-model="main.showPolygoneCreation"
        class="mx-2"
        label="Create polygone alert"
        style="position:relative;top:8px;"
      ></v-switch>
    </v-app-bar>

    <v-content style="width:100%;height:100%;">
      <Keyboard />
      <TheMap />
    </v-content>
    <v-footer color="blue-grey darken-4" app>
      <span class="white--text">&copy; 2020</span>
      <v-spacer />
    </v-footer>
  </v-app>
</template>

<script>
import TheMap from "./views/Map";
import Keyboard from "./components/keyboard";
import { mapState } from "vuex";

export default {
  name: "App",

  components: {
    TheMap,
    Keyboard,
  },
  computed: {
    ...mapState(["main"]),
  },
};
</script>
