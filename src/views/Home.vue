<template>
  <div>
    <section class="flex-none md:flex py-10 px-5 container">
      <div class="flex-none md:flex-1">
        <h1 class="title">Muhammad Umer Farooq</h1>
        <Collaborator
          text="lablent"
          :picture="require('../assets/images/umer-removebg.png')"
        />

        <p class="text-justify">
          Hi there, I'm a Software Developer. I love building and rebuilding
          open source products.
        </p>

        <p class="text-justify">
          I have experience in Full Stack software development, including Web,
          Mobile applications, Desktop applications, web scraping, web crawling,
          and API integrations, working on many projects. Beside all these I am
          also interested in deep learning, algorithm implementation, kernel,
          compilers, computer vision etc.
        </p>
        <p class="text-justify mb-6">
          I am always passionate about working on open source projects and
          calibrating with others.
        </p>

        <br />
        <a
          href="#contact"
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
          "
        >
          Contact Me
        </a>
      </div>

      <div class="hidden md:flex">
        <div class="sm:px-0 md:px-20">
          <img
            class="w-48 h-64 ml-16 mt-24"
            :src="require('../assets/images/umer-removebg.png')"
            alt="Umer"
          />
        </div>
      </div>
    </section>

    <!--   Skills -->
    <Skills />

    <!--   Projects -->
    <Projects />

    <!--   Education -->
    <Education />

    <!--   Contact -->
    <section class="py-10 px-5 container" id="contact">
      <Contact />
    </section>
  </div>
</template>

<script lang="js">

import Skills from "./Skills"
import Education from "./Education"
import Projects from "./Projects"
import Collaborator from "@/components/Collaborator"
import Contact from "./Contact"

export default {
  name: 'Home',
  components: {
    Education,
    Projects,
    Collaborator,
    Contact,
    Skills
  }
}
</script>
