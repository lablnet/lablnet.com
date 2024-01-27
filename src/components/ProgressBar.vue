<template>
  <div class="bar-head" v-if="progress > 0">
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

<style scoped>
.bar-head {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 0.25rem;
  background-color: #d1d5db;
}
.h-1 {
  height: 0.25rem;
}
.progress-bar-blue {
  background-color: #4c3eff;
}
.progress-bar-green {
  background-color: #00c853;
}
</style>
