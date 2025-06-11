<template>
  <div class="flex items-center mb-4">
    <div class="w-2/6 mr-2">
      <VSelect
        :options="$options.feeTypes"
        class="border bg-gray-100 rounded px-1 py-1 mb-1"
        name="fee_type"
        label="name"
        placeholder="Select Fee Type"
        v-model="model.fee_type"
        v-validate="'required'"
        :disabled="!$can('manage', 'partner-database')"
        :noDrop="!$can('manage', 'partner-database')"
        :clearable="!$can('manage', 'partner-database')"
        :components="{ OpenIndicator, Deselect }"
      ></VSelect>
      <span class="text-sm text-red-500">
        {{ errors.first("fee_type") }}
      </span>
    </div>
    <div class="w-1/6 mr-2">
      <RamroInput
        v-validate="'required|decimal:3'"
        type="text"
        name="amount"
        :readOnly="!$can('manage', 'partner-database')"
        v-model="model.amount"
      >
        <span class="text-sm text-red-500">
          {{ errors.first("amount") }}
        </span>
      </RamroInput>
    </div>
    <div class="w-1/6">
      <RamroInput
        v-validate="'required'"
        type="number"
        name="instalment"
        v-model="model.instalment"
        :readOnly="!$can('manage', 'partner-database')"
      >
        <span class="text-sm text-red-500">
          {{ errors.first("instalment") }}
        </span>
      </RamroInput>
    </div>
    <div class="w-1/6 text-right font-medium">
      {{ new Intl.NumberFormat().format(model.amount * model.instalment) }}
    </div>
    <div class="w-1/6 text-right">
      <button
        type="button"
        class="text-red-500"
        @click="remove(index)"
        v-show="index > 0"
      >
        <i class="md-20 material-icons">remove_circle_outline</i>
      </button>
    </div>
  </div>
</template>

<script>
const feeTypes = [
  {
    id: 1,
    name: "Accommodation Fee"
  },
  {
    id: 2,
    name: "Administration Fee"
  },
  {
    id: 3,
    name: "Airline Ticket"
  },
  {
    id: 4,
    name: "Airport Transfer Fee"
  },
  {
    id: 5,
    name: "Application Fee"
  },
  {
    id: 6,
    name: "Bond"
  },
  {
    id: 7,
    name: "Exam Fee"
  },
  {
    id: 8,
    name: "Date Change Fee"
  },
  {
    id: 9,
    name: "Extension Fee"
  },
  {
    id: 10,
    name: "Extra Fee"
  },
  {
    id: 11,
    name: "FCE Exam Fee"
  },
  {
    id: 12,
    name: "Health Cover"
  },
  {
    id: 13,
    name: "i20 Fee"
  },
  {
    id: 14,
    name: "Instalment Fee"
  },
  {
    id: 15,
    name: "Key Deposit Fee"
  },
  {
    id: 16,
    name: "Late Payment Fee"
  },
  {
    id: 17,
    name: "Material Deposit"
  },
  {
    id: 18,
    name: "Material Fee"
  },
  {
    id: 19,
    name: "Medical Exam"
  },
  {
    id: 20,
    name: "Placement Fee"
  },
  {
    id: 21,
    name: "Security Deposit Fee"
  },
  {
    id: 22,
    name: "Service Fee"
  },
  {
    id: 23,
    name: "Swipe Card Fee"
  },
  {
    id: 24,
    name: "Training Fee"
  },
  {
    id: 25,
    name: "Transaction Fee"
  },
  {
    id: 26,
    name: "Translation Fee"
  },
  {
    id: 27,
    name: "Travel Insurance"
  },
  {
    id: 28,
    name: "Tuition Fee"
  },
  {
    id: 29,
    name: "Visa Counseling"
  },
  {
    id: 30,
    name: "Visa Fee"
  },
  {
    id: 31,
    name: "Visa Process"
  },
  {
    id: 32,
    name: "RMA Fee"
  },
  {
    id: 33,
    name: "Registered Migration Agent Fee"
  }
];
import VSelect from "vue-select";
import isEqual from "lodash/fp/isEqual";
import RamroInput from "@/components/Input/Input.vue";

export default {
  name: "ProductFeeItem",
  feeTypes,
  components: {
    VSelect,
    RamroInput
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    feeDetail: {
      type: Object,
      required: true
    }
  },
  watch: {
    feeDetail: {
      immediate: true,
      handler(val) {
        this.model = { ...val };
      }
    },
    model: {
      deep: true,
      handler(value) {
        if (!isEqual(value)(this.feeDetail)) {
          this.$validator.validateAll().then(result => {
            if (result) {
              this.$emit("updated", value);
            }
          });
        }
      }
    }
  },
  data: () => ({
    model: {
      fee_type: {},
      amount: "",
      instalment: ""
    },
    OpenIndicator: {
      render: createElement =>
        createElement(
          "i",
          {
            class: "material-icons text-gray-600"
          },
          "keyboard_arrow_down"
        )
    },
    Deselect: {
      render: createElement =>
        createElement(
          "i",
          {
            class: "md-18 material-icons text-gray-600"
          },
          "clear"
        )
    }
  }),
  methods: {
    remove(id) {
      this.$emit("remove", id);
    }
  }
};
</script>

<style scoped></style>
