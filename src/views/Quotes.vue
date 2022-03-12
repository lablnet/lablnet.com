<template>
  <section
    class="
      flex-none
      py-10
      px-5
      container
      bg-gray-200
      dark:bg-primary-dark
      mt-5
      mb-5
    "
  >
    <h3 class="subtitle">Quotes.</h3>
    <p>These are quotes written by me in different situations.</p>
    <span class="mt-3 mb-3"><Loader :loading="loading" /></span>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5" v-if="!error">
      <div
        class="
          w-full
          mx-auto
          rounded-lg
          bg-white
          dark:bg-transparent
          dark:text-white
          shadow-lg
          px-5
          pt-5
          text-gray-800
          mt-5
          border-transparent
          dark:border-white
          border-2
        "
        v-for="(quote, index) in data"
        :key="index"
      >
        <div class="w-full mb-10">
          <div class="text-3xl text-black dark:text-white text-left leading-tight h-3">
            “
          </div>
          <p class="text-sm text-gray-600 dark:text-white text-center px-5">
            {{ quote["title"] }}
          </p>
          <div
            class="text-3xl text-black dark:text-white text-right leading-tight h-3 -mt-3"
          >
            ”
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Something went wrong, unable to load.</p>
    </div>
  </section>
</template>

<script lang="js">

import Loader from "@/components/Loader";

export default {
    name: "Quotes",
    components: {
        Loader
    },
    data() {
        return {
            data: [],
            loading: true,
            error: false,
        }
    },
    async mounted() {
       await this.loadData();
    },
    methods: {
        async loadData() {
            fetch(`https://lablnet.github.io/portfolio-data/data/quotes.json?timestamp=${new Date().getTime()}`).then((resp) => resp.json())
                .then(async (data) => {
                    this.data = data;
                    this.loading = false;
                }).catch(function (error) {
                    this.error = true;
            })
        },
    }
}
</script>