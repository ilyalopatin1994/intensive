<template>
  <div id="headContainer">
    <div id="label">{{ label }}</div>
    <div id="actions">
      <slot name="icons">
        <icons icon-name="home" />
        <icons icon-name="profile" />
        <icons icon-name="signout" />
      </slot>
    </div>
  </div>
</template>

<script>
import { icons } from "/src/components/icons";

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
