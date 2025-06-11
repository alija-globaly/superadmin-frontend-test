<template>
  <div v-on-clickaway="hideResults">
    <input
      aria-label="Global Search Box"
      class="outline-none transition border border-transparent focus:bg-white focus:border-gray-300 text-gray-900 rounded-sm bg-gray-200 py-2 px-4 block w-full appearance-none leading-normal"
      type="text"
      autocomplete="off"
      :value="searchText"
      @input="searchText = $event.target.value"
      ref="input"
      @keyup.esc="hideResults"
      placeholder="Search anything....."
    />
    <div
      class="bg-white shadow-lg rounded absolute w-full border text-md overflow-auto"
      style="max-height: calc(100vh - 200px)"
      id="global-search-results"
      v-if="openResults"
    >
      <template v-if="isResultEmpty">
        <div class="py-3 text-gray-600 font-medium px-4">
          No result found..
        </div>
      </template>
      <template v-else>
        <div class="flex flex-col py-3" v-show="searchResults.partner.length">
          <p class="text-gray-600 font-medium px-4 mb-2">Partners</p>
          <ul class="list-reset flex flex-col text-gray-900">
            <router-link
              v-for="partner in searchResults.partner"
              :key="partner.id"
              tag="li"
              :to="{ name: 'partner.detail', params: { id: partner.id } }"
              class="w-full hover:bg-gray-200 cursor-pointer"
            >
              <a
                class="flex items-center py-2 pl-8 pr-4 overflow-hidden"
                @click="hideResults"
              >
                <div class="ml-3 flex flex-col">
                  <span title="Academies Australasia" class="truncate">
                    {{ partner.name }}
                  </span>
                  <span class="text-sm text-gray-700 truncate">
                    {{ partner.email }}
                  </span>
                </div>
              </a>
            </router-link>
          </ul>
        </div>
        <div class="flex flex-col py-3" v-show="searchResults.product.length">
          <p class="text-gray-600 font-medium px-4 mb-2">Products</p>
          <ul class="list-reset flex flex-col text-gray-900">
            <router-link
              v-for="product in searchResults.product"
              :key="product.id"
              tag="li"
              :to="{
                name: 'product.detail',
                params: { id: product.partner.id, productId: product.id }
              }"
              class="w-full hover:bg-gray-200 cursor-pointer"
            >
              <a
                class="flex items-center py-2 pl-8 pr-4 overflow-hidden"
                @click="hideResults"
              >
                <div class="ml-3 flex flex-col">
                  <span title="Academies Australasia" class="truncate">
                    {{ product.name }}
                  </span>
                  <span class="text-sm text-gray-700 truncate">
                    {{ product.partner.name }}
                  </span>
                </div>
              </a>
            </router-link>
          </ul>
        </div>
        <div class="flex flex-col py-3" v-show="searchResults.tenant.length">
          <p class="text-gray-600 font-medium px-4 mb-2">Tenants</p>
          <ul class="list-reset flex flex-col text-gray-900">
            <router-link
              v-for="tenant in searchResults.tenant"
              :key="tenant.id"
              tag="li"
              :to="{
                name: 'tenant.detail',
                params: { id: tenant.id }
              }"
              class="w-full hover:bg-gray-200 cursor-pointer"
            >
              <a
                class="flex justify-between items-center py-2 pl-8 pr-4 overflow-hidden"
                @click="hideResults"
              >
                <div class="ml-3 flex flex-col">
                  <span title="Academies Australasia" class="truncate">
                    {{ tenant.business_name }}
                  </span>
                  <span class="text-sm text-gray-700 truncate">
                    {{ tenant.email }}
                  </span>
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
              </a>
            </router-link>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import debounce from "lodash/debounce";
import axios from "axios";
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "GlobalSearch",
  mixins: [clickaway],
  data() {
    return {
      openResults: false,
      searchText: "",
      searchResults: {
        partner: [],
        product: [],
        tenant: []
      }
    };
  },
  computed: {
    isResultEmpty() {
      if (
        this.searchResults.partner.length === 0 &&
        this.searchResults.product.length === 0 &&
        this.searchResults.tenant.length === 0
      ) {
        return true;
      }
      return false;
    }
  },
  watch: {
    searchText(value) {
      this.debouncedCall(value, this);
    }
  },
  methods: {
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
    debouncedCall: debounce((value, context) => {
      axios.get("/search?keyword=" + value).then(response => {
        context.searchResults = response.data.data;
        context.showResults();
      });
    }, 500),
    hideResults() {
      this.openResults = false;
    },
    showResults() {
      this.openResults = true;
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
