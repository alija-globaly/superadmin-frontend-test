<template>
  <div class="container">
    <div class="flex items-center justify-between mt-4 mb-6 items-center">
      <h2 class="font-normal text-xl">
        Tenant Invitations
      </h2>
      <div class="font-normal" v-if="$can('manage', 'tenant')">
        <router-link
          :to="{ name: 'tenant-invitation.form' }"
          class="no-underline rounded block text-white text-sm py-2 px-4 font-sans tracking-wide font-medium bg-blue-600 text-white"
        >
          Invite
        </router-link>
      </div>
    </div>
    <ul class="list-reset flex flex-col mb-4">
      <li
        v-for="invitation in invitations.data"
        :key="invitation.id"
        tabindex="0"
        class="flex items-center px-4 py-3 w-full bg-white rounded shadow  mb-4 focus:outline-none border border-transparent focus:border-blue-500"
      >
        <div
          class="w-2/5 font-normal  flex flex-col ml-3 tracking-wide truncate"
        >
          <p>{{ invitation.email }}</p>
          <p style="letter-spacing: 0.15em;" class="text-blue-700 mt-1" v-if="invitation.is_paid === 0">FREEMIUM PLAN</p>
          <p style="letter-spacing: 0.15em;" class="text-blue-700 mt-1" v-else>PAID PLAN</p>
        </div>
        <div class="w-1/5 font-normal  flex flex-col ml-3 tracking-wide">
          {{ invitation.updated_at }}
        </div>
        <div class="w-3/5 ml-3">
          <span
            class="text-sm font-medium bg-blue-100 border border-blue-200 inline-flex px-2 py-1 rounded text-blue-700"
            >{{ invitation.url }}</span
          >
        </div>
        <div class="w-1/5 font-normal ml-3">
          <div class="flex justify-end">
            <div
              class="px-2 py-1 relative rounded  border border-gray-200"
              :class="getStatusClassWrapper(invitation)"
            >
              <span
                class="status pl-4 rounded text-sm font-medium "
                :class="getStatusClass(invitation)"
              >
                {{ invitation.status }}
              </span>
            </div>
          </div>
        </div>
        <div
          class="font-normal inline-flex items-center justify-end ml-3 w-1/5"
        >
          <button
            class="focus:outline-none inline-flex"
            @click="
              $refs.invitation_list_menu.open($event, {
                invitation_id: invitation.id,
                email: invitation.email,
                status: invitation.status
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
      :current="invitations.meta.current_page"
      :total="invitations.meta.last_page"
      v-if="invitations.meta"
      @update="$router.push({ query: { page: $event.page } })"
    />
    <ContextMenu
      ref="invitation_list_menu"
      class="flex-row"
      style="margin: 0; padding: 0; width: 160px;"
    >
      <template slot-scope="child">
        <template v-if="child.data.status !== 'Accepted'">
          <div
            class="flex text-gray-900 opacity-75 cursor-pointer hover:bg-gray-300 mt-2"
            @click="reSend(child.data.email)"
          >
            <a
              class="no-underline text-current leading-none flex items-center py-2 w-full"
            >
              <i class="material-icons md-18 fill-current mr-3 ml-5">send</i>
              <div class="font-normal">Resend</div>
            </a>
          </div>
          <div
            class="flex text-red-900 font-medium opacity-75 cursor-pointer hover:bg-gray-300 mb-2"
            @click="cancel(child.data.invitation_id)"
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
        <template v-else>
          <div
            class="flex text-gray-900 opacity-75 cursor-pointer hover:bg-gray-300 p-3"
          >
            Invitation is already accepted. No actions are allowed in such
            state.
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
import RamroPagination from "@/components/Pagination/Pagination.vue";
import ContextMenu from "@/components/ContextMenu/ContextMenu.vue";

export default {
  name: "TenantInvitationList",
  components: {
    ContextMenu,
    TransitionPage,
    RamroPagination
  },
  data() {
    return {
      accessDenied: false,
      invitations: []
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$loading(true);
      vm.fetch(to.query.page || 1)
        .then(response => {
          vm.invitations = Object.assign({}, response.data);
        })
        .finally(() => {
          vm.$loading(false);
        });
    });
  },
  async beforeRouteUpdate(to, from, next) {
    this.$loading(true);
    let response = await this.fetch(to.query.page || 1);
    this.invitations = Object.assign({}, response.data);
    this.$loading(false);
    next();
  },
  methods: {
    getStatusClass(invitation) {
      if (invitation.status === "Pending") {
        return "text-orange-600";
      }
      if (invitation.status === "Expired") {
        return "text-red-600";
      }
      if (invitation.status === "Accepted") {
        return "text-green-700";
      }
    },
    getStatusClassWrapper(invitation) {
      if (invitation.status === "Pending") {
        return "bg-orange-100";
      }
      if (invitation.status === "Expired") {
        return "bg-red-100";
      }
      if (invitation.status === "Accepted") {
        return "bg-green-100";
      }
    },
    fetch(page = 1) {
      return axios.get("tenant/invitations?page[number]=" + page);
    },
    reload() {
      this.fetch(this.$route.query.page || 1).then(response => {
        this.invitations = Object.assign({}, response.data);
      });
    },
    reSend(email) {
      this.$loading(true);
      axios
        .post("/tenant/invite", { email: email })
        .then(() => {
          this.$toasted.success("Tenant invitation resent successfully");
          this.reload();
        })
        .catch(error => {
          const errors = error.response.data;
          this.$toasted.error("Oops, Something went wrong.." + errors);
        })
        .finally(() => {
          this.$loading(false);
        });
    },
    cancel(invitationId) {
      this.$loading(true);
      axios
        .delete("/tenant/invite/" + invitationId)
        .then(() => {
          this.$toasted.success("Tenant invitation deleted successfully");
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
