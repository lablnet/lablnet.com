<template>
  <div :class="appTheme">
    <!-- <Banner /> -->
    <div class="dark:text-white light-text-color">
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
            @click="mobileMenuOpen = false"
            >Projects</router-link
          >
          <router-link
            :to="{ path: path, hash: '#skills' }"
            class="block py-1"
            @click="mobileMenuOpen = false"
            >SKills</router-link
          >
          <router-link
            :to="{ path: path, hash: '#education' }"
            class="block py-1"
            @click="mobileMenuOpen = false"
            >Education</router-link
          >
          <router-link
            :to="{ path: path, hash: '#certificates' }"
            class="block py-1"
            @click="mobileMenuOpen = false"
            >Certificates</router-link
          >
          <router-link
            to="/quotes"
            class="block py-1"
            @click="mobileMenuOpen = false"
            >Quotes</router-link
          >
          <router-link
            :to="{ path: path, hash: '#contact' }"
            class="block py-1"
            @click="mobileMenuOpen = false"
            >Contact</router-link
          >

          <ThemeChanger :theme="appTheme" />
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
            <router-link
              to="/"
              class="
                flex
                title-font
                font-medium
                items-center
                md:justify-start
                justify-center
              "
            >
              <span class="ml-3">
                <img
                  src="./assets/images/muf.png"
                  style="width: 80px; height 80px;"
                  alt="Muhammad Umer Farooq"
                />
              </span>
            </router-link>
            <p class="inline-flex text-sm text-gray- 500 sm:ml-6 sm:mt-0 mt-4">
              © 2021 Made with &nbsp;
              <img class="h-6 w-6" :src="require('./assets/icons/heart.gif')" />
              &nbsp; By &nbsp;<strong> Umer</strong>
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
                href="https://github.com/lablnet"
                target="_blank"
                class="ml-3 text-gray-500"
              >
                <img
                  style="width: 1.6em; height: 1.6em"
                  :src="
                    require(this.appTheme === 'dark'
                      ? './assets/icons/white/github.svg'
                      : './assets/icons/github.svg')
                  "
                />
              </a>

              <a
                v-for="media in medias"
                :key="media"
                :href="media.link"
                target="_blank"
                class="ml-3 text-gray-500"
              >
                <img style="width: 1.6em; height: 1.6em" :src="media.picture" />
              </a>
              <a
                href="https://linkedin.com/in/lablnet"
                target="_blank"
                class="ml-3 text-gray-500"
              >
                <img
                  style="width: 1.6em; height: 1.6em"
                  :src="
                    require(this.appTheme === 'dark'
                      ? './assets/icons/white/linkedin.svg'
                      : './assets/icons/linkedin.svg')
                  "
                />
              </a>
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
//import Banner from "@/components/Banner";
import ThemeChanger from "@/components/ThemeChanger";
import { mapState } from "vuex";

// fancybox.
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

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
      medias: [
        {
          picture: require('./assets/icons/twitter.svg'),
          link: "https://twitter.com/lablnet"
        },
        {
          picture: require('./assets/icons/upwork.svg'),
          link: "https://www.upwork.com/freelancers/~010c32fc720f5f9624"
        },
        {
          picture: require('./assets/icons/fiverr.svg'),
          link: "https://fiverr.com/umerlablnet01"
        }
      ]
    }
  },
  created() {
    // Fancybox init.
    let fancyboxELems = ["[data-fancybox='default']", "[data-fancybox='certificate']"]
    // for in loop.
    for (let i = 0; i < fancyboxELems.length; i++) {
      Fancybox.bind(fancyboxELems[i], {
        caption: function (fancybox, carousel, slide) {
          return (
            slide.caption || ""
          );
        },
     });
    }

    // back to top button handler.
    window.addEventListener('scroll', this.handleScroll);

    // subscribe to theme changes.
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'Theme/setTheme') {
        this.appTheme = mutation.payload
      }
    })
  },
  computed: {
    theme() {
        return this.$store.getters['Theme/theme']
    },
  },
  methods: {
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
  },
  beoreDestroy() {
    this.unsubscribe()
  },
}
</script>
