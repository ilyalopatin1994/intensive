import { withKnobs, text, object } from "@storybook/addon-knobs";
import headerContainer from "/src/components/feeds/headerContainer";
import mainPageHeader from "/src/components/feeds/header";
import storiesLine from "/src/components/feeds/storiesLine";
import profilePic1 from "/public/ProfilePic1.png";
import profilePic2 from "/public/ProfilePic2.png";
import profilePic3 from "/public/ProfilePic3.png";

const usersDefault = [
  { title: "Ilya", photo: profilePic1 },
  { title: "Natasha", photo: profilePic2 },
  { title: "Egor", photo: profilePic3 },
];

export default {
  title: "headerContainer",
  components: { headerContainer, mainPageHeader, storiesLine },
  decorators: [withKnobs],
};

export const HeaderContainerView = () => ({
  components: { headerContainer, mainPageHeader, storiesLine },
  props: {
    projectName: {
      default: text("projectName", "Gitogram"),
    },
    users: {
      default: object("users", usersDefault, "groupId"),
    },
  },
  template: `
      <header-container>
      <template #header>
        <main-page-header :project-name="projectName"></main-page-header>
      </template>
      <template #stories>
        <stories-line :users="users"></stories-line>
      </template>
      </header-container>`,
});

HeaderContainerView.story = {
  name: "Верхний блок сайта",
};
