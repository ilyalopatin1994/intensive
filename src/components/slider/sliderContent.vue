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
  max-height: 500px;
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
</style>
