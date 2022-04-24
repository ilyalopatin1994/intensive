<template>
  <div
    :class="['rectangle', { animated: animated }]"
    :style="{ width: pWidth, height: pHeight }"
  ></div>
</template>

<script>
export default {
  name: "sliderPlaceholder",
  props: ["pWidth", "pHeight", "animated"],
};
</script>

<style scoped>
.rectangle {
  background-color: grey;
  border-radius: 3px;
  margin-bottom: 15px;
}

.animated {
  color: transparent;
  background-image: linear-gradient(
    90deg,
    #696969,
    #696969,
    #808080,
    #c0c0c0,
    #d3d3d3,
    #dcdcdc
  );
  -webkit-background-clip: border-box;
  background-clip: border-box;
  background-size: 300px 100px;
  background-position: 0 0;
  animation: bp 2s infinite linear;
}

@keyframes bp {
  from {
    background-position-x: 0px;
  }
  to {
    background-position-x: 300px;
  }
}
</style>
