<template>
  <div class="slider__content">
    <slot name="picture" />
    <slot name="textContent" />
  </div>
</template>

<script>
export default {
  name: "sliderContent",
};
</script>

<style scoped>
.slider__content {
  background-color: rgb(246, 246, 246);
  margin-bottom: 24px;
}
</style>
