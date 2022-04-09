<template>
  <div class="slider__header">
    <div class="slider__header--photo">
      <img :src="avatarSrc" />
    </div>
    <div class="slider__header--text">
      <b>{{ headerText }}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: "sliderHeader",
  props: {
    avatarSrc: {
      type: String,
      required: true,
    },
    headerText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.slider__header {
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-bottom: 20px;
}

.slider__header--photo {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

img {
  max-width: 100%;
  max-height: 100%;
}
</style>
