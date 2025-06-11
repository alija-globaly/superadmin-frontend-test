<template>
  <div class="w-5/6">
    <div
      class="box-border flex flex-col border bg-white"
      style="height: calc(100vh - 116px);"
    >
      <div
        class="bg-gray-200 border-b font-medium p-4 text-gray-700 tracking-wide"
      >
        <span class="capitalize">Import Request Report</span>
        ( {{ $route.params.id }} )
      </div>
      <div class="flex justify-between p-8">
        <div>
          <div>
            <span class="mr-2">Request By :</span>
            <span>{{ event.user.name }}</span>
          </div>
          <div class="mt-2">
            <span>Request At :</span>
            <span>{{ event.created_at }}</span>
          </div>
        </div>
        <div>
          <button
            @click="preview = true"
            class="hover:shadow focus:outline-none no-underline rounded block text-sm py-2 px-4 mb-4 font-sans tracking-wide font-medium bg-white text-green-600 border border-green-500"
          >
            View File
          </button>
        </div>
      </div>
      <div class="box-border">
        <Tabs v-if="event.report && event.report.sheets">
          <Tab
            v-for="(sheet, key) in event.report.sheets"
            :key="key"
            :name="key"
            :selected="key === 'partners'"
            class="overflow-x-scroll box-border"
            style="height: calc(100vh - 310px);"
          >
            <div class="box-border">
              <div class="flex p-4">
                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <div class="px-6 py-4">
                    <div class="font-bold text-md mb-2">Total Updatable</div>
                    <p class="text-gray-700 text-base">
                      {{ sheet.stats.updatable }}
                    </p>
                  </div>
                </div>
                <div class="ml-6 max-w-sm rounded overflow-hidden shadow-lg">
                  <div class="px-6 py-4">
                    <div class="font-bold text-md mb-2">Total Insertable</div>
                    <p class="text-gray-700 text-base">
                      {{ sheet.stats.insertable }}
                    </p>
                  </div>
                </div>
              </div>
              <div v-if="sheet.failures.length" class="p-6">
                <div class="font-bold mb-2">Validation Errors:</div>
                <div
                  class="block relative"
                  :key="failure[0]"
                  v-for="failure in sheet.failures"
                >
                  <p
                    class="bg-red-100 mb-2 overflow-hidden block border border-red-400 text-red-700 px-4 py-3 rounded"
                  >
                    {{ failure.errors[0] }}
                  </p>
                  <div class="mt-2 overflow-x-auto box-border">
                    <table
                      class="text-left whitespace-no-wrap border-collapse block"
                    >
                      <thead>
                        <th
                          class="py-4 px-4 bg-gray-100 font-bold uppercase text-sm text-gray-500 border-b border-gray-100"
                          v-for="(header, index) in Object.keys(failure.values)"
                          :key="index"
                        >
                          {{ header }}
                        </th>
                      </thead>
                      <tbody>
                        <tr>
                          <th
                            class="py-4 font-normal px-4 border-b border-gray-100"
                            v-for="(value, index) in Object.values(
                              failure.values
                            )"
                            :key="index"
                          >
                            {{ value }}
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div v-if="sheet.errors.length" class="p-6">
                <div class="font-bold text-md mb-2">Server Errors</div>
                <ul class="list-reset">
                  <li
                    class="bg-red-100 mb-2 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    :key="error"
                    v-for="error in sheet.errors"
                  >
                    {{ error }}
                  </li>
                </ul>
              </div>
              <!-- <div class="mt-6 p-4">
              <div class="font-bold text-md mb-2">Report in Json Format</div>
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
          <code
  class="inline-block language-json text-base"
  style="text-shadow: none"
  v-html="JSON.stringify(sheet, null, 2)"
>
          </code>
        </pre>
            </div>-->
            </div>
          </Tab>
        </Tabs>
      </div>

      <Drawer size="max-w-screen-sm" v-if="preview">
        <div
          class="bg-gray-300 border-b border-gray-400 flex justify-between px-6 py-4"
        >
          <h2 class="font-normal text-xl">Excel Sheet Viewer</h2>
          <button
            @click="preview = false"
            class="inline-flex m-0 p-0 appearance-none h-full"
          >
            <i class="material-icons fill-current">close</i>
          </button>
        </div>
        <div class="p-2">
          <iframe
            :src="
              `https://view.officeapps.live.com/op/view.aspx?src=https://agentcisapp.s3.ap-southeast-2.amazonaws.com/${event.file_path}`
            "
            width="100%"
            style="height:calc(100vh - 100px)"
            frameborder="0"
          ></iframe>
        </div>
      </Drawer>
    </div>
  </div>
</template>

<script>
import Prism from "prismjs";
import Tabs from "@/components/Tab/Tabs.vue";
import Tab from "@/components/Tab/Tab.vue";
import Payload from "./../payload";
import axios from "axios";
import Drawer from "@/layout/Drawer.vue";

export default {
  Payload,
  name: "EventDetail",
  components: {
    Drawer,
    Tabs,
    Tab
  },
  data() {
    return {
      preview: false,
      event: {
        user: {},
        report: {}
      }
    };
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
      return axios.get("import-event/" + id);
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
