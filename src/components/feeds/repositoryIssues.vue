<template>
  <ul class="issueList" v-if="issues.length > 0">
    <li v-for="issue in issues.slice(0, 3)" :key="issue.id">
      <b>{{ issue.user.login }} </b>
      {{ issue.body }}
    </li>
    <li v-if="issues.length > 3">... {{ issues.length - 3 }} more</li>
  </ul>
  <span v-else> No issues </span>
</template>

<script>
export default {
  name: "issuesView",
  props: {
    issues: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.issueList {
  list-style-type: none;
}
</style>
