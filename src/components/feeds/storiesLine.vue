<template>
  <div id="storiesContainer">
    <div
      class="storiesContainer__item"
      v-for="(user, index) in users"
      :key="`{${user}${index}`"
    >
      <router-link :to="`/stories/${user.id}`">
        <div :class="['image__container', { bordered: active }]">
          <img class="icon" :src="user.avatar_url" />
        </div>
      </router-link>
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
    active: {
      type: Boolean,
      default: true,
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
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.image__container {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
}

.bordered {
  box-shadow: 0 0 5px 0 purple;
}
</style>
