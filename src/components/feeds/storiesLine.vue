<template>
  <div id="storiesContainer">
    <div
      class="storiesContainer__item"
      v-for="(user, index) in users"
      :key="`{${user}${index}`"
    >
      <div><img class="icon" :src="user.photo" /></div>
      <div>{{ user.title }}</div>
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
</style>
