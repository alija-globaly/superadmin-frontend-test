<template>
  <Drawer size="max-w-2xl">
    <div
      class="bg-gray-300 border-b border-gray-400 flex justify-between px-6 py-4"
    >
      <h2 class="font-normal text-xl">
        {{ model.business_name }}
      </h2>
      <button @click="cancel" class="m-0 p-0 appearance-none h-full">
        <i class="material-icons fill-current">close</i>
      </button>
    </div>
    <div class="px-6 py-4">
      <fieldset class="border rounded px-6 py-4 mt-4">
        <legend class="bg-gray-600 px-3 py-2 text-white rounded">
          Details
        </legend>
        <div class="w-full mb-5">
          <div class="flex items-center justify-between">
            <div class="flex flex-col overflow-hidden">
              <span
                :title="model.business_name"
                class="truncate text-gray-900 text-xl"
              >
                {{ model.business_name }}
              </span>
              <span class="truncate text-gray-900">
                {{ model.business_email }}
              </span>
            </div>
            <div
              class="border ml-2 mt-4 md:mt-0 flex flex-shrink-0 text-sm border-gray-200 rounded"
            >
              <div
                class="px-2 py-1 relative rounded"
                :class="getStatusClassWrapper(model.status)"
              >
                <span
                  class="status pl-4 rounded text-sm font-medium capitalize"
                  :class="getStatusClass(model.status)"
                >
                  {{ model.status }}
                </span>
              </div>
            </div>
          </div>
          <div class="flex mt-8">
            <div>
              <i class="material-icons md-24 fill-current mr-4 text-gray-700"
                >location_on</i
              >
            </div>
            <div class="flex flex-col overflow-hidden">
              <span class="truncate text-gray-700 text-lg">
                Business Address
              </span>
              <span class="truncate mt-2">
                {{ model.business_email }}
              </span>
            </div>
          </div>
          <div class="flex mt-8">
            <div>
              <i class="material-icons md-24 fill-current mr-4 text-gray-700"
                >person</i
              >
            </div>
            <div class="flex flex-col overflow-hidden">
              <span class="truncate text-gray-700 text-lg">
                Contact Details
              </span>
              <span class="truncate mt-2">
                {{ model.contact_person.contact_name }}
              </span>
              <span class="truncate mt-2">
                {{ model.contact_person.contact_number }}
              </span>
            </div>
          </div>
          <div class="flex mt-8">
            <div>
              <i class="material-icons md-24 fill-current mr-4 text-gray-700"
                >business_center</i
              >
            </div>
            <div class="flex flex-col overflow-hidden">
              <span class="truncate text-gray-700 text-lg">
                Business Reg. No
              </span>
              <span class="truncate mt-2">
                {{ model.business_registration_no }}
              </span>
            </div>
          </div>
          <div class="flex mt-8">
            <div>
              <i class="material-icons md-24 fill-current mr-4 text-gray-700"
                >calendar_today</i
              >
            </div>
            <div class="flex flex-col overflow-hidden">
              <span class="truncate text-gray-700 text-lg">
                Applied On
              </span>
              <span class="truncate mt-2">
                {{ model.applied_on || "N/A" }}
              </span>
            </div>
          </div>
          <div class="flex mt-8">
            <div>
              <i class="material-icons md-24 fill-current mr-4 text-gray-700"
                >receipt</i
              >
            </div>
            <div class="flex flex-col overflow-hidden">
              <span class="truncate text-gray-700 text-lg">
                Referral Code
              </span>
              <span class="truncate mt-2">
                {{ model.referral_code || "N/A" }}
              </span>
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset class="border rounded px-6 py-4 mt-4">
        <legend class="bg-gray-600 px-3 py-2 text-white rounded">
          Document
        </legend>
        <div class="w-full mb-5" v-if="!model.document_link">
          <span>N/A</span>
        </div>
        <div class="w-full mb-5" v-else>
          <a :href="model.document_link" target="_blank">{{ model.document_link }}</a>
        </div>
      </fieldset>

      <div class="mt-6">
        <div class="text-xl">
          Invitation Link
        </div>
        <div class="mt-4">
          <span
            class="bg-blue-100 border border-blue-200 inline-flex px-8 py-4 text-lg rounded-lg text-blue-700"
            >{{ getInvitationUrl }}</span
          >
        </div>
      </div>
    </div>
    <div class="mt-10 flex px-6 py-4 fixed bottom-0">
      <RamroButton
        variant="success"
        class="mr-3"
        v-if="model.status === 'pending'"
        @click="changeStatus('approve')"
        >Approve
      </RamroButton>
      <RamroButton
        variant="danger"
        type="button"
        class="content-end"
        v-if="model.status === 'pending'"
        @click="changeStatus('rejected')"
      >
        Decline
      </RamroButton>
      <RamroButton
        @click="reSend(model.business_email)"
        variant="success"
        class="mr-3"
        v-if="
          model.status === 'approved' && model.registration_token_id === null
        "
        >Resend Invitation</RamroButton>
    </div>
  </Drawer>
</template>
<script>
import RamroButton from "@/components/Button/Button.vue";
import axios from "axios";
import Drawer from "@/layout/Drawer.vue";
import Countries from "@/common/countries";

export default {
  name: "FreemiumApplicationDetail",
  Countries,
  components: {
    RamroButton,
    Drawer
  },
  data() {
    return {
      model: {
        id: this.$route.params.id,
        business_name: "",
        business_email: "",
        business_registration_no: "",
        applied_on: "",
        referral_code: "",
        invitation: {
          url: ""
        },
        contact_person: {
          name: "",
          phone: ""
        }
      }
    };
  },
  computed: {
    getInvitationUrl() {
      if (this.model.invitation) {
        return `${process.env.VUE_APP_WEBSITE_URL}/sign-up?token=${this.model.invitation.token}&email=${this.model.business_email}`;
      }
      return "";
    }
  },
  async beforeRouteEnter(to, from, next) {
    let response = await axios.get("freemium-applications/" + to.params.id);
    next(vm => {
      vm.model = response.data.data;
    });
  },
  async beforeRouteUpdate(to, from, next) {
    let response = await axios.get("freemium-applications/" + to.params.id);
    this.model = response.data.data;
    next();
  },

  methods: {
    getStatusClass(status) {
      if (status === "pending") {
        return "text-orange-600";
      }
      if (status === "declined") {
        return "text-red-600";
      }
      if (status === "approved") {
        return "text-green-600";
      }
      return "text-orange-600";
    },
    getStatusClassWrapper(status) {
      if (status === "pending") {
        return "bg-orange-100";
      }
      if (status === "approved") {
        return "bg-green-100";
      }
      if (status === "declined") {
        return "bg-red -100";
      }
      return "bg-orange-100";
    },
    changeStatus(status) {
      axios
        .post("/freemium-application/" + this.model.id + `/${status}`)
        .then(() => {
          this.$toasted.success(`Application has been ${status} successfully}`);
        })
        .catch(() => {
          this.$toasted.error("Oops, Something went wrong..");
        });
    },
    cancel() {
      this.$router.back();
    },
    reSend(email) {
      this.$loading(true);
      axios
        .post("/tenant/invite", { email: email })
        .then(() => {
          this.$toasted.success("Invitation resent successfully");
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
