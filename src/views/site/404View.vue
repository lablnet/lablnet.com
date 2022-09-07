<template>
  <div class="mb-8">
    <section class="">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1
            class="sm:text-3xl text-2xl font-medium text-center title-font mb-4"
          >
            404 Not Found
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base mb-6">
            Sorry, the page you looking for does not exists it may be removed.
          </p>
          <router-link
            to="/"
            class="
              mt-6
              hover:underline
              font-bold
              rounded-full
              border-black-500 border-2
              my-6
              py-4
              px-8
              focus:outline-none focus:shadow-outline
              transform
              transition
              hover:scale-105
              duration-300
              ease-in-out
              arrow
            "
          >
            Home
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
