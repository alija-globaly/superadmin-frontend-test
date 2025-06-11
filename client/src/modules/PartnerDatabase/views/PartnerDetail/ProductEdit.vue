<template>
  <Drawer size="max-w-5xl">
    <div
      class="bg-gray-200 border-b border-gray-400 flex justify-between px-6 py-4"
    >
      <h2 class="font-normal text-xl">
        Edit Product
        <small v-if="model.id">( {{ model.name }})</small>
      </h2>
      <button @click="cancel" class="m-0 p-0 appearance-none h-full">
        <i class="material-icons fill-current">close</i>
      </button>
    </div>
    <FocusTrap>
      <form @submit.prevent="submit">
        <div class="px-6 py-4">
          <div
            class="bg-orange-100 border-l-4 flex items-center border-orange-500 text-orange-700 p-4"
            role="alert"
            v-if="!masterCategorySelected"
          >
            <div>
              <i class="material-icons md-24 mr-4">warning</i>
            </div>
            <div>
              <p class="font-bold">Warning!!</p>
              <p>
                Category is required field and dependent on partner category
                field. Looks like partner detail doesn't have category
                associated. Please associate a category to partner and you can
                continue adding new product to it.
              </p>
            </div>
          </div>
          <fieldset class="border rounded px-6 py-4 mt-4">
            <legend class="bg-gray-600 px-3 py-2 text-white rounded">
              Basic Attributes
            </legend>
            <div class="w-full mb-5">
              <label
                class="block tracking-wide text-sm font-bold mb-2  text-gray-600"
              >
                Category
              </label>
              <div class="relative">
                <select
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
            </div>
            <RamroInput
              v-validate="'required'"
              class="mb-3 w-full"
              label="Product Name"
              name="name"
              v-model="model.name"
              :has-error="errors.has('name')"
            >
              <span class="text-sm text-red-500">{{
                errors.first("name")
              }}</span>
            </RamroInput>
            <div class="w-full mb-3" v-if="model.id">
              <label
                class="block text-gray-600 tracking-wide text-sm font-bold mb-2"
              >
                Branches
              </label>
              <VSelect
                v-validate="'required'"
                :options="branches"
                class="border bg-gray-100 rounded px-1 py-1"
                label="name"
                name="branches"
                :components="{ OpenIndicator, Deselect }"
                :reduce="branch => branch.id"
                v-model="model.branches"
                multiple
                :closeOnSelect="false"
              ></VSelect>
              <span class="text-sm text-red-500">{{
                errors.first("branches")
              }}</span>
            </div>
            <RamroInput
              v-validate="'required'"
              class="mb-3 w-full"
              label="Duration"
              name="duration"
              v-model="model.duration"
              :has-error="errors.has('duration')"
            >
              <span class="text-sm text-red-500">{{
                errors.first("duration")
              }}</span>
            </RamroInput>
            <div class="w-full mb-3" v-if="model.id && isEducation">
              <label
                class="block text-gray-600 tracking-wide text-sm font-bold mb-2"
              >
                Intake Month
              </label>
              <VSelect
                :options="$options.Months"
                class="border bg-gray-100 rounded px-1 py-1"
                label="value"
                :components="{ OpenIndicator, Deselect }"
                :reduce="month => month.id"
                v-model="model.intake_month"
                multiple
                :closeOnSelect="false"
              ></VSelect>
            </div>
            <div class="w-full mb-3" v-if="model.id">
              <label
                class="block text-gray-600 tracking-wide text-sm font-bold mb-2"
              >
                Description
              </label>
              <CkEditor
                :editor="editor"
                v-model="model.description"
                :config="editorConfig"
              ></CkEditor>
            </div>
          </fieldset>
          <fieldset class="border rounded  px-6 py-4 mt-8" v-if="isEducation">
            <legend class="bg-gray-600 px-3 py-2 text-white rounded">
              Subject Area & Level
            </legend>
            <div class="w-full mb-3">
              <label
                class="block text-gray-600 tracking-wide text-sm font-bold mb-2"
              >
                Subject Area
              </label>
              <VSelect
                :options="$options.SubjectAreas"
                label="name"
                class="border bg-gray-100 rounded px-1 py-1"
                :components="{ OpenIndicator, Deselect }"
                :value="selectedSubjectArea"
                @input="updateSubjectArea"
              ></VSelect>
            </div>
            <div class="w-full mb-3">
              <label
                class="block text-gray-600 tracking-wide text-sm font-bold mb-2"
              >
                Subject
              </label>
              <VSelect
                label="name"
                :disabled="!selectableSubject.length"
                :options="selectableSubject"
                class="border bg-gray-100 rounded px-1 py-1"
                :components="{ OpenIndicator, Deselect }"
                v-model="selectedSubject"
              ></VSelect>
            </div>
            <div class="w-full mb-3">
              <label
                class="block text-gray-600 tracking-wide text-sm font-bold mb-2"
              >
                Degree Level
              </label>
              <VSelect
                :options="$options.DegreeLevels"
                class="border bg-gray-100 rounded px-1 py-1"
                :components="{ OpenIndicator, Deselect }"
                label="name"
                v-model="selectedSubjectAreaLevel"
              ></VSelect>
            </div>
          </fieldset>
          <fieldset class="border rounded  px-6 py-4 mt-8" v-if="isEducation">
            <legend class="bg-gray-600 px-3 py-2 text-white rounded">
              Academic Requirements
            </legend>
            <div class="w-full mb-3" v-if="model.id">
              <label
                class="block text-gray-600 tracking-wide text-sm font-bold mb-2"
              >
                Degree Level
              </label>
              <VSelect
                :options="$options.DegreeLevels"
                class="border bg-gray-100 rounded px-1 py-1"
                name="degree_level"
                label="name"
                :components="{ OpenIndicator, Deselect }"
                v-model="model.degree_level"
              ></VSelect>
            </div>
            <div class="mt-4">
              <span
                class="block text-gray-600 tracking-wide text-sm font-bold mb-2"
                >Academic Score</span
              >
              <div class="mt-2">
                <label class="inline-flex items-center">
                  <input
                    v-validate="`${model.academic_score ? 'required' : ''}`"
                    type="radio"
                    class="form-radio"
                    name="academic_score_type"
                    v-model="model.academic_score_type"
                    value="percentage"
                  />
                  <span class="ml-2">Percentage</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    class="form-radio"
                    name="academic_score_type"
                    v-model="model.academic_score_type"
                    value="GPA"
                  />
                  <span class="ml-2">GPA</span>
                </label>
              </div>
            </div>
            <RamroInput
              v-validate="`${model.academic_score_type ? 'required' : ''}`"
              class="mb-3 w-full"
              name="academic_score"
              v-model="model.academic_score"
              :has-error="errors.has('academic_score')"
            >
              <span class="text-sm text-red-500">{{
                errors.first("academic_score")
              }}</span>
            </RamroInput>
          </fieldset>
          <fieldset class="bg-white border rounded px-6 py-4 mt-8 bg-white">
            <legend class="bg-gray-600 px-3 py-2 text-white rounded">
              Default Fee
            </legend>
            <div>
              <div class="flex justify-end mb-4">
                <div class="w-2/6">
                  <label
                    class="block text-gray-600 tracking-wide text-sm font-bold mb-2"
                  >
                    Country Of Residency
                  </label>
                  <VSelect
                    :disabled="true"
                    :noDrop="true"
                    :clearable="false"
                    class="border bg-gray-100 rounded px-1 py-1"
                    value="All Countries"
                  ></VSelect>
                </div>
                <div class="w-2/6 ml-4">
                  <label
                    class="block text-gray-600 tracking-wide text-sm font-bold mb-2"
                  >
                    Installment Type
                  </label>
                  <VSelect
                    :options="$options.feeTerms"
                    class="border bg-gray-100 rounded px-1 py-1"
                    name="fee_term"
                    label="name"
                    placeholder="Select Fee Type"
                    v-model="model.fees.feeTerms"
                    v-validate="'required'"
                    :disabled="!$can('manage', 'partner-database')"
                    :noDrop="!$can('manage', 'partner-database')"
                    :clearable="!$can('manage', 'partner-database')"
                    :components="{ OpenIndicator, Deselect }"
                  ></VSelect>
                  <span class="text-sm text-red-500">
                    {{ errors.first("feeTerms") }}
                  </span>
                </div>
              </div>
              <span
                class="w-full border inline-flex border-gray-200 mb-3"
              ></span>

              <div class="flex mb-2">
                <span class="w-2/6 font-medium">Fee Type</span>
                <span class="w-1/6 font-medium text-right mr-4">Amount</span>
                <span class="w-1/6 font-medium text-right mr-4">
                  Installments
                </span>
                <span class="w-1/6 font-medium text-right">Total Fee</span>
                <span class="w-1/6 font-medium text-right"></span>
              </div>
              <ProductFeeItem
                v-for="(feeDetail, index) in model.fees.fee_items"
                :key="index"
                :index="index"
                :fee-detail="feeDetail"
                @remove="remove(index)"
                @updated="handleFeeUpdate(index, $event)"
              ></ProductFeeItem>
              <div class="mt-5" v-if="$can('manage', 'partner-database')">
                <RamroButton
                  type="button"
                  variant="outline"
                  class="text-xs py-1"
                  @click="addFeeItem"
                >
                  Add new
                </RamroButton>
              </div>
            </div>
          </fieldset>
          <!--          <ProductFees :fees="model.fees"></ProductFees>-->
          <ProductRequirements
            v-if="Object.keys(model.english_test_score).length"
            :englishTestScores="model.english_test_score"
            :otherTestScores="model.other_test_score"
          ></ProductRequirements>
        </div>
        <div
          class="bg-gray-300 border-gray-400 border-t flex mt-8 px-6 py-4 w-full"
          :class="{ 'fixed bottom-0': !isEducation }"
        >
          <RamroButton variant="primary" class="mr-3">Save</RamroButton>
          <RamroButton type="button" class="content-end" @click="cancel">
            Cancel
          </RamroButton>
        </div>
      </form>
    </FocusTrap>
  </Drawer>
</template>
<script>
import VSelect from "vue-select";
import axios from "axios";
import FocusTrap from "vue-focus-lock";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import EssentialsPlugin from "@ckeditor/ckeditor5-essentials/src/essentials";
import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
import ParagraphPlugin from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import RamroInput from "@/components/Input/Input.vue";
import RamroButton from "@/components/Button/Button.vue";
import Countries from "@/common/countries";
import Drawer from "@/layout/Drawer.vue";
import Months from "@/common/months";
import SubjectAreas from "@/common/subject_areas_and_levels";
import DegreeLevels from "@/common/degreeLevels";
// import ProductFees from "@/modules/PartnerDatabase/components/ProductFees.vue";
import ProductRequirements from "@/modules/PartnerDatabase/components/ProductRequirements.vue";
import ProductFeeItem from "@/modules/PartnerDatabase/components/ProductFeeItem.vue";
const feeTerms = [
  {
    id: 1,
    name: "Full Fee"
  },
  {
    id: 2,
    name: "Per Year"
  },
  {
    id: 3,
    name: "Per Month"
  },
  {
    id: 4,
    name: "Per Term"
  },
  {
    id: 5,
    name: "Per Trimester"
  },
  {
    id: 6,
    name: "Per Semester"
  },
  {
    id: 7,
    name: "Per Week"
  },
  {
    id: 8,
    name: "Installment"
  }
];

export default {
  name: "ProductEdit",
  Countries,
  Months,
  SubjectAreas,
  DegreeLevels,
  feeTerms,
  props: {
    partner: {
      required: true,
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    ProductFeeItem,
    ProductRequirements,
    // ProductFees,
    Drawer,
    FocusTrap,
    RamroInput,
    RamroButton,
    VSelect,
    CkEditor: CKEditor.component
  },
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        plugins: [
          EssentialsPlugin,
          BoldPlugin,
          ItalicPlugin,
          LinkPlugin,
          ParagraphPlugin,
          Alignment
        ],
        toolbar: {
          items: ["bold", "italic", "alignment", "link", "undo", "redo"]
        }
      },
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
      selectedSubjectArea: "",
      selectedSubject: "",
      selectedSubjectAreaLevel: "",
      model: {
        branches: [],
        intake_month: [],
        degreeLevel: "",
        category_id: "",
        subject_area_and_level: {},
        fees: {},
        english_test_score: {},
        other_test_score: {}
      },
      branches: [],
      degreeLevels: []
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
    },
    selectableSubject() {
      if (this.selectedSubjectArea) {
        return this.selectedSubjectArea.subjects;
      }
      return [];
    },
    getSubjectAreaAndLevel() {
      const { id, name } = this.selectedSubjectArea;
      return {
        subject_area: { id, name },
        subject: this.selectedSubject,
        degree_level: this.selectedSubjectAreaLevel
      };
    }
  },

  async beforeRouteEnter(to, from, next) {
    let productResponse = await axios.get(
      "product/" +
        to.params.productId +
        "/?include=branches&fields[branches]=branch_id,product_id,name"
    );
    let degreeLevelsResponse = await axios.get("degree-levels");
    let branchesResponse = await axios.get(
      "partner/" + to.params.id + "/branches?fields[partner_branches]=id,name"
    );
    const feeBaseState = {
      fee_type: "",
      amount: 0,
      instalment: 1,
      totalFee: 0,
      inQuotation: true
    };
    next(vm => {
      productResponse.data.data = Object.assign(
        productResponse.data.data,
        productResponse.data.data.academic_requirement
      );

      productResponse.data.data.branches = productResponse.data.data.branches.map(
        branch => branch["branch_id"]
      );
      delete productResponse.data.data.academic_requirement;
      productResponse.data.data.intake_month = productResponse.data.data.intake_month.map(
        month => month["id"]
      );
      if (productResponse.data.data.subject_area_and_level) {
        if (productResponse.data.data.subject_area_and_level.subject) {
          vm.selectedSubject =
            productResponse.data.data.subject_area_and_level.subject;
        }
        if (
          productResponse.data.data.subject_area_and_level.subject_area &&
          productResponse.data.data.subject_area_and_level.subject_area.id
        ) {
          vm.selectedSubjectArea = SubjectAreas.find(subjectArea => {
            return (
              subjectArea.id ===
              productResponse.data.data.subject_area_and_level.subject_area.id
            );
          });
        }
        if (productResponse.data.data.subject_area_and_level.degree_level) {
          vm.selectedSubjectAreaLevel =
            productResponse.data.data.subject_area_and_level.degree_level;
        }
      }

      vm.degreeLevels = degreeLevelsResponse.data.data;
      if (!productResponse.data.data.fees) {
        productResponse.data.data.fees = {};
        productResponse.data.data.fees.fee_items = [feeBaseState];
      }
      vm.model = productResponse.data.data;
      vm.branches = branchesResponse.data.data;
    });
  },
  watch: {
    partner: {
      handler() {
        this.fetchCategory();
      },
      deep: true,
      immediate: true
    },
    getSubjectAreaAndLevel: {
      handler(value) {
        this.model.subject_area_and_level = value;
      },
      immediate: true
    }
  },
  methods: {
    handleFeeUpdate(index, fee) {
      this.$set(this.model.fees.fee_items, index, fee);
    },
    remove(index) {
      this.model.fees.fee_items.splice(index, 1);
    },
    addFeeItem() {
      this.model.fees.fee_items.push({
        fee_type: "",
        amount: 0,
        instalment: 1,
        totalFee: 0,
        inQuotation: true
      });
    },
    updateSubjectArea(selectedSubjectArea) {
      this.selectedSubject = "";
      this.selectedSubjectArea = selectedSubjectArea;
    },
    fetchCategory() {
      if (!this.masterCategorySelected) {
        return;
      }
      this.$loading(true);
      axios
        .get(
          `categories?filter[children.type]=product&filter[id]=${this.partner.category.master.id}&include=children`
        )
        .then(response => {
          this.categories = response.data.data;
        })
        .finally(() => {
          this.$loading(false);
        });
    },

    submit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          axios
            .put("/product/" + this.model.id, this.model)
            .then(() => {
              this.$toasted.success("Product detail updated successfully");
              this.$router.push({
                name: "partner.products",
                params: { id: this.$route.params.id }
              });
            })
            .catch(() => {
              this.$toasted.error("Oops, Something went wrong..");
            });
        }
      });
    },
    cancel() {
      if (window.history.length > 2) {
        this.$router.back();
      } else {
        this.$router.push({
          name: "partner.products",
          params: { id: this.$route.params.id }
        });
      }
    }
  }
};
</script>
