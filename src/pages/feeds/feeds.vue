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
    <div id="repositoriesList" v-for="repo in repositories" :key="repo.id">
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
import axios from "axios";

export default {
  name: "mainPage",
  components: {
    headerContainer,
    mainPageHeader,
    storiesLine,
    repositoryItem,
  },
  data() {
    return {
      repositories: [],
      usersForStories: [
        { title: "Ilya", photo: "ProfilePic1.png" },
        { title: "Natasha", photo: "ProfilePic3.png" },
        { title: "Egor", photo: "ProfilePic2.png" },
        { title: "Ann", photo: "ProfilePic4.png" },
        { title: "Kostya", photo: "ProfilePic5.png" },
      ],
    };
  },
  mounted() {
    this.getRepositories();
  },
  methods: {
    async getRepositories() {
      // Получение списка репозиториев
      const data = (
        await axios.get("https://api.github.com/search/repositories", {
          params: {
            order: "desc",
            sort: "start",
            q: "language:javascript created:>2022-03-28",
            per_page: 10,
          },
        })
      ).data.items;
      // const client2 = await axios.get(
      //   `https://api.github.com/repos/${owner.login}/${name}/issues`
      // );
      this.repositories = data;
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
