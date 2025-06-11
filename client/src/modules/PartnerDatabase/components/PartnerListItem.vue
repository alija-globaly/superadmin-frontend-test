<template>
  <div class="flex items-center w-full h-20">
    <div class="inline-flex items-center w-6/12">
      <img
        aria-label="Partner Logo"
        class="rounded-full border block object-contain shadow-inner w-12 h-12"
        v-lazy="partner.logo"
      />
      <div class="font-normal text-lg flex flex-col ml-3">
        {{ partner.name }}
        <span class="text-sm">{{ partner.email }}</span>
      </div>
    </div>
    <div class="flex flex-col ml-3 w-2/12">
      <a
        :href="partner.website"
        target="__blank"
        class="text-current inline-flex truncate"
      >
        {{ partner.website }}
      </a>
      <span class="inline-flex">{{ partner.phone_number || "-" }}</span>
    </div>
    <div class="w-3/12 ml-3">
      <address>
        {{ partner.street || "-" }}
        <br />
        {{ partner.state }},
        {{ partner.country ? partner.country.country_name : "" }}
      </address>
    </div>
    <div class="flex flex-col w-1/12 ml-3">
      <span class="block self-end font-medium">
        {{ partner.branches_count }} branches
      </span>
      <span class="block self-end font-medium">
        {{ partner.products_count }} products
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartnerListItem",
  props: {
    partner: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style>
.partner-item {
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: minmax(340px, 1fr) 230px 230px 100px;
}
</style>
