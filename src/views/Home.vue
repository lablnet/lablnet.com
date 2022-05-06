<template>
  <div>
    <section class="flex-none md:flex py-10 px-5 container">
      <div class="flex-none md:flex-1">
        <h1 class="title">Muhammad Umer Farooq</h1>
        <Collaborator
          text="lablent"
          :picture="require('../assets/images/umer-removebg.png')"
          link="https://github.com/lablnet"
        />

        <div class="flex md:hidden">
          <div class="sm:px-0 mx-auto">
            <img
              class="
                w-64
                h-64
                mx-auto
                rounded-full
                pointer-events-none
              "
              :src="require('../assets/images/umer-removebg-resized.png')"
              alt="Muhammad Umer Farooq"
            />
          </div>
        </div>
        <p class="text-justify">
          Hi there, I'm a Software Developer. I love building and rebuilding
          open source products.
        </p>

        <p class="text-justify">
          I have experience in Full Stack software development, including Web,
          Mobile applications, Desktop applications, web scraping, web crawling,
          and API integrations, working on many projects. Beside all these I am
          also interested in deep learning, algorithm implementation, kernel,
          compilers, computer vision and Cryptography.
        </p>
        <p class="text-justify mb-6">
          I am always passionate about working on open source projects and
          contributing with others.
        </p>

        <br />
        <Button text="Contact Me" link="#contact" />
      </div>

      <div class="hidden md:flex">
        <div class="sm:px-0 md:px-20">
          <img
            class="
              w-64
              h-64
              ml-16
              mt-24
              rounded-full
              object-cover
              pointer-events-none
            "
            :src="require('../assets/images/umer-removebg-resized.png')"
            alt="Muhammad Umer Farooq"
          />
        </div>
      </div>
    </section>

    <hr class="mt-2 mb-2" v-if="theme === 'dark'" />
    <!--   Skills -->
    <Skills />

    <hr class="mt-2 mb-2" v-if="theme === 'dark'" />
    <!--   Projects -->
    <Projects />

    <hr class="mt-2 mb-2" v-if="theme === 'dark'" />
    <!--   Education -->
    <Education />

    <hr class="mt-2 mb-2" v-if="theme === 'dark'" />
    <!--   Showcases -->
    <ShowCase />

    <hr class="mt-2 mb-2" v-if="theme === 'dark'" />
    <!--   Certificates -->
    <Certificates />

    <hr class="mt-2 mb-2" v-if="theme === 'dark'" />
    <!--   Contact -->
    <Contact />
  </div>
</template>

<script lang="js">

import Button from "@/components/Button"
import Skills from "./Skills"
import Education from "./Education"
import Projects from "./Projects"
import Certificates from "./Certificates"
import Collaborator from "@/components/Collaborator"
import Contact from "./Contact"
import ShowCase from "./ShowCase"

export default {
  name: 'Home',
  components: {
    Button,
    Education,
    Projects,
    Certificates,
    Collaborator,
    Contact,
    Skills,
    ShowCase
  },
  computed: {
    theme() {
        return this.$store.getters['Theme/theme']
    },
  }
}
</script>
