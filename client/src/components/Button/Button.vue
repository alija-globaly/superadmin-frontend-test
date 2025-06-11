<template>
  <button :class="[defaultClasses, getClasses]" @click="$emit('click')">
    <slot />
  </button>
</template>
<script>
export default {
  name: "RamroButton",
  props: {
    variant: {
      required: false,
      type: String
    }
  },
  data() {
    return {
      defaultClasses: [
        "appearance-none",
        "rounded",
        "block text-white shadow-border py-2 min-w-2 px-4 font-sans tracking-wide font-medium"
      ]
    };
  },
  computed: {
    getClasses() {
      if (this.variant === "primary") {
        return "bg-blue-600 hover:bg-blue-700 text-white";
      }
      if (this.variant === "success") {
        return "bg-green-600 hover:bg-green-700 text-white";
      }
      if (this.variant === "danger") {
        return "bg-red-600 hover:bg-red-700 text-white";
      }
      if (this.variant === "outline") {
        return "bg-transparent border hover:shadow text-blue-700";
      }
      return "bg-gray-600 hover:bg-gray-700 text-white";
    }
  }
};
</script>
