<template>
  <div
    class="bg-gray-300 h-1 fixed top-0 left-0 w-full z-50"
    v-if="progress > 0"
  >
    <div :style="{ width: progress + '%' }" class="h-1" :class="klass"></div>
  </div>
</template>

<script lang="js">
export default {
    name: "ProgressBar",
    data() {
        return {
            progress: 0,
            klass: "progress-bar-blue"
        }
    },
    methods: {
        handleScroll() {
            // Get the scroll position of the current page
            const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

            // Get the height of the whole document
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

            // Calculate the percentage the user has scrolled down the page
            const percent = (windowScroll / height) * 100;

            // Update the progress bar color
            this.klass = (percent > 99) ? "progress-bar-green" : "progress-bar-blue";

            // Update the progress bar width
            this.progress = percent;
        }
    },
    mounted() {
        // Add the scroll event listener
        window.addEventListener("scroll", this.handleScroll);
    }
}
</script>
