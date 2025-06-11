<template>
  <div
    class="w-1/6 mb-4 overflow-x-auto border"
    style="height: calc(100vh - 116px); min-width: 280px;"
  >
    <ul class="list-reset bg-white flex flex-col  text-gray-800 ">
      <li
        v-for="event in events.data"
        :key="event.id"
        tabindex="0"
        class="flex items-center w-full  focus:outline-none border-b"
      >
        <router-link
          :to="{
            name: 'import-event.detail',
            params: { id: event.id },
            query: { page: $route.query.page }
          }"
          class="flex flex-col px-4 py-2 w-full"
          active-class="font-medium bg-gray-200"
        >
          <div class="flex flex-col">
            <span class="text-blue-800 leading-loose truncate">
              {{ event.id }}
            </span>
            <span class="text-gray-600 text-sm">{{ event.created_at }}</span>
          </div>
          <div class="mt-3 text-gray-600 font-medium capitalize">
            {{ event.user.name }}
          </div>
        </router-link>
      </li>
    </ul>
    <RamroPagination
      class="p-4 justify-between"
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
  }
};
</script>
