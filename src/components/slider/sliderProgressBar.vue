<template>
  <div class="slider__progressBar">
    <div class="viewed" :style="{ width: viewedWidth }" />
    <div class="notViewed" :style="{ width: notViewedWidth }" />
  </div>
</template>

<script>
export default {
  name: "sliderProgressBar",
  props: {
    progress: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    viewedWidth() {
      return this.progress + "%";
    },
    notViewedWidth() {
      return 100 - this.progress + "%";
    },
  },
};
</script>

<style scoped>
.viewed {
  background-color: #31ae54;
}

.notViewed {
  background-color: rgba(49, 174, 84, 0.3);
}
</style>
