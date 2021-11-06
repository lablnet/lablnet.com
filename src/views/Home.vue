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
        <p class="text-justify">
          I have experience in Full Stack software development, including Web, Mobile applications, Desktop
          applications, web scraping, web crawling, and API integrations, working on many projects. Beside all these I
          am also interested in deep learning, algorithm implementation, kernel, compilers, computer vision etc.
        </p>
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
            shadow-2xl
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

    <!--   Skills -->
    <section class="py-10 px-5">
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

    <!--   Quotes -->
    <section class="py-10 px-5">
      <h3 class="subtitle">Quotes.</h3>
      <p>
        Some of my favorite quotes I’ve written.
      </p>

      <div class="flex items-center justify-center mt-20">
        <div class="w-full mx-auto rounded-lg shadow-lg px-5 pt-5 pb-10 text-gray-800"
             style="">
          <div class="w-full pt-1 pb-5">
            <div class="overflow-hidden -mt-16 mx-auto shadow-lg"
            style="width: 30px">
              <img :src="require('../assets/u.png')" alt="">
            </div>
          </div>
          <div class="w-full mb-10">
            <div class="text-3xl text-indigo-500 text-left leading-tight h-3">“</div>
            <p class="text-sm dark:text-white text-center px-5">As the time goes by, the world is making progress, but with passage of time temptations are also increasing rapidly. I wish and pray that I die before the time, when brother will be enemy of his own brother.</p>
            <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">”</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="js">
import Education from "../components/Education"
import Projects from "../components/Projects"
export default {
  name: 'Home',
  components: {
    Education,
    Projects
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

