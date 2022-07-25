<template>
  <section
    class="py-10 px-5 bg-gray-200 dark:bg-gray-900 dark:text-gray-400 container"
    id="skills"
  >
    <h3 class="subtitle dark:text-white">Skills</h3>
    <p>
      I am still a student and will remain, the knowledge is endless. Here are
      the skill sets that I have.
    </p>
    <div class="grid md:grid-cols-3 mx-auto py-5">
      <div class="flex flex-col px-4 py-4" v-for="skill in skills" :key="skill">
        <div class="flex-grow flex flex-col">
          <h4 class="mt-0 dark:text-white">{{ skill.title }}</h4>
          <p class="text-justify line-clamp-4 flex-grow">
            {{ skill.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
export default {
    name: "Skills",
      data() {
    return {
      skills: [
        {
          title: "Languages",
          description: "I mostly work with JavaScript, Python and PHP and am good at different databases including MySql, Firebase and mongodb, web development HTML/CSS. I also worked with other languages including Dart, C, C++ and a little bit of Ruby."
        },
        {
          title: "Frameworks",
          description: "I use the framework just as a booster to do the project(s) quickly. That is why I am always open to trying different framework(s). The frameworks I worked on include Laravel, Codeigniter, Vue, React, Electron, Jquery, TailwindCSS, AntDesign, Bootstrap, MaterializeCSS, Flask, Flutter, Selenium and little bit of Ruby on Rails."
        },
        {
          title: "Tools/Platform",
          description: "The tools I use on a daily basis are VS-Code, Jupyter Notebook, Git, Docker. I use Windows as my primary Operating system, I also use Ubuntu inside Windows using WSL/WSLG."
        }
      ]
    }
  }
}
</script>