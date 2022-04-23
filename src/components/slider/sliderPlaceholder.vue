<template>
  <div class="rectangle" :style="{ width: pWidth, height: pHeight }"></div>
</template>

<script>
export default {
  name: "sliderPlaceholder",
  props: ["pWidth", "pHeight"],
};
</script>

<style scoped>
.rectangle {
  background-color: grey;
  margin-bottom: 15px;
}
</style>
