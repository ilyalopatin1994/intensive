<template>
  <div class="clicker" @click="showOrHideAction">
    {{ hideOrShowIssuesText }}
    <img
      src="../../../public/toggler.png"
      :style="issuesHidden ? rotateTogglerImg : ''"
    />
  </div>
</template>

<script>
export default {
  name: "issueToggler",
  emits: ["changeDisplay"],
  data() {
    return {
      issuesHidden: true,
      rotateTogglerImg: {
        transform: "rotate(180deg)",
      },
    };
  },
  computed: {
    hideOrShowIssuesText() {
      return this.issuesHidden ? "Show Issues" : "Hide issues";
    },
  },
  methods: {
    showOrHideAction() {
      this.issuesHidden = !this.issuesHidden;
      this.$emit("changeDisplay", this.issuesHidden);
    },
  },
};
</script>

<style scoped>
.clicker:hover {
  cursor: pointer;
}
</style>
