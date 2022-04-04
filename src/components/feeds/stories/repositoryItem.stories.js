import { icons } from "/src/components/icons";
import repositoryItem from "/src/components/feeds/repositoryItem";
import { withKnobs, object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "repositoryItem",
  components: { icons, repositoryItem },
  decorators: [withKnobs],
};

const methods = {
  changeDisplay: action("onChangeDisplay"),
};

const repositoryInfo = {
  html_url: "https://github.com/cleanlock/VideoAdBlockForTwitch",
  owner: {
    login: "cleanlock",
    avatar_url: "https://avatars.githubusercontent.com/u/32986026?s=48&v=4",
  },
  name: "VideoAdBlockForTwitch",
  description: "Blocks Ads on Twitch.tv.",
  stargazers_count: 100,
  forks: 5,
};
export const RepoItem = () => ({
  components: { icons, repositoryItem },
  props: {
    repoInfo: {
      default: object("repoInfo", repositoryInfo),
    },
  },
  methods,
  template: `
    <repository-item :repo="repoInfo" @onChangeDisplay="changeDisplay"/>`,
});

RepoItem.story = {
  name: "Репозиторий",
};
