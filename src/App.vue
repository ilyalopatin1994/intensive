<template>
  <main-page />
</template>

<script>
import mainPage from "@/pages/feeds/feeds";

export default {
  name: "App",
  components: {
    mainPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
