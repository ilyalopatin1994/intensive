import { getRepositories } from "@/api/rest/github/search";

export default {
  namespaced: true,
  state: {
    isLoaded: false,
    repositories: [],
    users: [],
  },
  getters: {
    getRepositoryByIndex: (state) => (index) => {
      return state.repositories[index];
    },
  },
  mutations: {
    SET_STATE_LOADED(state, payload) {
      state.isLoaded = payload;
    },
    ADD_REPOSITORIES(state, repos) {
      if (!Array.isArray(repos)) {
        repos = [repos];
      }
      state.repositories.push(...repos);
    },
    CLEAR_REPOSITORIES(state) {
      state.length = 0;
    },
    ADD_USERS(state, users) {
      if (!Array.isArray(users)) {
        users = [users];
      }
      state.users.push(...users);
    },
  },
  actions: {
    // Заполнение списка репозиториев
    async fetchRepositories(store, payload) {
      const repositories = (await getRepositories(payload)).data.items;
      store.commit("CLEAR_REPOSITORIES");
      store.commit("ADD_REPOSITORIES", repositories);
      repositories.forEach((repo) => {
        store.commit("ADD_USERS", { ...repo.owner, active: true });
      });
      store.commit("SET_STATE_LOADED", true);
    },
  },
};
