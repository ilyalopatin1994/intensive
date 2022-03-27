<template>
  <div id="storiesContainer">
    <div
      class="storiesContainer__item"
      v-for="(user, index) in users"
      :key="`{${user}${index}`"
    >
      <div><img :src="user.photo" /></div>
      <div>{{ user.title }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "storiesLine",
  data() {
    return {
      users: [
        { title: "Ilya", photo: "ProfilePic1.png" },
        { title: "Natasha", photo: "ProfilePic3.png" },
        { title: "Egor", photo: "ProfilePic2.png" },
        { title: "Ann", photo: "ProfilePic4.png" },
        { title: "Kostya", photo: "ProfilePic5.png" },
      ],
    };
  },
};
</script>

<style scoped>
#storiesContainer {
  width: 100%;
  display: flex;
  margin-top: 44px;
}

.storiesContainer__item {
  margin-right: 43px;
  text-align: center;
}
.storiesContainer__item:last-child {
  margin-right: 0px;
}
</style>
