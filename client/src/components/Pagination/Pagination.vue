<template>
  <div class="flex items-center align-middle text-black">
    <button
      @click="prev"
      :disabled="1 == current"
      class="mr-2 flex items-center outline-none appearance-none align-middle focus:outline-none border focus:border-blue-600"
    >
      <i class="material-icons fill-current mr-2 ml-2">chevron_left</i>
    </button>
    <span class="block font-normal">Page {{ current }} of {{ total }}</span>
    <button
      @click="next"
      :disabled="total == current"
      class="ml-2 flex items-center outline-none appearance-none align-middle focus:outline-none border focus:border-blue-600"
    >
      <i class="material-icons fill-current mr-2 ml-2">chevron_right</i>
    </button>
  </div>
</template>
<script>
export default {
  name: "RamroPagination",
  props: {
    total: Number,
    current: Number
  },
  methods: {
    next() {
      const nextPage = this.current + 1;
      if (nextPage <= this.total) {
        this.$emit("update", { page: nextPage });
      }
    },
    prev() {
      const prevPage = this.current - 1;
      if (prevPage > 0) {
        this.$emit("update", { page: prevPage });
      }
    }
  }
};
</script>
