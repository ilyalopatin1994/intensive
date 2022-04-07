import { createStore } from "vuex";
import repositories from "./repositories";

export default createStore({
  modules: { repositories },
});
