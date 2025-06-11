<template>
  <div class="mt-6 w-1/2 mb-6">
    <div class="flex justify-between mt-4 mb-6 items-center">
      <h2 class="font-normal text-xl">
        Partner & Product Categories
      </h2>
    </div>

    <ol class="tree text-gray-800">
      <li v-for="categoryGroup in categories" :key="categoryGroup.id">
        <span class="font-bold">{{ categoryGroup.name }}</span>
        <ol>
          <li>
            <span class="font-semibold"
              >Partner Types (Alias: {{ categoryGroup.partner_label }})</span
            >
            <ol>
              <li
                v-for="category in getPartnerTypes(categoryGroup.children)"
                :key="category.id"
              >
                <span>{{ category.name }}</span>
              </li>
            </ol>
          </li>
          <li>
            <span class="font-semibold"
              >Product Types (Alias: {{ categoryGroup.product_label }})</span
            >
            <ol>
              <li
                v-for="category in getProductTypes(categoryGroup.children)"
                :key="category.id"
              >
                <span>{{ category.name }}</span>
              </li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CategoryList",
  data() {
    return {
      categories: []
    };
  },
  created() {
    this.$loading(true);
    axios.get("categories?include=children").then(response => {
      this.categories = response.data.data;
      this.$loading(false);
    });
  },
  methods: {
    getPartnerTypes(categories) {
      return categories.filter(category => {
        return category.type == "partner";
      });
    },
    getProductTypes(categories) {
      return categories.filter(category => {
        return category.type == "product";
      });
    }
  }
};
</script>

<style scoped>
ol {
  margin-left: 30px;
  counter-reset: item;
}

.tree li {
  list-style-type: none;
  margin: 10px 0 10px 10px;
  position: relative;
}
.tree li:before {
  content: "";
  counter-increment: item;
  position: absolute;
  top: -3px;
  left: -30px;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  width: 30px;
  height: 24px;
}
.tree li:after {
  position: absolute;
  content: "";
  top: 20px;
  left: -30px;
  border-left: 1px solid #ddd;
  border-top: 1px solid #ddd;
  width: 30px;
  height: 100%;
}
.tree li:last-child:after {
  display: none;
}
.tree li span {
  display: block;
  border: 1px solid #ddd;
  padding: 10px;
  color: #666666;
  text-decoration: none;
}

.tree li span:hover,
.tree li span:focus {
  color: #4a5568;
  border: 1px solid #a0aec0;
}
.tree li span:hover + ol li span,
.tree li span:focus + ol li span {
  color: #4a5568;
  border: 1px solid #a0aec0;
}
.tree li span:hover + ol li:after,
.tree li span:hover + ol li:before,
.tree li span:focus + ol li:after,
.tree li span:focus + ol li:before {
  border-color: #a0aec0;
}

li span {
  background-color: #cbd5e0;
}

li li span {
  background-color: #e2e8f0;
}

li li li span {
  background-color: #edf2f7;
}
</style>
