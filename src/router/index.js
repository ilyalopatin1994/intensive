import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import { getUser } from "/src/api/rest/github/user";

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

router.beforeEach(async (to, from, next) => {
  const authPage = to.name === "auth";

  try {
    await getUser();
    next(authPage ? { name: "feeds" } : null);
  } catch (err) {
    if (err.response.status === 401) {
      next(authPage ? null : { name: "auth" });
      return;
    }
    console.log("ERROR on load!");
  }
});

export default router;
