<template>
  <div class="nav h-full text-black">
    <router-link
      tag="div"
      to="/dashboard"
      data-balloon="Dashboard"
      active-class="text-yellow-600 bg-gray-900 opacity-100"
      data-balloon-pos="right"
      class="hover:bg-gray-900 flex text-gray-100 opacity-75"
    >
      <a class="no-underline text-current flex items-center py-3 w-full">
        <i class="material-icons h-6 w-6 fill-current mr-5  ml-5">dashboard</i>
        <div v-show="!minimize">Dashboard</div>
      </a>
    </router-link>
    <router-link
      tag="div"
      to="/tenants"
      data-balloon="Tenants"
      active-class="text-yellow-600 bg-gray-900 opacity-100"
      data-balloon-pos="right"
      class="hover:bg-gray-900 flex text-gray-100 opacity-75"
    >
      <a class="no-underline   text-current flex items-center py-3 w-full">
        <i class="material-icons h-6 w-6 fill-current mr-5  ml-5">people</i>
        <div v-show="!minimize">Tenants</div>
      </a>
    </router-link>
    <router-link
      tag="div"
      to="/invitations"
      data-balloon="Tenant Invitations"
      active-class="text-yellow-600 bg-gray-900 opacity-100"
      data-balloon-pos="right"
      class="hover:bg-gray-900 flex text-gray-100 opacity-75"
    >
      <a class="no-underline  text-current flex items-center py-3 w-full">
        <i class="material-icons h-6 w-6 fill-current mr-5  ml-5">email</i>
        <div v-show="!minimize" class="overflow-hidden whitespace-no-wrap">
          Invitations
        </div>
      </a>
    </router-link>
    <router-link
      tag="div"
      to="/blacklist-domains"
      data-balloon="Blacklist Domains"
      active-class="text-yellow-600 bg-gray-900 opacity-100"
      data-balloon-pos="right"
      class="hover:bg-gray-900 flex text-gray-100 opacity-75"
    >
      <a class="no-underline  text-current flex items-center py-3 w-full">
        <i class="material-icons h-6 w-6 fill-current mr-5  ml-5">list_alt</i>
        <div v-show="!minimize" class="overflow-hidden whitespace-no-wrap">
          Blacklist Domains
        </div>
      </a>
    </router-link>
    <router-link
      tag="div"
      to="/partners"
      data-balloon="Partner Database"
      active-class="text-yellow-600 bg-gray-900 opacity-100"
      data-balloon-pos="right"
      class="hover:bg-gray-900 flex text-gray-100 opacity-75"
    >
      <a class="no-underline  text-current flex items-center py-3 w-full">
        <i class="material-icons h-6 w-6 fill-current mr-5  ml-5">data_usage</i>
        <div v-show="!minimize" class="overflow-hidden whitespace-no-wrap">
          Partner Database
        </div>
      </a>
    </router-link>
    <router-link
      tag="div"
      to="/talents"
      data-balloon="Talents"
      active-class="text-yellow-600 bg-gray-900 opacity-100"
      data-balloon-pos="right"
      class="hover:bg-gray-900 flex text-gray-100 opacity-75"
    >
      <a class="no-underline  text-current flex items-center py-3 w-full">
        <i class="material-icons h-6 w-6 fill-current mr-5  ml-5">child_care</i>
        <div v-show="!minimize">Talents</div>
      </a>
    </router-link>
    <!--<router-link-->
    <!--tag="div"-->
    <!--to="/horizon"-->
    <!--data-balloon="Horizon"-->
    <!--active-class="text-yellow-600 bg-gray-900 opacity-100"-->
    <!--data-balloon-pos="right"-->
    <!--class="hover:bg-gray-900 flex text-gray-100 opacity-75"-->
    <!--&gt;-->
    <!--<a class="no-underline  text-current flex items-center py-3 w-full">-->
    <!--<i class="material-icons h-6 w-6 fill-current mr-5  ml-5">queue</i>-->
    <!--<div v-show="!minimize">Horizon</div>-->
    <!--</a>-->
    <!--</router-link>-->
    <router-link
      tag="div"
      to="/events"
      data-balloon="Events"
      active-class="text-yellow-600 bg-gray-900 opacity-100"
      data-balloon-pos="right"
      class="hover:bg-gray-900 flex text-gray-100 opacity-75"
    >
      <a class="no-underline  text-current flex items-center py-3 w-full">
        <i class="material-icons h-6 w-6 fill-current mr-5  ml-5">event</i>
        <div v-show="!minimize">Events</div>
      </a>
    </router-link>
    <router-link
      tag="div"
      to="/import-logs"
      data-balloon="Events"
      active-class="text-yellow-600 bg-gray-900 opacity-100"
      data-balloon-pos="right"
      class="hover:bg-gray-900 flex text-gray-100 opacity-75"
    >
      <a class="no-underline  text-current flex items-center py-3 w-full">
        <i class="material-icons h-6 w-6 fill-current mr-5  ml-5">report</i>
        <div v-show="!minimize">Import Events</div>
      </a>
    </router-link>
    <router-link
      tag="div"
      to="/freemium-applications"
      data-balloon="Events"
      active-class="text-yellow-600 bg-gray-900 opacity-100"
      data-balloon-pos="right"
      class="hover:bg-gray-900 flex text-gray-100 opacity-75"
    >
      <a class="no-underline  text-current flex items-center py-3 w-full">
        <i class="material-icons h-6 w-6 fill-current mr-5  ml-5">grading</i>
        <div v-show="!minimize">Freemium Applications</div>
      </a>
    </router-link>
    <router-link
      tag="div"
      to="/sms-requests"
      data-balloon="Events"
      active-class="text-yellow-600 bg-gray-900 opacity-100"
      data-balloon-pos="right"
      class="hover:bg-gray-900 flex text-gray-100 opacity-75"
    >
      <a class="no-underline  text-current flex items-center py-3 w-full">
        <i class="material-icons h-6 w-6 fill-current mr-5  ml-5">sms</i>
        <div v-show="!minimize">SMS Module (Nepal)</div>
      </a>
    </router-link>
    <!-- <router-link-->
    <!--tag="div"-->
    <!--to="/settings"-->
    <!--data-balloon="Setting"-->
    <!--active-class="text-yellow-600 bg-gray-900 opacity-100"-->
    <!--data-balloon-pos="right"-->
    <!--class="hover:bg-gray-900 flex text-gray-100 opacity-75"-->
    <!--&gt;-->
    <!--<a class="no-underline  text-current flex items-center py-3 w-full">-->
    <!--<i class="material-icons h-6 w-6 fill-current mr-5  ml-5">settings</i>-->
    <!--<div v-show="!minimize">Setting</div>-->
    <!--</a>-->
    <!--</router-link> -->
  </div>
</template>
<script>
import "balloon-css";
export default {
  name: "SideNav",
  props: {
    minimize: {
      required: false,
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.nav {
  background-color: #2c2e3e;
}
</style>
