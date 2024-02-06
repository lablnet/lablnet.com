<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="
      inline-flex
      relative
      px-3
      py-1
      rounded-full
      text-sm
      font-medium
      bg-primary
      dark:bg-secondary
      text-text
    "
  >
    <img
      class="
        h-6
        w-6
        rounded-full
        border border-gray-100
        shadow-sm
        absolute
        left-0.5
        top-0.5
      "
      :src="picture"
      :alt="text"
    />
    <span class="pl-5 text-text">{{ name }}</span>
    <span
      class="
        pl-2
        pr-2
        mx-3
        mr-0
        rounded-full
        bg-accent
        text-text
      "
      v-if="contributionsStatus"
      >{{ contributions }}
    </span>
  </a>
</template>

<script lang="js">
export default {
    name: "CollaboratorComp",
    props: {
        name: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            default: '../assets/images/avatar.png',
        },
        link: {
            type: String,
            default: "javascript:void(1)",
        },
        contributions: {
          type: Number,
          default: 1,
        },
        contributionsStatus: {
          type: Boolean,
          default: true,
        }
    }   
}
</script>
