<template>
  <div>
    <section class="flex flex-col py-10 px-5">
      <div class="max-w-2xl">
        <h1 class="title">Muhammad Umer Farooq</h1>
        <p class="opacity-50">@lablnet</p>

        <p class="text-justify">
          Hi there, I'm a Software Developer. I love building and rebuilding
          open source products.
        </p>
        <p class="text-justify">Second Paragraph</p>
        <p class="text-justify mb-6">
          I am always passionate about working on open source projects and
          calibrating with others.
        </p>

        <router-link
          to="/contact"
          class="
            mt-6
            hover:underline
            font-bold
            rounded-full
            my-6
            py-4
            px-8
            shadow-lg
            focus:outline-none
            focus:shadow-outline
            transform
            transition
            hover:scale-105
            duration-300
            ease-in-out
          "
        >
          Contact Me
        </router-link>
      </div>
    </section>

    <!--   Projects -->
    <section class="py-10 px-5">
      <h3 class="title">Projects I've worked on.</h3>
      <p>
        I like to keep working on new projects, here is a look at the project(s)
        I have worked on.
      </p>

      <div class="grid md:grid-cols-4 mx-auto py-5">
        <div
          class="flex flex-col px-4 py-4"
          v-for="project in projects"
          :key="{ project }"
        >
          <div class="w-full flex-shrink-0">
            <div class="">
              <img class="rounded" :src="project.image" />
            </div>
          </div>
          <div class="flex-grow flex flex-col">
            <h4 class="!mt-0">{{ project.name }}</h4>
            <p class="text-justify line-clamp-4 flex-grow">
              {{ project.description }}
            </p>
            <div>
              <router-link disabled="true" to="/work/{{project.link}}"
                >Learn More</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="js">
export default {
  name: 'Home',
  data() {
    return {
      projects: [
        {
          name: 'Working at AlphaSoftHub (Pvt) Ltd.',
          description: 'I started my own business on 12 Feb 2021. At AlphaSoftHub (Private) Limited I am working as lead developer of the different company’s project(s).',
          image: 'https://alphasofthub.com/img/Text.37c4925f.png',
          link: '/alphasofthub',
        },
        {
          name: 'Covid19 Earth.',
          description: 'An open source platform that shows covid19 stats of Pakistan and having ability to add any other country data/scraper easily. It is hosted on GitHub Page and Actions.',
          image: 'https://www.covid19.earth/COVID19.png',
          link: '/covid19',
        },
                {
          name: 'ResourcesR.',
          description: 'An app that provides a platform to share resources for study especially for Riphah Students.',
          image: 'https://www.covid19.earth/COVID19.png',
          link: '/resourcesr',
        },
        {
          name: 'Zest Framework.',
          description: 'Zest is a simple yet powerful PHP MVC framework for rapid application development that is suited for small to medium scale apps and APIs.',
          image: 'https://avatars.githubusercontent.com/u/47443421?s=200&v=4',
          link: '/zest',
        }
      ]
    }
  }
}
</script>

