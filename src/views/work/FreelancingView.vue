<template>
  <div>
    <PostLayout
      :title="title"
      :description="description"
      :coverPic="
        this.theme === 'dark'
          ? require('../../assets/images/transparent/freelancing.png')
          : require('../../assets/images/freelancing.png')
      "
    >
      <h2 class="text-2xl font-bold mb-4">Upwork</h2>
      <p class="text-justify dark:text-gray-300">
        I have been working on Upwork for the past 2 years. I've completed over
        40 projects and have a 5-star reviews on 90% of my projects. I am not
        going to list all of my projects here, but I will list some of the
        projects that I am most proud of.
      </p>

      <PostInfo
        :stack="['Laravel', 'Vue', 'TailwindCSS', 'MySQL', 'PHP']"
        title="Web based Student Information System"
        subtitle="Aug 27, 2022 - Sep 22, 2022"
        siteURL="https://sis.munacjny.org"
        :collabrators="collabrators"
      />
      <h3 class="project-headings mt-9 dark:text-gray-300">Overview</h3>
      <p class="text-justify dark:text-gray-300">
        This is a web based student information system that I built for a
        school. It is a full fledged system that allows the school to manage
        their students, teachers, classes, and more.
      </p>

      <hr class="mt-12 mb-4" />

    </PostLayout>
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
// Set up shopping cart using Stripe.com Checkout (PhP)
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
      description: "These are the best projects I've worked on as a freelancer.",
    }
  },
  computed: {
    theme() {
        return useThemeStore().theme;
    },
  }
}
</script>
