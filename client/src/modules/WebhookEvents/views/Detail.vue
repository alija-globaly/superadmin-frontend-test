<template>
  <div class="h-full border" style="height: calc(100vh - 116px);">
    <div
      class="bg-gray-200 border-b font-medium p-4 text-gray-700 tracking-wide "
    >
      <span class="capitalize">{{
        event.event_name.split("_").join(" ")
      }}</span>
      ( {{ $route.params.id }} )
    </div>
    <div
      class="bg-white p-4 overflow-x-auto"
      style="height: calc(100vh - 168px);"
    >
      <div>
        <span
          class="inline-block my-4 font-semibold tracking-wide text-gray-700"
          >Webhooks</span
        >
        <div class="flex justify-between bg-gray-100 py-4 px-4 rounded">
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
          <span class="text-gray-700 font-medium">http://agentcisapp.com/</span>
          <span class="text-blue-600">Show History</span>
        </div>
      </div>
      <div>
        <span
          class="inline-block mt-6 font-semibold tracking-wide text-gray-700"
          >Event Data</span
        >
        <div class="mt-6">
          <pre
            class="flex"
            style="
              padding: 0;
              background-color: #2d3748;
              font-size: .875rem;
              line-height: 1.5;
              padding: 1rem;
              border-radius: .5rem;
              border: none;
              box-shadow: none;
              color: #fff;
          "
          >
            <code class="inline-block language-json text-base" style="text-shadow: none" v-html="payload">
            </code>
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";
import Payload from "./../payload";
import axios from "axios";

export default {
  Payload,
  name: "EventDetail",
  data() {
    return {
      event: {
        event_name: ""
      }
    };
  },
  computed: {
    payload() {
      let eventData = Object.assign(
        {},
        {
          event_id: this.event.id,
          event_name: this.event.event_name,
          payload: this.event.payload,
          created_at: this.event.created_at
        }
      );
      return JSON.stringify(eventData, null, 2);
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$loading(true);
      vm.fetch(to.params.id)
        .then(response => {
          vm.event = response.data.data;
        })
        .finally(() => {
          vm.$loading(false);
        });
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.$loading(true);
    this.fetch(to.params.id)
      .then(response => {
        this.event = Object.assign({}, response.data.data);
      })
      .finally(() => {
        this.$loading(false);
      });
    next();
  },
  methods: {
    fetch(id) {
      return axios.get("event/" + id);
    },
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
  },
  mounted() {
    this.$nextTick(() => {
      Prism.highlightAll();
    });
    document.getElementById("content-area").classList.remove("overflow-auto");
  },
  updated() {
    this.$nextTick(() => {
      Prism.highlightAll();
    });
  },
  destroyed() {
    document.getElementById("content-area").classList.add("overflow-auto");
  }
};
</script>

<style>
.token.attr-name,
.token.builtin,
.token.char,
.token.inserted,
.token.selector,
.token.string {
  color: #a8ff60;
}
.token.cdata,
.token.comment,
.token.doctype,
.token.prolog {
  color: #a0aec0;
}
.token.attr-name,
.token.builtin,
.token.char,
.token.inserted,
.token.selector,
.token.string,
.token.number {
  color: #a8ff60;
}
</style>
