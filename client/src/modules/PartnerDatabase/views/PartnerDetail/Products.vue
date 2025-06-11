<template>
  <div class="mt-10 text-gray-800">
    <div>
      <RamroInput v-model="search" type="text" label="Search for product" />
      <RamroButton @click="fetch">Search</RamroButton>
    </div>
    <ul class="products-list list-reset" v-if="products.meta">
      <li
        style="border-left-color: #6CB2EB"
        tabindex="0"
        class="items-center p-4 w-full bg-white rounded mb-3 border border-l-4 focus:outline-none focus:bg-blue-100"
        v-for="product in products.data"
        @contextmenu.prevent="
          $can('manage', 'partner-database')
            ? $refs.productsMenu.open($event, {
                product_id: product.id,
                deleted_at: product.deleted_at
              })
            : ''
        "
        :key="product.id"
        @dblclick="openDetail(product.id)"
      >
        <div class="inline-flex align-middle">
          <span class="font-normal">{{ product.name }}</span>
          <span
              class="ml-2 bg-red-300 font-semibold p-1 top-0 border rounded-md border-red-400 text-sm"
              v-if="product.deleted_at"
          >De-Activated</span>
        </div>
      </li>
    </ul>
    <RamroPagination
      class="mb-6 mt-6"
      v-if="products.meta && products.meta.last_page > 1"
      :current="products.meta.current_page"
      :total="products.meta.last_page"
      @update="fetch($event.page)"
    />
    <ContextMenu ref="productsMenu" class="flex-row">
      <template slot-scope="child">
        <div
          class="flex text-black opacity-75 cursor-pointer hover:bg-gray-200 mt-2"
          @click="edit(child.data.product_id)"
        >
          <a class="no-underline text-current flex items-center py-2 w-full">
            <i class="material-icons md-18 fill-current mr-3 ml-5">edit</i>
            <div>Edit</div>
          </a>
        </div>
        <div
          v-if="!child.data.deleted_at"
          class="flex text-black opacity-75 cursor-pointer hover:bg-gray-200 mb-2"
          @click="deactivate(child.data.product_id)"
        >
          <a class="no-underline text-current flex items-center py-2 w-full">
            <i class="material-icons md-18 fill-current mr-3 ml-5"
              >visibility_off</i
            >
            <div>Deactivate</div>
          </a>
        </div>
        <div
          v-if="child.data.deleted_at"
          class="flex text-black opacity-75 cursor-pointer hover:bg-gray-200 mb-2"
          @click="activate(child.data.product_id)"
        >
          <a class="no-underline text-current flex items-center py-2 w-full">
            <i class="material-icons md-18 fill-current mr-3 ml-5"
              >visibility</i
            >
            <div>Activate</div>
          </a>
        </div>
        <div
          class="flex text-black opacity-75 cursor-pointer hover:bg-gray-200 mb-2"
          @click="remove(child.data.product_id)"
        >
          <a class="no-underline text-current flex items-center py-2 w-full">
            <i class="material-icons md-18 fill-current mr-3 ml-5">delete</i>
            <div>Delete</div>
          </a>
        </div>
      </template>
    </ContextMenu>

    <div>
      <TransitionPage>
        <router-view :partner="partner"></router-view>
      </TransitionPage>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import RamroPagination from "@/components/Pagination/Pagination.vue";
import TransitionPage from "@/components/TransitionPage.vue";
import ContextMenu from "@/components/ContextMenu/ContextMenu.vue";
import RamroInput from "../../../../components/Input/Input.vue";
import RamroButton from "../../../../components/Button/Button.vue";

export default {
  name: "PartnerProductsList",
  props: {
    partner: {}
  },
  components: {
    RamroButton,
    RamroInput,
    ContextMenu,
    RamroPagination,
    TransitionPage
  },
  data() {
    return {
      products: [],
      currentPage: "",
      search: "",
    };
  },
  async beforeRouteEnter(to, from, next) {
    let response = await axios.get(
      "partner/" + to.params.id + "/products?page[size]=30"
    );
    next(vm => {
      vm.products = response.data;
    });
  },
  async beforeRouteUpdate(to, from, next) {
    let response = await axios.get(
      "partner/" + to.params.id + "/products?page[size]=20&page[number]=" + this.currentPage
    );
    this.products = response.data;
    next();
  },
  methods: {
    async fetch(page = 1) {
      this.currentPage = page;
      const extraSearch = this.search ? "&search=" + this.search : "";
      let response = await axios.get(
        "partner/" +
          this.$route.params.id +
          "/products?page[size]=20&page[number]=" +
          page +
          extraSearch
      );

      this.products = Object.assign({}, response.data);
    },
    edit(productId) {
      this.$router.push({
        name: "product.detail.edit",
        params: { id: this.$route.params.id, productId: productId }
      });
    },
    deactivate(productId) {
      if (window.confirm("Are you sure you want to de-activate ?")) {
        axios
          .post("product/" + productId + "/deactivate")
          .then(() => {
            this.$toasted.success("Product deactivated successfully");
            this.fetch();
          })
          .catch(() => {
            this.$toasted.error("Oops, Something went wrong..");
          });
      }
    },
    activate(productId) {
      if (window.confirm("Are you sure you want to activate ?")) {
        axios
          .post("product/" + productId + "/activate")
          .then(() => {
            this.$toasted.success("Product activated successfully");
            this.fetch();
          })
          .catch(() => {
            this.$toasted.error("Oops, Something went wrong..");
          });
      }
    },
    remove(productId) {
      if (window.confirm("Are you sure you want to delete ?")) {
        axios
          .delete("product/" + productId)
          .then(() => {
            this.$toasted.success("Product detail deleted successfully");
            this.fetch();
          })
          .catch(() => {
            this.$toasted.error("Oops, Something went wrong..");
          });
      }
    },
    openDetail(productId) {
      this.$router.push({
        name: "product.detail.edit",
        params: { id: this.$route.params.id, productId: productId }
      });
    }
  }
};
</script>
<style scoped>
.products-list {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
