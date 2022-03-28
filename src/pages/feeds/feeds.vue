<template>
  <div id="container">
    <header-container>
      <template #header>
        <main-page-header></main-page-header>
      </template>
      <template #stories>
        <stories-line></stories-line>
      </template>
    </header-container>
    <div
      id="activityStream"
      v-for="post in posts"
      :key="`post${post.postInfo.id}`"
    >
      <post-item :post="post"></post-item>
    </div>
  </div>
</template>

<script>
import headerContainer from "@/components/feeds/headerContainer";
import mainPageHeader from "@/components/feeds/header";
import storiesLine from "@/components/feeds/storiesLine";
import postItem from "@/components/feeds/postItem";

export default {
  name: "mainPage",
  components: { headerContainer, mainPageHeader, storiesLine, postItem },
  data() {
    return {
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
    };
  },
};
</script>

<style scoped>
#container {
  width: 100%;
  height: 1024px;
}

#activityStream {
  width: 979px;
  padding-left: 230px;
  padding-right: 231px;
}
</style>
