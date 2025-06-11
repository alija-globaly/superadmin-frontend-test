<template>
  <div
    class="fixed inset-0 z-50 flex flex-row-reverse"
    style="background-color: rgba(0, 0, 0, 0.3);"
  >
    <div
      id="drawer"
      class="h-screen overflow-auto w-screen shadow-xl border-l border-gray-400 bottom-0 inset-x-0 align-top bg-white w-full"
      :class="size"
    >
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: "DrawerLayout",
  props: {
    size: {
      type: [String],
      required: false,
      default: "max-w-xl"
    }
  }
};
</script>
