<template>
  <div class>
    <div class="flex items-baseline border-b">
      <div
        :key="tab._uid"
        v-for="tab in tabs"
        :class="{
          'font-medium text-gray-700 border-b-2 border-blue-700': tab.isActive
        }"
        class="flex"
      >
        <a
          :href="tab.href"
          @click.prevent="selectTab(tab)"
          class="no-underline text-current px-4 py-3 capitalize"
        >
          {{ tab.name }}
        </a>
      </div>
    </div>
    <div class="text-grey-darker box-border">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tabs",
  data() {
    return { tabs: [] };
  },

  created() {
    this.tabs = this.$children; // I know
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name;
      });
    }
  }
};
</script>
