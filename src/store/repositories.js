import { getRepositories } from "@/api/rest/github/search";

export default {
  namespaced: true,
  state: {
    repositories: [],
  },
  getters: {
    getRepositoryByIndex: (state) => (index) => {
      return state.repositories[index];
    },
  },
  mutations: {
    ADD_REPOSITORY(state, repos) {
      if (!Array.isArray(repos)) {
        repos = [repos];
      }
      state.repositories.push(...repos);
    },
  },
  actions: {
    // Заполнение списка пользователей. Используются в сторизах и слайдах
    async fetchRepositories(store, payload) {
      const data = (await getRepositories(payload)).data.items;
      store.commit("ADD_REPOSITORY", data);
    },
  },
};
