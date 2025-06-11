<template>
  <div class="flex h-screen" :class="{ mini: minSideNav }">
    <div class="flex-none sidebar relative z-10">
      <div
        class="h-16 flex justify-center p-2"
        style="background-color:#2c2e3e"
      >
        <img
          v-show="!minSideNav"
          class="h-10"
          aria-label="Agentcis Logo"
          src="./../assets/logo.png"
          alt="Agentcis"
        />
        <span v-show="minSideNav" class="text-white text-3xl font-normal"
          >AG</span
        >
      </div>
      <SideNav class="pt-2 shadow " :minimize="minSideNav" role="navigation" />
    </div>
    <div class="flex-1 overflow-hidden w-full box-border ">
      <div
        class="h-16 bg-white shadow flex items-center justify-between p-3 z-10 relative"
      >
        <button
          aria-label="Toggle Menu"
          class="align-middle inline-flex focus:outline-none max-w-xs	ml-2 text-grey-darkest"
          @click="magic"
        >
          <i class="material-icons h-6 w-6 fill-current">menu</i>
        </button>
        <div class="text-white font-normal w-full mx-12 lg:w-3/5">
          <GlobalSearch
            class="relative z-10 w-full inline-block"
          ></GlobalSearch>
        </div>
        <button
          @click="logout"
          title="Logout"
          class="align-middle inline-flex focus:outline-none max-w-xs	mr-2 px-3 py-1 rounded text-blue-800"
        >
          <i class="material-icons h-6 w-6 fill-current">exit_to_app</i>
        </button>
      </div>
      <div
        class="pl-6 pr-6 w-full box-border overflow-auto"
        id="content-area"
        style="height:calc(100vh - 56px)"
      >
        <slot role="main" />
      </div>
    </div>
  </div>
</template>
<script>
import SideNav from "@/components/SideNav.vue";
import GlobalSearch from "@/components/GlobalSearch.vue";
import Auth from "@/common/auth";

export default {
  name: "AdminLayout",
  components: {
    SideNav,
    GlobalSearch
  },
  data() {
    return {
      minSideNav: false,
      isMobile: isMobile()
    };
  },
  created() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      const mobile = isMobile();
      if (mobile && this.minSideNav) return;
      if (mobile && this.minSideNav && this.isMobile) return;
      this.isMobile = mobile;
      this.minSideNav = mobile;
    },
    magic() {
      this.$nextTick(() => {
        this.minSideNav = !this.minSideNav;
      });
    },
    logout() {
      Auth.logout()
        .then(() => {
          this.$router.push("/");
        })
        .catch();
    }
  }
};
function isMobile() {
  return window.innerWidth < 960;
}
</script>
<style>
.sidebar {
  min-width: 240px;
  width: 240px;
  transition: all 0.3s ease;
}
.mini > .sidebar {
  width: 4.428571428571429rem;
  min-width: 4.428571428571429rem;
}
</style>
