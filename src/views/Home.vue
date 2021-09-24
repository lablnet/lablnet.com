<template>
  <div>
    <section class="flex flex-col py-10 px-5">
      <div class="max-w-2xl">
        <h1 class="title">
          Muhammad Umer Farooq </h1>
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
      <h3 class="subtitle">Projects I've worked on.</h3>
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
              <img class="rounded" :src="project.image"/>
            </div>
          </div>
          <div class="flex-grow flex flex-col">
            <h4 class="!mt-0">{{ project.name }}</h4>
            <p class="text-justify line-clamp-4 flex-grow">
              {{ project.description }}
            </p>
            <div class="mt-2">
              <router-link disabled="true" to="/work/{{project.link}}"
              >Learn More
              </router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--   Projects -->
    <section class="py-10 px-5">
      <h3 class="subtitle">Education.</h3>
      <p>
        I love challenges that are given by my teachers. Here’s my educational background.
      </p>
      <section class="body-font">
        <div class="container py-6 mx-auto flex flex-wrap">
          <div class="flex flex-wrap w-full">
            <div class="">
              <div class="flex relative pb-12" v-for="education in educations" :key="education">
                <div v-if="education.step !== 1" class="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div
                  class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  {{ education.step }}

                </div>
                <div class="flex-grow pl-4">
                  <h2 class="font-medium title-font mb-1">{{ education.program }} ({{ education.major }})</h2>
                  <h5 class="font-mediume title-font mb-1"><i>{{ education.from + " - " + education.to }}</i></h5>

                  <div class="flex flex-col space-y-2">
                    <div class="flex space-x-2">
                      <div style="padding-top: 0.1em; padding-bottom: 0.1rem"
                           class="text-xs px-3 bg-blue-200 text-blue-800 rounded-full">
                        {{ education.grade }}
                      </div>
                    </div>
                  </div>
                  <p class="leading-relaxed">{{
                      education.institute
                    }}</p>
                  <!-- <hr class="mt-3" v-if="education.step !== 1"/>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
          image: require('../assets/ash.png'),
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
          image: require('../assets/resourcesr.png'),
          link: '/resourcesr',
        },
        {
          name: 'Zest Framework.',
          description: 'Zest is a simple yet powerful PHP MVC framework for rapid application development that is suited for small to medium scale apps and APIs.',
          image: require('../assets/zest.png'),
          link: '/zest',
        },
        {
          name: 'Overstep Services.',
          description: 'I’ve worked with oversteps as a web developer for four month. I worked in their CRM system which I can not share web addresses because of confidentiality.',
          image: require('../assets/overstep.png'),
          link: '/overstep',
        }
      ],
      educations: [
        {
          institute: "Riphah International University (I-14 Islamabad)",
          from: "2020",
          to: "2024",
          grade: "3.87 out of 4.00",
          major: "Bachelor of Science in Software Engineering",
          program: "Bachelor",
          step: 3,
        },
        {
          institute: "Punjab College Of Commerce, 661 Peshawar Road Rawalpindi Cantt(2833)",
          from: "2017",
          to: "2019",
          grade: "55%",
          major: "ICS (Computer Science with Mathematics)",
          program: "intermediate of Computer Science",
          step: 2,
        },
        {
          institute: "F G Boys Secondary School Nai Chawni Westridge-1 Rawalpindi Cantt",
          from: "2015",
          to: "2017",
          grade: "65%",
          major: "Science",
          program: "Secondary School Certificate",
          step: 1,
        }
      ]
    }
  }
}
</script>

