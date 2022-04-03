import { icons } from "/src/components/icons";
import storiesLine from "/src/components/feeds/storiesLine";
import { withKnobs, object } from "@storybook/addon-knobs";
import profilePic1 from "/public/ProfilePic1.png";
import profilePic2 from "/public/ProfilePic2.png";
import profilePic3 from "/public/ProfilePic3.png";

export default {
  title: "storiesLine",
  components: { icons, storiesLine },
  decorators: [withKnobs],
};

const usersDefault = [
  { title: "Ilya", photo: profilePic1 },
  { title: "Natasha", photo: profilePic2 },
  { title: "Egor", photo: profilePic3 },
];
export const StoriesLineView = () => ({
  components: { icons, storiesLine },
  props: {
    users: {
      default: object("users", usersDefault, "groupid"),
    },
  },
  template: `
    <storiesLine :users="users"/>`,
});

StoriesLineView.story = {
  name: "Истории",
};
