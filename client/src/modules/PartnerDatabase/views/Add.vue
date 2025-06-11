<template>
  <Drawer size="max-w-2xl">
    <div
      class="bg-gray-300 border-b border-gray-400 flex justify-between px-6 py-4"
    >
      <h2 class="font-normal text-xl">
        Add new Partner
      </h2>
      <button @click="cancel" class="m-0 p-0 appearance-none h-full">
        <i class="material-icons fill-current">close</i>
      </button>
    </div>
    <form @submit.prevent="submit">
      <div class="px-6 py-4">
        <fieldset class="border rounded px-6 py-4 mt-4">
          <legend class="bg-gray-600 px-3 py-2 text-white rounded">
            Partner Detail
          </legend>
          <div class="w-full mb-5">
            <label
              class="block tracking-wide text-sm font-bold mb-2 text-gray-600"
            >
              Partner Logo</label
            >
            <div class="relative border-2 p-1">
              <div class="h-24 w-full flex bg-gray-100">
                <img
                  v-if="model.logo"
                  class="inline-block w-full"
                  :src="model.logo"
                />
                <span
                  v-else
                  class="inline-flex flex-col m-auto font-medium text-xl text-gray-500"
                  >No Image</span
                >
              </div>
              <div class="opacity-0 hover:opacity-100">
                <div
                  class="h-full w-full bg-gray-900 opacity-50 absolute inset-0"
                ></div>
                <label
                  class="opacity-0 bg-transparent opacity-100 absolute inset-0 w-full h-full p-4 flex flex-col text-gray-200 items-center cursor-pointer"
                >
                  <svg class="w-10 h-10 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                    />
                  </svg>
                  <input
                    type="file"
                    class="hidden"
                    ref="file"
                    @change="handleFileSelected"
                  />
                  <span
                    class="mt-2 inline-block text-white font-semibold text-xl leading-normal opacity-100"
                    >Select a file</span
                  >
                </label>
              </div>
            </div>
            <button
              class="mt-1 focus:outline-none text-red-400 text-sm bg-red-100 px-2 py-1 border border-red-200"
              v-if="model.logo"
              @click="removeLogo"
            >
              Remove logo
            </button>
          </div>
          <div class="w-full mb-5">
            <label
              class="block tracking-wide text-sm font-bold mb-2 text-gray-600"
              :class="{ 'text-red-700': errors.has('category_id') }"
            >
              Category
            </label>
            <div class="relative">
              <select
                v-validate="'required'"
                name="category_id"
                :class="{ 'border-red-700': errors.has('category_id') }"
                class="block appearance-none w-full mb-1 leading-normal border border-transparent text-gray-800 bg-gray-100 focus:outline-none border border-gray-300 rounded py-2 px-4"
                v-model="model.category_id"
              >
                <optgroup
                  v-for="categoryGroup in categories"
                  :label="categoryGroup.name"
                  :key="categoryGroup.id"
                >
                  <option
                    class="py-2"
                    v-for="category in categoryGroup.children"
                    :key="`cat_${category.id}`"
                    :value="category.id"
                  >
                    {{ category.name }}
                  </option>
                </optgroup>
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
            <span class="text-sm text-red-600">
              {{ errors.first("category_id") }}
            </span>
          </div>
          <div class="mb-5">
            <RamroInput
              v-validate="'required'"
              class="mb-3 w-full"
              label="Name"
              name="name"
              v-model="model.name"
              :has-error="errors.has('name')"
            >
              <span class="text-sm text-red-600">
                {{ errors.first("name") }}
              </span>
            </RamroInput>
            <RamroInput
              v-validate=""
              class="mb-3 w-full"
              label="Registration Number"
              name="registration_number"
              v-model="model.registration_number"
              :has-error="errors.has('registration_number')"
            >
              <span class="text-sm text-red-600">
                {{ errors.first("registration_number") }}
              </span>
            </RamroInput>
            <div class="w-full mb-3">
              <label
                class="block tracking-wide text-sm font-bold mb-2  text-gray-600"
              >
                Currency Code
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full mb-1 leading-normal border border-transparent text-gray-800 bg-gray-100 focus:outline-none border border-gray-300 rounded py-2 px-4"
                  id="currencies"
                  v-model="model.currency_code"
                >
                  <option
                    class="py-2"
                    v-for="country in $options.Countries"
                    :key="country.id"
                    :value="country.currency_code"
                  >
                    {{ country.currency_code }}
                  </option>
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
          </div>
        </fieldset>
        <fieldset class="border rounded px-6 py-4 mt-4">
          <legend class="bg-gray-600 px-3 py-2 text-white rounded">
            Head Office Address
          </legend>
          <div class="w-full mb-3">
            <RamroInput
              class="mb-3 w-full"
              label="Street"
              name="street"
              v-model="model.street"
              :has-error="errors.has('street')"
            >
              <span class="text-sm text-red-600">
                {{ errors.first("street") }}
              </span>
            </RamroInput>
            <RamroInput
              class="mb-3 w-full"
              label="City"
              name="city"
              v-model="model.city"
              :has-error="errors.has('city')"
            >
              <span class="text-sm text-red-600">
                {{ errors.first("city") }}
              </span>
            </RamroInput>
            <RamroInput
              class="mb-3 w-full"
              label="State"
              name="state"
              v-model="model.state"
              :has-error="errors.has('state')"
            >
              <span class="text-sm text-red-600">
                {{ errors.first("state") }}
              </span>
            </RamroInput>
            <RamroInput
              class="mb-3 w-full"
              label="Zip Code"
              name="zip_code"
              v-model="model.zip_code"
              :has-error="errors.has('zip_code')"
            >
              <span class="text-sm text-red-600">
                {{ errors.first("zip_code") }}
              </span>
            </RamroInput>
            <div class="w-full mb-3">
              <label
                class="block tracking-wide text-sm font-bold mb-2  text-gray-600"
              >
                Country
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full mb-1 leading-normal border border-transparent text-gray-800 bg-gray-100 focus:outline-none border border-gray-300 rounded py-2 px-4"
                  v-model="model.country"
                >
                  <option
                    class="py-2"
                    v-for="country in $options.Countries"
                    :key="country.id"
                    :value="country.id"
                  >
                    {{ country.country_name }}
                  </option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0  flex items-center px-2 text-gray-800"
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
          </div>
        </fieldset>
        <fieldset class="border rounded px-6 py-4 mt-4">
          <legend class="bg-gray-600 px-3 py-2 text-white rounded">
            Contact Details
          </legend>
          <RamroInput
            class="mb-3 w-full"
            label="Phone Number"
            name="phone_number"
            v-model="model.phone_number"
            :has-error="errors.has('phone_number')"
          >
            <span class="text-sm text-red-600">
              {{ errors.first("phone_number") }}
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
            <span class="text-sm text-red-600">
              {{ errors.first("email") }}
            </span>
          </RamroInput>
          <RamroInput
            class="mb-3 w-full"
            label="Fax"
            name="fax"
            v-model="model.fax"
            :has-error="errors.has('fax')"
          >
            <span class="text-sm text-red-600">{{ errors.first("fax") }}</span>
          </RamroInput>
          <RamroInput
            class="mb-3 w-full"
            label="Website"
            name="website"
            v-model="model.website"
            :has-error="errors.has('website')"
          >
            <span class="text-sm text-red-600">
              {{ errors.first("website") }}
            </span>
          </RamroInput>
        </fieldset>
      </div>
      <div class="mt-8 flex border-t border-gray-400 px-6 py-4 bg-gray-300">
        <RamroButton variant="primary" class="mr-3">Save</RamroButton>
        <RamroButton type="button" class="content-end" @click="cancel">
          Cancel
        </RamroButton>
      </div>
    </form>
  </Drawer>
</template>
<script>
import axios from "axios";
import Drawer from "@/layout/Drawer.vue";
import RamroInput from "@/components/Input/Input.vue";
import RamroButton from "@/components/Button/Button.vue";
import Countries from "@/common/countries";

export default {
  Countries,
  components: {
    Drawer,
    RamroInput,
    RamroButton
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
              class: "md-18 material-icons"
            },
            "clear"
          )
      },
      categories: [],
      model: {
        id: "",
        name: "",
        registration_number: "",
        email: "",
        phone_number: "",
        website: "",
        street: "",
        state: "",
        zip_code: "",
        city: "",
        country: 11,
        category_id: "",
        currency_code: "AUD",
        logo: ""
      }
    };
  },
  created() {
    this.$loading(true);
    axios
      .get("categories?include=children&filter[children.type]=partner")
      .then(response => {
        this.categories = response.data.data;
        this.$loading(false);
      });
  },
  computed: {
    logoStyles() {
      if (!this.model.logo) {
        return;
      }
      return {
        "background-image": `url('${this.model.logo}')`
      };
    }
  },
  methods: {
    handleFileSelected() {
      let file = this.$refs.file.files;
      if (file.length == 0) {
        return;
      }
      this.model.logo = URL.createObjectURL(file[0]);
    },
    removeLogo() {
      this.model.logo = "";
    },
    submit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          let formData = new FormData();
          if (this.model.logo) {
            formData.append("logo", this.$refs.file.files[0]);
          }
          Object.keys(this.model).forEach(key => {
            if (key !== "logo") {
              if (this.model[key] === null) {
                formData.append(key, "");
              } else {
                formData.append(key, this.model[key]);
              }
            }
          });
          this.$loading(true);
          axios
            .post("/partner", formData, {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            })
            .then(response => {
              this.$toasted.success("Partner detail added successfully");
              this.$router.push({
                name: "partner.detail",
                params: { id: response.data.id }
              });
            })
            .catch(error => {
              const errors = error.response.data.errors;
              const status = error.response.status;
              if (status === 422) {
                let errorFields = Object.keys(errors);
                for (let i = 0; i < errorFields.length; i++) {
                  let field = errorFields[i];

                  let errorString = errors[field][0];
                  this.$validator.errors.add({
                    field: field,
                    msg: errorString
                  });
                }
                return;
              }
              this.$toasted.error("Oops, Something went wrong.." + error);
            })
            .finally(() => {
              this.$loading(false);
            });
        }
      });
    },
    cancel() {
      if (window.history.length > 2) {
        this.$router.back();
      } else {
        this.$router.push({ name: "partner.list" });
      }
    }
  }
};
</script>
