<template>
  <div :class="[isDetailMode ? '' : 'container']">
    <div class="flex items-center justify-between mt-4 mb-6 items-center">
      <h2 class="font-normal text-xl">
        Events
      </h2>
    </div>
    <div :class="[isDetailMode ? 'flex' : '']">
      <component :is="view" :events.sync="events" />
      <div class="w-full">
        <transition-page>
          <router-view></router-view>
        </transition-page>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TransitionPage from "@/components/TransitionPage.vue";
import EventListView from "./../components/EventListView";
import EventListTableView from "./../components/EventListTableView";

export default {
  name: "EventList",
  components: {
    TransitionPage,
    EventListView,
    EventListTableView
  },
  data() {
    return {
      isDetailMode: false,
      events: []
    };
  },
  computed: {
    view() {
      if (this.isDetailMode) {
        return "EventListView";
      }
      return "EventListTableView";
    }
  },
  watch: {
    $route: {
      handler(to) {
        if (to.name !== "events.list") {
          this.isDetailMode = true;
        } else {
          this.isDetailMode = false;
        }
      },
      deep: true,
      immediate: true
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$loading(true);
      axios
        .get("events")
        .then(response => {
          vm.events = Object.assign({}, response.data);
        })
        .finally(() => {
          vm.$loading(false);
        });
    });
  },
  async beforeRouteUpdate(to, from, next) {
    this.$loading(true);
    let response = await axios.get("events?page[number]=" + to.query.page || 1);
    this.events = Object.assign({}, response.data);
    this.$loading(false);
    next();
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
