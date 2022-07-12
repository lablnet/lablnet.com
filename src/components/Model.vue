<template>
  <div
    tabindex="-1"
    class="
      overflow-y-auto overflow-x-hidden
      fixed
      mt-auto
      mx-auto
      z-50
      w-full
      inset-0
      sm:insert-0
      h-modal
      md:h-full
      justify-center
      items-center
      flex
    "
    :class="showModel == 'true' || showModel == true ? 'block' : 'hidden'"
  >
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
      <div
        class="
          relative
          bg-white
          rounded-lg
          shadow
          dark:bg-gray-900
          shadow-lg
        "
      >
        <div
          class="
            flex
            justify-between
            items-start
            p-4
            rounded-t
            border-b
            dark:border-gray-600
          "
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ title }}
          </h3>
          <button
            type="button"
            class="
              text-gray-400
              bg-transparent
              hover:bg-gray-200 hover:text-gray-900
              rounded-lg
              text-sm
              p-1.5
              ml-auto
              inline-flex
              items-center
              dark:hover:bg-gray-600 dark:hover:text-white
            "
            @click="close"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
    name: "Model",
    props: {
        show: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: null
        },
        description: {
            type: String,
            default: null,
        }
    },
    watch: {
        show: function (newValue) {
            this.showModel = newValue;
        }
    },
    data() {
        return {
            showModel: this.show,
        }
    },
    methods: {
        close() {
            this.showModel = false;
        }
    }
}
</script>
