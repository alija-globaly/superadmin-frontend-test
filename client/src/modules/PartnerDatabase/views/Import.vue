<template>
  <div
    class="fixed inset-0 z-50 overflow-auto flex"
    style="background-color: rgba(0, 0, 0, 0.6); filter: blur(10%)"
  >
    <div
      class="fixed shadow-lg max-w-lg md:relative bottom-0 inset-x-0 align-top m-auto bg-white md:rounded w-full md:h-auto md:shadow"
    >
      <div
        class="bg-gray-300 border-b border-gray-400 flex justify-between px-6 py-4"
      >
        <h2 class="font-normal text-xl">Import Partner Database</h2>
        <button @click="cancel" class="m-0 p-0 appearance-none h-full">
          <i class="material-icons fill-current">close</i>
        </button>
      </div>
      <form class="mt-4" @submit.prevent="submit">
        <div class="px-6 py-4">
          <div class="flex w-full justify-center bg-grey-lighter">
            <div>
              <label
                class="w-64 flex flex-col items-center px-4 py-5 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white"
              >
                <svg
                  class="w-10 h-10"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                  />
                </svg>
                <span
                  class="mt-2 text-base leading-normal uppercase"
                  v-if="!file"
                  >Select excel file</span
                >
                <span class="mt-2 text-base leading-normal" v-if="file">{{
                  file.name
                }}</span>
                <input
                  type="file"
                  @change="handleFileChange"
                  data-vv-as="file"
                  name="file"
                  class="hidden"
                  v-validate="'required|ext:xlsx'"
                />
              </label>
              <span class="text-sm text-red-600">{{
                errors.first("file")
              }}</span>
            </div>
          </div>
        </div>
        <div class="mt-6 flex px-6 py-4">
          <RamroButton variant="primary" class="mr-3">Import</RamroButton>
          <RamroButton type="button" class="content-end" @click="cancel"
            >Cancel</RamroButton
          >
          <a
            target="__blank"
            href="https://docs.google.com/spreadsheets/d/1V7ewcECK6e62snEpI8yp3ddfPzBeN6KrEBkwb4SoOGY/edit?usp=sharing"
            class="hover:shadow focus:outline-none ml-3 no-underline rounded block text-sm py-2 px-4 font-sans tracking-wide font-medium bg-white text-green-600 border border-green-500"
            >View Sample Template</a
          >
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import RamroButton from "@/components/Button/Button.vue";

export default {
  components: {
    RamroButton
  },
  data() {
    return {
      file: null
    };
  },
  methods: {
    handleFileChange(e) {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.file = e.target.files[0];
        }
      });
    },

    async submit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$loading(true);
          let formData = new FormData();
          formData.append("file", this.file);
          axios
            .post("partner-product-database/import", formData, {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            })
            .then(() => {
              this.$router.push({ name: "partner.list" });
              this.$toasted.success(
                "Partner Import request has been successfully queued"
              );
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
      this.$router.push({ name: "partner.list" });
    }
  }
};
</script>
