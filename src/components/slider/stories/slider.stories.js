import slider from "../slider";
import { withKnobs, text, object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
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

const methods = {
  follow: action("onFollow"),
};

export const DefaultSliderComponent = () => ({
  components: { slider },
  props: {
    headerText: {
      type: String,
      default: text("text", "My vue repository"),
    },
    userInfo: {
      type: Object,
      default: object("userInfo", userInfo),
    },
    slidersStatistics: {
      type: Object,
      default: object("slidersStatistics", slidersStatistics),
    },
    buttonText: {
      type: String,
      default: text("buttonText", "Follow"),
    },
  },
  methods,
  template: `
    <slider :user-info="userInfo" :header-text="headerText" :sliders-statistics="slidersStatistics"
            :button-text="buttonText" @onFollow="follow"/>`,
});

DefaultSliderComponent.story = {
  name: "Слайдер",
};
