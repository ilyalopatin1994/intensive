<template>
  <div v-if="isDataLoaded">
    <header-container>
      <template #header>
        <main-page-header project-name="Gitogram"></main-page-header>
      </template>
    </header-container>
    <div class="profileContainer">
      <div class="personalInfo">
        <h3>My profile</h3>
        <div class="myProfile">
          <img id="profileAvatar" :src="myUser.avatar_url" />
          <div>
            <div>{{ myUser.login }}</div>
            <div>Forks: {{ myUser.forksCount }}</div>
            <div>Watchers: {{ myUser.watchersCount }}</div>
          </div>
        </div>
      </div>
      <div class="verticalLine" />
      <div class="pagination">
        <div
          v-show="showLeftArrow"
          class="sliderArrow colored-black"
          @click="paginate('left')"
        >
          <icons icon-name="arrow" />
        </div>
      </div>
      <div>
        <div class="horizontal_row">
          <div>
            <h1>REPOSITORIES</h1>
          </div>
          <div>
            <span style="color: grey">{{ starredRepositories.length }} </span>
          </div>
        </div>
        <div
          class="repositoriesList"
          v-for="repo in starredRepositories.slice(leftBorder, rightBorder)"
          :key="repo.id"
        >
          <div class="profileRepositoryItem">
            <repository-item :repo="repo"></repository-item>
          </div>
        </div>
      </div>
      <div class="pagination">
        <div
          v-if="showRightArrow"
          class="sliderArrow right colored-black"
          @click="paginate('right')"
        >
          <icons icon-name="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerContainer from "@/components/feeds/headerContainer";
import mainPageHeader from "@/components/feeds/header";
import repositoryItem from "/src/components/feeds/repositoryItem";
import myProfile from "/src/composables/myProfile";
import icons from "/src/components/icons/icons";

export default {
  name: "profilePage",
  components: { headerContainer, mainPageHeader, repositoryItem, icons },

  setup() {
    const {
      isDataLoaded,
      starredRepositories,
      myUser,
      leftBorder,
      rightBorder,
      paginate,
      showLeftArrow,
      showRightArrow,
    } = myProfile();

    return {
      isDataLoaded,
      myUser,
      starredRepositories,
      leftBorder,
      rightBorder,
      showLeftArrow,
      showRightArrow,
      paginate,
    };
  },
};
</script>

<style scoped>
.verticalLine {
  width: 2px;
  height: 100%;
  background-color: #f5f5f5;
}

.profileContainer {
  width: 1440px;
  height: 80vh;
  border-top: 2px solid #f5f5f5;
  display: flex;
  justify-content: space-evenly;
  margin-top: -32px;
  padding-top: 10px;
  box-sizing: border-box;
}

#profileAvatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid #fffafa;
  margin-right: 10px;
}

/*#repositoriesContainer {*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  justify-content: space-evenly;*/
/*  min-height: 74vh;*/
/*}*/

.repositoriesList {
  width: 500px;
}

.myProfile {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.horizontal_row {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.colored-black {
  border: 1px solid black;
  color: black;
}

.right {
  transform: rotateY(180deg);
}

.pagination {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
