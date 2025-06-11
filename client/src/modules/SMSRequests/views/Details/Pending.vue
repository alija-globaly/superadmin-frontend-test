<template>
  <div>
    <template v-if="!requestRejected && !requestAccepted && details">
      <div
        class="flex justify-between px-6 py-4 bg-gray-300 border-b border-gray-400"
      >
        <h2 class="text-xl font-normal">
          View Phone Request Details
        </h2>
        <button @click="cancel" class="h-full p-0 m-0 appearance-none">
          <i class="fill-current material-icons">close</i>
        </button>
      </div>
      <div class="px-6 py-4">
        <InformationDetail :details="details"></InformationDetail>
        <div class="flex mt-8 mb-2">
          <RamroButton
            variant="success"
            class="mr-3"
            @click="changeStatus('save')"
            >Approve
          </RamroButton>
          <RamroButton
            variant="danger"
            type="button"
            class="content-end"
            @click="requestRejected = true"
          >
            Reject
          </RamroButton>
        </div>
      </div>
    </template>
    <template v-if="requestAccepted">
      <div
        class="flex justify-between px-6 py-4 bg-gray-300 border-b border-gray-400"
      >
        <h2 class="text-xl font-normal">
          View Phone Request
        </h2>
        <button @click="cancel" class="h-full p-0 m-0 appearance-none">
          <i class="fill-current material-icons">close</i>
        </button>
      </div>
      <div
        class="px-6 py-4 flex flex-col justify-between reject-reason-container"
      >
        <div>
          <fieldset class="px-6 py-4 border rounded mb-10 mt-4">
            <legend class="px-3 py-2 text-white bg-gray-600 rounded">
              Credit Request
            </legend>
            <div class="w-full mb-2">
              <div class="flex mt-4">
                <div>
                  <i
                    class="mr-4 text-gray-700 fill-current material-icons md-24"
                    >account_balance_wallet</i
                  >
                </div>
                <div class="flex flex-col overflow-hidden w-full">
                  <span class="text-lg text-gray-700 truncate mb-2">
                    Credit
                  </span>
                  <input
                    aria-label=""
                    class="outline-none transition border border-transparent focus:bg-white focus:border-gray-300 text-gray-700 rounded bg-gray-100 py-2 px-4 block appearance-none leading-normal border-gray-300 w-full"
                    type="text"
                    autocomplete="off"
                    ref="input"
                    :value="details.credit"
                    disabled
                  />
                </div>
              </div>
              <div class="flex mt-8">
                <div>
                  <i
                    class="mr-4 text-gray-700 fill-current material-icons md-24"
                    >attach_money</i
                  >
                </div>
                <div class="flex flex-col overflow-hidden w-full">
                  <span class="text-lg text-gray-700 truncate mb-2">
                    Credit Amount (NPR)
                  </span>
                  <input
                    aria-label=""
                    class="outline-none transition border border-transparent focus:bg-white focus:border-gray-300 text-gray-700 rounded  py-2 px-4 block appearance-none leading-normal border-gray-400 w-full bg-gray-300"
                    type="text"
                    autocomplete="off"
                    ref="input"
                    :value="details.credit_amount"
                    disabled
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset class="px-6 py-4 border rounded mb-10">
            <legend class="px-3 py-2 text-white bg-gray-600 rounded">
              API
            </legend>
            <div class="w-full mb-2">
              <div class="flex mt-4">
                <div>
                  <i
                    class="mr-4 text-gray-700 fill-current material-icons md-24"
                    >vpn_key
                  </i>
                </div>
                <div class="flex flex-col overflow-hidden w-full">
                  <span class="text-lg text-gray-700 truncate mb-2">
                    API Key
                  </span>
                  <input
                    aria-label=""
                    class="outline-none transition border border-transparent focus:bg-white focus:border-gray-300 text-gray-700 rounded bg-gray-100 py-2 px-4 block appearance-none leading-normal border-gray-300 w-full"
                    type="text"
                    autocomplete="off"
                    ref="input"
                    v-model="API_Key"
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset class="px-6 py-4 border rounded mb-10">
            <legend class="px-3 py-2 text-white bg-gray-600 rounded">
              Code
            </legend>
            <div class="w-full mb-2">
              <div class="flex mt-4">
                <div>
                  <i
                    class="mr-4 text-gray-700 fill-current material-icons md-24"
                    >phonelink
                  </i>
                </div>
                <div class="flex flex-col overflow-hidden w-full">
                  <span class="text-lg text-gray-700 truncate mb-2">
                    Code
                  </span>
                  <input
                    aria-label=""
                    class="outline-none transition border border-transparent focus:bg-white focus:border-gray-300 text-gray-700 rounded bg-gray-100 py-2 px-4 block appearance-none leading-normal border-gray-300 w-full"
                    type="text"
                    autocomplete="off"
                    ref="input"
                    v-model="code"
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset class="px-6 py-4 border rounded mb-10">
            <legend class="px-3 py-2 text-white bg-gray-600 rounded">
              Attachment
            </legend>
            <div class="w-full mb-2">
              <div class="flex mt-4">
                <div>
                  <i
                    class="mr-4 text-gray-700 fill-current material-icons md-24"
                    >upload
                  </i>
                </div>
                <div class="flex flex-col overflow-hidden w-full">
                  <span class="text-lg text-gray-700 truncate mb-2">
                    Upload Invoice
                  </span>
                  <div
                    class="file-uploader border border-dashed border-gray-400 relative rounded p-0 mb-4"
                  >
                    <input
                      type="file"
                      multiple
                      class="cursor-pointer relative block opacity-0 w-full h-full z-50 py-1 px-4"
                      ref="uploadInput"
                      accept=".jpg,.jpeg,.png,.pdf"
                      @change="handleChange($event.target.files)"
                    />
                    <div class="absolute click-upload cursor-pointer">
                      <span class="p-4 text-gray-700">
                        Click to upload
                      </span>
                    </div>
                  </div>
                  <div v-if="files">
                    <div
                      class="outline-one border border-transparent text-gray-700 rounded bg-gray-100 py-2 px-4 flex appearance-none leading-normal border-gray-300 w-full mb-4 items-center justify-between"
                      v-for="(file, index) in files"
                      :key="index"
                    >
                      <span>{{ file.name }}</span>
                      <i
                        class=" text-gray-700 fill-current material-icons md-18 cursor-pointer"
                        @click="removeFile(index)"
                        >close
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </div>

        <div class="flex mt-8 mb-2 pb-6">
          <RamroButton
            variant="primary"
            class="mr-3"
            @click="changeStatus('approved')"
            >Save</RamroButton
          >
          <RamroButton type="button" class="content-end" @click="cancel">
            Cancel
          </RamroButton>
        </div>
      </div>
    </template>
    <template v-if="requestRejected">
      <div
        class="flex justify-between px-6 py-4 bg-gray-300 border-b border-gray-400"
      >
        <h2 class="text-xl font-normal">
          Rejection Reason
        </h2>
        <button @click="cancel" class="h-full p-0 m-0 appearance-none">
          <i class="fill-current material-icons">close</i>
        </button>
      </div>
      <div
        class="px-6 py-4 flex flex-col justify-between reject-reason-container"
      >
        <fieldset class="px-6 py-4 mt-4 border rounded">
          <legend class="px-3 py-2 text-white bg-gray-600 rounded">
            Reason
          </legend>
          <div class="w-full mb-2">
            <div class="flex mt-4">
              <div>
                <i class="mr-4 text-gray-700 fill-current material-icons md-24"
                  >account_balance_wallet</i
                >
              </div>
              <div class="flex flex-col overflow-hidden w-full">
                <span class="text-lg text-gray-700 truncate">
                  Request Rejection Reason
                </span>
                <div class="relative">
                  <textarea
                    class="block w-full p-4 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-500 focus:outline-none mt-3"
                    id="rejectionReason"
                    rows="7"
                    placeholder="Rejection Reason"
                    v-model="reasonText"
                    :maxlength="reasonTextLimit"
                    :class="errorLimit"
                  ></textarea>
                  <span
                    class="absolute z-10 bottom-0 right-0 pr-3 pb-3 text-sm text-gray-700"
                    >{{ reasonText.length }}/{{ reasonTextLimit }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </fieldset>
        <div class="flex mt-8 mb-2">
          <RamroButton
            variant="primary"
            class="mr-3"
            @click="changeStatus('rejected')"
            >Save</RamroButton
          >
          <RamroButton type="button" class="content-end" @click="cancel">
            Cancel
          </RamroButton>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import RamroButton from "@/components/Button/Button.vue";
import InformationDetail from "./InformationDetail.vue";
export default {
  name: "Pending",
  components: {
    RamroButton,
    InformationDetail
  },
  props: ["details"],
  data() {
    return {
      requestRejected: false,
      requestAccepted: false,
      reasonText: "",
      reasonTextLimit: 450,
      API_Key: "",
      code: "",
      files: []
    };
  },
  computed: {
    errorLimit() {
      return {
        "border-red-500 focus:border-red-500 bg-red-100 focus:bg-red-100":
          this.reasonText.length === this.reasonTextLimit ? true : false
      };
    }
  },
  methods: {
    getStatusClass(status) {
      const statusList = {
        Pending: "text-orange-600",
        Rejected: "text-red-600",
        Approved: "text-green-700"
      };
      return statusList[status] || "text-orange-600";
    },
    getStatusClassWrapper(status) {
      const statusList = {
        Pending: "bg-orange-100",
        Rejected: "bg-red-100",
        Approved: "bg-green-100"
      };
      return statusList[status] || "bg-orange-600";
    },
    handleChange(fileList) {
      this.files = [...this.files, ...fileList];
    },
    changeStatus(status) {
      const userName = localStorage.getItem("userName");

      if (status === "save") {
        this.requestAccepted = true;
      }

      if (status === "approved" || status === "rejected") {
        this.$loading(true);
        const payload = {
          type: status,
          rejected_reason: this.reasonText,
          registration_form_id: this.details.id,
          credit: this.details.credit,
          api_key: this.API_Key,
          phone_number_code: this.code,
          current_user_name: userName
        };

        const formData = new FormData();
        Object.keys(payload).forEach(key => {
          formData.append(key, payload[key]);
        });
        this.files.forEach((file, idx) => {
          formData.append(`attachments[${idx}]`, file);
        });

        axios
          .post("sms/change-status", formData, {
            headers: {
              "content-type": "multipart/form-data"
            }
          })
          .then(() => {
            this.$loading(false);
            this.$toasted.success(
              `Application has been ${status} successfully`
            );
            this.$router.back();
          })
          .catch(err => {
            this.$loading(false);
            const error_key =
              err.response.data.errors &&
              Object.keys(err.response.data.errors)[0];
            const error_message =
              error_key && err.response.data.errors[error_key][0];
            this.$toasted.error(
              error_message ||
                err.response.data.message ||
                "Oops, Something went wrong.."
            );
          });
      }
    },
    cancel() {
      this.$router.back();
    },
    removeFile(index) {
      this.files = this.files.filter((_, idx) => idx !== index);
    }
  }
};
</script>

<style></style>
