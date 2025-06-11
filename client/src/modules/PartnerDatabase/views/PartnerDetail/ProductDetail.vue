<template>
  <Drawer size="max-w-5xl">
    <FocusTrap>
      <div
        class="bg-gray-300 border-b border-gray-400 flex justify-between px-6 py-4"
      >
        <h2 class="font-normal text-xl">
          {{ product.name }}
        </h2>
        <div class="flex items-center">
          <button
            v-if="$can('manage', 'partner-database')"
            title="Actions available for this product"
            @click="$refs.productMenu.open($event)"
            class="inline-flex focus:outline-none m-0 p-0 appearance-none h-full mr-2"
          >
            <i class="material-icons text-gray-700">more_vert</i>
          </button>
          <button
            @click="close"
            class="inline-flex m-0 p-0 appearance-none h-full"
          >
            <i class="material-icons fill-current">close</i>
          </button>
        </div>
      </div>
      <div class="p-6">
        <div class="mb-6 ml-3" v-if="product.description">
          <span class="font-medium inline-block mb-3">Description</span>
          <div class="text-gray-700" v-html="product.description"></div>
        </div>
        <div class="mb-8 flex items-center">
          <div
            class="flex flex-col bg-gray-200 border border-gray-400  px-4 py-3 rounded-lg"
          >
            <div class="flex items-center mb-2">
              <i class="material-icons mr-2 md-18 text-gray-700">access_time</i>
              <span class="font-medium">Duration</span>
            </div>
            <span class="inline-block text-base ml-6">
              {{ product.duration || "Not Available" }}
            </span>
          </div>
          <div
            class="flex flex-col bg-gray-200 border border-gray-400  px-4 py-3 rounded-lg ml-8"
          >
            <div class="flex items-center mb-2">
              <i class="material-icons md-18 mr-2 text-gray-700"
                >calendar_today</i
              >
              <span class="font-medium">Intake Month</span>
            </div>
            <span class="inline-block ml-6" v-if="product.id">
              {{
                product.intake_month.map(month => month["value"]).join(", ") ||
                  "Not Available"
              }}
            </span>
          </div>
          <div
            class="flex flex-col bg-gray-200  border border-gray-400 px-4 py-3 rounded-lg ml-8"
          >
            <div class="flex items-center mb-2">
              <i class="material-icons mr-2 md-18 text-gray-700">check</i>
              <span class="font-medium">Academic Requirement</span>
            </div>
            <span class="inline-block ml-6">
              {{
                product.academic_requirement &&
                product.academic_requirement.degree_level
                  ? product.academic_requirement.degree_level.name
                  : "Not Available"
              }}
            </span>
          </div>
        </div>

        <fieldset class="border-t rounded py-4 mt-8 mb-8" v-if="isEducation">
          <legend class="bg-gray-600 px-3 py-1 text-white rounded">
            Subject Area & Level
          </legend>
          <div class="flex text-gray-700">
            <div class="w-1/3 flex flex-col">
              <span class="font-medium text-gray-600 mb-1">Subject Area</span>
              <template
                v-if="
                  product.subject_area_and_level &&
                    product.subject_area_and_level.subject_area
                "
              >
                <span>{{
                  product.subject_area_and_level.subject_area.name || "-"
                }}</span>
              </template>
              <template v-else>
                <span>-</span>
              </template>
            </div>
            <div class="w-1/3 flex flex-col">
              <span class="font-medium text-gray-600 mb-1">Subject</span>
              <template
                v-if="
                  product.subject_area_and_level &&
                    product.subject_area_and_level.subject
                "
              >
                <span>{{
                  product.subject_area_and_level.subject.name || "-"
                }}</span>
              </template>
              <template v-else>
                <span>-</span>
              </template>
            </div>
            <div class="w-1/3 flex flex-col">
              <span class="font-medium text-gray-600 mb-1">Degree Level</span>
              <template
                v-if="
                  product.subject_area_and_level &&
                    product.subject_area_and_level.degree_level
                "
              >
                <span>{{
                  product.subject_area_and_level.degree_level.name || "-"
                }}</span>
              </template>
              <template v-else>
                <span>-</span>
              </template>
            </div>
          </div>
        </fieldset>
        <tabs>
          <tab
            name="Branches"
            :selected="true"
            class="bg-gray-100 h-screen -mx-6"
          >
            <ul
              class="branches-list list-reset px-6 pt-10"
              v-if="product.branches"
            >
              <li
                tabindex="0"
                class="items-center p-6 w-full bg-white rounded border focus:outline-none text-gray-700 focus:bg-blue-100"
                v-for="branch in product.branches"
                :key="branch.id"
                :class="{
                  'border-l-4 border-b-0 border-t-0 border-r-0 border-blue-600 shadow-md':
                    branch.type == 'Head Office'
                }"
              >
                <div class="flex flex-col flex-1">
                  <div class="inline-flex align-middle">
                    <i class="material-icons md-18 fill-current mr-5"
                      >business</i
                    >
                    <span class="font-medium">{{ branch.name }}</span>
                  </div>
                  <div class="inline-flex items-center align-middle mt-5">
                    <i class="material-icons md-18 fill-current mr-5"
                      >contact_mail</i
                    >
                    <span class="block">{{ branch.email }}</span>
                  </div>
                  <div class="inline-flex items-center align-middle mt-3">
                    <i class="material-icons md-18 fill-current mr-5"
                      >location_on</i
                    >
                    <span class="block">
                      {{ branch.street || "-" }}, {{ branch.state }},
                      {{ branch.country.country_name }}
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </tab>
          <tab name="Fees" class="bg-gray-100 h-screen -mx-6">
            <ProductFees :fees="product.fees"></ProductFees>
          </tab>
          <tab
            name="Requirements"
            class="bg-gray-100 h-screen -mx-6"
            v-if="isEducation"
          >
            <ProductRequirements
              :englishTestScores="product.english_test_score"
              :otherTestScores="product.other_test_score"
            ></ProductRequirements>
          </tab>
        </tabs>
      </div>
    </FocusTrap>
    <ContextMenu ref="productMenu" class="flex-row">
      <template>
        <div
          class="flex text-black opacity-75 cursor-pointer mt-2"
          @click="edit"
        >
          <a
            class="no-underline text-current flex items-center py-2 w-full hover:bg-gray-200"
          >
            <i class="material-icons md-18 fill-current mr-3 ml-5">edit</i>
            <div>Edit</div>
          </a>
        </div>
        <div
          v-if="!product.deleted_at"
          class="flex text-black opacity-75 cursor-pointer mb-2"
          @click="deactivate"
        >
          <a
            class="no-underline text-current flex items-center hover:bg-gray-200 py-2 w-full"
          >
            <i class="material-icons md-18 fill-current mr-3 ml-5"
              >visibility_off</i
            >
            <div>Deactivate</div>
          </a>
        </div>
        <div
          v-if="product.deleted_at"
          class="flex text-black opacity-75 cursor-pointer mb-2"
          @click="activate"
        >
          <a
            class="no-underline text-current flex items-center py-2 w-full hover:bg-gray-200"
          >
            <i class="material-icons md-18 fill-current mr-3 ml-5"
              >visibility</i
            >
            <div>Activate</div>
          </a>
        </div>
        <div
          class="flex text-black opacity-75 cursor-pointer mb-2"
          @click="remove"
        >
          <a
            class="no-underline text-current flex items-center py-2 w-full hover:bg-gray-200"
          >
            <i class="material-icons md-18 fill-current mr-3 ml-5">delete</i>
            <div>Delete</div>
          </a>
        </div>
      </template>
    </ContextMenu>
  </Drawer>
</template>
<script>
import Drawer from "@/layout/Drawer.vue";
import FocusTrap from "vue-focus-lock";
import axios from "axios";
import Tabs from "@/components/Tab/Tabs.vue";
import Tab from "@/components/Tab/Tab.vue";
import ContextMenu from "@/components/ContextMenu/ContextMenu.vue";
import ProductFees from "./../../components/ProductFees.vue";
import ProductRequirements from "./../../components/ProductRequirements.vue";

export default {
  components: {
    ContextMenu,
    Drawer,
    FocusTrap,
    ProductFees,
    ProductRequirements,
    Tabs,
    Tab
  },
  props: {
    partner: {}
  },

  data() {
    return {
      product: {
        branches: []
      }
    };
  },
  computed: {
    masterCategorySelected() {
      if (this.partner && this.partner.category) {
        if (this.partner.category.master) {
          return true;
        }
      }
      return false;
    },
    isEducation() {
      if (this.masterCategorySelected) {
        if (this.partner.category.master.name === "Education") {
          return true;
        }
      }
      return false;
    }
  },
  async beforeRouteEnter(to, from, next) {
    let response = await axios.get(
      "product/" + to.params.productId + "?include=branches"
    );
    next(vm => {
      vm.product = response.data.data;
    });
  },
  methods: {
    fetch() {
      axios
        .get("product/" + this.$route.params.productId + "?include=branches")
        .then(response => {
          this.product = Object.assign({}, response.data.data);
        });
    },
    edit() {
      this.$router.push({
        name: "product.detail.edit",
        params: {
          id: this.$route.params.id,
          productId: this.$route.params.productId
        }
      });
    },
    deactivate() {
      if (window.confirm("Are you sure you want to de-activate ?")) {
        axios
          .post("product/" + this.$route.params.productId + "/deactivate")
          .then(() => {
            this.$toasted.success("Product deactivated successfully");
            this.fetch();
          })
          .catch(() => {
            this.$toasted.error("Oops, Something went wrong..");
          });
      }
    },
    activate() {
      if (window.confirm("Are you sure you want to activate ?")) {
        axios
          .post("product/" + this.$route.params.productId + "/activate")
          .then(() => {
            this.$toasted.success("Product activated successfully");
            this.fetch();
          })
          .catch(() => {
            this.$toasted.error("Oops, Something went wrong..");
          });
      }
    },
    remove() {
      if (window.confirm("Are you sure you want to delete ?")) {
        axios
          .delete("product/" + this.$route.params.productId)
          .then(() => {
            this.$toasted.success("Product detail deleted successfully");
            this.$router.push({
              name: "partner.products",
              params: { id: this.$route.params.id }
            });
          })
          .catch(() => {
            this.$toasted.error("Oops, Something went wrong..");
          });
      }
    },

    close() {
      this.$router.push({
        name: "partner.products",
        params: { id: this.$route.params.id }
      });
    }
  }
};
</script>
<style scoped>
.branches-list {
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(2, 1fr);
}
</style>
