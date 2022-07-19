<template>
  <div>
    <LablnetPostLayout
      :title="title"
      :description="description"
      :coverPic="this.theme === 'dark' ? require('../../assets/images/transparent/ash.png') : require('../../assets/images/ash.png')"
    >
      <LablnetPostInfo
        :stack="['Vue', 'TailwindCSS', 'Typescript', 'Javascript']"
        :title="title"
        subtitle="Auguest 2021"
        siteURL="https://alphasofthub.com/"
        :collabrators="collabrators"
      />

      <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

      <p class="text-justify dark:text-gray-300">
        Its main purpose is to create a site for my registered company
        AlphaSoftHub (Private) Limited.
      </p>
      <h3 class="project-headings mt-5 dark:text-gray-300">Problems Faced</h3>
      <p class="text-justify dark:text-gray-300">
        I wanted the backend of the system for account handling to be in Python,
        oh yes it is but I am still unable to host it because I can't afford the
        server!. Still, I have shared hosting. 😔
      </p>
      <h3 class="project-headings mt-5 dark:text-gray-300">Lessons Learnt</h3>
      <p class="text-justify dark:text-gray-300">
        This was probably the first web app I developed in which I used
        tailwindCSS and learned about tailwindCSS. After working with
        tailwindCSS I want to use it for all my projects.
      </p>
      <h3 class="project-headings mt-5 dark:text-gray-300">Future Thoughts</h3>
      <p class="text-justify dark:text-gray-300">
        The functionality of the blog does not work properly and I need the site
        to allow users to log in to the system and manage their orders.
      </p>
      <hr class="mt-12 mb-4" />

      <LablnetPostInfo
        :stack="['python', 'typescript', 'javascript', 'vue', 'bootstrap']"
        title="COVID-19"
        subtitle="Auguest 2020"
        codeURL="lablnet/covid19"
        siteURL="https://covid19.alphasofthub.com"
      />

      <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

      <p class="text-justify dark:text-gray-300">
        The main purpose of the project is to create a superfast COVID-19 dashboard and parser.

        <ol class="list-disc mx-6 dark:text-gray-300">
            <li>Develop awareness among the public.</li>
            <li>Visualized the data for everyone to understand.</li>
            <li>Gather data for research/experiences.</li>
            <li>Create a platform for the public to interact with the data.</li>
        </ol>
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
              <li>Parse data from government websites automatically daily, automated using GitHub Action of multiple countries.</li>
              <li>Parse data from WHO automatically on every Monday, automated using GitHub Actions.</li>
              <li>Dashboard to visualize data.</li>
              <li>Publicly Data downloading.</li>
              <li>Multiple country handling frontend.</li>
              <li>Super Fast performance.</li>
              <li>Fully customizable for country website for more info look Contribution guideline.</li>
          </ol>
      </p>

      <h3 class="project-headings mt-5 dark:text-gray-300">Some Goodies</h3>
       <p class="text-justify">
        <ol class="list-disc mx-6 dark:text-gray-300">
          <li>Simple and easy UI makes it easy to discover COVID19 statistics.</li>
          <li>It can be easily ported to multiple countries by adding a new scraper and adding support to the front site.</li>
          <li>It is highly scalable and fast.</li>
          <li>The data is publicly available..</li>
          <li>I enjoyed working in it.</li>
        </ol>
      </p>

      <h3 class="project-headings mt-5 dark:text-gray-300">Lessons Learnt</h3>
      <p class="text-justify dark:text-gray-300">
        Although, this was my first project use selenium and beautiful-soup library. So I learnt it along with GitHub actions.
      </p>
      <hr class="mt-12 mb-4" />

      <LablnetPostInfo
        :stack="['python']"
        title="Validity "
        subtitle="March 2022"
        codeURL="alphasofthub/validity"
      />

      <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

      <p class="text-justify dark:text-gray-300">
        The primary purpose of the library is to make a robust validation
        library for flasks like Laravel Style.
      </p>

      <hr class="mt-12 mb-4" />

      <LablnetPostInfo
        :stack="['PHP', 'Wordpress']"
        title="AlphaSoftHub Old Site"
        subtitle="Feb 2021"
        siteURL="https://old.alphasofthub.com/"
        :collabrators="collabrators"
      />

      <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

      <p class="text-justify dark:text-gray-300">
        This was the old site for AlphaSoftHub (Private) Limited.
      </p>
    </LablnetPostLayout>
  </div>
</template>

<script lang="js">

import LablnetPostLayout from "@/components/LablnetPostLayout";
import LablnetPostInfo from "@/components/LablnetPostInfo";

export default {
  name: "Alphasofthub",
  components: {
    LablnetPostLayout,
    LablnetPostInfo,
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
      description: "I started my own business on 12 Feb 2021. At AlphaSoftHub (Private) Limited I am working as lead developer of the different company’s project(s).",
    }
  },
  computed: {
    theme() {
        return this.$store.getters['Theme/theme']
    },
  }
}
</script>
