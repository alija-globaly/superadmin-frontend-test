<template>
  <div v-if="details">
    <div
      class="flex justify-between px-6 py-4 bg-gray-300 border-b border-gray-400"
    >
      <h2 class="text-xl font-normal">
        View Phone Request Details
      </h2>
      <button @click="$emit('cancel')" class="h-full p-0 m-0 appearance-none">
        <i class="fill-current material-icons">close</i>
      </button>
    </div>
    <div class="px-6 py-4">
      <InformationDetail :details="details"></InformationDetail>
      <fieldset class="px-6 py-4 mt-10 border rounded">
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
                <div
                  class="block w-full p-4 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-500 focus:outline-none mt-3"
                  v-html="reasonText"
                  disabled
                ></div>
              </div>
            </div>
          </div>
        </div>
      </fieldset>
      <div class="flex mt-8 mb-2">
        <RamroButton
          variant="success"
          class="mr-3"
          @click="changeStatus('reverted')"
          >Revert</RamroButton
        >
        <RamroButton type="button" class="content-end" @click="$emit('cancel')">
          Cancel
        </RamroButton>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { toString } from "@/utils/helpers";
import RamroButton from "@/components/Button/Button.vue";
import InformationDetail from "./InformationDetail.vue";

export default {
  name: "Rejected",
  props: ["details"],
  components: { RamroButton, InformationDetail },
  data() {
    return {
      reasonText: ""
    };
  },
  created() {
    setTimeout(() => {
      this.reasonText = toString(this.details.rejected_reason);
    }, 200);
  },
  methods: {
    changeStatus(status) {
      const userName = localStorage.getItem("userName");

      if (status === "reverted") {
        this.$loading(true);
        axios
          .post("sms/change-status", {
            type: status,
            rejected_reason: this.reasonText,
            registration_form_id: this.details.id,
            credit: this.details.credit,
            current_user_name: userName
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
            this.$toasted.error(
              err.response.data.message || "Oops, Something went wrong.."
            );
          });
      }
    }
  }
};
</script>

<style></style>
