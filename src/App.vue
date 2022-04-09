<template>
  <router-view :key="$route.path" v-if="isDataLoaded" />
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("github");

export default {
  name: "App",
  computed: {
    ...mapState({
      isDataLoaded: (state) => state.isLoaded,
    }),
  },
  async beforeMount() {
    const payload = {
      params: {
        rate: "40",
        order: "desc",
        sort: "stars",
        q: "language:javascript created:>2022-03-28",
        per_page: 10,
      },
    };
    await this.fetchRepositories(payload);
  },
  methods: {
    ...mapActions({
      fetchRepositories: "fetchRepositories",
    }),
  },
};
</script>

<style src="./global.css" lang="css" />
