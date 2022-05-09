import { computed, ref } from "vue";
import { useStore } from "vuex";

export default () => {
  const store = useStore();
  getData();
  const isDataLoaded = computed(() => store.state.github.isLoaded);
  const myUser = computed(() => store.state.user.myUser);
  const starredRepositories = computed(
    () => store.state.github.starredRepositories
  );
  let leftBorder = ref(0);
  let rightBorder = ref(2);
  const showLeftArrow = computed(() => {
    return leftBorder.value ? true : false;
  });

  const showRightArrow = computed(() => {
    return rightBorder.value > starredRepositories.value.length ? false : true;
  });

  const paginate = (direction) => {
    if (direction === "right") {
      leftBorder.value += 2;
      rightBorder.value += 2;
    } else {
      leftBorder.value -= 2;
      rightBorder.value -= 2;
    }
  };

  return {
    isDataLoaded,
    myUser,
    starredRepositories,
    leftBorder,
    rightBorder,
    paginate,
    showLeftArrow,
    showRightArrow,
  };
};

async function getData() {
  const store = useStore();
  await store.dispatch("user/fetchMyUser");
  await store.dispatch("github/fetchMyStarredRepositories");
  await store.dispatch("user/fetchMyStatistics");
  store.dispatch("github/markDataLoaded", true);
}
