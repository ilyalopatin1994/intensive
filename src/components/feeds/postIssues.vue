<template>
  <ul class="issueList">
    <li v-for="issue in issues" :key="issue.id">
      <b>{{ issue.author }} </b>
      {{ issue.text }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "issuesView",
  props: {
    issues: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style scoped>
.issueList {
  list-style-type: none;
}
</style>
