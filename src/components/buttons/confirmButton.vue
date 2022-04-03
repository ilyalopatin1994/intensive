<template>
  <div class="button" @click="confirm">{{ text }}</div>
</template>

<script>
export default {
  name: "confirmButton",
  emits: ["onConfirm"],
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    confirm() {
      this.$emit("onConfirm");
    },
  },
};
</script>

<style scoped>
.button {
  padding: 11px 109px;
  background-color: #31ae54;
  border-radius: 5px;
}
</style>
