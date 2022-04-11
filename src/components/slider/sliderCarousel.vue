<template>
  <div class="carouselPage">
    <div class="stories-container">
      <ul class="stories" ref="slider">
        <li v-for="(repo, index) in repositories" :key="repo.id" ref="item">
          <slider
            :user-info="repo.owner"
            :repo-info="repo"
            button-text="Follow"
            :header-text="repo.owner.login"
            :slider-index="index"
            :is-active="index === activeSliderIndex"
            @moveOnClick="changeSlide($event)"
          >
          </slider>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import slider from "@/components/slider/slider";

const { mapState } = createNamespacedHelpers("github");

export default {
  name: "sliderCarousel",
  components: { slider },
  data() {
    return {
      activeSliderIndex: 0,
    };
  },
  computed: {
    ...mapState({
      users: (state) => state.users,
      repositories: (state) => state.repositories,
      isDataLoaded: (state) => state.isLoaded,
    }),
  },
  mounted() {
    this.setInitialPosition();
  },
  methods: {
    setInitialPosition() {
      const { slider, item } = this.$refs;
      if (!this.$route.params.id) {
        this.activeSliderIndex = Math.round(this.users.length / 2) - 1;
      } else {
        this.activeSliderIndex = this.users.findIndex((user) => {
          return user.id.toString() === this.$route.params.id;
        });
      }

      const width = this.getItemWidth(item[0]);
      const position = width * this.activeSliderIndex * -1;
      slider.style.transform = `translateX(${position}px)`;
    },
    changeSlide(direction) {
      const { slider, item } = this.$refs;
      const width = this.getItemWidth(item[0]);
      let sign = -1; // Смещение от отрицательных чисел до 0 (когда открыт первый слайд)
      let position;
      direction === "left"
        ? this.activeSliderIndex--
        : this.activeSliderIndex++;

      position = width * this.activeSliderIndex * sign;
      slider.style.transform = `translateX(${position}px)`;
    },
    getItemWidth(item) {
      const width = parseInt(
        getComputedStyle(item).getPropertyValue("width"),
        10
      );
      return width;
    },
  },
};
</script>

<style scoped>
.carouselPage {
  position: relative;
  background-color: black;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.stories {
  display: flex;
  align-items: center;
  position: absolute;
  left: 50%;
  margin-left: -200px;
  transition: 0.4s;
}

.stories-container {
  position: relative;
  height: 700px;
  overflow: hidden;
}
</style>
