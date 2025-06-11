<template>
  <div class="container">
    <div class="flex items-center justify-between mt-4 mb-6 items-center">
      <h2 class="font-normal text-xl">
        Freemium Applications
      </h2>
    </div>
    <div class="flex">
      <router-link
        tag="div"
        :to="{ name: 'freemium-applications.pending' }"
        active-class="font-medium text-blue-700 border-b-2 border-blue-700"
        class="flex text-gray-900 opacity-75"
      >
        <a class="no-underline text-current py-2 px-6 w-full">
          Pending
        </a>
      </router-link>
      <router-link
        tag="div"
        :to="{ name: 'freemium-applications.approved' }"
        active-class="font-medium text-blue-700 border-b-2 border-blue-700"
        class="flex text-gray-900 opacity-75"
      >
        <a class="no-underline text-current py-2 px-6 w-full">
          Approved
        </a>
      </router-link>
      <router-link
        tag="div"
        :to="{ name: 'freemium-applications.declined' }"
        active-class="font-medium text-blue-700 border-b-2 border-blue-700"
        class="flex text-gray-900 opacity-75"
      >
        <a class="no-underline text-current py-2 px-6 w-full">
          Declined
        </a>
      </router-link>
    </div>
    <div class="mt-8">
      <transition-page>
        <router-view :applications="applications"></router-view>
      </transition-page>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import TransitionPage from "@/components/TransitionPage.vue";

export default {
  name: "FreemiumApplicationList",
  components: {
    TransitionPage
  },
  data() {
    return {
      applications: []
    };
  },
  async beforeRouteEnter(to, from, next) {
    let status = "pending";
    if (to.name === "freemium-applications.approved" || to.name === "freemium-applications.approved.detail") {
      status = "approved";
    } else if (to.name === "freemium-applications.declined" || to.name === "freemium-applications.declined.detail") {
      status = "declined";
    }
    let response = await axios.get("freemium-applications?status=" + status);
    next(vm => {
      vm.applications = Object.assign({}, response.data);
    });
  },
  async beforeRouteUpdate(to, from, next) {
    this.$loading(true);
    let status = "pending";
    if (to.name === "freemium-applications.approved" || to.name === "freemium-applications.approved.detail") {
      status = "approved";
    } else if (to.name === "freemium-applications.declined" || to.name === "freemium-applications.declined.detail") {
      status = "declined";
    }
    let response = await this.fetch(to.query.page || 1, status);
    this.applications = Object.assign({}, response.data);
    this.$loading(false);
    next();
  },
  methods: {
    fetch(page = 1, status) {
      return axios.get(
        "freemium-applications?page[number]=" + page + "&status=" + status
      );
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
