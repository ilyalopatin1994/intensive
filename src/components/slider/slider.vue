<template>
  <div class="slider" :style="styles">
    <slider-progress-bar :progress="progress"></slider-progress-bar>
    <slider-header
      :avatar-src="userInfo.avatar_url"
      :header-text="headerText"
    ></slider-header>
    <div
      class="sliderArrow leftArrow"
      v-if="isLeftVisible"
      @click="moveOnClick('left')"
    >
      <icons icon-name="arrow" />
    </div>
    <div
      class="sliderArrow rightArrow"
      v-if="isRightVisible"
      @click="moveOnClick('right')"
    >
      <icons icon-name="arrow" />
    </div>
    <spinner-component v-if="isActive && loading" />
    <slider-content v-if="isActive && !loading">
      <template #picture>
        <div class="pictureContainer">
          <img :src="userInfo.avatar_url" alt="" />
        </div>
      </template>
      <template #textContent>
        <div v-html="readmeText" />
      </template>
    </slider-content>
    <slider-content v-if="!isActive">
      <template #picture>
        <div class="pictureContainer">
          <slider-placeholder
            p-width="100%"
            p-height="100px"
          ></slider-placeholder>
          <br />
        </div>
      </template>
      <template #textContent>
        <div class="textContent">
          <slider-placeholder
            p-width="70%"
            p-height="20px"
          ></slider-placeholder>
          <slider-placeholder
            p-width="80%"
            p-height="20px"
          ></slider-placeholder>
          <slider-placeholder
            p-width="60%"
            p-height="20px"
          ></slider-placeholder>
          <br />
          <slider-placeholder
            p-width="70%"
            p-height="20px"
          ></slider-placeholder>
          <slider-placeholder
            p-width="80%"
            p-height="20px"
          ></slider-placeholder>
          <slider-placeholder
            p-width="60%"
            p-height="20px"
          ></slider-placeholder>
        </div>
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
import sliderPlaceholder from "./sliderPlaceholder";
import spinnerComponent from "/src/components/slider/spinner";
import ConfirmButton from "/src/components/buttons/confirmButton";
import { icons } from "/src/components/icons";
import { getRepoReadme } from "/src/api/rest/github/repoReadme";

const { mapState } = createNamespacedHelpers("github");

export default {
  name: "sliderComponent",
  emits: ["moveOnClick"],
  components: {
    ConfirmButton,
    sliderProgressBar,
    sliderHeader,
    sliderContent,
    sliderPlaceholder,
    spinnerComponent,
    icons,
  },
  data() {
    return {
      loading: true,
      readmeText: "",
    };
  },
  props: {
    userInfo: {
      type: Object,
      required: true,
    },
    repoInfo: {
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
    isLeftVisible() {
      if (this.isActive) {
        return this.sliderIndex > 0;
      }
      return false;
    },
    isRightVisible() {
      if (this.isActive) {
        return this.sliderIndex < this.users.length - 1;
      }
      return false;
    },
  },
  methods: {
    follow() {
      this.$emit("onFollow");
    },
    async getReadmeText(owner, repo) {
      const payload = {
        headers: {
          accept: "application/vnd.github.v3.html",
        },
      };
      const { data } = await getRepoReadme(owner, repo, payload);
      setTimeout(() => {
        this.loading = false;
        this.readmeText = data;
      }, 2000);
    },
    moveOnClick(direction) {
      this.$emit("moveOnClick", direction);
    },
  },
  mounted() {
    if (this.isActive) {
      this.getReadmeText(this.userInfo.login, this.repoInfo.name);
    }
  },
};
</script>

<style>
.pictureContainer {
  padding: 10px;
}

.textContent {
  padding: 10px;
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
  transform: translate(-250px, -50%);
}

.rightArrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(210px, -50%) rotateY(180deg);
}
</style>
