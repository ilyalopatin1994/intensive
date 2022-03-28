<template>
  <component :is="iconName" class="icon" />
</template>

<script>
import * as icons from "./variants";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "icons",
  components: { ...icons },
  props: {
    iconName: {
      type: String,
      required: true,
      validator(value) {
        return Object.keys(icons).includes(value);
      },
    },
  },
};
</script>

<style scoped></style>
