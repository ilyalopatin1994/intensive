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
    isActive: {
      type: Boolean,
      default: false,
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
.slider__progressBar {
  display: flex;
  flex: none;
  width: 100%;
  height: 8px;
  padding: 2px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.viewed {
  background-color: #31ae54;
}

.notViewed {
  background-color: rgba(49, 174, 84, 0.3);
}
</style>
