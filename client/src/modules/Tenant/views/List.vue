<template>
  <div>
    <div class="flex justify-between mt-4 mb-6 items-center">
      <h2 class="font-normal text-xl">
        Tenants
        <small v-if="tenants.meta">({{ tenants.meta.total }})</small>
      </h2>
    </div>
    <ul
      class="list-reset flex flex-wrap -mx-3 overflow-hidden sm:-mx-3 lg:-mx-3 xl:-mx-3"
    >
      <li
        v-for="tenant in tenants.data"
        :key="tenant.id"
        class="w-full overflow-hidden my-4 px-3 sm:w-full md:w-1/2 xl:w-1/3 2xl:w-1/4"
      >
        <div
          tabindex="0"
          class="bg-white border rounded shadow focus:shadow-xl focus:outline-none focus:border-blue-700"
        >
          <div class="font-normal text-lg flex flex-col py-4 px-4">
            <div class="flex items-center justify-between">
              <div class="flex flex-col overflow-hidden">
                <span :title="tenant.business_name" class="truncate">
                  {{ tenant.business_name }}
                </span>
                <span class="text-sm text-gray-700 truncate">{{
                  tenant.email
                }}</span>
              </div>
              <div
                class="border ml-2 mt-4 md:mt-0 flex flex-shrink-0 text-sm border-gray-200 rounded"
              >
                <div
                  class="px-2 py-1 relative rounded"
                  :class="getStatusClassWrapper(tenant)"
                >
                  <span
                    class="status pl-4 rounded text-sm font-medium"
                    :class="getStatusClass(tenant)"
                  >
                    {{ getStatusLabel(tenant.status) }}
                  </span>
                </div>
              </div>
            </div>
            <div class="flex flex-col mt-4">
              <span class="text-sm flex">
                <i class="material-icons md-18 text-gray-600">phone</i>
                <span class="ml-2">{{ tenant.phone_number }}</span>
              </span>
              <span class="text-sm flex mt-2">
                <i class="material-icons md-18 text-gray-600">subscriptions</i>
                <span class="ml-2">{{ tenant.plan_name }}</span>
              </span>
              <span class="text-sm flex mt-2">
                <i class="material-icons md-18 text-gray-600">link</i>
                <a class="ml-2" :href="tenant.fqdn" target="_blank">
                  {{ tenant.fqdn }}
                </a>
              </span>
            </div>
          </div>
          <div
            class="flex items-center justify-between bg-gray-200 py-3 px-3 mt-4 border-t"
          >
            <div class="inline-flex flex-col">
              <span class="text-gray-600">Joined On:</span>
              <span>{{ tenant.created_at }}</span>
            </div>
            <div>
              <button
                class="focus:outline-none focus:shadow hover:shadow border border-blue-400 text-blue-700 tracking-wide text-sm py-1 px-4 rounded"
                @click="openDetail(tenant.id)"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <RamroPagination
      class="mb-6 mt-6"
      :current="tenants.meta.current_page"
      :total="tenants.meta.last_page"
      v-if="tenants.meta && tenants.meta.last_page > 1"
      @update="$router.push({ query: { page: $event.page } })"
    />
    <div class="pl-6 pr-6">
      <transition-page>
        <router-view />
      </transition-page>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import partners from "./../tenants";
import RamroPagination from "@/components/Pagination/Pagination.vue";
import TransitionPage from "@/components/TransitionPage.vue";

export default {
  partners,
  components: {
    RamroPagination,
    TransitionPage
  },
  data() {
    return {
      tenants: []
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$loading(true);
      vm.fetch(to.query.page || 1)
        .then(response => {
          vm.tenants = response.data;
        })
        .finally(() => {
          vm.$loading(false);
        });
    });
  },
  async beforeRouteUpdate(to, from, next) {
    if (
      to.name !== "tenant.list" ||
      to.query.page == this.tenants.meta.current_page
    ) {
      next();
      return;
    }
    this.$loading(true);
    let response = await this.fetch(to.query.page || 1);
    this.tenants = Object.assign({}, response.data);
    this.$loading(false);
    next();
  },
  methods: {
    fetch(page = 1) {
      return axios.get("tenants?include=subscription&page[number]=" + page);
    },
    getStatusClass(subscription) {
      if (subscription.status === 1) {
        return "text-orange-600";
      }
      if (subscription.status === 4) {
        return "text-red-600";
      }
      if (subscription.status === 3) {
        return "text-blue-600";
      }
      if (subscription.status === 2) {
        return "text-green-700";
      }
      return "text-orange-600";
    },
    getStatusLabel(status) {
      if (status === 1) {
        return "In Trial";
      }
      if (status === 4) {
        return "Cancelled";
      }
      if (status === 3) {
        return "Non renewing";
      }
      if (status === 2) {
        return "Active";
      }
      return "N/A";
    },
    getStatusClassWrapper(tenant) {
      if (tenant.status === 1) {
        return "bg-orange-100";
      }
      if (tenant.status === 4) {
        return "bg-red-100";
      }
      if (tenant.status === "3") {
        return "bg-blue-100";
      }
      if (tenant.status === 2) {
        return "bg-green-100";
      }
      return "bg-orange-100";
    },
    openDetail(tenantId) {
      this.$router.push({ name: "tenant.detail", params: { id: tenantId } });
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
