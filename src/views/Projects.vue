<template>
  <section class="py-10 px-5 container" id="projects">
    <h3 class="subtitle">Projects I've worked on.</h3>
    <p>
      I like to keep working on new projects, here is a look at the project(s) I
      have worked on.
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
          <p class="text-justify line-clamp-4 flex-grow">
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
  name: "Projects",
  data () {
    return {
      projects: [
        {
          name: 'Working at AlphaSoftHub (Pvt) Ltd.',
          description: 'I started my own business on 12 Feb 2021. At AlphaSoftHub (Private) Limited I am working as lead developer of the different company’s project(s).',
          image: require('../assets/images/ash.png'),
          link: 'alphasofthub',
        },
        {
          name: 'ResourcesR.',
          description: 'An app that provides a platform to share resources for study especially for Riphah Students.',
          image: require('../assets/images/resourcesr.png'),
          link: 'resourcesr',
        },
        {
          name: 'Zest Framework.',
          description: 'Zest is a simple yet powerful PHP MVC framework for rapid application development that is suited for small to medium scale apps and APIs.',
          image: require('../assets/images/zest.png'),
          link: 'zest',
        }
      ],
    }
  }
}
</script>
