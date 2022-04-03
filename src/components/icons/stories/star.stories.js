import star from "../variants/star";

export default {
  title: "star",
  components: { star },
};

export const DefaultIcon = () => {
  return {
    components: { star },
    template: `<div class=icon" style="width:37px; height:37px"><star /></div>`,
  };
};

DefaultIcon.story = {
  name: "Иконка звезда",
};
