<template>
  <div class="slider">
    <slider-progress-bar :progress="progress"></slider-progress-bar>
    <slider-header
      :user-info="userInfo"
      :header-text="headerText"
    ></slider-header>
    <slider-content>
      <template #picture>
        <div class="pictureContainer">
          <img src="../../../public/github.jpg" alt="" />
        </div>
      </template>
      <template #textContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        aperiam consequuntur corporis debitis dicta et excepturi expedita harum
        ipsa iste maiores nesciunt numquam, qui soluta, vel veritatis voluptate
        voluptates voluptatum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        aperiam consequuntur corporis debitis dicta et excepturi expedita harum
        ipsa iste maiores nesciunt numquam, qui soluta, vel veritatis voluptate
        voluptates voluptatum
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        aperiam consequuntur corporis debitis dicta et excepturi expedita harum
        ipsa iste maiores nesciunt numquam, qui soluta, vel veritatis voluptate
        voluptates voluptatum
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        aperiam consequuntur corporis debitis dicta et excepturi expedita harum
        ipsa iste maiores nesciunt numquam, qui soluta, vel veritatis voluptate
        voluptates voluptatum
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        aperiam consequuntur corporis debitis dicta et excepturi expedita harum
        ipsa iste maiores nesciunt numquam, qui soluta, vel veritatis voluptate
        voluptates voluptatum
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        aperiam consequuntur corporis debitis dicta et excepturi expedita harum
        ipsa iste maiores nesciunt numquam, qui soluta, vel veritatis voluptate
        voluptates voluptatum
      </template>
    </slider-content>
    <div class="slider__action">
      <confirm-button :text="buttonText" @confirm="follow"></confirm-button>
    </div>
  </div>
</template>

<script>
import sliderProgressBar from "./sliderProgressBar";
import sliderHeader from "./sliderHeader";
import sliderContent from "./sliderContent";
import ConfirmButton from "/src/components/buttons/confirmButton";

export default {
  name: "sliderComponent",
  components: { ConfirmButton, sliderProgressBar, sliderHeader, sliderContent },
  props: {
    userInfo: {
      type: Object,
      required: true,
    },
    headerText: {
      type: String,
      required: true,
    },
    slidersStatistics: {
      type: Object,
      required: true,
      default: () => ({
        currentIndex: 1,
        slidersCount: 1,
      }),
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
  computed: {
    // Процент прогресса просмотра слайдов
    progress() {
      return Math.round(
        (this.slidersStatistics.currentIndex * 100) /
          this.slidersStatistics.slidersCount
      );
    },
  },
  methods: {
    follow() {
      console.log("Follow!");
    },
  },
};
</script>

<style>
.pictureContainer {
}

img {
  max-width: 100%;
  max-height: 100%;
}

.slider__action {
  display: flex;
  justify-content: center;
}
</style>
