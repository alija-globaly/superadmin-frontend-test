<template>
  <div class="p-4">
    <fieldset class="border rounded px-6 py-5">
      <legend class="bg-gray-600 px-3 py-1 text-white rounded">
        Code
      </legend>
      <div class="flex items-center font-medium text-base mb-2">
        <i class="mr-4 text-gray-700 fill-current material-icons md-24"
          >phonelink
        </i>
        <span>Code</span>
      </div>
      <div class="flex justify-between items-center">
        <div
          class="bg-white pr-2 inline-block rounded h-max w-64 border border-gray-400"
        >
          <select
            name="phone"
            id="phone"
            class="pl-3 pr-2 py-2 bg-white focus:outline-none cursor-pointer rounded w-full"
            v-model="selectedPhone"
            @change="showLogs()"
          >
            <option value="" disabled selected>Select Number</option>
            <option
              :value="phoneCode"
              v-for="(phoneCode, index) in phoneCodeList"
              :key="index"
              >{{ phoneCode }}</option
            >
          </select>
        </div>

        <RamroButton
          @click="isNewCreditActive = true"
          class="focus:outline-none"
          variant="primary"
          >Add New Recharge</RamroButton
        >
      </div>
    </fieldset>
    <div class="activity-logs mt-8" v-if="selectedPhone && !isNewCreditActive">
      <header class="mb-5">
        <div class="flex items-center font-medium text-base mb-2">
          <i class="mr-2 text-gray-700 fill-current material-icons">sort </i>
          <span>Activity Logs</span>
        </div>
      </header>
      <ul class="list-reset flex flex-col mb-4 overflow-auto">
        <li
          class="flex items-center px-2 py-2 w-full bg-gray-300 rounded shadow mb-4 focus:outline-none border border-transparent focus:border-blue-500"
        >
          <div
            class="w-1/5 font-normal text-sm flex flex-col ml-3 tracking-wide"
          >
            Credit Requested By
          </div>
          <div
            class="w-1/5 font-normal text-sm flex flex-col ml-3 tracking-wide"
          >
            Requested on
          </div>
          <div
            class="w-1/5 font-normal text-sm flex flex-col ml-3 tracking-wide"
          >
            Credit Amount
          </div>
          <div
            class="w-1/5 font-normal text-sm flex flex-col ml-3 tracking-wide"
          >
            Added on
          </div>
          <div
            class="w-1/5 font-normal flex text-sm  flex-col ml-3 tracking-wide"
          >
            Added By
          </div>
        </li>
        <li
          class="flex items-center px-2 py-2 w-full  rounded mb-4 focus:outline-none border border-gray-300 focus:border-blue-500"
          v-for="logData in logs"
          :key="logData.id"
        >
          <div
            class="w-1/5 font-normal text-sm flex flex-col ml-3 tracking-wide"
          >
            {{ logData.credit_requested_by.name }}
          </div>
          <div
            class="w-1/5 font-normal text-sm flex flex-col ml-3 tracking-wide"
          >
            {{ logData.requested_on }}
          </div>
          <div
            class="w-1/5 font-normal text-sm flex flex-col ml-3 tracking-wide pl-4"
          >
            {{ logData.credit_amount }}
          </div>
          <div
            class="w-1/5 font-normal text-sm flex flex-col ml-3 tracking-wide"
          >
            {{ logData.added_on }}
          </div>
          <div
            class="w-1/5 font-normal flex text-sm  flex-col ml-3 tracking-wide"
          >
            {{ logData.added_by }}
          </div>
        </li>
      </ul>
    </div>
    <div v-else-if="!isNewCreditActive">
      <div class="text-base p-32 text-gray-600 text-center">
        Select a number to view its activity logs
      </div>
    </div>
    <div class="add-new-recharge" v-if="isNewCreditActive">
      <div
        class="border border-blue-600 pl-2 pr-4 py-1 rounded inline-block cursor-pointer my-6 group-hover:bg-blue-600 duration-100 hover:shadow-md"
        @click="isNewCreditActive = false"
      >
        <div class="flex items-center font-medium text-base ">
          <i class="mr-0 text-blue-600 fill-current material-icons"
            >chevron_left</i
          >
          <span class="text-blue-600">Back</span>
        </div>
      </div>

      <div class="text-base font-bold mb-5">
        Add new recharge
      </div>

      <div class="mb-4 flex gap-4">
        <div class="flex flex-col overflow-hidden w-1/2">
          <span class="text-base text-gray-700 truncate mb-2">
            Credit
          </span>
          <input
            aria-label=""
            class="outline-none transition border border-transparent focus:bg-white focus:border-gray-300 text-gray-700 rounded bg-gray-100 py-2 px-4 block appearance-none leading-normal border-gray-300 w-full"
            type="text"
            autocomplete="off"
            ref="input"
            v-model="newCreditAmount"
          />
        </div>
        <div class="flex flex-col overflow-hidden w-1/2">
          <span class="text-base text-gray-700 truncate mb-2">
            Credit Added By
          </span>
          <input
            aria-label=""
            class="outline-none transition border border-transparent focus:bg-white focus:border-gray-300 text-gray-700 rounded bg-gray-200 py-2 px-4 block appearance-none leading-normal border-gray-300 w-full"
            type="text"
            autocomplete="off"
            ref="input"
            disabled
            :value="userName"
          />
        </div>
      </div>
      <div class="flex mt-8 mb-8">
        <RamroButton variant="primary" class="mr-3" @click="updateCredit()"
          >Save</RamroButton
        >
        <RamroButton type="button" class="content-end" @click="cancel()">
          Cancel
        </RamroButton>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RamroButton from "@/components/Button/Button.vue";
export default {
  name: "TenantSMS",
  components: {
    RamroButton
  },
  props: ["subDomain", "tenantId"],
  data() {
    return {
      selectedPhone: "",
      isNewCreditActive: false,
      newCreditAmount: 0,
      logs: [],
      phoneCodeList: []
    };
  },
  created() {
    axios
      .get(`/sms/phone-numbers?tenant_id=${this.tenantId}`)
      .then(response => {
        this.phoneCodeList = response.data.data.phone_number_codes;
      });
  },
  computed: {
    userName() {
      return localStorage.getItem("userName");
    }
  },
  methods: {
    showLogs() {
      this.$loading(true);
      axios
        .get(
          `/sms/credit-logs?phone_number_code=${this.selectedPhone}&tenant_id=${this.tenantId}`
        )
        .then(response => {
          this.$loading(false);
          this.logs = response.data.data;
        });
    },
    updateCredit() {
      if (this.newCreditAmount) {
        axios
          .post(
            'sms/add-credit',
            {
              phone_number_code: this.selectedPhone,
              credit: this.newCreditAmount,
              credit_added_by: this.userName,
              tenant_id: this.tenantId
            }
          )
          .then(() => {
            this.isNewCreditActive = false;
            this.showLogs();
            this.$toasted.success(
              `${this.newCreditAmount} credit added successfully`
            );
            this.newCreditAmount = 0;
          })
          .catch(err => {
            this.$toasted.error(
              err.response.data.message || "Oops, Something went wrong.."
            );
          });
      } else {
        this.$toasted.error(`Credit amount must be greater than 0`);
      }
    },
    cancel() {
      this.$router.push({
        name: "tenant.list"
      });
    }
  }
};
</script>

<style>
.h-max {
  height: max-content;
}
</style>
