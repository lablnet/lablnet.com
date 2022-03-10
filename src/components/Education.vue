<template>
  <section class="py-10 px-5 bg-gray-200 dark:bg-primary-dark container">
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
</template>

<script lang="js">
export default {
  name: "Education",
  data() {
    return {
      educations: [
        {
          institute: "Riphah International University (I-14 Islamabad)",
          from: "2020",
          to: "2024",
          grade: "3.83 out of 4.00",
          major: "Bachelor of Science in Software Engineering",
          program: "Bachelor (SEM-5)",
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
      ],
    }
  }
}
</script>
