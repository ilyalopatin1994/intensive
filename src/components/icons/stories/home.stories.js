import home from "../variants/home";

export default {
  title: "home",
  components: { home },
};

export const DefaultlIcon = () => ({
  components: { home },
  template: `
    <div style="width:37px; height: 37px">
    <home />
    </div>`,
});

DefaultlIcon.story = {
  name: "Иконка домой",
};
