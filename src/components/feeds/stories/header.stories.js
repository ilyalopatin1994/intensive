import { icons } from "/src/components/icons";
import mainPageHeader from "/src/components/feeds/header";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "header",
  components: { icons, mainPageHeader },
  decorators: [withKnobs],
};

export const HeaderView = () => ({
  components: { icons, mainPageHeader },
  props: {
    projectName: {
      default: text("projectName", "Gitogram"),
    },
  },
  template: `
    <main-page-header :project-name="projectName"/>`,
});

HeaderView.story = {
  name: "Шапка сайта",
};
