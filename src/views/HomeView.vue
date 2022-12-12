<template>
<div>
    <section class="flex-none md:flex py-10 px-5 container">
        <div class="flex-none md:flex-1">
            <h1 class="title">Muhammad Umer Farooq</h1>
            <CollaboratorComp text="lablent" :picture="require('../assets/images/umer-removebg.png')" link="https://github.com/lablnet" :contributionsStatus="true" />

            <div class="flex md:hidden">
                <div class="sm:px-0 mx-auto">
                    <img class="w-64 h-64 mx-auto rounded-full pointer-events-none" :src="require('../assets/images/umer-removebg.png')" alt="Muhammad Umer Farooq" />
                </div>
            </div>
            <p class="text-justify dark:text-gray-300">
                Hello, I am a Software Developer with a passion for open source products.
            </p>

            <p class="text-justify dark:text-gray-300">
                I have extensive experience in Full Stack development, including web, mobile, and desktop applications, as well as web scraping, web crawling, and API integrations. I have worked on a wide range of projects and have a deep interest in deep learning, algorithm implementation, kernel development, compilers, computer vision, and cryptography.
            </p>
            <p class="text-justify mb-6 dark:text-gray-300">
                I am highly motivated to work on open source projects and contribute to the community. I am always looking for opportunities to collaborate and learn from others.
            </p>

            <br />
            <ButtonComp text="Contact Me" link="#contact" />
        </div>

        <div class="hidden md:flex">
            <div class="sm:px-0 md:px-20">
                <img class="
              w-64
              h-64
              ml-16
              mt-24
              rounded-full
              object-cover
              pointer-events-none
            " :src="require('../assets/images/umer-removebg.png')" alt="Muhammad Umer Farooq" />
            </div>
        </div>
    </section>

    <hr class="mt-2 mb-2" v-if="theme === 'dark'" />
    <!--   Skills -->
    <SkillsView />

    <hr class="mt-2 mb-2" v-if="theme === 'dark'" />
    <!--   Projects -->
    <ProjectsView />

    <hr class="mt-2 mb-2" v-if="theme === 'dark'" />
    <!--   Education -->
    <EducationView />

    <hr class="mt-2 mb-2" v-if="theme === 'dark'" />

    <section class="py-10 px-5 container" id="showcase">
        <div class="grid grid-cols-1 gap-5 md:gap-8 xl:grid-cols-3 xl:gap-5">
            <div class="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
            </div>
        </div>
    </section>

    <hr class="mt-2 mb-2" v-if="theme === 'dark'" />

    <!--   Certificates -->
    <CertificatesView />

    <hr class="mt-2 mb-2" v-if="theme === 'dark'" />
    <!--   Contact -->
    <ContactView />
</div>
</template>

<script lang="js">
import ButtonComp from "@/components/ButtonComp"
import SkillsView from "./SkillsView"
import EducationView from "./EducationView"
import ProjectsView from "./ProjectsView"
import CertificatesView from "./CertificatesView"
import CollaboratorComp from "@/components/CollaboratorComp"
import ContactView from "./ContactView"
import {
    useThemeStore
} from '@/store/ThemeStore';

export default {
    name: 'HomeView',
    components: {
        CollaboratorComp,
        ButtonComp,
        EducationView,
        ProjectsView,
        CertificatesView,
        ContactView,
        SkillsView,
    },
    computed: {
        theme() {
            return useThemeStore().theme;
        },
    }
}
</script>
