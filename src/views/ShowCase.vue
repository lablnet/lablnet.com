<template>
  <section class="py-10 px-5 container" id="showcase">
    <div class="">
      <div class="grid grid-cols-1 gap-5 md:gap-8 xl:grid-cols-3 xl:gap-5">
        <div
          class="
            flex flex-col
            items-center
            justify-center
            text-center
            md:flex-row md:text-left
          "
        >
          <div>
            <img
              :src="
                require(theme === 'dark'
                  ? '../assets/icons/white/projects.svg'
                  : '../assets/icons/projects.svg')
              "
              class="mx-auto h-12 w-auto md:h-20"
              alt="Projects"
            />
          </div>
          <div class="pt-5 md:pl-5 md:pt-0">
            <h1 class="font-body text-2xl font-bold text-primary md:text-3xl dark:text-gray-300">
              50+
            </h1>
            <h4
              class="
                text-grey-dark
                font-header
                text-base
                font-medium
                leading-loose
                dark:text-gray-300
              "
            >
              Finished Projects
            </h4>
          </div>
        </div>

        <div
          class="
            mt-6
            flex flex-col
            items-center
            justify-center
            text-center
            md:mt-10 md:flex-row md:text-left
            lg:mt-0
          "
        >
          <div>
            <img
              :src="
                require(theme === 'dark'
                  ? '../assets/icons/white/clients.svg'
                  : '../assets/icons/clients.svg')
              "
              class="mx-auto h-12 w-auto md:h-20"
              alt="clients"
            />
          </div>
          <div class="pt-5 md:pl-5 md:pt-0">
            <h1 class="font-body text-2xl font-bold text-primary md:text-3xl dark:text-gray-300">
              20+
            </h1>
            <h4
              class="
                text-grey-dark
                font-header
                text-base
                font-medium
                leading-loose
                dark:text-gray-300
              "
            >
              Happy Clients
            </h4>
          </div>
        </div>

        <div
          class="
            mt-6
            flex flex-col
            items-center
            justify-center
            text-center
            md:mt-10 md:flex-row md:text-left
            lg:mt-0
          "
        >
          <div>
            <img
              :src="
                require(theme === 'dark'
                  ? '../assets/icons/white/bugs.svg'
                  : '../assets/icons/bugs.svg')
              "
              class="mx-auto h-12 w-auto md:h-20"
              alt="Bugs"
            />
          </div>
          <div class="pt-5 md:pl-5 md:pt-0">
            <h1 class="font-body text-2xl font-bold text-primary md:text-3xl dark:text-gray-300">
              30+
            </h1>
            <h4
              class="
                text-grey-dark
                font-header
                text-base
                font-medium
                leading-loose
                dark:text-gray-300
              "
            >
              Bugs Fixed
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
export default {
    name: "ShowCase",
    computed: {
        theme() {
            return this.$store.getters['Theme/theme']
        },
  }
}
</script>
