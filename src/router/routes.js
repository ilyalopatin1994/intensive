import mainPage from "../pages/feeds/feeds";
import notFound from "/src/components/notFound";
import sliderCarousel from "/src/components/slider/sliderStories";
import authorization from "/src/components/authorization/authorization";

export default [
  {
    path: "/",
    component: mainPage,
    name: "feeds",
  },
  {
    path: "/:id",
    component: mainPage,
  },
  {
    path: "/stories",
    component: sliderCarousel,
  },
  {
    path: "/stories/:id",
    component: sliderCarousel,
  },
  {
    path: "/auth",
    component: authorization,
    name: "auth",
  },
  {
    path: "/:pathMath(.*)*",
    component: notFound,
  },
];
