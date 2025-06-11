<template>
  <Drawer size="max-w-xl">
    <div
      class="bg-gray-300 border-b border-gray-400 flex justify-between px-6 py-4"
    >
      <h2 class="font-normal text-xl">
        Add new Talent
      </h2>
      <button @click="cancel" class="m-0 p-0 appearance-none h-full">
        <i class="material-icons fill-current">close</i>
      </button>
    </div>
    <form @submit.prevent="submit" autocomplete="off">
      <div class="px-6 py-4">
        <fieldset class="border rounded px-6 py-4 mt-4">
          <legend class="bg-gray-600 px-3 py-2 text-white rounded">
            Talent Detail
          </legend>
          <RamroInput
            v-validate="'required'"
            class="mb-4 w-full"
            label="Full name"
            name="name"
            v-model="model.name"
            :has-error="errors.has('name')"
          >
            <span class="text-sm text-red-600">
              {{ errors.first("name") }}
            </span>
          </RamroInput>
          <RamroInput
            v-validate="'required'"
            class="mb-4 w-full"
            label="Email Address"
            name="email"
            v-model="model.email"
            :has-error="errors.has('email')"
          >
            <span class="text-sm text-red-600">
              {{ errors.first("email") }}
            </span>
          </RamroInput>
          <RamroInput
            v-validate="'required'"
            class="mb-4 w-full"
            label="Password"
            name="password"
            type="password"
            v-model="model.password"
            :has-error="errors.has('password')"
          >
            <span class="text-sm text-red-600">
              {{ errors.first("password") }}
            </span>
          </RamroInput>
          <div class="w-full mb-4">
            <label
              class="block text-gray-600 tracking-wide text-sm font-bold mb-2"
              :class="[errors.has('role') ? 'text-red-700' : 'text-gray-600']"
            >
              Role
            </label>
            <VSelect
              v-validate="'required'"
              :options="roles"
              name="role"
              class="border bg-gray-100 rounded px-1 py-1 text-gray-600 mb-1"
              :components="{ OpenIndicator, Deselect }"
              v-model="model.role"
              :class="[errors.has('role') ? 'border-red-700' : '']"
            ></VSelect>
            <span class="text-sm text-red-500">
              {{ errors.first("role") }}
            </span>
          </div>
        </fieldset>
      </div>
      <div class="mt-8 flex px-6 py-4 ">
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
import VSelect from "vue-select";
import Drawer from "@/layout/Drawer.vue";
import RamroInput from "@/components/Input/Input.vue";
import RamroButton from "@/components/Button/Button.vue";

export default {
  name: "AddNewTalent",
  components: {
    Drawer,
    RamroInput,
    RamroButton,
    VSelect
  },
  data() {
    return {
      roles: ["Observer", "Data Specialist", "Admin"],
      model: {},
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
    };
  },
  methods: {
    submit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$loading(true);
          axios
            .post("/talent", this.model)
            .then(() => {
              this.$toasted.success("Talent detail added successfully");
              this.$router.push({
                name: "talent.list"
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
      this.$router.push({
        name: "talent.list"
      });
    }
  }
};
</script>
