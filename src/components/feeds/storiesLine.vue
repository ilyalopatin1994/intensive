<template>
  <div id="storiesContainer">
    <div
      class="storiesContainer__item"
      v-for="(user, index) in users"
      :key="`{${user}${index}`"
    >
      <div class="image__container">
        <img class="icon" :src="user.avatar_url" />
      </div>
      <div>{{ user.login }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "storiesLine",
  props: {
    users: {
      type: Object,
      required: true,
    },
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
img {
  width: 48px;
  height: 48px;
  border-radius: 24px;
}
.image__container {
  border: 2px solid deeppink;
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
</style>
