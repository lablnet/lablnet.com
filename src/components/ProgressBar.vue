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
            const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const percent = (windowScroll / height) * 100;
            this.klass = (percent > 99) ? "progress-bar-green" : "progress-bar-blue";

            this.progress = percent;
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    }
}
</script>
