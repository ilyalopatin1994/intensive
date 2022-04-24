<template>
  <div id="container" v-if="isDataLoaded">
    <header-container>
      <template #header>
        <main-page-header project-name="Gitogram"></main-page-header>
      </template>
      <template #stories>
        <stories-line :users="usersForStories"></stories-line>
      </template>
    </header-container>
    <div id="repositoriesList" v-for="repo in storeRepositories" :key="repo.id">
      <div class="repositoryItem">
        <repository-item :repo="repo"></repository-item>
      </div>
    </div>
  </div>
</template>

<script>
import headerContainer from "@/components/feeds/headerContainer";
import mainPageHeader from "@/components/feeds/header";
import storiesLine from "@/components/feeds/storiesLine";
import repositoryItem from "@/components/feeds/repositoryItem";
import { mapState, mapActions } from "vuex";

export default {
  name: "mainPage",
  components: {
    headerContainer,
    mainPageHeader,
    storiesLine,
    repositoryItem,
  },
  computed: {
    ...mapState({
      storeRepositories: (state) => state.github.starredRepositories,
      usersForStories: (state) => state.github.users,
      myUser: (state) => state.user.myUser,
      isDataLoaded: (state) => state.github.isLoaded,
    }),
  },
  async beforeMount() {
    const payload = {
      params: {
        rate: "40",
        order: "desc",
        sort: "stars",
        q: "language:javascript created:>2022-03-28",
        per_page: 10,
      },
    };
    await this.fetchMyUser();
    await this.fetchTrendingRepositories(payload);
    await this.fetchMyStarredRepositories();
    this.markDataLoaded(true);
  },
  methods: {
    ...mapActions({
      fetchTrendingRepositories: "github/fetchTrendingRepositories",
      fetchMyStarredRepositories: "github/fetchMyStarredRepositories",
      markDataLoaded: "github/markDataLoaded",
      fetchMyUser: "user/fetchMyUser",
    }),
  },
};
</script>

<style scoped>
#container {
  width: 100%;
  height: 1024px;
}

#repositoriesList {
  width: 979px;
  padding-left: 230px;
  padding-right: 231px;
}
</style>
