<template>
  <div class="p-4">
    <div
      v-for="(key, value) in configs"
      :key="key"
      class="  w-full py-3 px-4 focus:outline-none focus:bg-blue-100 focus:shadow-lg border-l-4 bg-white rounded-lg shadow min-h-24 mr-3"
    >
      <div>
        <div>
          <p class="font-small text-gray-600">
            Enable or disable pending payment banner to this tenant
          </p>
        </div>
        <div class="flex gap-2 items-center">
          <p class="font-medium text-gray-700">{{ value }} --- {{ key }}</p>
          <ramro-button
            :variant="getButtonColor(key)"
            v-if="value === 'payment_banner'"
            @click="togglePaymentBanner(key)"
          >
            <slot>
              {{ key === "enabled" ? "disable" : "enable" }}
            </slot>
          </ramro-button>
        </div>
      </div>
    </div>
    <div
      class="mt-4 w-full py-3 px-4 focus:outline-none focus:bg-blue-100 focus:shadow-lg border-l-4 bg-white rounded-lg shadow min-h-24 mr-3"
    >
      <div>
        <div>
          <p class="font-small text-gray-600">
            Clear Cache of Tenant
          </p>
        </div>
        <div class="flex gap-2 items-center">
          <ramro-button variant="primary" @click="clearTenantCache()">
            <slot>
              Clear Cache
            </slot>
          </ramro-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RamroButton from "@/components/Button/Button.vue";

export default {
  name: "TenantConfig",
  components: {
    RamroButton
  },
  props: ["tenantId"],
  data() {
    return {
      configs: []
    };
  },
  created() {
    this.fetchConfig();
  },
  methods: {
    getButtonColor(key) {
      return key === "enabled" ? "danger" : "success";
    },
    fetchConfig() {
      axios
        .get(`/tenants/${this.$route.params.id}/config`)
        .then(response => {
          this.configs =
            response.data && response.data.data && response.data.data.meta;
        })
        .catch(err => {
          this.$toasted.error(
            err.response.data.message || "Oops, Something went wrong.."
          );
        });
    },
    togglePaymentBanner(status) {
      const newStatus = status === "enabled" ? "disabled" : "enabled";
      axios
        .put(`/tenants/${this.$route.params.id}/${newStatus}`)
        .then(response => {
          this.$toasted.success(
            response.data.message || "successfully updated"
          );
        })
        .catch(err => {
          this.$toasted.error(
            err.response.data.message || "Oops, Something went wrong.."
          );
        })
        .finally(() => {
          this.clearTenantCache();
          this.$router.go(0);
        });
    },
    clearTenantCache() {
      axios
        .get(`/tenants/${this.$route.params.id}/cache-clear`)
        .then(response => {
          this.configs =
            response.data && response.data.data && response.data.data.meta;
        })
        .catch(err => {
          this.$toasted.error(
            err.response.data.message || "Oops, Something went wrong.."
          );
        });
    }
  }
};
</script>

<style scoped></style>
