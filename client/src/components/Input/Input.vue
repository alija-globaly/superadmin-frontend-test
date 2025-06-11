<template>
  <div class="">
    <label
      :class="[
        hasError ? 'text-red-700' : 'text-gray-600',
        label ? 'mb-2' : ''
      ]"
      class="block tracking-wide text-sm font-bold"
    >
      {{ label }}
    </label>
    <input
      :class="inputClass"
      :value="model"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      @input="onInput"
      :disabled="readOnly"
      @focus="onFocus"
    />
    <slot></slot>
  </div>
</template>
<script>
const TYPES = [
  "text",
  "password",
  "email",
  "number",
  "url",
  "tel",
  "search",
  "range",
  "color",
  "date",
  "time",
  "datetime",
  "datetime-local",
  "month",
  "week"
];
export default {
  name: "RamroInput",
  props: {
    value: {
      type: [String, Number],
      required: false,
      default: ""
    },
    type: {
      type: String,
      default: "text",
      validator: type => TYPES.includes(type)
    },
    ariaInvalid: {
      type: [Boolean, String],
      default: false
    },
    autocomplete: {
      type: String,
      default: null
    },
    hasError: {
      type: Boolean,
      default: false
    },
    label: String,
    name: String,
    placeholder: String,
    readOnly: {
      type: [Boolean, String],
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    },
    inputClass() {
      const classes = [
        "transition",
        "appearance-none",
        "block",
        "w-full mb-1",
        "leading-normal",
        "border border-transparent",
        "text-gray-800",
        "bg-gray-100",
        "focus:outline-none",
        "border border-gray-300 rounded py-2 px-4",
        this.type == "number" ? "text-right" : ""
      ];
      if (this.hasError) {
        return classes.concat(["focus:bg-gray-100", "border-red-700"]);
      }
      return classes.concat(["focus:bg-white", "focus:border-blue-500"]);
    }
  },
  methods: {
    onInput(e) {
      if (this.type === "number") {
        this.model = Number(e.target.value);
      } else {
        this.model = e.target.value;
      }
    },
    onFocus() {
      this.$emit("focus");
    }
  }
};
</script>
