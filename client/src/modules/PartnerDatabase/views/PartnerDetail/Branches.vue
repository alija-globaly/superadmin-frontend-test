<template>
  <div class="mt-10 text-gray-700">
    <ul class="branches-list list-reset" v-if="branches">
      <li
        tabindex="0"
        class="items-center w-full bg-white rounded mb-4 border focus:outline-none focus:bg-blue-100"
        v-for="branch in branches"
        :key="branch.id"
        @contextmenu.prevent="
          $can('manage', 'partner-database')
            ? $refs.branchMenu.open($event, {
                branch_id: branch.id,
                deleted_at: branch.deleted_at
              })
            : ''
        "
      >
        <div class="h-full flex justify-between flex-col">
          <div class="flex flex-col flex-1 p-6">
            <div class="inline-flex align-middle">
              <i class="material-icons fill-current mr-5">business</i>
              <span class="font-medium">
                {{ branch.name }}
              </span>
            </div>
            <div class="inline-flex items-center align-middle mt-5">
              <i class="material-icons md-18 fill-current mr-5">contact_mail</i>
              <span class="block">{{ branch.email }}</span>
            </div>
            <div class="inline-flex items-center align-middle mt-3">
              <i class="material-icons md-18 fill-current mr-5">location_on</i>
              <span class="block">
                {{ branch.street || "-" }}, {{ branch.state }},
                {{ branch.country.country_name }}
              </span>
            </div>
            <div class="inline-flex items-center align-middle mt-3">
              <i class="material-icons md-18 fill-current mr-5"
                >contact_phone</i
              >
              <span class="block">{{ branch.phone_number || "N/A" }}</span>
            </div>
          </div>
          <div class="flex justify-between p-4 bg-gray-100 border-t">
            <div>
              <span
                class="bg-blue-500 text-gray-200 inline-flex text-sm py-1 px-2 rounded"
                v-if="branch.type == 'Head Office'"
                >Head Office</span
              >
              <span
                class="bg-gray-600 text-gray-200 inline-flex text-sm py-1 px-2 rounded"
                v-else
                >Other Office</span
              >
              <span
                class="ml-2 bg-red-500 py-1 px-2 inline-flex rounded text-red-100 text-sm"
                v-if="branch.deleted_at"
                >De-Activated</span
              >
            </div>
            <button
              class="lg:hidden focus:outline-none py-1 inline-flex"
              @click="
                $can('manage', 'partner-database')
                  ? $refs.branchMenu.open($event, {
                      branch_id: branch.id,
                      deleted_at: branch.deleted_at
                    })
                  : ''
              "
            >
              <i class="material-icons text-gray-700">more_vert</i>
            </button>
          </div>
        </div>
      </li>
    </ul>
    <ContextMenu ref="branchMenu" class="flex-row">
      <template slot-scope="child">
        <div
          class="flex text-black opacity-75 cursor-pointer hover:bg-gray-200 mt-2"
          @click="edit(child.data.branch_id)"
        >
          <a class="no-underline text-current flex items-center py-2 w-full">
            <i class="material-icons md-18 fill-current mr-3 ml-5">edit</i>
            <div>Edit</div>
          </a>
        </div>
        <div
          v-if="!child.data.deleted_at"
          class="flex text-black opacity-75 cursor-pointer hover:bg-gray-200 mb-2"
          @click="deactivate(child.data.branch_id)"
        >
          <a class="no-underline text-current flex items-center py-2 w-full">
            <i class="material-icons md-18 fill-current mr-3 ml-5"
              >visibility_off</i
            >
            <div>Deactivate</div>
          </a>
        </div>
        <div
          v-if="child.data.deleted_at"
          class="flex text-black opacity-75 cursor-pointer hover:bg-gray-200 mb-2"
          @click="activate(child.data.branch_id)"
        >
          <a class="no-underline text-current flex items-center py-2 w-full">
            <i class="material-icons md-18 fill-current mr-3 ml-5"
              >visibility</i
            >
            <div>Activate</div>
          </a>
        </div>
        <div
          class="flex text-black opacity-75 cursor-pointer hover:bg-gray-200 mb-2"
          @click="remove(child.data.branch_id)"
        >
          <a class="no-underline text-current flex items-center py-2 w-full">
            <i class="material-icons md-18 fill-current mr-3 ml-5">delete</i>
            <div>Delete</div>
          </a>
        </div>
      </template>
    </ContextMenu>
    <div>
      <TransitionPage>
        <router-view></router-view>
      </TransitionPage>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import ContextMenu from "@/components/ContextMenu/ContextMenu.vue";
import TransitionPage from "@/components/TransitionPage.vue";

export default {
  name: "PartnerBranchesList",
  components: {
    ContextMenu,
    TransitionPage
  },
  data() {
    return {
      branches: []
    };
  },
  async beforeRouteEnter(to, from, next) {
    let response = await axios.get("partner/" + to.params.id + "/branches");
    next(vm => {
      vm.branches = response.data.data;
    });
  },
  async beforeRouteUpdate(to, from, next) {
    let response = await axios.get("partner/" + to.params.id + "/branches");
    this.branches = response.data.data;
    next();
  },
  methods: {
    fetch() {
      axios
        .get("partner/" + this.$route.params.id + "/branches")
        .then(response => {
          this.branches = response.data.data;
        });
    },
    edit(branchId) {
      this.$router.push({
        name: "branch.edit",
        params: { id: this.$route.params.id, branchId: branchId }
      });
    },
    deactivate(partnerId) {
      if (window.confirm("Are you sure you want to de-activate ?")) {
        axios
          .post("branch/" + partnerId + "/deactivate")
          .then(() => {
            this.$toasted.success("Partner deactivated successfully");
            this.fetch();
          })
          .catch(() => {
            this.$toasted.error("Oops, Something went wrong..");
          });
      }
    },
    activate(partnerId) {
      if (window.confirm("Are you sure you want to activate ?")) {
        axios
          .post("branch/" + partnerId + "/activate")
          .then(() => {
            this.$toasted.success("Partner activated successfully");
            this.fetch();
          })
          .catch(() => {
            this.$toasted.error("Oops, Something went wrong..");
          });
      }
    },
    remove(branchId) {
      if (window.confirm("Are you sure you want to delete ?")) {
        axios
          .delete("branch/" + branchId)
          .then(() => {
            this.$toasted.success("Branch detail deleted successfully");
            this.fetch();
          })
          .catch(() => {
            this.$toasted.error("Oops, Something went wrong..");
          });
      }
    }
  }
};
</script>
<style scoped>
.branches-list {
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
}
</style>
