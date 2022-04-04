import sliderHeader from "/src/components/slider/sliderHeader";
import { withKnobs, text, object } from "@storybook/addon-knobs";
import ProfilePic1 from "/public/ProfilePic1.png";

export default {
  title: "sliderHeader",
  components: { sliderHeader },
  decorators: [withKnobs],
};

const userInfo = {
  photo: ProfilePic1,
};
export const SliderHeaderTemplate = () => ({
  components: { sliderHeader },
  props: {
    userInfo: {
      type: Object,
      default: object("userInfo", userInfo),
    },
    headerText: {
      type: String,
      default: text("headerTetx", "My slider"),
    },
  },
  template: `
    <div style="width: 400px">
      <slider-header :header-text="headerText" :user-info="userInfo" />
    </div>`,
});

SliderHeaderTemplate.story = {
  name: "Хедер слайдера",
};
