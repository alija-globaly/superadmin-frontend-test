<template>
  <div>
    <ul class="list-reset flex flex-col mb-4">
      <li
        v-for="application in applications.data"
        :key="application.id"
        tabindex="0"
        class="flex items-center px-4 py-2 w-full bg-white rounded shadow h-20 mb-4 focus:outline-none border border-transparent focus:border-blue-500"
      >
        <div
          class="w-5/12 font-normal text-lg flex flex-col ml-3 tracking-wide"
        >
          {{ application.business_name }}
          <span class="text-sm">{{ application.business_email }}</span>
        </div>
        <div class="font-normal ml-3">
          <div
            class="border ml-2 mt-4 md:mt-0 flex flex-shrink-0 text-sm border-gray-200 rounded"
          >
            <div
              class="px-2 py-1 relative rounded"
              :class="getStatusClassWrapper(application.status)"
            >
              <span
                class="status pl-4 rounded text-sm font-medium capitalize"
                :class="getStatusClass(application.status)"
              >
                {{ application.status }}
              </span>
            </div>
          </div>
        </div>
        <div
          class="w-3/12 font-normal flex items-end flex-col ml-3 tracking-wide"
        >
          <span class="text-gray-600 text-sm">Applied On</span>
          <span class="">{{ application.created_at }}</span>
        </div>
        <div
          class="w-2/12 font-normal flex items-end flex-col ml-3 tracking-wide"
        >
          <div class="flex items-center">
            <button
              class="focus:outline-none focus:shadow hover:shadow border border-blue-400 text-blue-700 tracking-wide text-sm py-1 px-4 rounded"
              @click="openDetail(application)"
            >
              View
            </button>
          </div>
        </div>
      </li>
    </ul>
    <RamroPagination
      class="mb-6 mt-6"
      :current="applications.meta.current_page"
      :total="applications.meta.total"
      v-if="applications.meta.total > 1"
      @update="$router.push({ query: { page: $event.page } })"
    />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import RamroPagination from "@/components/Pagination/Pagination.vue";

export default {
  name: "ApplicationList",
  components: {
    RamroPagination
  },
  props: ["applications"],
  methods: {
    getStatusClass(status) {
      if (status === "pending") {
        return "text-orange-600";
      }
      if (status === "declined") {
        return "text-red-600";
      }
      if (status === "approved") {
        return "text-green-700";
      }
    },
    openDetail(application) {
      this.$router.push({ name: `freemium-applications.${application.status}.detail`, params: { id: application.id } });
    },
    getStatusClassWrapper(status) {
      if (status === "pending") {
        return "bg-orange-100";
      }
      if (status === "declined") {
        return "bg-red-100";
      }
      if (status === "approved") {
        return "bg-green-100";
      }
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
  left: 8px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 7px;
}
</style>
