<template>
  <div
    class="bg-white shadow-lg rounded block border fixed outline-none"
    style="margin: 0; padding: 0; width: 260px;"
    v-if="show"
    :style="style"
    tabindex="-1"
    v-on-clickaway="close"
    @click="onClick"
    @contextmenu.capture.prevent
  >
    <slot :data="data"></slot>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "ContextMenu",
  mixins: [clickaway],

  props: {
    /**
     * Close the menu on click.
     *
     * @type {boolean}
     */
    closeOnClick: {
      type: Boolean,
      default: true
    },

    /**
     * Close the menu automatically on window scroll.
     *
     * @type {boolean}
     */
    closeOnScroll: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    /**
     * Generate the CSS styles for positioning the context menu.
     *
     * @returns {object|null}
     */
    style() {
      return this.show
        ? { top: `${this.top}px`, left: `${this.left}px` }
        : null;
    }
  },

  data() {
    return {
      top: null,
      left: null,
      show: false,
      data: null
    };
  },

  methods: {
    /**
     * Add scroll event listener to close context menu.
     */
    addScrollEventListener() {
      document
        .getElementById("content-area")
        .addEventListener("scroll", this.close, { passive: true });
    },

    /**
     * Close the context menu.
     *
     * @param {boolean|Event} emit Used to prevent event being emitted twice from when menu is clicked and closed
     */
    close(emit = true) {
      if (!this.show) {
        return;
      }

      this.top = null;
      this.left = null;
      this.data = null;
      this.show = false;

      if (this.closeOnScroll) {
        this.removeScrollEventListener();
      }

      if (emit) {
        this.$emit("close");
      }
    },

    /**
     * Close the menu if `closeOnClick` is set to true.
     */
    onClick() {
      if (this.closeOnClick) {
        this.close(false);
      }
    },

    /**
     * Open the context menu.
     *
     * @param {MouseEvent} event
     * @param {array|object|string} data User provided data for the menu
     */
    open(event, data) {
      if (this.closeOnScroll) {
        this.addScrollEventListener();
      }

      this.data = data;
      this.show = true;

      this.$nextTick(() => {
        this.positionMenu(event.clientY, event.clientX);
        this.$el.focus();

        this.$emit("open", event, this.data, this.top, this.left);
      });
    },

    /**
     * Set the context menu top and left positions.
     *
     * @param {number} top
     * @param {number} left
     */
    positionMenu(top, left) {
      const largestHeight = window.innerHeight - this.$el.offsetHeight - 25;
      const largestWidth = window.innerWidth - this.$el.offsetWidth - 25;

      if (top > largestHeight) {
        top = largestHeight;
      }

      if (left > largestWidth) {
        left = largestWidth;
      }

      this.top = top;
      this.left = left;
    },

    /**
     * Remove the scroll event listener to close the context menu.
     */
    removeScrollEventListener() {
      document
        .getElementById("content-area")
        .removeEventListener("scroll", this.close);
    }
  },

  watch: {
    /**
     * Add or remove the scroll event listener when the prop value changes.
     *
     * @param {boolean} value
     * @param {boolean} oldValue
     */
    closeOnScroll(value, oldValue) {
      if (value === oldValue) {
        return;
      }

      if (value) {
        this.addScrollEventListener();
      } else {
        this.removeScrollEventListener();
      }
    }
  }
};
</script>
