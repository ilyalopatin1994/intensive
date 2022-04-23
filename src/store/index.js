import { createStore } from "vuex";
import github from "./github";
import user from "./user";

export default createStore({
  modules: { github, user },
});
