<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener noreferrer"
    class="
      glass-panel
      inline-flex
      relative
      px-4
      py-2
      rounded-full
      text-sm
      font-medium
      text-slate-200
      hover:bg-white/10
      hover:text-white
      transition-all
      duration-300
      items-center
      gap-3
      hover:scale-105
    "
  >
    <img
      class="
        h-6
        w-6
        rounded-full
        border border-white/20
        shadow-sm
      "
      :src="picture"
      :alt="name"
    />
    <span>{{ name }}</span>
    <span
      class="
        px-2
        py-0.5
        rounded-full
        bg-white/10
        text-xs
        font-bold
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
