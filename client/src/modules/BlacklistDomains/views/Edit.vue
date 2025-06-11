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
          Update blacklist domain
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
          <RamroInput
            v-validate="'required'"
            class="mb-3 mt-3 flex-1"
            name="domain"
            data-vv-as="domain"
            v-model="model.name"
            placeholder="Please input domain name to add in blacklist"
            :has-error="errors.has('domain')"
          >
            <span class="text-sm text-red-600">
              {{ errors.first("domain") }}
            </span>
          </RamroInput>
        </div>
        <div
          class="bg-gray-300 border-gray-400 border-t flex mt-4 px-6 py-4 w-full"
        >
          <RamroButton variant="primary" class="mr-3">Update</RamroButton>
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
import RamroInput from "@/components/Input/Input.vue";
import RamroButton from "@/components/Button/Button.vue";

export default {
  name: "UpdateDomain",
  components: {
    RamroInput,
    RamroButton
  },
  data() {
    return {
      model: {
        name: this.$route.params.domain,
        old_name: this.$route.params.domain
      }
    };
  },
  methods: {
    submit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$loading(true);
          axios
            .put("/blacklist-domains", this.model)
            .then(() => {
              this.$toasted.success(
                "Domain has been successfully added to blacklist"
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
