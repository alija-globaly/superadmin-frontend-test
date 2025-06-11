<template>
  <div class="bg-gray-100 shadow-inner">
    <div class="px-4 py-4 bg-white shadow relative">
      <RamroInput
        class="w-full"
        name="user_search"
        v-model="searchText"
        placeholder="Search users by name"
      ></RamroInput>
    </div>
    <div class="overflow-auto" style=" height: calc(100vh - 37rem);">
      <ul class="list-reset px-4 py-4" style="display: grid; grid-gap: 1rem;">
        <li
          tabindex="0"
          v-for="user in filtered"
          :key="user.id"
          class="w-full py-3 px-4 focus:outline-none focus:bg-blue-100 focus:shadow-lg border-l-4 bg-white rounded-lg shadow min-h-24 mr-3"
          :class="user.status ? ' border-green-400' : 'border-blue-400'"
        >
          <div
            class="flex items-center font-medium text-gray-700 justify-between"
          >
            <div class="flex flex-col">
              <span class="inline-flex">
                {{ user.first_name + " " + user.last_name }}
                <template v-if="user.job_title.length"
                  >({{ user.job_title }})</template
                >
              </span>
              <span class="inline-flex text-sm">
                {{ user.email }}
              </span>
            </div>
            <div>
              <span
                class="px-2 py-1 border border-blue-400 bg-blue-100 rounded text-blue-800 text-sm"
              >
                {{ user.is_owner ? "Owner" : user.role_name }}
              </span>
            </div>
          </div>
          <div class="mt-3 flex w-full">
            <div class="flex flex-col mr-4 w-1/4">
              <span class="inline-flex text-gray-700 text-sm font-medium">
                Primary Branch
              </span>
              <span class="inline-flex text-sm">
                {{ user.branch_name }}
              </span>
            </div>
            <div class="flex flex-col w-3/4">
              <span class="inline-flex text-gray-700 text-sm font-medium">
                Other Branches
              </span>
              <span class="inline-flex text-sm">
                {{ user.secondary_branches || "N/A" }}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RamroInput from "@/components/Input/Input.vue";

export default {
  name: "TenantUsers",
  components: {
    RamroInput
  },
  data() {
    return {
      users: [],
      searchText: ""
    };
  },
  computed: {
    filtered() {
      if (this.searchText) {
        return this.users.filter(item => {
          return this.searchText
            .toLowerCase()
            .split(" ")
            .every(
              v =>
                item.first_name.toLowerCase().includes(v) ||
                item.last_name.toLowerCase().includes(v)
            );
        });
      } else {
        return this.users;
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$loading(true);
      vm.fetch(to.query.page || 1)
        .then(response => {
          vm.users = response.data.data;
        })
        .finally(() => {
          vm.$loading(false);
        });
    });
  },
  methods: {
    fetch() {
      return axios.get("tenants/" + this.$route.params.id + "/users");
    }
  }
};
</script>

<style scoped></style>
