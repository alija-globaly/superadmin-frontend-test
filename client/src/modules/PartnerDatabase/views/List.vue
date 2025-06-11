<template>
  <div>
    <div class="flex justify-between mt-4 mb-6 items-center">
      <h2 class="font-normal text-xl">
        Partners
        <small v-if="partners.meta">({{ partners.meta.total }})</small>
      </h2>
      <div class="font-normal flex" v-if="$can('manage', 'partner-database')">
        <router-link
          :to="{ name: 'partner.import' }"
          class="no-underline mr-2 rounded block text-white text-sm py-2 px-4 font-sans tracking-wide font-medium bg-blue-600 text-white"
        >
          Import
        </router-link>
        <router-link
          :to="{ name: 'partner.add' }"
          class="no-underline rounded block text-white text-sm py-2 px-4 font-sans tracking-wide font-medium bg-blue-600 text-white"
        >
          Add New
        </router-link>
      </div>
      <div class="flex items-center">
          <RamroInput v-model="search" type="text" label="Search for partner" />
          <RamroButton @click="doSearch">Search</RamroButton>
      </div>
    </div>
    <ul class="list-reset hidden lg:block" v-if="partners.data">
      <li
        v-for="partner in partners.data"
        :key="partner.id"
        tabindex="0"
        @keyup.enter="openDetail(partner.id)"
        @dblclick="openDetail(partner.id)"
        @contextmenu.prevent="
          $can('manage', 'partner-database')
            ? $refs.menu.open($event, {
                partner_id: partner.id,
                deleted_at: partner.deleted_at
              })
            : ''
        "
        class="px-4 bg-white rounded shadow mb-4 focus:outline-none border flex flex-col focus:bg-blue-100"
      >
        <div>
          <span
            class="bg-blue-100 p-1 top-0 border-r border-l border-b border-blue-300 text-sm text-blue-700"
          >
            <template v-if="partner.category.parent_id">
              {{ partner.category.master.name }} >> {{ partner.category.name }}
            </template>
            <template v-else>
              {{ partner.category.name }}
            </template>
          </span>
          <span
            class="ml-2 bg-red-200 p-1 top-0 border-r border-l border-b border-red-300 text-sm"
            v-if="partner.deleted_at"
            >De-Activated</span
          >
        </div>
        <PartnerListItem :partner="partner"></PartnerListItem>
      </li>
    </ul>
    <ul
      class="list-reset block lg:hidden flex flex-wrap -mx-3 overflow-hidden sm:-mx-3 lg:-mx-3 xl:-mx-3"
    >
      <li
        v-for="partner in partners.data"
        :key="partner.id"
        tabindex="0"
        @keyup.enter="openDetail(partner.id)"
        @dblclick="openDetail(partner.id)"
        @contextmenu.prevent="
          $refs.menu.open($event, {
            partner_id: partner.id,
            deleted_at: partner.deleted_at
          })
        "
        class="w-full focus:outline-none my-4 px-3 sm:w-full lg:w-1/3 xl:w-1/3"
      >
        <div
          tabindex="0"
          class="bg-white border rounded shadow focus:shadow-xl focus:outline-none focus:border-blue-600"
        >
          <span class="bg-blue-100 p-1 top-0 text-sm text-blue-700">
            <template v-if="partner.category.parent_id">
              {{ partner.category.master.name }} >> {{ partner.category.name }}
            </template>
            <template v-else>
              {{ partner.category.name }}
            </template>
          </span>
          <span
            class="ml-2 bg-red-200 p-1 top-0 text-sm text-red-700"
            v-if="partner.deleted_at"
            >De-Activated</span
          >
          <div class="font-normal text-lg flex flex-col py-4 px-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  aria-label="Partner Logo"
                  class="rounded-full border shadow-inner object-contain w-16 h-16"
                  v-lazy="partner.logo"
                />
                <div class="ml-3 flex flex-col overflow-hidden">
                  <span :title="partner.name" class="truncate">
                    {{ partner.name }}
                  </span>
                  <span class="text-sm text-gray-700 truncate">{{
                    partner.email
                  }}</span>
                </div>
              </div>
              <div class="flex flex-shrink-0"></div>
            </div>
            <div class="flex flex-col mt-4 ml-8 ">
              <span class="text-sm flex">
                <i class="material-icons md-18 text-gray-600">phone</i>
                <span class="ml-2">{{ partner.phone_number || "-" }}</span>
              </span>
              <span class="text-sm flex mt-2">
                <i class="material-icons md-18 text-gray-600">my_location</i>
                <address class="ml-2">
                  {{ partner.street || "-" }}, {{ partner.state }},
                  {{ partner.country ? partner.country.country_name : "" }}
                </address>
              </span>
              <span class="text-sm flex mt-2">
                <i class="material-icons md-18 text-gray-600">link</i>
                <a class="ml-2" :href="partner.website" target="_blank">
                  {{ partner.website }}
                </a>
              </span>
            </div>
          </div>
          <div
            class="flex items-center justify-between bg-gray-200 py-3 px-3 mt-4 border-t"
          >
            <div class="inline-flex ">
              <div class="inline-flex flex-col">
                <span class="text-gray-600">Products</span>
                <span>{{ partner.products_count }}</span>
              </div>
              <div class="ml-3 inline-flex flex-col">
                <span class="text-gray-600">Branches</span>
                <span>{{ partner.branches_count }}</span>
              </div>
            </div>
            <div class="flex items-center">
              <button
                class="focus:outline-none focus:shadow hover:shadow border border-blue-400 text-blue-700 tracking-wide text-sm py-1 px-4 rounded"
                @click="openDetail(partner.id)"
              >
                View
              </button>
              <button
                class="focus:outline-none py-1 inline-flex"
                @click="
                  $refs.menu.open($event, {
                    partner_id: partner.id,
                    deleted_at: partner.deleted_at
                  })
                "
              >
                <i class="material-icons text-gray-700">more_vert</i>
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <RamroPagination
      class="mb-6 mt-6"
      :current="partners.meta.current_page"
      :total="partners.meta.last_page"
      v-if="partners.meta && partners.meta.last_page > 1"
      @update="$router.push({ query: { page: $event.page } })"
    />
    <ContextMenu ref="menu" class="flex-row">
      <template slot-scope="child">
        <div
          class="flex text-black opacity-75 cursor-pointer hover:bg-gray-200 mt-2"
          @click="edit(child.data.partner_id)"
        >
          <a class="no-underline text-current flex items-center py-2 w-full">
            <i class="material-icons md-18 fill-current mr-3 ml-5">edit</i>
            <div class="font-normal">Edit</div>
          </a>
        </div>
        <div
          v-if="!child.data.deleted_at"
          class="flex text-black opacity-75 cursor-pointer hover:bg-gray-200 mb-2"
          @click="deactivate(child.data.partner_id)"
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
          @click="activate(child.data.partner_id)"
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
          @click="remove(child.data.partner_id)"
        >
          <a class="no-underline text-current flex items-center py-2 w-full">
            <i class="material-icons md-18 fill-current mr-3 ml-5">delete</i>
            <div>Delete</div>
          </a>
        </div>
      </template>
    </ContextMenu>
    <router-view />
  </div>
</template>
<script>
import axios from "axios";
import ContextMenu from "@/components/ContextMenu/ContextMenu.vue";
import RamroPagination from "@/components/Pagination/Pagination.vue";
import PartnerListItem from "./../components/PartnerListItem";
import RamroInput from "../../../components/Input/Input.vue";
import RamroButton from "../../../components/Button/Button.vue";

export default {
  name: "PartnersList",
  components: {
    RamroButton,
    RamroInput,
    ContextMenu,
    RamroPagination,
    PartnerListItem
  },
  data() {
    return {
      partners: [],
      categories: [],
      search: "",
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$loading(true);
      axios.get("categories").then(response => {
        vm.categories = response.data.data;
      });
      vm.fetch(to.query.page || 1)
        .then(response => {
          vm.partners = response.data;
        })
        .finally(() => {
          vm.$loading(false);
        });
    });
  },
  async beforeRouteUpdate(to, from, next) {
    if (
      from.name === "partner.import" ||
      to.query.page == this.partners.meta.current_page
    ) {
      next();
      return;
    }
    this.$loading(true);
    let response = await this.fetch(to.query.page || 1);
    this.partners = Object.assign({}, response.data);
    this.$loading(false);
    next();
  },
  methods: {
    getCategoryLabel(id) {
      return this.categories.find(category => category.id === id).name;
    },
    doSearch() {
      this.fetch().then(response => {
        this.partners = Object.assign({}, response.data)
      }).catch(() => {
        this.$toasted.error("search fail..");
      });
    },
    fetch(page = 1) {
      const extraSearch = this.search ? "&search=" + this.search : "";
      return axios.get("partners?include=country&page[number]=" + page + extraSearch);
    },
    edit(partnerId) {
      this.$router.push({ name: "partner.edit", params: { id: partnerId } });
    },
    deactivate(partnerId) {
      if (window.confirm("Are you sure you want to de-activate ?")) {
        axios
          .post("partner/" + partnerId + "/deactivate")
          .then(() => {
            this.$toasted.success("Partner deactivated successfully");
            this.fetch(this.$route.query.page).then(response => {
              this.partners = Object.assign({}, response.data);
            });
          })
          .catch(() => {
            this.$toasted.error("Oops, Something went wrong..");
          });
      }
    },
    activate(partnerId) {
      if (window.confirm("Are you sure you want to activate ?")) {
        axios
          .post("partner/" + partnerId + "/activate")
          .then(() => {
            this.$toasted.success("Partner activated successfully");
            this.fetch(this.$route.query.page).then(response => {
              this.partners = Object.assign({}, response.data);
            });
          })
          .catch(() => {
            this.$toasted.error("Oops, Something went wrong..");
          });
      }
    },
    remove(partnerId) {
      if (window.confirm("Are you sure you want to delete ?")) {
        axios
          .delete("partner/" + partnerId)
          .then(() => {
            this.$toasted.success("Partner detail deleted successfully");
            this.fetch();
          })
          .catch(() => {
            this.$toasted.error("Oops, Something went wrong..");
          });
      }
    },
    openDetail(partnerId) {
      this.$router.push({ name: "partner.detail", params: { id: partnerId } });
    }
  }
};
</script>
