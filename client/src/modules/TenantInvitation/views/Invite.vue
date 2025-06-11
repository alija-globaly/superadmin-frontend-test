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
          Invite new Agentcis Tenant
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
              <p>
                Please enter email address to whom you want to send AgentCis
                registration invitation. Just in case, the invitation was
                already sent to given email and it hasn't been accepted it will
                resend the invitation.
              </p>
            </div>
          </div>
          <RamroInput
            v-validate="'required'"
            class="mb-4 mt-4 w-full"
            label="Email"
            name="email"
            v-model="model.email"
            :has-error="errors.has('email')"
          >
            <span class="text-sm text-red-600">
              {{ errors.first("email") }}
            </span>
          </RamroInput>
        </div>
        <div
          class="bg-gray-300 border-gray-400 border-t flex mt-4 px-6 py-4 w-full"
        >
          <RamroButton variant="primary" class="mr-3">Send</RamroButton>
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
  name: "AddNewTalent",
  components: {
    RamroInput,
    RamroButton
  },
  data() {
    return {
      model: {
        email: ""
      }
    };
  },
  methods: {
    submit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$loading(true);
          axios
            .post("/tenant/invite", this.model)
            .then(() => {
              this.$toasted.success(
                "Tenant invitation has been successfully sent"
              );
              this.$router.push({
                name: "tenant-invitation.list"
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
        name: "tenant-invitation.list"
      });
    }
  }
};
</script>
