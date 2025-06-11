<template>
  <Drawer size="max-w-xl">
    <div
      class="bg-gray-300 border-b border-gray-400 flex justify-between px-6 py-4"
    >
      <h2 class="font-normal text-xl">
        Edit Branch
        <small v-if="model.id">( {{ model.name }})</small>
      </h2>
      <button @click="cancel" class="m-0 p-0 appearance-none h-full">
        <i class="material-icons fill-current">close</i>
      </button>
    </div>
    <form @submit.prevent="submit">
      <div class="px-6 py-4">
        <RamroInput
          v-validate="'required'"
          class="mb-3 w-full"
          label="Name"
          name="name"
          v-model="model.name"
          :has-error="errors.has('name')"
        >
          <span class="text-sm text-red-dark">
            {{ errors.first("name") }}
          </span>
        </RamroInput>
        <RamroInput
          v-validate="'required|email'"
          class="mb-3 w-full"
          label="Email"
          name="email"
          v-model="model.email"
          :has-error="errors.has('email')"
        >
          <span class="text-sm text-red-dark">
            {{ errors.first("email") }}
          </span>
        </RamroInput>
        <RamroInput
          v-validate="'required'"
          class="mb-3 w-full"
          label="Phone Number"
          name="phone_number"
          v-model="model.phone_number"
          :has-error="errors.has('phone_number')"
        >
          <span class="text-sm text-red-dark">
            {{ errors.first("phone_number") }}
          </span>
        </RamroInput>

        <div class="w-full mb-3">
          <label
            class="block tracking-wide text-sm font-bold mb-2  text-gray-600"
            >Country</label
          >
          <div class="relative">
            <select
              v-model="model.country_id"
              class="block appearance-none w-full mb-1 leading-normal border border-transparent text-gray-800 bg-gray-100 focus:outline-none border border-gray-300 rounded py-2 px-4"
            >
              <option
                v-for="country in $options.Countries"
                :key="country.id"
                :value="country.id"
                >{{ country.country_name }}</option
              >
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-grey-darker"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <RamroInput
          v-validate="'required'"
          class="mb-3 w-full"
          label="City"
          name="city"
          v-model="model.city"
          :has-error="errors.has('city')"
        >
          <span class="text-sm text-red-dark">
            {{ errors.first("city") }}
          </span>
        </RamroInput>
        <RamroInput
          v-validate="'required'"
          class="mb-3 w-full"
          label="State"
          name="state"
          v-model="model.state"
          :has-error="errors.has('state')"
        >
          <span class="text-sm text-red-dark">
            {{ errors.first("state") }}
          </span>
        </RamroInput>
        <RamroInput
          class="mb-3 w-full"
          label="Street"
          name="street"
          v-model="model.street"
          :has-error="errors.has('street')"
        >
          <span class="text-sm text-red-dark">
            {{ errors.first("street") }}
          </span>
        </RamroInput>
        <RamroInput
          v-validate="'required'"
          class="mb-3 w-full"
          label="Zip Code"
          name="zip_code"
          v-model="model.zip_code"
          :has-error="errors.has('zip_code')"
        >
          <span class="text-sm text-red-dark">
            {{ errors.first("zip_code") }}
          </span>
        </RamroInput>
        <div class="w-full mb-3">
          <label
            class="block tracking-wide text-sm font-bold mb-2 text-grey-darker"
            >Type</label
          >
          <div>
            <label>
              <input
                type="radio"
                name="type"
                v-model="model.type"
                value="Head Office"
                v-validate="'required'"
              />
              &nbsp;Head Office
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="type"
                v-model="model.type"
                value="Other Office"
              />
              &nbsp;Other Office
            </label>
          </div>
        </div>
        <div class="mt-8 flex">
          <RamroButton variant="primary" class="mr-3">Save</RamroButton>
          <RamroButton type="button" class="content-end" @click="cancel">
            Cancel
          </RamroButton>
        </div>
      </div>
    </form>
  </Drawer>
</template>
<script>
import RamroInput from "@/components/Input/Input.vue";
import RamroButton from "@/components/Button/Button.vue";
import axios from "axios";
import Drawer from "@/layout/Drawer.vue";
import Countries from "@/common/countries";

export default {
  name: "BranchEdit",
  Countries,
  components: {
    RamroInput,
    RamroButton,
    Drawer
  },
  data() {
    return {
      model: {
        country: {}
      }
    };
  },
  async beforeRouteEnter(to, from, next) {
    let response = await axios.get(
      "branch/" + to.params.branchId + "/?include=country"
    );
    next(vm => {
      vm.model = response.data.data;
      vm.model.country_id = response.data.data.country.id;
    });
  },
  methods: {
    submit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          axios
            .put("/branch/" + this.model.id, this.model)
            .then(() => {
              this.$toasted.success("Branch detail updated successfully");
              this.$router.push({
                name: "partner.branches",
                params: { id: this.$route.params.id }
              });
            })
            .catch(() => {
              this.$toasted.error("Oops, Something went wrong..");
            });
        }
      });
    },
    cancel() {
      this.$router.push({
        name: "partner.branches",
        params: { id: this.$route.params.id }
      });
    }
  }
};
</script>
