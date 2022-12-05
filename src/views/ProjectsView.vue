<template>
  <section class="py-10 px-5 container" id="projects">
    <h3 class="subtitle">Projects I've worked on.</h3>
    <p class="dark:text-gray-300">
      I enjoy taking on new projects and have worked on the following:
    </p>

    <div class="grid md:grid-cols-3 mx-auto py-5">
      <div
        class="flex flex-col px-4 py-4"
        v-for="project in projects"
        :key="{ project }"
      >
        <div class="w-full flex-shrink-0">
          <div class="">
            <img
              class="rounded"
              :src="project.image"
              data-fancybox="default"
              :data-caption="project.name"
            />
          </div>
        </div>
        <div class="flex-grow flex flex-col">
          <h4 class="mt-0">{{ project.name }}</h4>
          <p class="text-justify line-clamp-4 flex-grow dark:text-gray-300">
            {{ project.description }}
          </p>
          <div class="mt-2">
            <router-link class="float-left arrow" :to="'/work/' + project.link"
              >Learn More
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/work/projects" class="mr-4 float-right arrow">More Projects</router-link>
  </section>
</template>

<script lang="js">
export default {
  name: "ProjectsView",
  data () {
    return {
      projects: [
        {
          name: 'Working at AlphaSoftHub (Pvt) Ltd.',
          description: 'I started my own business, AlphaSoftHub (Private) Limited, on February 12, 2021. In this role, I serve as the lead developer for the company\'s various projects.',
          image: require('../assets/images/ash.png'),
          link: 'alphasofthub',
        },
        {
          name: 'ResourcesR.',
          description: 'I developed an app that offers a platform for students at Riphah University to share and access study resources.',
          image: require('../assets/images/resourcesr.png'),
          link: 'resourcesr',
        },
        {
          name: 'Zest Framework.',
          description: 'Zest is a PHP MVC framework designed for rapid application development, particularly for small to medium scale apps and APIs. It offers a simple, yet powerful solution for creating efficient and scalable applications.',
          image: require('../assets/images/zest.png'),
          link: 'zest',
        },
        {
          name: 'Riphah International University.',
          description: 'Riphah International University offered me the opportunity to work on building an alumni management system for Riphah International University. The university will use this system to manage and connect with its alumni. I was excited to take on the project and help the university strengthen its relationship with its graduates.',
          image: require('../assets/images/riphah.png'),
          link: 'riphah',
        }
      ],
    }
  }
}
</script>
