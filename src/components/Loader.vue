<template>
  <div v-if="loading">
    <div class="flex justify-center items-center">
      <div class="loader bg-transparent p-5 rounded-full flex space-x-3">
        <div class="w-5 h-5 bg-black dark:bg-gray-300 rounded-full animate-bounce"></div>
        <div class="w-5 h-5 bg-black dark:bg-gray-300 rounded-full animate-bounce"></div>
        <div class="w-5 h-5 bg-black dark:bg-gray-300 rounded-full animate-bounce"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.loader div {
  animation-duration: 0.5s;
}
.loader div:first-child {
  animation-delay: 0.1s;
}
.loader div:nth-child(2) {
  animation-delay: 0.3s;
}
.loader div:nth-child(3) {
  animation-delay: 0.6s;
}
</style>

<script lang="js">
export default {
  name: "Loader",
  props: {
    loading: Boolean,
  }
}
</script>