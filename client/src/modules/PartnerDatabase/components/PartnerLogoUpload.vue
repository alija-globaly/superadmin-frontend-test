<template>
  <div class="border-2 p-1">
    <div class="h-24 w-full flex bg-gray-100">
      <img v-if="model.logo" class="inline-block w-full" :src="model.logo" />
      <span
        v-else
        class="inline-flex flex-col m-auto font-medium text-xl text-gray-500"
        >No Image</span
      >
    </div>
    <div class="opacity-0 hover:opacity-100">
      <div class="h-full w-full bg-gray-900 opacity-50 absolute inset-0"></div>
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
</template>

<script>
export default {
  name: "PartnerLogoUpload"
};
</script>

<style scoped></style>
