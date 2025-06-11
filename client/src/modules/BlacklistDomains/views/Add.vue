<template>
  <div
    class="fixed inset-0 z-50 overflow-auto flex"
    style="background-color: rgba(0, 0, 0, 0.6); filter: blur(10%)"
  >
    <div
      class="fixed shadow-lg max-w-lg md:relative bottom-0 inset-x-0 align-top m-auto bg-white md:rounded w-full md:h-auto md:shadow"
    >
      <div
        class="bg-gray-300 border-b border-gray-400 flex justify-between px-6 py-3"
      >
        <h2 class="font-normal text-xl">
          Add domains to blacklist
        </h2>
        <button @click="cancel" class="m-0 p-0 appearance-none h-full">
          <i class="material-icons fill-current">close</i>
        </button>
      </div>
      <form @submit.prevent="submit" autocomplete="off">
        <div class="px-6 py-4">
          <div
            class="bg-blue-100 border-l-4 flex items-center border-blue-500 text-blue-700 p-4"
            role="alert"
          >
            <div>
              <p>Each input should only contain a single domain.</p>
              <p>
                Please don't include http(s) or www in the domains input.
                <br /><br />
                For example: introcept.co, auda.org.au, hotmail.com, gmail.com
                without http(s)
              </p>
            </div>
          </div>
          <div
            class="flex items-center"
            v-for="(domain, index) in model.domains"
            :key="domain.id"
          >
            <RamroInput
              v-validate="'required'"
              class="mb-3 mt-3 flex-1"
              :name="`domain_${domain.id}`"
              :key="domain.id"
              data-vv-as="domain"
              v-model="domain.value"
              placeholder="Please input domain name to add in blacklist"
              :has-error="errors.has(`domain_${domain.id}`)"
            >
              <span class="text-sm text-red-600">
                {{ errors.first(`domain_${domain.id}`) }}
              </span>
            </RamroInput>
            <div class="ml-4 justify-end items-center" v-show="index > 0">
              <button type="button" class="text-red-500" @click="remove(index)">
                <i class="md-20 material-icons">remove_circle_outline</i>
              </button>
            </div>
          </div>
          <RamroButton
            type="button"
            variant="outline"
            class="text-xs py-1"
            @click="addNew"
          >
            Add new
          </RamroButton>
        </div>
        <div
          class="bg-gray-300 border-gray-400 border-t flex mt-4 px-6 py-4 w-full"
        >
          <RamroButton variant="primary" class="mr-3">Add</RamroButton>
          <RamroButton type="button" class="content-end" @click="cancel">
            Cancel
          </RamroButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import shortid from "shortid";

import RamroInput from "@/components/Input/Input.vue";
import RamroButton from "@/components/Button/Button.vue";

export default {
  name: "AddNewDomains",
  components: {
    RamroInput,
    RamroButton
  },
  data() {
    return {
      model: {
        domains: [{ value: "", id: shortid.generate() }]
      }
    };
  },
  methods: {
    addNew() {
      this.model.domains.push({ value: "", id: shortid.generate() });
    },
    remove(index) {
      this.model.domains.splice(index, 1);
    },
    submit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$loading(true);
          const domains = this.model.domains.map(domain => domain.value);
          axios
            .post("/blacklist-domains", { names: domains })
            .then(() => {
              this.$toasted.success(
                "All given domain has been successfully added to blacklist"
              );
              this.$router.push({
                name: "blacklist-domains.list"
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
        this.$router.push({
          name: "blacklist-domains.list"
        });
      }
    }
  }
};
</script>
