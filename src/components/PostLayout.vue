<template>
  <div class="min-h-screen container">
    <section class="py-10 px-5">
      <section class="hero container max-w-screen-lg mx-auto pb-10" v-if="coverPic">
        <img class="rounded object-cover !m-0" :src="coverPic" />
      </section>
      <section class="">
        <div class="container" v-if="title">
          <h1 class="title">{{ title }}</h1>

          <p class="text-justify mb-6" v-if="description">
            {{ description }}
          </p>
        </div>

        <hr class="mb-2" />
        <slot></slot>
      </section>
    </section>
  </div>
</template>

<script lang="js">
export default {
    name: "PostLayout",
    props: {
        title: {
            type: String,
            default: null,
        },
        description: {
            type: String,
            default: null,
        },
        coverPic: {
            type: String,
            default: null,
        }
    }
}
</script>
