import repositoryIssues from "/src/components/feeds/repositoryIssues";
import { withKnobs, object } from "@storybook/addon-knobs";

export default {
  title: "repositoryIssues",
  components: { repositoryIssues },
  decorators: [withKnobs],
};

const issues = [
  {
    id: 1,
    user: { login: "cleanlock" },
    body: "My first issue",
  },
  {
    id: 2,
    user: { login: "Ilya" },
    body: "Ilya's first issue",
  },
  {
    id: 3,
    user: { login: "Natasha" },
    body: "Hello world",
  },
];

export const RepositoryIssues = () => ({
  components: { repositoryIssues },
  props: {
    issues: {
      default: object("issues", issues),
    },
  },
  template: `
    <repository-issues :issues="issues" />`,
});

RepositoryIssues.story = {
  name: "Замечания",
};
