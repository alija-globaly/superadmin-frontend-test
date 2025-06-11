<template>
  <div
    class="flex items-center justify-center h-screen w-screen fixed top-0 left-0 z-50 flex-column"
    v-show="loading"
    v-bind:class="classes"
    v-bind:style="{ backgroundColor: bc }"
  >
    <component v-if="customLoader" v-bind:is="customLoader"></component>
    <div v-else>
      <div class="loading-circle"></div>
      <p class="font-medium mt-8 text-gray-700">{{ text }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "Processing...",
      dark: false,
      classes: null,
      loading: false,
      background: null,
      customLoader: null
    };
  },
  computed: {
    bc() {
      return (
        this.background ||
        (this.dark ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.8)")
      );
    }
  }
};
</script>
<style scoped>
.loading-circle {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 2px solid transparent;
  border-left-color: #ababab;
  animation: circleanimation 0.45s linear infinite;
}
@keyframes circleanimation {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}
</style>
