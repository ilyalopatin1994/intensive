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
  },
  data() {
    return {
      isFollowed: false,
    };
  },
  computed: {
    buttonText() {
      return this.isFollowed ? "Unfollow" : "Follow";
    },
  },
  methods: {
    confirm() {
      if (this.isActiveSlider) {
        this.isFollowed = !this.isFollowed;
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
