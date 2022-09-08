<template>
  <section
    class="py-10 px-5 bg-gray-200 dark:bg-gray-900 container"
    id="certificates"
  >
    <h3 class="subtitle dark:text-white">Certificates.</h3>
    <p class="dark:text-gray-400">
      In addition to my educational background, I have taken a few courses to
      enhance my knowledge.
    </p>
    <section class="body-font">
      <div class="container py-6 mx-auto flex flex-wrap">
        <div class="flex flex-wrap w-full">
          <div class="">
            <div
              class="flex relative pb-12"
              v-for="certificate in certificates"
              :key="certificate"
            >
              <div
                v-if="certificate.step !== 1"
                class="
                  h-full
                  w-10
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                "
              >
                <div class="h-full w-1 bg-indigo-500 pointer-events-none"></div>
              </div>
              <div
                class="
                  flex-shrink-0
                  w-10
                  h-10
                  rounded-full
                  bg-indigo-500
                  inline-flex
                  items-center
                  justify-center
                  text-white
                  relative
                  z-10
                "
              >
                {{ certificate.step }}
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2">
                <div class="col-span-1">
                  <img
                    :src="certificate.picture"
                    :alt="certificate.title"
                    class="object-contain h-48 w-96 rounded sm:-mx-7 mt-5"
                    data-fancybox="certificate"
                    :data-caption="
                      certificate.title + ' | ' + certificate.institute
                    "
                  />
                </div>
                <div class="col-span-1">
                  <div class="flex-grow mt-10 sm:-mx-10 mb-10">
                    <h2 class="font-medium title-font mb-1">
                      {{ certificate.title }}
                    </h2>

                    <h5 class="font-mediume title-font dark:text-gray-400">
                      <i>{{ certificate.completed }}</i>
                    </h5>
                    <p class="dark:text-gray-400">{{ certificate.institute }}</p>
                  </div>

                  <ButtonComp
                    text="View on Coursera"
                    :link="certificate.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    :gray="true"
                  />
                </div>
              </div>
              <hr
                class="mt-3 text-black dark:text-white"
                v-if="certificate.step !== 1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="js">
import ButtonComp from "../components/ButtonComp.vue";

export default {
  name: "CertificatesView",
  components: {
      ButtonComp,
  },
  data() {
    return {
      certificates: [
        {
          title: "Python For Everybody",
          institute: "Coursera online course (University of Michigan)",
          completed: "Aug 07, 2020",
          picture: require('../assets/images/certificates/Coursera 8EWU75XUZ4XD-1.jpg'),
          link: "https://www.coursera.org/account/accomplishments/specialization/certificate/8EWU75XUZ4XD",
          step: 2,
        },
        {
          title: "Open-Source-Software, Linux and Git",
          institute: "Coursera online course (The Linux Foundation)",
          completed: "Jul 25, 2020",
          picture: require('../assets/images/certificates/Coursera C9BQZMZYQMCT-1.jpg'),
          link: "https://www.coursera.org/account/accomplishments/specialization/certificate/C9BQZMZYQMCT",
          step: 1,
        },
      ],
    }
  }
}
</script>
