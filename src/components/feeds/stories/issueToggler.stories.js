import issueToggler from "/src/components/feeds/issueToggler";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "issueToggler",
  components: { issueToggler },
  decorators: [withKnobs],
};

const methods = {
  changeDisplay: action("changeDisplay"),
};
export const IssueTogglerOpen = () => ({
  components: { issueToggler },
  props: {
    hide: {
      default: boolean("issuesHidden", false, "Открытый тогглер"),
    },
  },
  methods,
  template: `<issue-toggler @changeDisplay="changeDisplay" :hide="hide"/>`,
});

export const IssueTogglerHidden = () => ({
  components: { issueToggler },
  props: {
    hide: {
      default: boolean("issuesHidden", true, "Закрытый тогглер"),
    },
  },
  methods,
  template: `<issue-toggler @changeDisplay="changeDisplay" :hide="hide"/>`,
});

IssueTogglerOpen.story = {
  name: "Тогглер открыт",
};

IssueTogglerHidden.story = {
  name: "Тогглер закрыт",
};
