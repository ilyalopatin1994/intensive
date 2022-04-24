<template>
  <div :class="['button', { followed: isFollowed }]" @click="confirm">
    {{ buttonText }}
  </div>
</template>

<script>
export default {
  name: "confirmButton",
  emits: ["onConfirm"],
  props: {
    isActiveSlider: {
      type: Boolean,
      default: false,
    },
    isFollowed: {
      type: Boolean,
      default: false,
    },
    buttonText: {
      type: String,
      default: "Follow",
    },
  },
  methods: {
    confirm() {
      if (this.isActiveSlider) {
        this.$emit("onConfirm");
      }
    },
    async follow() {},
  },
};
</script>

<style scoped>
.button {
  padding: 11px 109px;
  background-color: #31ae54;
  border-radius: 5px;
}

.followed {
  background-color: grey;
}

.button:hover {
  cursor: pointer;
}
</style>
