<template>
  <div>
    <PostLayout
      :title="title"
      :description="description"
      :coverPic="this.theme === 'dark' ? require('../../assets/images/transparent/ash.png') : require('../../assets/images/ash.png')"
    >
      <PostInfo
        :stack="['Vue', 'TailwindCSS', 'Typescript', 'Javascript']"
        :title="title"
        subtitle="Auguest 2021"
        siteURL="https://alphasofthub.com/"
        :collabrators="collabrators"
      />

      <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

      <p class="text-justify dark:text-gray-300">
        The main purpose of this project was to create a website for my registered company, AlphaSoftHub (Private) Limited.
      </p>
      <h3 class="project-headings mt-5 dark:text-gray-300">Problems Faced</h3>
      <p class="text-justify dark:text-gray-300">
        I initially wanted the backend of the system to be in Python, but I was unable to host it because I could not afford a dedicated server. I am currently using shared hosting. 😔
      </p>
      <h3 class="project-headings mt-5 dark:text-gray-300">Lessons Learnt</h3>
      <p class="text-justify dark:text-gray-300">
        This was one of the first web apps I developed that utilized tailwindCSS, and it was a great learning experience. I now plan to use tailwindCSS in all of my future projects.
      </p>
      <h3 class="project-headings mt-5 dark:text-gray-300">Future Thoughts</h3>
      <p class="text-justify dark:text-gray-300">
        The blog functionality does not currently work as intended, and I would like to improve it. I also want to add a login system for users to manage their orders.
      </p>
      <hr class="mt-12 mb-4" />

      <PostInfo
        :stack="['python', 'typescript', 'javascript', 'vue', 'bootstrap']"
        title="COVID-19"
        subtitle="Auguest 2020"
        codeURL="lablnet/covid19"
        siteURL="https://covid19.alphasofthub.com"
      />

      <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

      <p class="text-justify dark:text-gray-300">
        The main purpose of this project is to create a fast COVID-19 dashboard and parser that can raise awareness among the public, visualize data for easy understanding, gather data for research and experiences, and provide a platform for the public to interact with the data.

      </p>
      <h3 class="project-headings mt-5 dark:text-gray-300">Problems Faced</h3>
      <p class="text-justify">
          <ol class="list-disc mx-6 dark:text-gray-300">
              <li>Initially I built a backend in the flask to retrieve the data and used Ajax to retrieve the data but the only problem I have is that I do not have a server where I can host other than PHP applications.</li>
              <li>It was very frustrating because of this problem but this thought came to my mind. Instead of retrieving data from the server, we can create static JavaScript files directly and host them on GitHub and create a static site with VueJs.</li>
              <li>So, I made it a success with GitHub Actions [by the way, thanks to GitHub for providing the best functionality].</li>
              <li>The second problem I faced was about enabling frontend sites to support multiple countries but I solved it.</li>
          </ol>
      </p>

      <h3 class="project-headings mt-5 dark:text-gray-300">Features</h3>
      <p class="text-justify">
          <ol class="list-disc mx-6 dark:text-gray-300">
              <li>Automated parsing of data from government websites daily using GitHub Actions for multiple countries.</li>
              <li>Automated parsing of data from WHO on every Monday using GitHub Actions.</li>
              <li>Dashboard to visualize data.</li>
              <li>Publicly available data downloading.</li>
              <li>Support for multiple countries on the frontend.</li>
              <li>Super Fast performance.</li>
              <li>Fully customizable for country websites - see the contribution guideline for more information.</li>
          </ol>
      </p>

      <h3 class="project-headings mt-5 dark:text-gray-300">Some Goodies</h3>
       <p class="text-justify">
        <ol class="list-disc mx-6 dark:text-gray-300">
          <li>Simple and easy-to-use UI for discovering COVID-19 statistics.</li>
          <li>Easily portable to multiple countries by adding a new scraper and frontend support.</li>
          <li>Highly scalable and fast.</li>
          <li>Publicly available data.</li>
          <li>I enjoyed working in it.</li>
        </ol>
      </p>

      <h3 class="project-headings mt-5 dark:text-gray-300">Lessons Learnt</h3>
      <p class="text-justify dark:text-gray-300">
        Although, this was my first project using the selenium and beautiful-soup libraries, so I learned about them along with GitHub Actions.
      </p>
      <hr class="mt-12 mb-4" />

      <PostInfo
        :stack="['python']"
        title="Validity "
        subtitle="March 2022"
        codeURL="alphasofthub/validity"
      />

      <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

      <p class="text-justify dark:text-gray-300">
        The main purpose of this library is to create a robust validation library for Flask, similar to the one available in Laravel.
      </p>

      <hr class="mt-12 mb-4" />

      <PostInfo
        :stack="['PHP', 'Wordpress']"
        title="AlphaSoftHub Old Site"
        subtitle="Feb 2021"
        siteURL="https://old.alphasofthub.com/"
        :collabrators="collabrators"
      />

      <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

      <p class="text-justify dark:text-gray-300">
        This is the previous website for AlphaSoftHub (Private) Limited.
      </p>
    </PostLayout>
  </div>
</template>

<script lang="js">

import PostLayout from "@/components/PostLayout";
import PostInfo from "@/components/PostInfo";
import { useThemeStore } from '@/store/ThemeStore';

export default {
  name: "AlphasofthubView",
  components: {
    PostLayout,
    PostInfo,
  },
  data() {
    return {     
      collabrators: [
        {
          name: "Muhammad Umer Farooq",
          pic: require("@/assets/images/u.png"),
          link: "https://www.lablnet.com",
        },
      ],
      stack: ["PHP"],
      title: "AlphaSoftHub",
      description: "I started my own business, AlphaSoftHub (Private) Limited, on February 12, 2021. In this role, I serve as the lead developer for the company's various projects.",
    }
  },
  computed: {
    theme() {
        return useThemeStore().theme;
    },
  }
}
</script>
