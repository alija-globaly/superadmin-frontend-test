<template>
  <form @submit.prevent="save">
    <fieldset
      class="bg-white border rounded px-6 py-4 mt-8 bg-white"
    >
      <legend class="bg-gray-600 px-3 py-2 text-white rounded">
        Default Fee
      </legend>
      <div>
        <div class="flex justify-end mb-4">
          <div class="w-2/6">
            <label
              class="block text-gray-600 tracking-wide text-sm font-bold mb-2"
            >
              Country Of Residency
            </label>
            <VSelect
              :disabled="true"
              :noDrop="true"
              :clearable="false"
              class="border bg-gray-100 rounded px-1 py-1"
              value="All Countries"
            ></VSelect>
          </div>
          <div class="w-2/6 ml-4">
            <label
              class="block text-gray-600 tracking-wide text-sm font-bold mb-2"
            >
              Installment Type
            </label>
            <VSelect
              :options="$options.feeTerms"
              class="border bg-gray-100 rounded px-1 py-1"
              name="fee_term"
              label="name"
              placeholder="Select Fee Type"
              v-model="feesModel.feeTerms"
              v-validate="'required'"
              :disabled="!$can('manage', 'partner-database')"
              :noDrop="!$can('manage', 'partner-database')"
              :clearable="!$can('manage', 'partner-database')"
              :components="{ OpenIndicator, Deselect }"
            ></VSelect>
            <span class="text-sm text-red-500">
              {{ errors.first("feeTerms") }}
            </span>
          </div>
        </div>
        <span class="w-full border inline-flex border-gray-200 mb-3"></span>

        <div class="flex mb-2">
          <span class="w-2/6 font-medium">Fee Type</span>
          <span class="w-1/6 font-medium text-right mr-4">Amount</span>
          <span class="w-1/6 font-medium text-right mr-4">Installments</span>
          <span class="w-1/6 font-medium text-right">Total Fee</span>
          <span class="w-1/6 font-medium text-right"></span>
        </div>
        <ProductFeeItem
          v-for="(feeDetail, index) in feesModel.fee_items"
          :key="index"
          :index="index"
          :fee-detail="feeDetail"
          @remove="remove(index)"
          @updated="handleFeeUpdate(index, $event)"
        ></ProductFeeItem>
        <div class="mt-5" v-if="$can('manage', 'partner-database')">
          <RamroButton
            type="button"
            variant="outline"
            class="text-xs py-1"
            @click="addFeeItem"
          >
            Add new
          </RamroButton>
        </div>
      </div>
    </fieldset>
<!--    <div class="mt-8" v-if="$can('manage', 'partner-database')">-->
<!--      <RamroButton type="submit" variant="primary">-->
<!--        Save Changes-->
<!--      </RamroButton>-->
<!--    </div>-->
  </form>
</template>
<script>
const feeTerms = [
  {
    id: 1,
    name: "Full Fee"
  },
  {
    id: 2,
    name: "Per Year"
  },
  {
    id: 3,
    name: "Per Month"
  },
  {
    id: 4,
    name: "Per Term"
  },
  {
    id: 5,
    name: "Per Trimester"
  },
  {
    id: 6,
    name: "Per Semester"
  },
  {
    id: 7,
    name: "Per Week"
  },
  {
    id: 8,
    name: "Installment"
  }
];

import axios from "axios";
import ProductFeeItem from "./ProductFeeItem";
import RamroButton from "@/components/Button/Button.vue";
import VSelect from "vue-select";

export default {
  name: "ProductFees",
  feeTerms,
  components: {
    VSelect,
    ProductFeeItem,
    RamroButton
  },
  props: {
    fees: {
      type: Object
    }
  },
  data() {
    return {
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
      },
      feesModel: {
        name: "Default Fee",
        country: "All Countries",
        feeTerms: "",
        fee_items: []
      }
    };
  },
  watch: {
    fees: {
      immediate: true,
      handler(newFees) {
        if (newFees && newFees.fee_items.length) {
          this.feesModel = newFees;
        }
      }
    }
  },
  created() {
    if (this.fees && this.fees.fee_items.length) {
      this.feesModel = this.fees;
      return;
    }
    this.feesModel.fee_items = [this.getFeeBaseState()];
  },
  methods: {
    handleFeeUpdate(index, fee) {
      this.$set(this.feesModel.fee_items, index, fee);
    },
    remove(index) {
      this.feesModel.fee_items.splice(index, 1);
    },
    addFeeItem() {
      this.feesModel.fee_items.push(this.getFeeBaseState());
    },
    save() {
      this.$validator.validateAll().then(result => {
        if (result) {
          axios
            .put("/product/" + this.$route.params.productId + "/fees", {
              fees: this.feesModel
            })
            .then(() => {
              this.$toasted.success("Product Fees detail updated successfully");
            })
            .catch(() => {
              this.$toasted.error(
                "Oops, Something went wrong..Please reload the page"
              );
            });
        }
      });
    },
    getFeeBaseState() {
      return {
        fee_type: "",
        amount: 0,
        instalment: 1,
        totalFee: 0,
        inQuotation: true
      };
    }
  }
};
</script>
