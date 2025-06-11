<template>
  <div class="text-gray-800 -ml-6 -mr-6">
    <div class="bg-white pl-6 pr-6 pt-8 relative shadow-md">
      <div class="flex items-center mb-10">
        <img
          aria-label="Partner Logo"
          class="rounded-full border shadow-inner hidden lg:block md:w-40 md:h-40"
          v-lazy="partner.logo"
        />
        <div class="flex flex-col ml-8 flex-1">
          <h1 class="font-normal text-2xl inline-flex items-center">
            {{ partner.name }}
            <span
              class="ml-2 bg-red-200 p-1 rounded border border-red-300 text-sm"
              v-if="partner.deleted_at"
              >De-Activated</span
            >
          </h1>
          <div class="inline-flex items-center align-middle mt-2">
            <i class="material-icons md-18 fill-current mr-4">contact_mail</i>
            <span class="block ">{{ partner.email }}</span>
          </div>
          <div class="inline-flex items-center align-middle mt-1">
            <i class="material-icons md-18 fill-current mr-4">location_on</i>
            <span class="block">
              {{ partner.street || "-" }}, {{ partner.state }},
              {{ partner.country.country_name }}
            </span>
          </div>
          <div class="inline-flex items-center align-middle mt-1">
            <i class="material-icons md-18 fill-current mr-4">insert_link</i>
            <span class="block">{{ partner.website }}</span>
          </div>
          <div class="inline-flex items-center align-middle mt-1">
            <i class="material-icons md-18 fill-current mr-4">contact_phone</i>
            <span class="block">{{ partner.phone_number || "N/A" }}</span>
          </div>
        </div>
        <div
          v-if="$can('manage', 'partner-database')"
          class="px-6 border-l-2 lg:mr-12"
        >
          <router-link
            :to="{ name: 'partner.edit', params: { id: $route.params.id } }"
            class="hover:shadow no-underline rounded block text-sm py-2 px-4 mb-4 font-sans tracking-wide font-medium bg-white text-blue-600 border"
          >
            Edit Partner
          </router-link>
          <button
            v-if="partner.deleted_at"
            @click="activate"
            class="hover:shadow focus:outline-none w-full no-underline rounded block text-sm py-2 px-4 mb-4 font-sans tracking-wide font-medium bg-white text-green-600 border border-green-500"
          >
            Activate
          </button>
          <button
            v-if="!partner.deleted_at"
            @click="deactivate"
            class="hover:shadow focus:outline-none w-full no-underline rounded block text-sm py-2 px-4 mb-4 font-sans tracking-wide font-medium bg-white text-red-600 border border-red-500"
          >
            De-Activate
          </button>
          <router-link
            :to="{ name: 'product.add' }"
            class="hover:shadow no-underline rounded block text-sm py-2 px-4 mb-4 font-sans tracking-wide font-medium bg-white text-blue-600 border"
          >
            Add Product
          </router-link>
          <router-link
            :to="{ name: 'branch.add' }"
            class="hover:shadow no-underline rounded block text-sm py-2 px-4 font-sans tracking-wide font-medium bg-white text-blue-600 border"
          >
            Add Branch
          </router-link>
        </div>
      </div>
      <div class="flex">
        <router-link
          tag="div"
          :to="{ name: 'partner.activities', params: { id: $route.params.id } }"
          active-class="font-medium text-blue-700 border-b-2 border-blue-700"
          class="flex text-gray-900 opacity-75"
          exact
        >
          <a class="no-underline text-current p-3 w-full">
            Activities
          </a>
        </router-link>
        <router-link
          tag="div"
          :to="{ name: 'partner.branches', params: { id: $route.params.id } }"
          active-class="font-medium text-blue-700 border-b-2 border-blue-700"
          class="flex text-gray-900 opacity-75"
          exact
        >
          <a class="no-underline text-current p-3 w-full">
            Branches ({{ partner.branches_count }})
          </a>
        </router-link>
        <router-link
          tag="div"
          :to="{ name: 'partner.products', params: { id: $route.params.id } }"
          active-class="font-medium text-blue-700 border-b-2 border-blue-700"
          class="flex text-gray-900 opacity-75"
        >
          <a class="no-underline text-current p-3 w-full">
            Products ({{ partner.products_count }})
          </a>
        </router-link>
        <div @click="remove" class="flex text-gray-900 opacity-75" style="align-self: center; margin-left: 200px; color: red; cursor: pointer">
          WARNING - DELETE PARTNER
        </div>
      </div>
    </div>
    <div class="pl-6 pr-6 overflow-auto" style="height: calc(100vh - 332px)">
      <transition-page>
        <router-view :partner="partner" />
      </transition-page>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import TransitionPage from "@/components/TransitionPage.vue";

export default {
  name: "PartnerDetail",
  components: {
    TransitionPage
  },
  data() {
    return {
      partner: {
        id: "",
        category: {},
        name: "",
        email: "",
        phone: "",
        website: "",
        street: "",
        state: "",
        zip_code: "",
        city: "",
        country: {}
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$loading(true);
      axios
        .get("partner/" + to.params.id + "?include=country")
        .then(response => {
          vm.partner = response.data.data;
        })
        .finally(() => {
          vm.$loading(false);
        });
    });
  },
  async beforeRouteUpdate(to, from, next) {
    if (from.params.id === to.params.id) {
      next();
    } else {
      let response = await axios.get(
        "partner/" + to.params.id + "?include=country"
      );
      this.partner = response.data.data;
      next();
    }
  },
  mounted() {
    document.getElementById("content-area").classList.remove("overflow-auto");
  },
  destroyed() {
    document.getElementById("content-area").classList.add("overflow-auto");
  },
  methods: {
    fetch() {
      axios
        .get("partner/" + this.$route.params.id + "?include=country")
        .then(response => {
          this.partner = Object.assign({}, response.data.data);
        });
    },
    remove() {
      if (window.confirm("Are you sure you want to delete ?")) {
        axios
            .delete("partner/" + this.$route.params.id)
            .then(() => {
              this.$toasted.success("Partner detail deleted successfully");
              this.$router.push('/partners');
            })
            .catch(() => {
              this.$toasted.error("Oops, Something went wrong..");
            });
      }
    },
    deactivate() {
      if (window.confirm("Are you sure you want to de-activate ?")) {
        axios
          .post("partner/" + this.$route.params.id + "/deactivate")
          .then(() => {
            this.$toasted.success("Partner deactivated successfully");
            this.fetch();
          })
          .catch(() => {
            this.$toasted.error("Oops, Something went wrong..");
          });
      }
    },
    activate() {
      if (window.confirm("Are you sure you want to activate ?")) {
        axios
          .post("partner/" + this.$route.params.id + "/activate")
          .then(() => {
            this.$toasted.success("Partner activated successfully");
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
