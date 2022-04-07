import mainPage from "../pages/feeds/feeds";
import notFound from "/src/components/notFound";

export default [
  {
    path: "/",
    component: mainPage,
  },
  {
    path: "/:id",
    component: mainPage,
  },
  {
    path: "/:pathMath(.*)*",
    component: notFound,
  },
];
