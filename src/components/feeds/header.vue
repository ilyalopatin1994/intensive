<template>
  <div id="headContainer">
    <div id="label">{{ label }}</div>
    <div id="actions">
      <slot name="icons">
        <icons icon-name="home" />
        <img :src="myUser.avatar_url" />
        <icons icon-name="signout" @click="signout" />
      </slot>
    </div>
  </div>
</template>

<script>
import { icons } from "/src/components/icons";
import { mapState, mapActions } from "vuex";

export default {
  name: "mainPageHeader",
  components: { icons },
  props: {
    projectName: String,
  },
  computed: {
    label() {
      return `${this.projectName} /`;
    },
    ...mapState({
      myUser: (state) => state.user.myUser,
    }),
  },
  methods: {
    ...mapActions({
      logout: "user/logout",
    }),
    signout() {
      this.logout();
    },
  },
};
</script>

<style scoped>
#headContainer {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
}

#label {
  width: 174px;
  height: 40px;
  font-size: 37px;
  color: #292929;
}

#actions {
  display: flex;
  justify-content: space-between;
  width: 145px;
  height: 37px;
}
</style>
