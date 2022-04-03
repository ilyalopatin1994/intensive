import icons from "../icons";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "icons",
  components: { icons },
  decorators: [withKnobs],
};

export const IconsComponentHome = () => ({
  components: { icons },
  props: {
    iconName: {
      default: text("firstIcon", "home"),
    },
  },
  template: `
    <div style="width: 145px; height: 37px">
    <icons :icon-name="iconName"/>
    </div>`,
});

IconsComponentHome.story = {
  name: "Иконка домой",
};

export const IconsComponentSignout = () => ({
  components: { icons },
  props: {
    iconName: {
      default: text("secondIcon", "signout"),
    },
  },
  template: `
    <div style="width: 145px; height: 37px">
    <icons :icon-name="iconName"/>
    </div>`,
});

IconsComponentSignout.story = {
  name: "Иконка выйти",
};

export const IconsComponentStar = () => ({
  components: { icons },
  props: {
    iconName: {
      default: text("thirdIcon", "star"),
    },
  },
  template: `
    <div style="width: 145px; height: 37px">
    <icons :icon-name="iconName"/>
    </div>`,
});

IconsComponentStar.story = {
  name: "Иконка звезда",
};

export const IconsComponentFork = () => ({
  components: { icons },
  props: {
    iconName: {
      default: text("fourthIcon", "fork"),
    },
  },
  template: `
    <div style="width: 145px; height: 37px">
    <icons :icon-name="iconName"/>
    </div>`,
});

IconsComponentFork.story = {
  name: "Иконка fork",
};
