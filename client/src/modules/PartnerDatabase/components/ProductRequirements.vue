<template>
  <form @submit.prevent="save">
    <fieldset class="border rounded px-6 py-4 mt-8 bg-white">
      <legend class="bg-gray-600 px-3 py-2 text-white rounded">
        English Test Scores
      </legend>
      <div>
        <div class="flex mb-2">
          <span class="w-1/6 font-medium"></span>
          <span class="w-1/6 font-medium text-right ">Listening</span>
          <span class="w-1/6 font-medium text-right mr-2">Reading</span>
          <span class="w-1/6 font-medium text-right mr-2">Writing</span>
          <span class="w-1/6 font-medium text-right mr-2">Speaking</span>
          <span class="w-1/6 font-medium text-right mr-2">Overall Score</span>
        </div>
        <div
          class="flex mb-4"
          v-for="testLabel in $options.englishTestScores"
          :key="testLabel"
        >
          <div class="w-1/6 mr-2 font-medium">
            {{ testLabel }}
          </div>
          <div class="w-1/6 mr-2">
            <RamroInput
              :readOnly="!$can('manage', 'partner-database')"
              type="number"
              v-model="englishTestScoresModel[testLabel]['Listening']"
            >
            </RamroInput>
          </div>
          <div class="w-1/6 mr-2">
            <RamroInput
              :readOnly="!$can('manage', 'partner-database')"
              type="number"
              v-model="englishTestScoresModel[testLabel]['Reading']"
            >
            </RamroInput>
          </div>
          <div class="w-1/6 mr-2">
            <RamroInput
              :readOnly="!$can('manage', 'partner-database')"
              type="number"
              v-model="englishTestScoresModel[testLabel]['Writing']"
            >
            </RamroInput>
          </div>
          <div class="w-1/6 mr-2">
            <RamroInput
              type="number"
              :readOnly="!$can('manage', 'partner-database')"
              v-model="englishTestScoresModel[testLabel]['Speaking']"
            >
            </RamroInput>
          </div>
          <div class="w-1/6 mr-2">
            <RamroInput
              :readOnly="!$can('manage', 'partner-database')"
              type="number"
              v-model="englishTestScoresModel[testLabel]['Overall']"
            >
            </RamroInput>
          </div>
        </div>
      </div>
    </fieldset>
    <fieldset class="border rounded px-6 py-4 mt-8 bg-white">
      <legend class="bg-gray-600 px-3 py-2 text-white rounded">
        Other Test Scores
      </legend>
      <div class="mt-4">
        <div class="flex mb-2">
          <span class="w-1/6 font-medium mr-2">SAT I</span>
          <span class="w-1/6 font-medium mr-2">SAT II</span>
          <span class="w-1/6 font-medium mr-2">GRE</span>
          <span class="w-1/6 font-medium">GMAT</span>
        </div>
        <div class="flex mb-4">
          <div class="w-1/6 mr-2">
            <RamroInput
              :readOnly="!$can('manage', 'partner-database')"
              type="number"
              v-model="otherTestScores['SAT I']"
            >
            </RamroInput>
          </div>
          <div class="w-1/6 mr-2">
            <RamroInput
              :readOnly="!$can('manage', 'partner-database')"
              type="number"
              v-model="otherTestScores['SAT II']"
            >
            </RamroInput>
          </div>
          <div class="w-1/6 mr-2">
            <RamroInput
              :readOnly="!$can('manage', 'partner-database')"
              type="number"
              v-model="otherTestScores['GRE']"
            >
            </RamroInput>
          </div>
          <div class="w-1/6 mr-2">
            <RamroInput
              :readOnly="!$can('manage', 'partner-database')"
              type="number"
              v-model="otherTestScores['GMAT']"
            >
            </RamroInput>
          </div>
        </div>
      </div>
    </fieldset>
  </form>
</template>
<script>
import axios from "axios";
import RamroInput from "@/components/Input/Input.vue";

const englishTestScores = ["TOEFL", "IELTS", "PTE"];
const otherTestScores = ["SAT I", "SAT II", "GRE", "GMAT"];
export default {
  name: "ProductRequirements",
  components: {
    RamroInput
  },
  englishTestScores,
  otherTestScores,
  props: {
    englishTestScores: {
      type: Object
    },
    otherTestScores: {
      type: Object
    }
  },
  data() {
    return {
      englishTestScoresModel: {},
      otherTestScoresModel: {}
    };
  },
  watch: {
    englishTestScores: {
      immediate: true,
      handler(newEnglishTestScores) {
        this.englishTestScoresModel = newEnglishTestScores;
      }
    },
    otherTestScores: {
      immediate: true,
      handler(newOtherTestScores) {
        this.otherTestScoresModel = newOtherTestScores;
      }
    }
  },
  methods: {
    save() {
      this.$validator.validateAll().then(result => {
        if (result) {
          axios
            .put("/product/" + this.$route.params.productId + "/test-scores", {
              englishTestScores: this.englishTestScoresModel,
              otherTestScores: this.otherTestScoresModel
            })
            .then(() => {
              this.$toasted.success(
                "Product requirements updated successfully"
              );
            })
            .catch(() => {
              this.$toasted.error(
                "Oops, Something went wrong..Please reload the page"
              );
            });
        }
      });
    }
  }
};
</script>
