<template>
  <div class="m-0 xl:m-auto max-w-4xl">
    <div class="flex items-center justify-between mt-4 mb-6 items-center">
      <h2 class="font-normal text-xl">
        Blacklist Domains
      </h2>
      <div class="font-normal" v-if="$can('manage', 'tenant')">
        <router-link
          :to="{ name: 'blacklist-domains.form' }"
          class="no-underline rounded block text-white text-sm py-2 px-4 font-sans tracking-wide font-medium bg-blue-600 text-white"
        >
          Add new Domain
        </router-link>
      </div>
    </div>
    <ul class="list-reset flex flex-col mb-4">
      <li
        v-for="(domain, $index) in domains.data"
        :key="$index"
        tabindex="0"
        class="flex items-center px-4 py-3 w-full bg-white rounded shadow  mb-2 focus:outline-none border border-transparent focus:border-blue-500"
      >
        <div
          class="flex-1 font-normal  flex flex-col ml-3 tracking-wide truncate"
        >
          {{ domain }}
        </div>
        <div
          class="font-normal inline-flex items-center justify-end ml-3 w-1/5"
        >
          <button
            class="focus:outline-none inline-flex"
            @click="
              $refs.invitation_list_menu.open($event, {
                domain: domain
              })
            "
          >
            <i class="material-icons text-gray-700">more_vert</i>
          </button>
        </div>
      </li>
    </ul>
    <ContextMenu
      ref="invitation_list_menu"
      class="flex-row"
      style="margin: 0; padding: 0; width: 160px;"
    >
      <template slot-scope="child">
        <div
          class="flex text-gray-900 opacity-75 cursor-pointer hover:bg-gray-300 mt-2"
          @click="edit(child.data.domain)"
        >
          <a
            class="no-underline text-current leading-none flex items-center py-2 w-full"
          >
            <i class="material-icons md-18 fill-current mr-3 ml-5">edit</i>
            <div class="font-normal">Edit</div>
          </a>
        </div>
        <div
          class="flex text-red-900 font-medium opacity-75 cursor-pointer hover:bg-gray-300 mb-2"
          @click="remove(child.data.domain)"
        >
          <a
            class="no-underline text-current leading-none flex items-center py-2 w-full"
          >
            <i class="material-icons md-18 fill-current mr-3 ml-5"
              >delete_forever</i
            >
            <div>Delete</div>
          </a>
        </div>
      </template>
    </ContextMenu>
    <transition-page>
      <router-view></router-view>
    </transition-page>
  </div>
</template>
<script>
import axios from "axios";
import TransitionPage from "@/components/TransitionPage.vue";
import ContextMenu from "@/components/ContextMenu/ContextMenu.vue";

export default {
  name: "BlacklistDomainList",
  components: {
    ContextMenu,
    TransitionPage
  },
  data() {
    return {
      accessDenied: false,
      domains: []
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$loading(true);
      vm.fetch(to.query.page || 1)
        .then(response => {
          vm.domains = Object.assign({}, response.data);
        })
        .finally(() => {
          vm.$loading(false);
        });
    });
  },
  async beforeRouteUpdate(to, from, next) {
    if (to.name === "blacklist-domains.list") {
      this.$loading(true);
      let response = await this.fetch(to.query.page || 1);
      this.domains = Object.assign({}, response.data);
      this.$loading(false);
    }
    next();
  },
  methods: {
    fetch(page = 1) {
      return axios.get("blacklist-domains?page[number]=" + page);
    },
    reload() {
      this.fetch(this.$route.query.page || 1).then(response => {
        this.domains = Object.assign({}, response.data);
      });
    },
    edit(domain) {
      this.$router.push({
        name: "blacklist-domains.edit",
        params: { domain: domain }
      });
    },
    remove(domain) {
      this.$loading(true);
      axios
        .delete("/blacklist-domains/" + domain)
        .then(() => {
          this.$toasted.success(`Domain ${domain} deleted successfully`);
          this.reload();
        })
        .catch(error => {
          const errors = error.response.data;
          this.$toasted.error("Oops, Something went wrong.." + errors);
        })
        .finally(() => {
          this.$loading(false);
        });
    }
  }
};
</script>
