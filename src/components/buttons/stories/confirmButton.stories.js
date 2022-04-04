import confirmButton from "/src/components/buttons/confirmButton";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "confirmButton",
  components: { confirmButton },
  decorators: [withKnobs]
};

const methods = {
  follow: action("onFollow")
};
export const ConfirmButtonTemplate = () => ({
  components: { confirmButton },
  props: {
    buttonText: {
      type: String,
      default: text("buttonText", "Follow")
    }
  },
  methods,
  template: `
    <div class="slider__action">
      <confirm-button :text="buttonText" @onConfirm="follow" />
    </div>`
});

ConfirmButtonTemplate.story = {
  name: "Кнопка подтверждения"
};
