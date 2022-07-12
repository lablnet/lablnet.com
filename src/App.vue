<template>
  <div :class="appTheme">
    <!-- <Banner /> -->
    <div class="dark:text-white light-text-color bg-white dark:bg-gray-700">
      <header
        x-data="{ mobileMenuOpen : false }"
        class="
          flex flex-wrap flex-row
          justify-between
          md:items-center md:space-x-4
          py-6
          px-6
          top-0
          z-50
          animated
          shadow-lg
          dark:bg-gray-900
          bg-white
          relative
        "
        ref="nav"
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
        <span class="inline-block mx-auto mr-1 mt-1 md:hidden">
          <ThemeChanger :theme="appTheme"
        /></span>

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
            dark:bg-gray-900
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

          <span class="hidden md:inline-block mt-1">
            <ThemeChanger :theme="appTheme"
          /></span>
        </nav>
      </header>

      <div class="" ref="main">
        <router-view />
      </div>
      <hr />
      <footer class="text-gray-600 body-font">
        <div class="bg-gray-100 dark:text-white dark:bg-gray-900">
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
            <p class="inline-flex text-sm text-gray-500 dark:text-gray-300 sm:ml-6 sm:mt-0 mt-4">
              Made with &nbsp;
              <img class="h-6 w-6" :src="require('./assets/icons/heart.gif')" />
              &nbsp; By &nbsp;
              <a
                class="font-bold"
                href="https://github.com/lablnet"
                target="_blank"
                >Muhammad Umer Farooq</a
              >
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

    <Model title="Support Me" :show="showModel">
      <div class="">
        <h2
          class="
            p-2
            font-semibold
            text-2xl
            tracking-wide
            mb-2
            text-gray-500
            dark:text-gray-400
          "
        >
          Why you should donate?
        </h2>

        <p
          class="
            p-4
            text-base
            leading-relaxed
            text-justify text-gray-500
            dark:text-gray-400
          "
        >
          Every donation helps to improve me. The funds will be used to purchase
          better equipment, software, books, and other resources that help out
          with making new projects. They also help out with server costs and the
          hiring of new developers for the projects.

          <spam class="mt-3">
            Please sent me a donation at the following bitcoin address:
          </spam>
          <code class="mt-2 mx-2">37x6PA4qtPu2fQnYdW5U7jztYhbchASpBV </code>
        </p>
      </div>

      <div
        class="
          flex
          items-center
          rounded-b
          border-t border-gray-200
          dark:border-gray-600
          p-2
        "
      >
        <button
          type="button"
          class="
            mt-2
            text-gray-500
            bg-white
            rounded-lg
            border border-gray-200
            text-sm
            font-medium
            px-5
            py-2.5
            focus:z-10
            dark:bg-secondary-dark
          "
          @click="this.doNotShowModel"
        >
          Do not show again
        </button>
      </div>
    </Model>
  </div>
</template>

<script lang="js">
//import Banner from "@/components/Banner";
import ThemeChanger from "@/components/ThemeChanger";
import {
    mapState
} from "vuex";

import Model from "@/components/Model";

// fancybox.
import {
    Fancybox
} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

export default {
    name: 'app',
    components: {
        ThemeChanger,
        Model,
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
            showModel: false,
            top: false,
            mobileMenuOpen: false,
            hidden: false,
            path: "",
            scroll: 0,
            medias: [{
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

        // setup auto show model.
        if (localStorage.getItem('showModel') === null) {
            localStorage.setItem('showModel', true)
        }
        if (localStorage.getItem('showModel') === 'true') {
            setTimeout(() => {
                this.showModel = true
            }, 5000)
        }

        // back to top button handler.
        window.addEventListener('scroll', this.handleScroll);
    },
    computed: {
        appTheme() {
            return this.$store.getters['Theme/theme']
        },
    },
    methods: {
        doNotShowModel() {
            this.showModel = false
            localStorage.setItem('showModel', false)
        },
        scrollTop() {
            window.scrollTo(0, 0);
        },
        manageNavScroll(t) {
            let nav = this.$refs.nav
            let main = this.$refs.main
            if (t === 'add') {
                nav.classList.add('fixed')
                nav.classList.add('w-full')
                nav.classList.add('top-0')
                nav.classList.remove('relative')
                main.classList.add('mt-20')
                return;
            }
            nav.classList.remove('fixed')
            nav.classList.remove('w-full')
            nav.classList.remove('top-0')
            nav.classList.add('relative')
            main.classList.remove('mt-20')
        },
        handleScroll(event) {
            let scroll = document.body.scrollTop || document.documentElement.scrollTop;
            if (scroll > 150) {
                if (scroll > 300) {
                    if (this.scroll < scroll) {
                        this.manageNavScroll('remove')
                    } else {
                        this.manageNavScroll('add')
                    }
                }

                this.top = true
            } else {
                this.top = false
                this.manageNavScroll('remove')
            }
            this.scroll = scroll;
        },
    },
}
</script>
