<template>
  <div>
    <PostLayout
      :title="title"
      :description="description"
      :coverPic="this.theme === 'dark' ? require('../../assets/images/transparent/freelancing.png') : require('../../assets/images/freelancing.png')"
    >
    </PostLayout>
  </div>
</template>

<script lang="js">

import PostLayout from "@/components/PostLayout";
//import PostInfo from "@/components/PostInfo";
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
   // PostInfo,
  },
  data() {
    return {     
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
