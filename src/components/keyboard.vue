<template>
  <span></span>
</template>

<script>
import { mapActions } from "vuex";
export default {
  mounted() {
    window.addEventListener("keydown", this.keyboardEvent);
  },
  methods: {
    keyboardEvent(event) {
      console.log(event);
      if (event.ctrlKey == true && event.key == "z") {
        this.removeLastPoint();
        console.log("ctrlZ");
      }
    },
    ...mapActions("main", ["removeLastPoint"]),
  },
};
</script>

<style lang="scss" scoped></style>
