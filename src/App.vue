<template>
  <router-view />
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("github");

export default {
  name: "App",
  beforeMount() {
    const payload = {
      params: {
        rate: "50",
        order: "desc",
        sort: "stars",
        q: "language:javascript created:>2022-03-28",
        per_page: 10,
      },
    };
    this.fetchRepositories(payload);
  },
  methods: {
    ...mapActions({
      fetchRepositories: "fetchRepositories",
    }),
  },
};
</script>

<style src="./global.css" lang="css" />
