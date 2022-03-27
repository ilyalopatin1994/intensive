<template>
  <div id="headContainer">
    <div id="label">{{ label }}</div>
    <div id="actions">
      <img src="home.png" />
      <img src="photo.png" />
      <img src="signout.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "mainPageHeader",
  data() {
    return {
      projectName: "Gitogram",
    };
  },
  computed: {
    label() {
      return `${this.projectName} /`;
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
