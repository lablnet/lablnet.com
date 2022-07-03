<template>
  <div class="rounded-md shadow-sm">
    <div>
      <label
        :for="id"
        class="
          block
          text-sm
          font-medium
          leading-5
          text-gray-700
          dark:text-gray-200
        "
        >{{ label }}</label
      >
      <input
        :id="id"
        :name="name"
        :type="type"
        autocomplete="off"
        :required="required"
        class="
          placeholder-gray-500
          text-gray-900
          focus:z-10
          sm:text-sm
          w-full
          px-4
          py-2
          border-2 border-gray-300
          rounded-lg
          focus:border-purple-600
          focus:outline-none
          focus:shadow-outline-purple-600
        "
        :class="error ? 'border-red-500' : ''"
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateValue"
      />
      <span class="text-red-500 p-2 mt-3" v-if="error"> {{ error }} </span>
    </div>
  </div>
</template>

<script lang="js">
export default {
    name: "Input",
    props: {
        id: {
            type: String,
            default: "email"
        },
        type: {
            type: String,
            default: "text",
        },
        name: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: "",
        },
        modelValue: {
            type: String,
            default: null,
        },
        required: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: null,
        },
        error: {
            type: Boolean,
            default: false,
        },
    },

    methods: {
        updateValue(e) {
            this.$emit('update:modelValue', e.target.value);
        }

    }
}
</script>
