<template>
  <Drawer size="max-w-4xl overflow-y-auto">
    <div
      class="bg-gray-200 border-b border-gray-400 flex justify-between px-6 py-4"
    >
      <h2 class="font-normal text-xl">
        {{ tenant.business_name }}
      </h2>
      <button class="m-0 p-0 appearance-none h-full" @click="close">
        <i class="material-icons fill-current">close</i>
      </button>
    </div>
    <div class="p-4">
      <fieldset class="border rounded px-6 py-4 mt-2">
        <legend class="bg-gray-600 px-3 py-1 text-white rounded">
          Tenant Detail
        </legend>
        <div class="md:flex w-full">
          <div class="flex align-middle flex-col w-full md:w-1/2">
            <span class="flex items-center">
              <i class="material-icons md-24 text-gray-600">person</i>
              <span class="ml-3">{{ tenant.name }}</span>
            </span>
            <span class="flex items-center mt-2">
              <i class="material-icons md-24 text-gray-600">email</i>
              <span class="ml-3">{{ tenant.email }}</span>
            </span>
            <span class="flex items-center mt-2" title="Joined On">
              <i class="material-icons md-24 text-gray-600">date_range</i>
              <span class="ml-3">{{ tenant.created_at }}</span>
            </span>
          </div>
          <div class="mt-2 md:mt-0 flex align-middle flex-col w-full md:w-1/2">
            <span class="flex items-center">
              <i class="material-icons md-24 text-gray-600">map</i>
              <span class="ml-3">{{ tenant.country }}</span>
            </span>
            <span class="flex items-center mt-2">
              <i class="material-icons md-24 text-gray-600">phone</i>
              <span class="ml-3">{{ tenant.phone_number }}</span>
            </span>
            <span class="flex items-center mt-2">
              <i class="material-icons md-24 text-gray-600">link</i>
              <a class="ml-3" :href="tenant.fqdn" target="_blank">
                {{ tenant.fqdn || "Not available" }}
              </a>
            </span>
          </div>
        </div>
      </fieldset>
      <fieldset class="border rounded px-6 py-4 mt-4">
        <legend class="bg-gray-600 px-3 py-1 text-white rounded">
          Subscription Detail
        </legend>
        <div class="md:flex w-full">
          <div class="flex align-middle flex-col w-full md:w-1/2">
            <span class="flex items-center mt-2">
              <i class="material-icons md-24 text-gray-600">subscriptions</i>
              <span class="ml-3">{{
                tenant.plan_name || "Not Available"
              }}</span>
            </span>
            <span class="flex items-center mt-2">
              <i class="material-icons md-24 text-gray-600">dns</i>
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
            </span>
            <span class="flex items-center mt-2">
              <i class="material-icons md-24 text-gray-600">date_range</i>
              <span class="ml-3">{{
                (tenant.subscription && tenant.subscription.started_at) || "N/A"
              }}</span>
            </span>
          </div>
          <div
            class="mt-3 md:mt-0 flex align-middle flex-col w-full md:w-1/2 text-blue-800"
          >
            <span
              class="flex flex-col"
              v-if="tenant.status === $options.ACTIVE"
            >
              <span class="font-medium">Next Billing Date</span>
              <span class="">{{
                (tenant.subscription && tenant.subscription.next_billing_at) ||
                  "N/A"
              }}</span>
            </span>
            <span
              class="flex flex-col"
              v-if="tenant.status === $options.IN_TRIAL"
            >
              <span class="font-medium">Trial Ends At</span>
              <span class="">{{
                (tenant.subscription && tenant.subscription.trial_ends_at) ||
                  "N/A"
              }}</span>
            </span>
            <span
              class="flex flex-col"
              v-if="
                tenant.status === $options.NON_RENEWING ||
                  tenant.status === $options.CANCELLED
              "
            >
              <span class="font-medium">Cancelled At</span>
              <span class="">{{
                (tenant.subscription && tenant.subscription.cancelled_at) ||
                  "N/A"
              }}</span>
            </span>
            <span class="flex flex-col mt-2">
              <span class="font-medium">Next Billing Amount</span>
              <span class="">
                {{ tenant.subscription && tenant.subscription.currency_cde }}
                {{
                  (tenant.subscription &&
                    tenant.subscription.next_billing_amount) ||
                    "N/A"
                }}</span
              >
            </span>
          </div>
        </div>
      </fieldset>
    </div>
    <div class="flex border-b bg-gray-300 px-4">
      <router-link
        tag="div"
        :to="{ name: 'tenant.users.list', params: { id: $route.params.id } }"
        active-class="text-blue-700 border-b-2 border-blue-700"
        class="font-medium flex text-gray-800 opacity-75 px-4"
        exact
      >
        <a class="no-underline text-current p-3 w-full">
          Users
        </a>
      </router-link>
      <router-link
        tag="div"
        :to="{
          name: 'tenant.usage.report',
          params: { id: $route.params.id }
        }"
        active-class=" text-blue-700 border-b-2 border-blue-700"
        class="font-medium flex text-gray-800 opacity-75 px-4"
        exact
      >
        <a class="no-underline text-current p-3 w-full">
          Usage
        </a>
      </router-link>
      <router-link
        tag="div"
        :to="{
          name: 'tenant.sms.list',
          params: { id: $route.params.id }
        }"
        active-class=" text-blue-700 border-b-2 border-blue-700"
        class="font-medium flex text-gray-800 opacity-75 px-4"
        exact
      >
        <a class="no-underline text-current p-3 w-full">
          SMS Nepal
        </a>
      </router-link>
      <router-link
        tag="div"
        :to="{
          name: 'tenant.config.list',
          params: { id: $route.params.id }
        }"
        active-class=" text-blue-700 border-b-2 border-blue-700"
        class="font-medium flex text-gray-800 opacity-75 px-4"
        exact
      >
        <a class="no-underline text-current p-3 w-full">
          Config
        </a>
      </router-link>
    </div>
    <div>
      <router-view
        :subDomain="tenantSubdomain"
        :tenantId="tenantId"
      ></router-view>
    </div>
  </Drawer>
</template>

<script>
import axios from "axios";
import Drawer from "@/layout/Drawer.vue";
const IN_TRIAL = 1;
const ACTIVE = 2;
const NON_RENEWING = 3;
const CANCELLED = 4;
export default {
  name: "TenantDetail",
  components: {
    Drawer
  },
  IN_TRIAL,
  ACTIVE,
  NON_RENEWING,
  CANCELLED,
  data() {
    return {
      tenant: {
        subscription: {}
      },
      tenantSubdomain: "",
      tenantId: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$loading(true);
      vm.fetch(to.query.page || 1)
        .then(response => {
          vm.tenant = response.data && response.data.data;
          vm.tenantSubdomain =
            response.data && response.data.data && response.data.data.subdomain;
          vm.tenantId = response.data && response.data.data.id;
        })
        .finally(() => {
          vm.$loading(false);
        });
    });
  },
  mounted() {
    document.getElementById("drawer").classList.remove("overflow-auto");
  },
  destroyed() {
    document.getElementById("drawer").classList.add("overflow-auto");
  },
  methods: {
    fetch() {
      return axios.get(
        "tenants/" + this.$route.params.id + "?include=subscription,features"
      );
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
    close() {
      this.$router.push({
        name: "tenant.list"
      });
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
