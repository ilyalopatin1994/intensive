import profile from "../variants/profile";

export default {
  title: "profile",
  components: { profile },
};

export const DefaultIcon = () => {
  return {
    components: { profile },
    template: `<div class=icon" style="width:37px; height:37px"><profile /></div>`,
  };
};

DefaultIcon.story = {
  name: "Иконка профиля",
};
