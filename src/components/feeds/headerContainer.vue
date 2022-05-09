<template>
  <div id="headerContainer">
    <slot name="header"></slot>
    <slot name="stories"></slot>
  </div>
</template>

<script>
export default {
  name: "headerContainer",
};
</script>

<style>
#headerContainer {
  width: 1198px;
  min-height: 80px;
  padding: 43.5px 121px 20px 121px;
  margin-bottom: 32px;
  background: #fafafa;
}
</style>
