import slider from "../slider";
import { withKnobs, text, object } from "@storybook/addon-knobs";
import profilePic1 from "/public/ProfilePic1.png";

export default {
  title: "slider",
  components: { slider },
  decorators: [withKnobs],
};

const userInfo = {
  title: "Ilya",
  photo: profilePic1,
};

const slidersStatistics = {
  slidersCount: 5,
  currentIndex: 1,
};

export const DefaultSliderComponent = () => ({
  components: { slider },
  props: {
    headerText: {
      type: String,
      default: text("text", "This is an example of slider text"),
    },
    userInfo: {
      type: Object,
      default: object("userInfo", userInfo, "group1"),
    },
    slidersStatistics: {
      type: Object,
      default: object("slidersStatistics", slidersStatistics, "group3"),
    },
    buttonText: {
      type: String,
      default: text("buttonText", "Follow"),
    },
  },
  template: `
    <slider :user-info="userInfo" :header-text="headerText" :sliders-statistics="slidersStatistics"
            :button-text="buttonText" />`,
});

DefaultSliderComponent.story = {
  name: "Слайдер",
};
