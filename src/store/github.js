import {
  getRepositories,
  getMyStarredRepositories,
} from "/src/api/rest/github/search";

export default {
  namespaced: true,
  state: {
    isLoaded: false,
    storiesRepositories: [],
    starredRepositories: [],
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
      const key = Object.keys(repos)[0];
      repos = repos[key];
      if (!Array.isArray(repos)) {
        repos = [repos];
      }
      state[key].push(...repos);
    },
    ADD_REPOSITORY(state, repo) {
      const key = Object.keys(repo)[0];
      state[key].push(repo[key]);
    },
    REMOVE_REPOSITORY(state, repo) {
      const key = Object.keys(repo)[0];
      const repoName = repo[key];
      state[key] = state[key].filter((el) => {
        return el.name !== repoName;
      });
    },
    CLEAR_REPOSITORIES(state, key) {
      state[key].length = 0;
    },
    ADD_USERS(state, users) {
      if (!Array.isArray(users)) {
        users = [users];
      }
      state.users.push(...users);
    },
    CLEAR_USERS(state) {
      state.users.length = 0;
    },
  },
  actions: {
    // Заполнение списка репозиториев
    async fetchTrendingRepositories(store, payload) {
      const repositories = (await getRepositories(payload)).data.items;
      store.commit("CLEAR_REPOSITORIES", "storiesRepositories");
      store.commit("ADD_REPOSITORIES", { storiesRepositories: repositories });
      store.commit("CLEAR_USERS");
      repositories.forEach((repo) => {
        store.commit("ADD_USERS", { ...repo.owner, active: true });
      });
    },

    async fetchMyStarredRepositories(store, payload) {
      const repositories = (await getMyStarredRepositories(payload)).data;
      store.commit("CLEAR_REPOSITORIES", "starredRepositories");
      store.commit("ADD_REPOSITORIES", { starredRepositories: repositories });
    },
    addStarredRepo(store, repoName) {
      store.commit("ADD_REPOSITORY", { starredRepositories: repoName });
    },
    removeStarredRepo(store, repoName) {
      store.commit("REMOVE_REPOSITORY", {
        starredRepositories: repoName,
      });
    },

    markDataLoaded(store, isLoaded) {
      store.commit("SET_STATE_LOADED", isLoaded);
    },
  },
};
