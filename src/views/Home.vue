<template>
  <div>
    <section class="flex-none md:flex py-10 px-5 container">
      <div class="flex-none  md:flex-1">
        <h1 class="title">
          Muhammad Umer Farooq </h1>
         <Collaborator text="lablent" :picture="require('../assets/images/umer-removebg.png')" />

        <p class="text-justify">
          Hi there, I'm a Software Developer. I love building and rebuilding
          open source products.
        </p>
        

        <p class="text-justify">
          I have experience in Full Stack software development, including Web, Mobile applications, Desktop
          applications, web scraping, web crawling, and API integrations, working on many projects. Beside all these I
          am also interested in deep learning, algorithm implementation, kernel, compilers, computer vision etc.
        </p>
        <p class="text-justify mb-6">
          I am always passionate about working on open source projects and
          calibrating with others.
        </p>
        
        <br />
        <router-link
          to="/contact"
          class="
            mt-6
            hover:underline
            font-bold
            rounded-full
            border-black-500
            border-2
            my-6
            py-4
            px-8
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

      <div class="hidden md:flex">
        <div class="sm:px-0 md:px-20">
          <img  class="w-48 h-64 ml-16 mt-24" :src="require('../assets/images/umer-removebg.png')" alt="Umer">
        </div>
      </div>
    </section>

    <!--   Skills -->
    <section class="py-10 px-5 bg-gray-200 dark:bg-primary-dark container">
      <h3 class="subtitle">Skills</h3>
      <p>
        I am still a student and will remain, the knowledge is endless. Here’s the skills set I’ve.
      </p>
      <div class="grid md:grid-cols-3 mx-auto py-5">
        <div class="flex flex-col px-4 py-4" v-for="skill in skills" :key="skill">
          <div class="flex-grow flex flex-col">
            <h4 class="mt-0">{{ skill.title }}</h4>
            <p class="text-justify line-clamp-4 flex-grow">
              {{ skill.description }}
            </p>
          </div>
        </div>

      </div>
    </section>

    <!--   Projects -->
    <Projects />

    <!--   Education -->
    <Education />

    <!--   Contact -->
    <section class="py-10 px-5 container">
      <Contact />
    </section>
  </div>
</template>

<script lang="js">
import Education from "../components/Education"
import Projects from "../components/Projects"
import Collaborator from "@/components/Collaborator";
import Contact from "./Contact";
export default {
  name: 'Home',
  components: {
    Education,
    Projects, Collaborator,Contact
  },
  data() {
    return {
      skills: [
        {
          title: "Languages",
          description: "I mostly work with php, javascript and python and am good at different databases including MySql, Firebase and mongodb, web development HTML/CSS. I also worked with other languages including Dart, C, C++ and a little bit of Ruby."
        },
        {
          title: "Frameworks",
          description: "I use the framework just as a booster to do the project(s) so quickly that is why I am always open to trying different framework(s). The frameworks I worked on include Laravel, Codeigniter, Vue, React, Jquery, TailwindCSS, AntDesign, Bootstrap, MaterializeCSS, Flask, Flutter, Selenium and little bit of Ruby on Rails."
        },
        {
          title: "Tools/Platform",
          description: "The tools I use on a daily basis are WebStorm, PyCharm,  VsCode, Git, Docker. I use Windows as my primary Operating system, I also use Ubuntu inside Windows using WSL/WSLG."
        }
      ]
    }
  }
}
</script>

