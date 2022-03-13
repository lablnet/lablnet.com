<template>
  <a
    :href="link"
    class="
      mt-6
      hover:underline
      font-bold
      rounded-full
      border-black-500 border-2
      my-6
      py-4
      px-8
      focus:outline-none focus:shadow-outline
      transform
      transition
      hover:scale-105
      duration-300
      ease-in-out
    "
    :target="target"
    :class="
      gray === true
        ? 'border-black bg-white dark:border-white dark:bg-transparent'
        : ''
    "
    :disabled="disable"
  >
    {{ text }}
  </a>
</template>

<script lang="js">
export default {
    name: "Button",
    props: {
        text: {
            type: String,
            default: "Button"
        },
        link: {
            type: String,
            default: "javascript:void(1)"
        },
        target: {
            type: String,
            default: "_self"
        },
        gray: {
            type: Boolean,
            default: true
        },
        disable: {
          type: Boolean,
          default: false
        }
    },
}
</script>
