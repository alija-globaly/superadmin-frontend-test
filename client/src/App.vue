<template>
  <component :is="layout">
    <router-view :layout.sync="layout" role="main" />
    <vue-progress-bar></vue-progress-bar>
  </component>
</template>
<script>
import TransitionPage from "@/components/TransitionPage.vue";
import { AbilityBuilder } from "@casl/ability";
import axios from "axios";

export default {
  name: "SuperAdminApp",
  data() {
    return {
      user: {
        role: ""
      }
    };
  },
  components: {
    TransitionPage
  },
  watch: {
    $route(to) {
      if (to.meta.requiresAuth) {
        this.fetchMyDetail();
      }
    }
  },
  computed: {
    layout() {
      return this.$route.meta.layout || "Default";
    }
  },
  methods: {
    fetchMyDetail() {
      axios
        .get("/me")
        .then(response => {
          const name = response.data.data.name;
          localStorage.setItem("userName", `${name}`);
          this.user = response.data.data;
          this.defineAbilityFor(response.data.data);
        })
        .catch();
    },
    defineAbilityFor(user) {
      const { rules, can, cannot } = AbilityBuilder.extract();
      if (user.role === "Admin") {
        can("manage", "all");
        can("read", "all");
      } else if (user.role === "Observer") {
        can("read", "all");
        can("read", "partner-database");

        cannot("manage", "partner-database");
        cannot("read", "talents");
        cannot("manage", "talents");
      } else if (user.role === "Data Specialist") {
        can("manage", "partner-database");
        can("read", "partner-database");

        cannot("manage", "talents");
        cannot("read", "talents");

        cannot("manage", "tenants");
        cannot("read", "tenants");

        cannot("manage", "events");
        cannot("read", "events");
      }

      this.$ability.update(rules);
    }
  }
};
</script>
