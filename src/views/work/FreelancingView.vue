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

      <!-- Post Content Others Start -->
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
