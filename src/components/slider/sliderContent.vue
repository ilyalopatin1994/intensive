<template>
  <div class="slider__content">
    <div class="pictureContent">
      <slot name="picture" />
    </div>
    <div class="textContent">
      <slot name="textContent" />
    </div>
  </div>
</template>

<script>
export default {
  name: "sliderContent",
};
</script>

<style scoped>
.slider__content {
  background-color: rgb(255, 255, 248);
  margin-bottom: 24px;
  max-height: 400px;
  min-height: 400px;
  /*display: flex;*/
  /*flex-direction: column;*/
  /*align-items: center;*/
  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: rgb(246, 246, 246);
  border-radius: 3px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: darkgrey;
  border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: grey;
}

.pictureContent {
  width: 300px;
  height: 250px;
}
</style>
