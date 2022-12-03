<template>
  <div>
    <!-- Post Layout Start -->
    <PostLayout
      :title="title"
      :description="description"
      :coverPic="
        this.theme === 'dark'
          ? require('../../assets/images/transparent/freelancing.png')
          : require('../../assets/images/freelancing.png')
      "
    >
      <!-- Post Content Upwork Start -->
      <h2 class="!text-4xl">Upwork</h2>
      <p class="text-justify dark:text-gray-300">
        As a freelancer on Upwork for the past two years, I have successfully
        completed over 40 projects and have received a 5-star rating on 90% of
        them. While I am unable to list all of my projects, I am proud to
        highlight a few of my most notable achievements.
      </p>

      <hr class="mt-9 mb-4 mx-auto !w-50" style="width: 50%" />

      <!-- Project 1 Start -->
      <PostInfo
        :stack="['PHP', 'HTML', 'CSS']"
        title="Set up shopping cart using Stripe.com Checkout (PhP)"
        subtitle="Jan 28, 2021 - Feb 24, 2021"
        siteURL="https://www.bungalowsoftware.com/subscription/buy/"
        :collabrators="collabrators"
      />
      <h3 class="project-headings mt-9 dark:text-gray-300">Overview</h3>
      <p class="text-justify dark:text-gray-300">
        I found this project to be particularly engaging and was able to
        complete it within seven days (The remaining time was spent on testing
        by the client). <br />
        The project description was as follow: <br />
        <i
          >Our subscription software service offers customers the ability to
          choose from five products for their subscription. We currently utilize
          CheddarGetter for payment management, customer email communications,
          and other necessary tasks. However, we are in the process of migrating
          to Stripe.com's subscription billing service and transitioning our
          code from Asp.net to PHP</i
        >
        <br />
        <br />
        Beside above description, I also had to create a new database table to
        store the customer's subscription information, with simple admin panel
        to manage the subscriptions. <br />
      </p>

      <hr class="mt-12 mb-4" />
      <!-- Project 1 End -->

      <!-- Project 2 Start -->
      <PostInfo
        :stack="['Laravel', 'Vue', 'TailwindCSS', 'MySQL', 'PHP']"
        title="Web based Student Information System"
        subtitle="Aug 27, 2022 - Sep 22, 2022"
        siteURL="https://sis.munacjny.org"
        :collabrators="collabrators"
      />
      <h3 class="project-headings mt-9 dark:text-gray-300">Overview</h3>
      <p class="text-justify dark:text-gray-300">
        I developed a web-based student information system for a school. The
        system provides comprehensive management capabilities for students,
        teachers, classes, and other relevant information.
      </p>

      <hr class="mt-12 mb-4" />
      <!-- Project 2 End -->

      <!-- Post Content Upwork End -->

      <!-- Post Content Direct Client Start -->
      <h2 class="!text-4xl">Direct Client</h2>
      <p class="text-justify dark:text-gray-300">
        As a developer with over five years of experience, I have had the
        opportunity to work with a variety of clients and companies. Over the
        course of my career, I have successfully completed more than seven
        projects, each one offering its own unique challenges and rewards. While
        I am unable to list all of the projects I have worked on, I am proud to
        highlight a few of my most notable achievements.
      </p>

      <hr class="mt-9 mb-4 mx-auto !w-50" style="width: 50%" />

      <!-- Project 1 Start -->
        <PostInfo 
          :stack="['Javascript', 'Jquery', 'Firebase']" title="LumberJack Game"
          subtitle="December 2019"
          siteURL="https://lablnet.github.io/LumberJack-game/v2/index.html" 
          :collabrators="collabrators"
        />
        <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

        <p class="text-justify dark:text-gray-300">
            One of my freelance projects was the development of a game that focused on the importance of trees for the health of our planet. In the game, players are invited to "plant trees" in a race against a malevolent lumberjack who seeks to chop them down. As the game progresses, it becomes increasingly faster and harder to click on the sack to "plant trees". Once time runs out, players are presented with a fact about the importance of trees for the environment. This game was developed after a man from Japan contacted me directly and hired me for the job. I was responsible for bringing the game concept to life, and was pleased with the final result. This project allowed me to showcase my skills in game development and contribute to a important environmental message.
        </p>
        <h3 class="project-headings mt-5 dark:text-gray-300">Credits</h3>
        <p class="text-justify">
            <ol class="list-disc mx-6 break-all">
                <li>Character: <a class="text-blue-400 underline" target="_blank"  rel="noopener noreferrer" href="https://giphy.com/stickers/stem-2w9gmg97uKtbi">https://giphy.com/stickers/stem-2w9gmg97uKtbi</a></li>
                <li>Tree: <a class="text-blue-400 underline" target="_blank" rel="noopener noreferrer" href="https://www.cleanpng.com/png-computer-icons-acacia-gum-arabic-tree-clip-art-2752802/download-png.html">https://www.cleanpng.com/png-computer-icons-acacia-gum-arabic-tree-clip-art-2752802/download-png.html</a></li>
                <li>Sack of Seeds: <a class="text-blue-400 underline" target="_blank" rel="noopener noreferrer" href="https://www.clipartwiki.com/iclip/ihbiTih_vector-illustration-of-sack-of-milled-wheat-grain/">https://www.clipartwiki.com/iclip/ihbiTih_vector-illustration-of-sack-of-milled-wheat-grain/</a></li>
                <li>Background: <a class="text-blue-400 underline" target="_blank" rel="noopener noreferrer" href="https://superawesomevectors.com/vector-desert-landscape-background/">https://superawesomevectors.com/vector-desert-landscape-background/</a></li>
            </ol>
        </p>
        <hr class="mt-12 mb-4" />
        <!-- Project 1 End -->

        <!-- Project 2 Start -->
        <PostInfo 
          :stack="['WordPress']"
          title="SpendBTC"
          subtitle="July 2019"
          siteURL="https://spendbtc.io"
          :collabrators="collabrators"
         />
        <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

        <p class="text-justify dark:text-gray-300">
            This project involved the development of an Amazon gift buying site that allowed users to make purchases using various cryptocurrencies. This was a new challenge for me, as it was the first time I had developed a custom theme and plugins for WordPress. The project was initiated when a man from Japan contacted me directly and hired me for the job. Despite the challenges, I was able to successfully complete the project, resulting in a fully functional and user-friendly website. This experience allowed me to expand my skillset and broaden my expertise in WordPress development.
        </p>
        <hr class="mt-12 mb-4" />

        <!-- Project 2 End -->

        <!-- Project 3 Start -->

        <PostInfo 
          :stack="['JavaScript', 'Cordova']"
          title="AINDA"
          subtitle="February 2020"
          siteURL="https://play.google.com/store/apps/details?id=com.practicalvalue.ainda&hl=en"
          :collabrators="collabrators"
        />
        <p class="mt-9 text-justify dark:text-gray-300">
            One of my project was the development of an Android application for Icontem, a Brazil-based company owned by Manuel Lemos. The goal of the app was to help users find the best business partners by allowing them to log in and search for potential partners based on various criteria. I was responsible for the entire development process, from conceptualization to deployment, and was able to deliver a high-quality product that met the client's needs and expectations. This project allowed me to gain valuable experience in developing mobile applications, and I was pleased to be able to contribute to the success of Icontem.
        </p>
        <hr class="mt-12 mb-4" />

        <!-- Project 3 End -->

      <!-- Post Content Direct Client End -->

    </PostLayout>
    <!-- Post Layout End -->
  </div>
</template>

<script lang="js">

import PostLayout from "@/components/PostLayout";
import PostInfo from "@/components/PostInfo";
import { useThemeStore } from '@/store/ThemeStore';

// TODO

// * Upwork Total 40 projects
// Alert System.
// EmCasa
// Hotel Management System
// ProtonCash, Weareappointments.
// PHP api intregration form ExpressJs.
// API testing.
// Migrate PHP 5.6 code to 7.
// Integrating curl command into website
// PHP web app.
// Python and Flask consulting
// Software Quality + javaScript game.
// PHP Quiz App, Employee Management System.
// * Freelaner total 1 project
// Php out mysql data
// * Fiverr total 7 projects
// Bkash payment woocommerce plugin.
// * Direct client 3 projects
// SpendBTC
// Js tree cutting game.
// PraticalValue.

export default {
  name: "ZestView",
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
          link: "https://lablnet.com",
        }
      ],
      title: "Freelancing",
      description: "These are among the most notable projects I have had the pleasure of working on as a freelancer.",
    }
  },
  computed: {
    theme() {
        return useThemeStore().theme;
    },
  }
}
</script>
