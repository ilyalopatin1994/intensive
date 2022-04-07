<template>
  <div id="container">
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
import { createNamespacedHelpers } from "vuex";

const { mapState } = createNamespacedHelpers("repositories");

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
      storeRepositories: (state) => state.repositories,
    }),
    usersForStories() {
      return this.storeRepositories.map((el) => el.owner);
    },
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
