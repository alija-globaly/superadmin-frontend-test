<template>
  <div>
    <fieldset class="px-6 py-4 mt-4 border rounded min-w-0">
      <legend class="px-3 py-2 text-white bg-gray-600 rounded">
        Details
      </legend>
      <div class="w-full mb-5">
        <div class="flex items-center justify-between my-4">
          <div class="flex flex-col overflow-hidden">
            <span
              class="text-xl text-gray-900 truncate"
              :title="details.business_details.name"
            >
              {{ details.business_details.name }}
            </span>
            <span class="text-gray-900 truncate">
              {{ details.business_details.email }}
            </span>
          </div>
          <div
            class="flex flex-shrink-0 mt-4 ml-2 text-sm border border-gray-200 rounded md:mt-0"
          >
            <div
              class="relative px-2 py-1 rounded"
              :class="getStatusClassWrapper(details.status)"
            >
              <span
                class="pl-4 text-sm font-medium capitalize rounded status"
                :class="getStatusClass(details.status)"
              >
                {{ details.status }}
              </span>
            </div>
          </div>
        </div>
        <div class="flex mt-8">
          <div>
            <i class="mr-4 text-gray-700 fill-current material-icons md-24"
              >calendar_today</i
            >
          </div>
          <div class="flex flex-col overflow-hidden">
            <span class="text-lg text-gray-700 truncate">
              Applied On
            </span>
            <span class="mt-2 truncate">
              {{ details.applied_on }}
            </span>
          </div>
        </div>
        <div class="flex mt-8">
          <div>
            <i class="mr-4 text-gray-700 fill-current material-icons md-24"
              >person</i
            >
          </div>
          <div class="flex flex-col overflow-hidden">
            <span class="text-lg text-gray-700 truncate">
              Username
            </span>
            <span class="mt-2 truncate">
              {{ details.user_details.name }}
            </span>
          </div>
        </div>
        <div class="flex mt-8">
          <div>
            <i class="mr-4 text-gray-700 fill-current material-icons md-24"
              >business_center</i
            >
          </div>
          <div class="flex flex-col overflow-hidden">
            <span class="text-lg text-gray-700 truncate">Contact Details</span>
            <span class="mt-2 truncate">{{
              details.business_details.name
            }}</span
            ><span class="mt-2 truncate">
              {{ details.phone_number }}
            </span>
          </div>
        </div>
        <div class="flex mt-8">
          <div>
            <i class="mr-4 text-gray-700 fill-current material-icons md-24"
              >location_on</i
            >
          </div>
          <div class="flex flex-col overflow-hidden">
            <span class="text-lg text-gray-700 truncate">
              Address
            </span>
            <span class="mt-2">
              {{ details.address.street }}, {{ details.address.city }},
              {{ details.address.provinces }}, Nepal
            </span>
          </div>
        </div>
        <div class="flex mt-8">
          <div>
            <i class="mr-4 text-gray-700 fill-current material-icons md-24"
              >code</i
            >
          </div>
          <div class="flex flex-col overflow-hidden">
            <span class="text-lg text-gray-700 truncate">
              Zip / Postal Code
            </span>
            <span class="mt-2 truncate">
              {{ details.address.postal_code }}
            </span>
          </div>
        </div>
        <div class="flex mt-8">
          <div>
            <i class="mr-4 text-gray-700 fill-current material-icons md-24"
              >article</i
            >
          </div>
          <div class="flex flex-col overflow-hidden">
            <span class="text-lg text-gray-700 truncate">
              VAT No.
            </span>
            <span class="mt-2 truncate">
              {{ details.vat_no }}
            </span>
          </div>
        </div>
        <div class="flex mt-8">
          <div>
            <i class="mr-4 text-gray-700 fill-current material-icons md-24"
              >library_add_check</i
            >
          </div>
          <div class="flex flex-col overflow-hidden">
            <span class="text-lg text-gray-700 truncate">
              Subdomain
            </span>
            <span class="mt-2 truncate">
              {{ details.company_domain }}
            </span>
          </div>
        </div>
        <div class="flex mt-8">
          <div>
            <i class="mr-4 text-gray-700 fill-current material-icons md-24"
              >account_balance_wallet</i
            >
          </div>
          <div class="flex flex-col overflow-hidden">
            <span class="text-lg text-gray-700 truncate">
              Applied Credit Count
            </span>
            <span class="mt-2 truncate">
              {{ details.credit }}
            </span>
          </div>
        </div>
        <div class="flex mt-8">
          <div>
            <i class="mr-4 text-gray-700 fill-current material-icons md-24"
              >attach_money</i
            >
          </div>
          <div class="flex flex-col overflow-hidden">
            <span class="text-lg text-gray-700 truncate">
              Applied Credit Amount (NPR)
            </span>
            <span class="mt-2 truncate">
              {{ details.credit_amount }}
            </span>
          </div>
        </div>
      </div>
    </fieldset>
    <fieldset class="px-6 py-4 border rounded mt-10 min-w-0">
      <legend class="px-3 py-2 text-white bg-gray-600 rounded">
        Documents
      </legend>
      <div class="w-full mb-5">
        <div
          class="flex mt-8"
          v-for="document in details.attachments"
          :key="document.original_name"
        >
          <div>
            <i class="mr-4 text-gray-700 fill-current material-icons md-24"
              >filter</i
            >
          </div>
          <div class="flex flex-col overflow-hidden">
            <span
              class="text-lg text-gray-700 truncate"
              v-if="document.meta.supporting_document_type === 'pan_card'"
            >
              PAN Card
            </span>
            <span
              class="text-lg text-gray-700 truncate"
              v-if="
                document.meta.supporting_document_type ===
                  'business_registration_certificate'
              "
            >
              Business Registration Certificate
            </span>
            <span class="mt-2 truncate text-blue-400">
              <a :href="document.url">
                {{ document.original_name }}
              </a>
            </span>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>
<script>
export default {
  name: "InformationDetail",
  props: ["details"],
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
    }
  }
};
</script>
