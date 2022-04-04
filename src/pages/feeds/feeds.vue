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
      <repository-item :repo="repo"></repository-item>
    </div>
  </div>
  <slider
    :user-info="usersForStories[0]"
    header-text="Vue repository"
    :sliders-statistics="slidersStatistics"
    button-text="Follow"
  ></slider>
</template>

<script>
import headerContainer from "@/components/feeds/headerContainer";
import mainPageHeader from "@/components/feeds/header";
import storiesLine from "@/components/feeds/storiesLine";
import repositoryItem from "@/components/feeds/repositoryItem";
import slider from "@/components/slider/slider";
import axios from "axios";

export default {
  name: "mainPage",
  components: {
    headerContainer,
    mainPageHeader,
    storiesLine,
    repositoryItem,
    slider,
  },
  data() {
    return {
      repositories: [],
      posts: [
        {
          userInfo: { title: "Ilya", photo: "ProfilePic1.png" },
          postInfo: {
            id: 1,
            title: "Vue",
            description: "Vue is a great framework",
            stars: "156",
            forks: 4,
            issues: [
              { author: "Ilya", text: "My first issue on Vue", id: 1 },
              { author: "Natasha", text: "You're welcome", id: 2 },
            ],
          },
        },
        {
          userInfo: { title: "Natasha", photo: "ProfilePic2.png" },
          postInfo: {
            id: 1,
            title: "React",
            description: "React is also great",
            stars: "156",
            forks: 4,
            issues: [
              { author: "Natasha", text: "My first issue on React", id: 1 },
              { author: "Ilya", text: "You're welcome", id: 2 },
            ],
          },
        },
      ],
      usersForStories: [
        { title: "Ilya", photo: "ProfilePic1.png" },
        { title: "Natasha", photo: "ProfilePic3.png" },
        { title: "Egor", photo: "ProfilePic2.png" },
        { title: "Ann", photo: "ProfilePic4.png" },
        { title: "Kostya", photo: "ProfilePic5.png" },
      ],
      slidersStatistics: {
        slidersCount: 5,
        currentIndex: 1,
      },
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
