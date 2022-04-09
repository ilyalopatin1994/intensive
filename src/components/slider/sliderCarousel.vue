<template>
  <div class="carouselPage">
    <!--      v-for="(user, index) in users.slice(leftEdge, rightEdge + 1)"-->
    <slider
      v-for="(user, index) in usersForSlider"
      :key="user.id"
      :user-info="user"
      button-text="Follow"
      :header-text="user.login"
      :slider-index="index"
      :is-active="user.id === activeSliderIndex"
      :styles="defineSlideStyle(index)"
    >
    </slider>
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
      usersForSlider: [],
    };
  },
  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
    // leftEdge () {
    //   // Левая граница отбора слайдов из users для отображения в карусели
    //   // Будем отибрать всего 5 слайдов, по два с каждой стороны от центра
    //   let steps = 2; // два слева
    //   let index = this.activeSliderIndex;
    //   while (steps > 0) {
    //     if (index === 0) {
    //       break;
    //     } else {
    //       index--;
    //       steps--;
    //     }
    //   }
    //   return index;
    // },
    // rightEdge () {
    //   // Правая граница отбора слайдов из users для отображения в карусели
    //   // Будем отибрать всего 5 слайдов, по два с каждой стороны от центра
    //   let steps = 2; // Два справа
    //   let index = this.activeSliderIndex;
    //   const max = this.users.length - 1;
    //   while (steps > 0) {
    //     if (index === max) {
    //       break;
    //     } else {
    //       index++;
    //       steps--;
    //     }
    //   }
    //   return index;
    // }
  },
  mounted() {
    if (this.users.length === 0) {
      return;
    }

    let index;
    if (!this.$route.params.id) {
      index = Math.round(this.users.length / 2) - 1;
      this.activeSliderIndex = Math.round(index / 2) - 1;
    } else {
      index = this.users.findIndex((user) => {
        return parseInt(user.id) === parseInt(this.$route.params.id);
      });
    }

    const max = this.users.length;
    const leftEdge = index > 1 ? index - 2 : 0;
    const rightEdge = index < max - 1 ? index + 3 : max;
    this.usersForSlider = this.users.slice(leftEdge, rightEdge);
    if (this.$route.params?.id) {
      this.activeSliderIndex = this.usersForSlider.findIndex((user) => {
        return parseInt(user.id) === parseInt(this.$route.params.id);
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
</style>
