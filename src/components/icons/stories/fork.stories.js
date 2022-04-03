import fork from "../variants/fork";

export default {
  title: "fork",
  components: { fork },
};

export const DefaultIcon = () => {
  return {
    components: { fork },
    template: `<div class=icon" style="width:37px; height:37px"><fork /></div>`,
  };
};

DefaultIcon.story = {
  name: "Иконка fork",
};
