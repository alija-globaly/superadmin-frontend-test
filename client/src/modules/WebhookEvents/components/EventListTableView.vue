<template>
  <div>
    <ul class="list-reset flex flex-col mb-4 text-gray-800">
      <li
        v-for="event in events.data"
        :key="event.id"
        tabindex="0"
        class="flex items-center px-4 py-2 w-full bg-white rounded h-20 shadow mb-4 focus:outline-none border border-transparent focus:border-blue-500"
      >
        <div class="w-1/5 font-normal flex flex-col ml-3">
          {{ event.created_at }}
        </div>
        <div class="w-2/5 ml-3">
          <router-link
            :to="{
              name: 'event.detail',
              params: { id: event.id },
              query: { page: $route.query.page }
            }"
            class="inline-flex px-2 py-1 rounded"
          >
            {{ event.id }}
          </router-link>
        </div>
        <div class="w-2/5 ml-3">
          <span
            class="inline-flex px-2 py-1 rounded border bg-blue-100 text-blue-600 border border-blue-300 capitalize"
          >
            {{ event.event_name.split("_").join(" ") }}</span
          >
        </div>
        <div class="w-1/5 font-normal ml-3">
          <div class="flex justify-end">
            <div
              class="px-2 py-1 relative rounded"
              :class="getStatusClassWrapper(event.status)"
            >
              <span
                class="status pl-4 rounded text-sm font-medium"
                :class="getStatusClass(event.status)"
              >
                {{ getStatusLabel(event.status) }}
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <RamroPagination
      class="mb-6 mt-6"
      :current="events.meta.current_page"
      :total="events.meta.last_page"
      v-if="events.meta && events.meta.last_page > 1"
      @update="$router.push({ query: { page: $event.page } })"
    />
  </div>
</template>

<script>
import RamroPagination from "@/components/Pagination/Pagination.vue";

export default {
  name: "EventListView",
  props: {
    events: {}
  },
  components: {
    RamroPagination
  },
  methods: {
    getStatusLabel(status) {
      if (status === 1) {
        return "Processing";
      }
      if (status === 2) {
        return "Success";
      }
      if (status === 0) {
        return "Failed";
      }

      return "NA";
    },
    getStatusClass(status) {
      if (status === 1) {
        return "text-orange-600";
      }
      if (status === 2) {
        return "text-green-600";
      }
      if (status === 0) {
        return "text-red-600";
      }

      return "text-red-600";
    },
    getStatusClassWrapper(status) {
      if (status === 1) {
        return "bg-orange-100";
      }
      if (status === 2) {
        return "bg-green-100";
      }
      if (status === 0) {
        return "bg-green-100";
      }
      return "bg-red-100";
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
