import signout from "../variants/signout";

export default {
  title: "signout",
  components: { signout },
};

export const DefaultIcon = () => {
  return {
    components: { signout },
    template: `<div class=icon" style="width:37px; height:37px"><signout /></div>`,
  };
};

DefaultIcon.story = {
  name: "Иконка выхода",
};
