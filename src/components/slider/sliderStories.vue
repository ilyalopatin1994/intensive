<template>
  <div class="storiesPage">
    <div class="storiesHeader">
      <div class="storiesHeader__label">{{ projectName }}</div>
      <router-link to="/">
        <div class="header-actions"><icons icon-name="close" /></div>
      </router-link>
    </div>

    <div class="stories-container">
      <ul class="stories-line" ref="slider">
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
import Icons from "@/components/icons/icons";

const { mapState } = createNamespacedHelpers("github");

export default {
  name: "sliderCarousel",
  components: { Icons, slider },
  props: {
    projectName: {
      type: String,
      default: "Gitogram /",
    },
  },
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
      // Изначальное позиционирование карусели
      // Опеределяем сдвиг на основе номера слайда
      // Смещение выполняется от центра
      const { slider, item } = this.$refs;
      if (!this.$route.params.id) {
        // Просто берем центральный слайд. Можно брать любой
        this.activeSliderIndex = Math.round(this.users.length / 2) - 1;
      } else {
        this.activeSliderIndex = this.users.findIndex((user) => {
          return user.id.toString() === this.$route.params.id;
        });
      }

      // Ширина слайда
      const width = this.getItemWidth(item[0]);
      const position = width * this.activeSliderIndex * -1;
      slider.style.transform = `translateX(${position}px)`;
    },
    changeSlide(direction) {
      // Смещение либо 0 либо отрицательное
      const { slider, item } = this.$refs;
      const width = this.getItemWidth(item[0]);
      let sign = -1;
      let position;
      direction === "left"
        ? this.activeSliderIndex--
        : this.activeSliderIndex++;

      position = width * this.activeSliderIndex * sign;
      slider.style.transform = `translateX(${position}px)`;
    },
    getItemWidth(item) {
      // Получение ширины элемента
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
.storiesPage {
  position: relative;
  background-color: black;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.stories-line {
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  left: 50%;
  margin-left: -220px; /*200 - половина ширины слайда + 20 - компенсация отступа в flex контейнере*/
  transition: 1s;
}

.stories-container {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.storiesHeader {
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
}

.storiesHeader__label {
  color: white;
  font-size: 20px;
}

.header-actions {
  color: white;
  width: 20px;
  height: 20px;
}
</style>
