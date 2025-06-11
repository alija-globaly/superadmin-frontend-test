<template>
  <div>
    <ul class="list-reset flex flex-col mb-4">
      <li
        class="flex items-center px-2 py-2 w-full bg-gray-300 rounded shadow mb-4 focus:outline-none border border-transparent focus:border-blue-500"
      >
        <div
          class="w-2/12 font-normal text-sm flex flex-col ml-3 tracking-wide"
        >
          Business Detail
        </div>
        <div
          class="font-normal text-sm flex flex-col ml-3 tracking-wide"
          :class="{
            'w-2/12': getStatus === 'rejected',
            'w-3/12': getStatus !== 'rejected'
          }"
        >
          User Details
        </div>
        <div
          class="font-normal text-sm flex flex-col ml-3 tracking-wide"
          :class="{
            'w-2/12': getStatus === 'rejected',
            'w-3/12': getStatus !== 'rejected'
          }"
        >
          Company Subdomain
        </div>
        <div class="font-normal text-sm flex flex-col ml-3 tracking-wide">
          Status
        </div>
        <div
          class="w-2/12 font-normal flex text-sm items-end flex-col ml-3 tracking-wide"
        >
          Applied Date
        </div>
        <div
          class="w-2/12 font-normal flex text-sm items-end flex-col ml-3 tracking-wide"
          v-if="getStatus === 'rejected'"
        >
          Rejected Date
        </div>
        <div
          class="w-1/12 font-normal flex text-sm items-end flex-col ml-3 tracking-wide"
          :class="{ 'pr-4': getStatus === 'rejected' }"
        >
          Action
        </div>
      </li>
      <li
        v-for="request in applications.data"
        :key="request.id"
        tabindex="0"
        class="flex items-center px-4 py-2 w-full bg-white rounded shadow h-20 mb-4 focus:outline-none border border-transparent focus:border-blue-500"
      >
        <div
          class="w-2/12 font-normal text-lg flex flex-col ml-3 tracking-wide truncate"
          :title="request.business_details.name"
        >
          {{ request.business_details.name }}
          <span class="text-sm truncate">{{
            request.business_details.email
          }}</span>
        </div>
        <div
          class="font-normal text-lg flex flex-col ml-3 tracking-wide truncate"
          :class="{
            'w-2/12': getStatus === 'rejected',
            'w-3/12': getStatus !== 'rejected'
          }"
        >
          {{ request.user_details.name }}
          <span class="text-sm truncate">{{ request.user_details.email }}</span>
        </div>
        <div
          class="font-normal text-lg flex flex-col ml-3 tracking-wide truncate"
          :class="{
            'w-2/12': getStatus === 'rejected',
            'w-3/12': getStatus !== 'rejected'
          }"
        >
          {{ request.company_domain }}
        </div>
        <div class="font-normal ml-3">
          <div
            class="border ml-2 mt-4 md:mt-0 flex flex-shrink-0 text-sm border-gray-200 rounded"
          >
            <div
              class="px-2 py-1 relative rounded"
              :class="getStatusClassWrapper(request.status)"
            >
              <span
                class="status pl-4 inline-flex rounded text-sm font-medium capitalize"
                :class="getStatusClass(request.status)"
              >
                {{ request.status }}
              </span>
            </div>
          </div>
        </div>
        <div
          class="w-2/12 font-normal flex items-end flex-col ml-3 tracking-wide"
        >
          <span class="text-gray-600 text-sm">Applied On</span>
          <span class="">
            {{ request.applied_on }}
          </span>
        </div>
        <div
          class="w-2/12 font-normal flex items-end flex-col ml-3 tracking-wide"
          v-if="getStatus === 'rejected'"
        >
          <span class="text-gray-600 text-sm">Rejected On</span>
          <span class="">
            {{ request.rejected_on }}
          </span>
        </div>
        <div
          class="w-1/12 font-normal flex items-end flex-col ml-3 tracking-wide"
        >
          <div class="flex items-center">
            <button
              class="focus:outline-none focus:shadow hover:shadow border border-blue-400 text-blue-700 tracking-wide text-sm py-1 px-4 rounded"
              @click="openDetail(request)"
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
      :total="applications.meta.last_page"
      v-if="applications.meta && applications.meta.total > 1"
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
  name: "SMSRequestsList",
  components: {
    RamroPagination
  },
  props: ["applications"],
  computed: {
    getStatus() {
      const routeName = this.$route.name;
      if (routeName === "sms-requests.pending") return "pending";
      if (routeName === "sms-requests.approved") return "approved";
      if (routeName === "sms-requests.rejected") return "rejected";
      return "";
    }
  },
  methods: {
    getStatusClass(status) {
      const statusList = {
        Pending: "text-orange-600",
        Rejected: "text-red-600",
        Approved: "text-green-700"
      };
      return statusList[status] || "text-orange-600";
    },
    openDetail(application) {
      const status = application.status.toLowerCase();
      this.$router.push({
        name: `sms-requests.${status}.detail`,
        params: { id: application.id }
      });
    },
    getStatusClassWrapper(status) {
      const statusList = {
        Pending: "bg-orange-100",
        Rejected: "bg-red-100",
        Approved: "bg-green-100"
      };
      return statusList[status] || "bg-orange-600";
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
