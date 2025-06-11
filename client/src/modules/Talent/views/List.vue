<template>
  <div class="container">
    <div class="flex justify-between mt-4 mb-6 items-center">
      <h2 class="font-normal text-xl">
        Talents
        <small v-if="talents.meta">({{ talents.meta.total }})</small>
      </h2>
      <div class="font-normal" v-if="$can('manage', 'talents')">
        <router-link
          :to="{ name: 'talent.add' }"
          class="no-underline rounded block text-sm py-2 px-4 font-sans tracking-wide font-medium bg-blue-600 text-white"
        >
          Add
        </router-link>
      </div>
    </div>
    <!--<div class="flex px-4 py-2 mb-4">-->
    <!--<div class="w-2/5 font-normal text-lg flex flex-col ml-3">Identity</div>-->
    <!--<div class="w-1/5 font-normal text-lg flex flex-col ml-3">Role</div>-->
    <!--<div class="w-1/5 font-normal text-lg flex flex-col text-right">Status</div>-->
    <!--<div class="w-1/5 font-normal text-lg flex flex-col text-right ml-3">-->
    <!--Actions-->
    <!--</div>-->
    <!--</div>-->
    <ul class="list-reset flex flex-col mb-4">
      <li
        v-for="talent in talents.data"
        :key="talent.id"
        tabindex="0"
        style=":focus-within: red"
        class="flex items-center px-4 py-2 w-full bg-white rounded shadow h-20 mb-4 focus:outline-none border border-transparent focus:border-blue-500"
      >
        <div class="w-2/5 font-normal text-lg flex flex-col ml-3 tracking-wide">
          {{ talent.name }}
          <span class="text-sm">{{ talent.email }}</span>
        </div>
        <div class="w-1/5 ml-3">
          <span
            class="text-sm font-medium bg-blue-100 border border-blue-200 inline-flex px-2 py-1 rounded text-blue-700"
            >{{ talent.role || "-" }}</span
          >
        </div>
        <div class="w-1/5 font-normal ml-3">
          <div class="flex justify-end">
            <div
              class="px-2 py-1 relative rounded  border border-gray-200"
              :class="[talent.status ? 'bg-green-100' : 'bg-red-100']"
            >
              <span
                class="status pl-4 rounded text-sm font-medium "
                :class="[talent.status ? 'text-green-700' : 'text-red-700']"
              >
                {{ talent.status ? "Active" : "In-Active" }}
              </span>
            </div>
          </div>
        </div>
        <div class="w-1/5 font-normal ml-3 text-right">
          <button
            class="focus:outline-none"
            @click="
              $refs.talent_list_menu.open($event, {
                talent_id: talent.id,
                status: talent.status
              })
            "
          >
            <i class="material-icons text-gray-700">more_vert</i>
          </button>
        </div>
      </li>
    </ul>
    <RamroPagination
      class="mb-6 mt-6"
      :current="talents.meta.current_page"
      :total="talents.meta.last_page"
      v-if="talents.meta"
      @update="$router.push({ query: { page: $event.page } })"
    />
    <ContextMenu
      ref="talent_list_menu"
      class="flex-row"
      style="margin: 0; padding: 0; width: 160px;"
    >
      <template slot-scope="child">
        <template v-if="$can('manage', 'talents')">
          <div
            class="flex text-gray-900 opacity-75 cursor-pointer hover:bg-gray-300 mt-2"
            @click="edit(child.data.talent_id)"
          >
            <a
              class="no-underline text-current leading-none flex items-center py-2 w-full"
            >
              <i class="material-icons md-18 fill-current mr-3 ml-5">edit</i>
              <div class="font-normal">Edit</div>
            </a>
          </div>
          <div
            class="flex text-gray-900 opacity-75 cursor-pointer hover:bg-gray-300 mb-2"
            v-if="child.data.status"
            @click="toggleStatus(child.data.talent_id)"
          >
            <a
              class="no-underline text-current leading-none flex items-center py-2 w-full"
            >
              <i class="material-icons md-18 fill-current mr-3 ml-5"
                >visibility_off</i
              >
              <div>Make In-Active</div>
            </a>
          </div>
          <div
            class="flex text-gray-900 opacity-75 cursor-pointer hover:bg-gray-300 mb-2"
            v-if="!child.data.status"
            @click="toggleStatus(child.data.talent_id)"
          >
            <a
              class="no-underline text-current leading-none flex items-center py-2 w-full"
            >
              <i class="material-icons md-18 fill-current mr-3 ml-5"
                >visibility</i
              >
              <div>Make Active</div>
            </a>
          </div>
        </template>
        <template v-else>
          <div
            class="flex text-gray-900 opacity-75 cursor-pointer hover:bg-gray-300 p-3"
          >
            Sorry you don't have permission to perform any actions.
          </div>
        </template>
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
import RamroPagination from "@/components/Pagination/Pagination.vue";

export default {
  name: "TalentsList",
  components: {
    ContextMenu,
    TransitionPage,
    RamroPagination
  },
  data() {
    return {
      accessDenied: false,
      talents: [],
      roles: ["Observer", "Data Specialist", "Admin"],
      OpenIndicator: {
        render: createElement =>
          createElement(
            "i",
            {
              class: "material-icons text-gray-600"
            },
            "keyboard_arrow_down"
          )
      },
      Deselect: {
        render: createElement =>
          createElement(
            "i",
            {
              class: "md-18 material-icons text-gray-600"
            },
            "clear"
          )
      }
    };
  },
  async beforeRouteEnter(to, from, next) {
    let response = await axios.get("talents");
    next(vm => {
      vm.talents = Object.assign({}, response.data);
    });
  },
  async beforeRouteUpdate(to, from, next) {
    if (
      to.name !== "talent.list" ||
      to.query.page == this.talents.meta.current_page
    ) {
      next();
      return;
    }
    this.$loading(true);
    let response = await this.fetch(to.query.page || 1);
    this.talents = Object.assign({}, response.data);
    this.$loading(false);
    next();
  },

  methods: {
    fetch(page = 1) {
      return axios.get("talents?page[number]=" + page);
    },
    toggleStatus(talentId) {
      this.$loading(true);
      axios
        .post("/talent/" + talentId + "/toggle-status")
        .then(() => {
          this.$toasted.success("Talent status updated successfully");
          this.fetch(this.$route.query.page).then(response => {
            this.talents = Object.assign({}, response.data);
          });
        })
        .catch(() => {
          this.$toasted.error("Oops, Something went wrong..");
        })
        .finally(() => {
          this.$loading(false);
        });
    },
    edit(talentId) {
      this.$router.push({ name: "talent.edit", params: { id: talentId } });
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
