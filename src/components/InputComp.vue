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
          text-text
          dark:text-text
        "
        >{{ label }} <span v-if="required == true" class="text-accent">*</span>:
      </label>
      <input
        :id="id"
        :name="name"
        :type="type"
        :autocomplete="autocomplete"
        :required="required"
        class="
          w-full
          bg-background
          mt-2
          p-3
          rounded-lg
          focus:outline-none
          focus:shadow-outline
          bg-background
          text-text
          dark:bg-background
          border-primary
          border-2 
          dark:text-text
        "
        :class="error ? '!border-red-500' : ''"
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
    name: "InputComp",
    props: {
        id: {
            type: String,
            default: "text"
        },
        autocomplete: {
            type: String,
            default: "off"
        },
        type: {
            type: String,
            default: "text",
        },
        name: {
            type: String,
            default: "text"
        },
        placeholder: {
            type: String,
            default: null,
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
            type: String,
            default: null,
        },
    },
    methods: {
        updateValue(e) {
            this.$emit('update:modelValue', e.target.value);
        }
    }
}
</script>
