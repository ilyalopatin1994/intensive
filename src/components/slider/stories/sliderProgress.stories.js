import sliderProgressBar from "../sliderProgressBar";
import { withKnobs, number } from "@storybook/addon-knobs";

export default {
  title: "sliderProgressBar",
  components: { sliderProgressBar },
  decorators: [withKnobs],
};

// const userInfo = {
//   title: "Ilya",
//   photo: "/public/ProfilePic1.png",
// };

// const style = {
//   "font-weight": "bold",
// };
export const FullProgressBar = () => ({
  components: { sliderProgressBar },
  props: {
    progress: {
      type: Number,
      default: number("progress", 100),
    },
  },
  template: `
    <sliderProgressBar :progress="progress"/>`,
});

FullProgressBar.story = {
  name: "Прогресс бар. 100%",
};

export const PartiallyProgressBar = () => ({
  components: { sliderProgressBar },
  props: {
    progress: {
      type: Number,
      default: number("progress2", 50),
    },
  },
  template: `
    <sliderProgressBar :progress="progress"/>`,
});

PartiallyProgressBar.story = {
  name: "Прогрессбар слайдера. 50%",
};
