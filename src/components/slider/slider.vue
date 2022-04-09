<template>
  <div class="slider" :style="styles">
    <slider-progress-bar :progress="progress"></slider-progress-bar>
    <slider-header
      :avatar-src="userInfo.avatar_url"
      :header-text="headerText"
    ></slider-header>
    <slider-content>
      <template #picture>
        <div class="pictureContainer">
          <img src="../../../public/github.jpg" alt="" />
        </div>
      </template>
      <template #textContent>
        {{ sliderContentText }}
      </template>
    </slider-content>
    <div class="slider__action">
      <confirm-button :text="buttonText" @onConfirm="follow"></confirm-button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import sliderProgressBar from "./sliderProgressBar";
import sliderHeader from "./sliderHeader";
import sliderContent from "./sliderContent";
import ConfirmButton from "/src/components/buttons/confirmButton";

const { mapState } = createNamespacedHelpers("github");

export default {
  name: "sliderComponent",
  components: {
    ConfirmButton,
    sliderProgressBar,
    sliderHeader,
    sliderContent,
  },
  props: {
    userInfo: {
      type: Object,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    sliderIndex: {
      type: Number,
      required: true,
      default: 1,
    },
    headerText: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    styles: {
      type: Object,
    },
  },
  data() {
    return {
      sliderContentText:
        "        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid\n" +
        "        aperiam consequuntur corporis debitis dicta et excepturi expedita harum\n" +
        "        ipsa iste maiores nesciunt numquam, qui soluta, vel veritatis voluptate\n" +
        "        voluptates voluptatum. Lorem ipsum dolor sit amet, consectetur\n" +
        "        adipisicing elit. Aliquid aperiam consequuntur corporis debitis dicta et\n" +
        "        excepturi expedita harum ipsa iste maiores nesciunt numquam, qui soluta,\n" +
        "        vel veritatis voluptate voluptates voluptatum Lorem ipsum dolor sit\n" +
        "        amet, consectetur adipisicing elit. Aliquid aperiam consequuntur\n" +
        "        corporis debitis dicta et excepturi expedita harum ipsa iste maiores\n" +
        "        nesciunt numquam, qui soluta, vel veritatis voluptate voluptates\n" +
        "        voluptatum Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n" +
        "        Aliquid aperiam consequuntur corporis debitis dicta et excepturi\n" +
        "        expedita harum ipsa iste maiores nesciunt numquam, qui soluta, vel\n" +
        "        veritatis voluptate voluptates voluptatum Lorem ipsum dolor sit amet,\n" +
        "        consectetur adipisicing elit. Aliquid aperiam consequuntur corporis\n" +
        "        debitis dicta et excepturi expedita harum ipsa iste maiores nesciunt\n" +
        "        numquam, qui soluta, vel veritatis voluptate voluptates voluptatum Lorem\n" +
        "        ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam\n" +
        "        consequuntur corporis debitis dicta et excepturi expedita harum ipsa\n" +
        "        iste maiores nesciunt numquam, qui soluta, vel veritatis voluptate\n" +
        "        voluptates voluptatum",
    };
  },
  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
    // Процент прогресса просмотра слайдов
    progress() {
      if (!this.isActive) {
        return 0;
      }
      return Math.round(((this.sliderIndex + 1) * 100) / this.users.length);
    },
  },
  methods: {
    follow() {
      this.$emit("onFollow");
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

.inactiveSlider {
  transform: scale(0.5);
}
</style>
