<template>
  <div class="bg-gray-100 shadow-inner">
    <div class="px-6 py-4 bg-white">
      <ul
        style="
    display: grid;
    grid-gap: 1.6rem;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
"
      >
        <li
          v-for="feature in features"
          :key="feature.id"
          class="flex flex-col mt-2 shadow px-4 py-2 text-gray-700 rounded-lg bg-gray-100 border-t-4 border-blue-500"
          style="min-width: 160px"
        >
          <span class="inline-flex font-medium">{{
            feature.display_name
          }}</span>
          <span class="inline-flex mt-2"
            >{{ feature.value }} / {{ feature.limit }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TenantUsage",
  data() {
    return {
      features: []
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$loading(true);
      vm.fetch()
        .then(response => {
          vm.features = response.data.data;
        })
        .finally(() => {
          vm.$loading(false);
        });
    });
  },
  methods: {
    fetch() {
      return axios.get("tenants/" + this.$route.params.id + "/usage");
    }
  }
};
</script>

<style scoped></style>
