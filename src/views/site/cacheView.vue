<template>
  <div class="mb-2">
    <section class="">
      <div class="container px-5 py-12 mx-auto">
        <div class="text-center mb-12">
          <h1
            class="sm:text-3xl text-2xl font-medium text-center title-font mb-4"
          >
            Clear Cache
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base mb-6">
            Clear the cache of the application to make sure that the latest
            changes are reflected.
          </p>
          <ButtonComp text="Clear Cache" @click="doSubmit" p_type="button" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ButtonComp from "@/components/ButtonComp.vue";
import { clearCache } from "@/utils";

export default {
  name: "CacheView",
  components: {
    ButtonComp,
  },
  methods: {
    doSubmit() {
      clearCache();
      window.setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    },
  },
};
</script>
