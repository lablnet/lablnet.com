<template>
  <div :class="appTheme">
    <!-- <Banner /> -->
    <div class="dark:text-white">
      <header
        x-data="{ mobileMenuOpen : false }"
        class="
          flex flex-wrap flex-row
          justify-between
          md:items-center md:space-x-4
          py-6
          px-6
          relative
          top-0
          z-50
          animated
          shadow-lg
        "
      >
        <router-link class="block" :to="{ path: '/' }">
          <span class="sr-only"></span>
          <img
            class=""
            src="./assets/images/muf.png"
            alt="Logo"
            width="50"
            height="50"
            title="Logo"
          />
        </router-link>
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="inline-block md:hidden w-8 h-8 p-1"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <nav
          class="
            absolute
            md:relative
            top-16
            left-0
            md:top-0
            z-20
            md:flex
            flex-col
            md:flex-row md:space-x-6
            font-semibold
            w-full
            md:w-auto
            shadow-md
            rounded-lg
            md:rounded-none md:shadow-none
            p-6
            pt-0
            md:p-0
            dark:bg-primary-dark
            bg-white
          "
          :class="{ flex: mobileMenuOpen, hidden: !mobileMenuOpen }"
          click="mobileMenuOpen = false"
        >
          <router-link
            :to="{ path: path, hash: '#projects' }"
            class="block py-1"
            >Projects</router-link
          >
          <router-link 
          :to="{ path: path, hash: '#skills' }"
          class="block py-1"
            >SKills</router-link
          >
          <router-link
            :to="{ path: path, hash: '#education' }"
            class="block py-1"
            >Education</router-link
          >
          <!-- <a href="#certificates" class="block py-1">Certificates</a>
          <a href="#publication" class="block py-1">Publications</a>
          <a href="#quotes" class="block py-1">Quotes</a>
          <a href="#education" class="block py-1">Interests</a> -->
          <router-link :to="{ path: path, hash: '#contact' }" class="block py-1"
            >Contact</router-link
          >

          <ThemeChanger :theme="appTheme" v-on:themeChanged="updateTheme" />
        </nav>
      </header>

      <router-view />
      <hr />
      <footer class="text-gray-600 body-font">
        <div class="bg-gray-100 dark:bg-primary-dark">
          <div
            class="
              container
              px-5
              py-6
              mx-auto
              flex
              items-center
              sm:flex-row
              flex-col
            "
          >
            <a
              class="
                flex
                title-font
                font-medium
                items-center
                md:justify-start
                justify-center
              "
            >
              <!-- <img src="./assets/Text.png" width="50" height="50" /> -->

              <span class="ml-3">
                <img
                  src="./assets/images/muf.png"
                  style="width: 80px; height 80px;"
                />
              </span>
            </a>
            <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2021 Made By Umer
            </p>
            <span
              class="
                inline-flex
                sm:ml-auto sm:mt-0
                mt-4
                justify-center
                sm:justify-start
              "
            >
              <a
                href="https://github.com/lablnet/lablnet.com"
                target="_blank"
                class="ml-3 text-gray-500"
              >
                <i class="fa">
                  <img
                    style="width: 0.8em; height: 0.8em"
                    :src="require('./assets/icons/github.svg')"
                  />
                </i>
              </a>
              <a
                href="https://twitter.com/lablnet"
                target="_blank"
                class="ml-3 text-gray-500"
              >
                <i class="fa">
                  <img
                    style="width: 0.8em; height: 0.8em"
                    :src="require('./assets/icons/twitter.svg')"
                  />
                </i>
              </a>
              <!--              <a-->
              <!--                href="https://www.linkedin.com/company/75766397"-->
              <!--                target="_blank"-->
              <!--                class="ml-3 text-gray-500"-->
              <!--              >-->
              <!--                <i class="fa">-->
              <!--                  <img-->
              <!--                    style="width: 0.8em; height: 0.8em"-->
              <!--                    :src="require('./assets/icons/linkedin.svg')"-->
              <!--                  />-->
              <!--                </i>-->
              <!--              </a>-->
            </span>
          </div>
        </div>
      </footer>
    </div>
    <button
      v-if="top"
      class="backtotop bg-gray-300"
      v-on:click="scrollTop()"
      title="Go to top"
    >
      <i class="text-black fa">
        <img
          style="width: 0.75em; height: 0.75em"
          :src="require('./assets/icons/arrowup.svg')"
        />
      </i>
    </button>
  </div>
</template>

<script lang="js">
// import AOS from 'aos'
// import 'aos/dist/aos.css'
//import Banner from "@/components/Banner";
import ThemeChanger from "@/components/ThemeChanger";
export default {
  name: 'app',
  components: {
    ThemeChanger,
   // Banner
  },
  watch: {
    $route(to, from) {
      const base = `Muhammad Umer Farooq`
      let title = ""
      if (to.path !== "/") this.path = '/'
      else this.path = ""

      if (typeof to.meta.title === 'string')
        title = `${to.meta.title} - ${base}`
      else if (typeof to.meta.title === 'function')
        title = `${to.meta.title(to)} - ${base}`
      else title = base
      document.title = title
    },
  },
  data() {
    return {
      top: false,
      nav: {},
      mobileMenuOpen: false,
      hidden: false,
      appTheme: localStorage.getItem('theme'),
      path: "",
    }
  },
  created() {
    //AOS.init()
    window.addEventListener('scroll', this.handleScroll);
    this.appTheme = localStorage.getItem('theme') || 'light'
  },
  methods: {
    updateTheme(theme) {
      this.appTheme = theme;
		},
    scrollTop() {
      window.scrollTo(0, 0);
    },
    handleScroll(event) {
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        this.top = true
      } else {
        this.top = false
      }
    },
  }
}
</script>
