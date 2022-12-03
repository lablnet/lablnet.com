<template>
  <div>
    <a
      v-if="b_type === 'a'"
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
        arrow
        bg-white
        dark:border-white dark:bg-transparent
      "
      :target="target"
      :class="gray === true ? 'border-black' : ''"
      :disabled="disable"
    >
      {{ text }}
    </a>
    <button
      v-else
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
        arrow
        bg-white
        dark:border-white dark:bg-transparent
      "
      :class="gray === true ? 'border-black' : ''"
      :disabled="disable"
    >
      {{ text }}
    </button>
  </div>
</template>

<script lang="js">
export default {
    name: "ButtonComp",
    props: {
        b_type: {
            type: String,
            default: "a"
        },
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
            default: false
        },
        disable: {
          type: Boolean,
          default: false
        }
    }
}
</script>
