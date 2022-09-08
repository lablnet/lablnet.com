<template>
<div>
    <section class="flex-none md:flex py-10 px-5 container">
        <div class="flex-none md:flex-1">
            <h1 class="title">Muhammad Umer Farooq</h1>
            <CollaboratorComp text="lablent" :picture="require('../assets/images/umer-removebg.png')" link="https://github.com/lablnet" :contributionsStatus="true" />

            <div class="flex md:hidden">
                <div class="sm:px-0 mx-auto">
                    <img class="w-64 h-64 mx-auto rounded-full pointer-events-none" :src="require('../assets/images/umer-removebg-resized.png')" alt="Muhammad Umer Farooq" />
                </div>
            </div>
            <p class="text-justify dark:text-gray-300">
                Hi there, I'm a Software Developer. I love building and rebuilding
                open source products.
            </p>

            <p class="text-justify dark:text-gray-300">
                I have experience in Full Stack software development, including Web,
                Mobile applications, Desktop applications, web scraping, web crawling,
                and API integrations, working on many projects. Beside all these I am
                also interested in deep learning, algorithm implementation, kernel,
                compilers, computer vision and Cryptography.
            </p>
            <p class="text-justify mb-6 dark:text-gray-300">
                I am always passionate about working on open source projects and
                contributing with others.
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
            " :src="require('../assets/images/umer-removebg-resized.png')" alt="Muhammad Umer Farooq" />
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
