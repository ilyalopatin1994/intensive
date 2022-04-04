<template>
  <div class="issues">
    {{ hideOrShowIssuesText }}
    <img
      src="../../../public/toggler.png"
      :style="issuesHidden ? rotateTogglerImg : ''"
      @click="showOrHideAction"
    />
  </div>
</template>

<script>
export default {
  name: "issueToggler",
  emits: ["changeDisplay"],
  props: {
    hide: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.issuesHidden = this.hide;
  },
  data() {
    return {
      issuesHidden: false,
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

<style scoped></style>
