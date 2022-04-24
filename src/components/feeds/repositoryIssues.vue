<template>
  <div class="placeholderContainer" v-if="!issuesLoaded && !isHidden">
    <slider-placeholder
      p-width="100%"
      p-height="12px"
      :animated="true"
    ></slider-placeholder>
    <slider-placeholder
      p-width="80%"
      p-height="12px"
      :animated="true"
    ></slider-placeholder>
    <slider-placeholder
      p-width="60%"
      p-height="12px"
      :animated="true"
    ></slider-placeholder>
  </div>
  <ul class="issueList" v-if="issues.length > 0">
    <li v-for="issue in issues.slice(0, 3)" :key="issue.id">
      <b>{{ issue.user.login }} </b>
      {{ issue.body }}
    </li>
    <li v-if="issues.length > 3">... {{ issues.length - 3 }} more</li>
  </ul>
  <span v-if="issues.length === 0 && issuesLoaded"> No issues </span>
</template>

<script>
import SliderPlaceholder from "@/components/slider/sliderPlaceholder";

export default {
  name: "issuesView",
  components: { SliderPlaceholder },
  props: {
    isHidden: {
      type: Boolean,
      default: true,
    },
    issues: {
      type: Array,
      default: () => [],
    },
    issuesLoaded: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.issueList {
  list-style-type: none;
}

.placeholderContainer {
  width: 300px;
  height: 100px;
  padding: 10px;
}
</style>
