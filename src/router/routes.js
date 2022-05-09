import mainPage from "/src/pages/feeds/feeds";
import profilePage from "/src/pages/profile/profile";
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
    path: "/profile",
    component: profilePage,
    name: "profile",
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
