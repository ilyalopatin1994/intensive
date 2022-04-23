import { getUser } from "/src/api/rest/github/user";

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
  },
  actions: {
    async fetchMyUser(store) {
      const { data: user } = await getUser();
      store.commit("SET_MY_USER", user);
    },

    logout() {
      localStorage.removeItem("token");
      window.location.reload();
    },
  },
};
