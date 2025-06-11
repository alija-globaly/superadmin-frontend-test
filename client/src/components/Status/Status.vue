<template>
  <div class="px-1 rounded" :class="getWrapperClasses">
    <span class="status relative pl-3 rounded text-sm" :class="getLabelClasses">
      {{ label }}
    </span>
  </div>
</template>
<script>
export default {
  name: "RamroStatus",
  props: {
    label: {
      type: String
    },
    varient: {
      type: String
    }
  },
  computed: {
    getLabelClasses() {
      if (this.varient === "danger") {
        return "text-orange-100";
      }

      return "text-blue-600";
    },
    getWrapperClasses() {
      if (this.varient === "danger") {
        return "bg-orange-400";
      }

      return "bg-blue-200";
    }
  }
};
</script>
<style scoped>
.status:before {
  background-color: currentcolor;
  border-radius: 50%;
  content: "";
  display: inline-block;
  height: 7px;
  left: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 7px;
}
</style>
