import { getUser } from "/src/api/rest/github/user";
import { getMyRepositories } from "/src/api/rest/github/search";
import { getRepoSubscribers } from "/src/api/rest/github/repoSubscribers";

export default {
  namespaced: true,
  state: {
    myUser: "",
  },
  getters: {
    getMyUser(state) {
      return state.myUser;
    },
  },
  mutations: {
    SET_MY_USER(state, user) {
      state.myUser = user;
    },
    REMOVE_MY_USER(state) {
      state.myUser = "";
    },
    SET_WATCHERS_COUNT(state, count) {
      state.myUser.watchersCount = count;
    },
    SET_FORKS_COUNT(state, count) {
      state.myUser.forksCount = count;
    },
  },
  actions: {
    async fetchMyUser(store) {
      const { data: user } = await getUser();
      store.commit("SET_MY_USER", user);
    },

    async fetchMyStatistics(store) {
      const repos = (await getMyRepositories()).data;
      let watchersCount = 0;
      let forksCount = 0;
      for (let i = 0; i < repos.length; i++) {
        const repo = repos[i];
        const subscribers = await getRepoSubscribers(
          store.state.myUser.login,
          repo.name
        );
        watchersCount += subscribers.data.length;
        forksCount += repo.forks_count;
      }
      store.commit("SET_WATCHERS_COUNT", watchersCount);
      store.commit("SET_FORKS_COUNT", forksCount);
    },
    logout() {
      localStorage.removeItem("token");
      window.location.reload();
    },
  },
};
