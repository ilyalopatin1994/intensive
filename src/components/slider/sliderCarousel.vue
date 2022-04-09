<template>
  <div class="carouselPage">
    <div
      class="sliderArrow leftArrow"
      v-if="isLeftVisible"
      @click="activeSliderIndex--"
    >
      <icons icon-name="arrow" />
    </div>
    <div
      class="sliderArrow rightArrow"
      v-if="isRightVisible"
      @click="activeSliderIndex++"
    >
      <icons icon-name="arrow" />
    </div>
    <slider
      v-for="(user, index) in users"
      :key="user.id"
      :user-info="user"
      button-text="Follow"
      :header-text="user.login"
      :slider-index="index"
      :is-active="index === activeSliderIndex"
      :styles="defineSlideStyle(index)"
    >
    </slider>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import slider from "@/components/slider/slider";
import { icons } from "/src/components/icons";

const { mapState } = createNamespacedHelpers("github");

export default {
  name: "sliderCarousel",
  components: { slider, icons },
  data() {
    return {
      activeSliderIndex: 0,
    };
  },
  computed: {
    ...mapState({
      users: (state) => state.users,
      isDataLoaded: (state) => state.isLoaded,
    }),
    isLeftVisible() {
      return this.activeSliderIndex > 0;
    },
    isRightVisible() {
      return this.activeSliderIndex < this.users.length - 1;
    },
  },
  mounted() {
    if (!this.$route.params.id) {
      this.activeSliderIndex = Math.round(this.users.length / 2) - 1;
    } else {
      this.activeSliderIndex = this.users.findIndex((user) => {
        return user.id.toString() === this.$route.params.id;
      });
    }
  },
  methods: {
    defineSlideStyle(index) {
      // Определяем расположение слайда
      // Изначально размещаем все слайды по центру, без translate(-50%)
      // потому, что в дальнейшем translate все равно придется перезаписывать
      const styles = {
        position: "absolute",
        top: "50%",
        left: "50%",
      };
      let xOffset;
      // Активный элемент всегда по центру
      if (index === this.activeSliderIndex) {
        styles.transform = "translate(-50%, -50%)";
      } else {
        // Неактивные слайды.
        // diff - множитель смещения (может примать - и + значения).
        const diff = index - this.activeSliderIndex;
        // -50 используется для того, чтобы скомпенсировать недостающее
        // размещение по центру, и далее от центра уже двигаем слайд
        xOffset = diff * 110 - 50 + "%";
        styles.transform = `translate(${xOffset}, -50%) scale(0.9)`;
        styles.opacity = 0.5;
      }
      return styles;
    },
  },
};
</script>

<style scoped>
.carouselPage {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: black;
  overflow: hidden;
}

.sliderArrow {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid white;
  color: white;
  padding: 5px;
  box-sizing: border-box;
}

.leftArrow {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1000;
  transform: translate(-900%, -50%);
}

.rightArrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(800%, -50%) rotateY(180deg);
}
</style>
