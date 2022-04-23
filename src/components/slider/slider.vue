<template>
  <div
    :class="['slider', { slider_inactive: !isActive }]"
    @mousedown="stopProgress"
    @mouseup="startProgress"
  >
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
    <div class="spinner-container">
      <div class="spinner">
        <spinner-component v-if="isActive && loading" />
      </div>
    </div>
    <slider-content v-if="isActive && !loading">
      <template #picture>
        <img :src="userInfo.avatar_url" alt="" />
      </template>
      <template #textContent>
        <div v-html="readmeText" />
      </template>
    </slider-content>
    <slider-content v-if="!isActive">
      <template #picture>
        <slider-placeholder p-width="100%" p-height="80%"></slider-placeholder>
        <br />
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
      <confirm-button
        @onConfirm="follow"
        :is-active-slider="isActive"
      ></confirm-button>
    </div>
  </div>
</template>

<script>
import sliderProgressBar from "./sliderProgressBar";
import sliderHeader from "./sliderHeader";
import sliderContent from "./sliderContent";
import sliderPlaceholder from "./sliderPlaceholder";
import spinnerComponent from "/src/components/slider/spinner";
import ConfirmButton from "/src/components/buttons/confirmButton";
import { icons } from "/src/components/icons";
import { getRepoReadme } from "/src/api/rest/github/repoReadme";
import { starRepository } from "@/api/rest/github/star";
import { mapState } from "vuex";

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
      loading: false,
      readmeText: "",
      progressInterval: "",
      progress: 0,
      isStarred: false,
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
    styles: {
      type: Object,
    },
  },
  computed: {
    ...mapState({
      users: (state) => state.github.users,
    }),
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
    buttonText() {
      return this.isStarred ? "Unfollow" : "Follow";
    },
  },
  watch: {
    isActive(curr) {
      if (curr) {
        this.getReadmeText(this.userInfo.login, this.repoInfo.name);
        this.progressInterval = setInterval(() => {
          this.progress += 0.5;
        }, 25);
      }
    },
    progress(curr) {
      if (curr >= 100) {
        clearInterval(this.progressInterval);
        if (this.sliderIndex === this.users.length - 1) {
          this.$router.push("/");
        } else {
          this.moveOnClick("right");
        }
      }
    },
  },
  methods: {
    stopProgress() {
      if (this.isActive) {
        clearInterval(this.progressInterval);
      }
    },
    startProgress() {
      if (this.isActive) {
        this.progressInterval = setInterval(() => {
          this.progress += 0.5;
        }, 25);
      }
    },
    async follow() {
      const payload = {
        method: this.isStarred ? "DELETE" : "PUT",
      };
      await starRepository(this.userInfo.login, this.repoInfo.name, payload);
      this.isStarred = !this.isStarred;
    },
    async getReadmeText(owner, repo) {
      this.loading = true;
      const payload = {
        headers: {
          accept: "application/vnd.github.v3.html",
        },
      };
      let data;
      try {
        data = (await getRepoReadme(owner, repo, payload)).data;
      } catch (e) {
        console.log(e);
        throw e;
      } finally {
        setTimeout(() => {
          this.loading = false;
          this.readmeText = data;
        }, 300);
      }
    },
    moveOnClick(direction) {
      clearInterval(this.progressInterval);
      this.progress = 0;
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
  display: flex;
  justify-content: flex-end;
  max-height: 250px;
  max-width: 200px;
}

.textContent {
  padding: 10px;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.slider {
  position: relative;
  width: 400px;
  height: 600px;
  border: 3px solid white;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.7);
  padding: 10px 15px;
  margin-right: 70px;
  box-sizing: border-box;
  transition: 1s;
}

.slider__action {
  display: flex;
  justify-content: center;
}

.slider_inactive {
  transform: scale(0.7);
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

.spinner-container {
  position: relative;
  height: 100%;
}

.spinner {
  position: absolute;
  top: 50%;
  left: 47%;
  transform: translate(-50%, -50%);
}

img {
  object-fit: contain;
}
</style>
