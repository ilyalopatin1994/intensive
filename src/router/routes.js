import mainPage from "../pages/feeds/feeds";
import notFound from "/src/components/notFound";
import sliderCarousel from "/src/components/slider/sliderCarousel";

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
    path: "/stories",
    component: sliderCarousel,
  },
  {
    path: "/stories/:id",
    component: sliderCarousel,
  },
  {
    path: "/:pathMath(.*)*",
    component: notFound,
  },
];
