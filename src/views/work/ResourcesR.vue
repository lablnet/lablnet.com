<template>
  <PostLayout
    :title="title"
    :description="description"
      :coverPic="this.theme === 'dark' ? require('../../assets/images/transparent/resourcesr.png') : require('../../assets/images/resourcesr.png')"
  >
    <PostInfo
      :stack="['Dart', 'Flutter', 'Firebase']"
      :title="title"
      subtitle="October 2020"
      codeURL="resourcesr/app"
      siteURL="https://play.google.com/store/apps/details?id=resourcesr.web.app"
    />

    <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

    <p class="text-justify dark:text-gray-300">
      As a university student in Pakistan, a common problem faced by students is
      that they do not get lectures, slides and other resources on exam night.
      So I decided to make an application for my university. Although keep in
      mind that the university has its own portal, there is no app for it. So, I
      just sat for ten days and developed an Android application using Dart,
      Flutter and Firebase. I never thought it would help the students and it
      did, but it didn't last long.
    </p>

    <h3 class="project-headings mt-5 dark:text-gray-300">Features</h3>

    <p class="text-justify dark:text-gray-300">
      <ol class="list-disc mx-6">
        <li>Share Class Resources i.e. lecture, upcoming Assignment, Quiz etc.</li>
        <li>See today’s event like lectures etc.</li>
        <li>Keep class notified with any announcement.</li>
        <li>Weekly timetable.</li>
        <li>Download and manage downloaded resources from the app.</li>
        <li>Share downloaded resources directly from the app.</li>
      </ol>
    </p>

    <h3 class="project-headings mt-5 dark:text-gray-300">Issues Faced</h3>
    <p class="text-justify dark:text-gray-300">
      <ol class="list-disc mx-6">
        <li>The first issue was about maintaining the resources. I myself volunteered to add resources like lectures slides, textbooks, etc. But, now I wanted the CRs to do so who were quite lazy enough to do so.</li>
        <li>There was another frustrating issue related to Firebase Function as I was not able to get it because my Bank Card was not working at Google 🤔. So I add firebase rules by adding email manually.</li>
        <li>On the top of it, at that time Flutter was too young so have less support.</li>
      </ol>
    </p>

    <h3 class="project-headings mt-5 dark:text-gray-300">Some Goodies</h3>
    <p class="text-justify dark:text-gray-300">
      <ol class="list-disc mx-6">
        <li>The app support dark theme.</li>
        <li>As it is in Flutter it can be compiles to many platforms with minimal efforts.</li>
        <li>I enjoyed while working on this project.</li>
      </ol>
    </p>

    <h3 class="project-headings mt-5 dark:text-gray-300">Lessons Learnt</h3>

    <p class="text-justify dark:text-gray-300">
      This was my first Flutter and Firebase app for some real users. I learned
      few new technologies Flutter and Firebase.
    </p>

    <hr class="mt-12 mb-4" />

    <PostInfo
      :stack="['Vue', 'JavaScript', 'Firebase']"
      :title="title + ' Web'"
      subtitle="september 2020"
      codeURL="resourcesr/web"
      siteURL="https://resourcesr.web.app/"
    />


    <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

    <p class="text-justify dark:text-gray-300">
      The purpose of the web app is the same as stated above. I could able to compile the Flutter App to Web but it was damn slow. So I developed the app in VueJs.
    </p>

    <h3 class="project-headings mt-5 dark:text-gray-300">Features</h3>

    <p class="text-justify dark:text-gray-300">
      <ol class="list-disc mx-6 dark:text-gray-300">
        <li>Share Class Resources i.e. lecture, upcoming Assignment, Quiz etc.</li>
        <li>See today’s event like lectures etc.</li>
        <li>Only class CR or management can manage and update resources.</li>
      </ol>
    </p>

    <h3 class="project-headings mt-5 dark:text-gray-300">Issues Faced</h3>
    <p class="text-justify dark:text-gray-300">
      <ol class="list-disc mx-6">
        <li>The problem I encountered was like the project above.</li>
      </ol>
    </p>

    <h3 class="project-headings mt-5 dark:text-gray-300">Some Goodies</h3>
    <p class="text-justify dark:text-gray-300">
      <ol class="list-disc mx-6">
        <li>I also managed to add some admin features like adding resources etc.</li>
      </ol>
    </p>

    <h3 class="project-headings mt-5 dark:text-gray-300">Lessons Learnt</h3>

    <p class="text-justify dark:text-gray-300">
      This was first time I use Firebase as Database. I learned Firebase.
    </p>

    <hr class="mt-12 mb-4" />

    <PostInfo
      :stack="['Python', 'Flask', 'Firebase']"
      :title="title + ' Lite'"
      subtitle="November 2020"
      codeURL="resourcesr/lite"
    />


    <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

    <p class="text-justify dark:text-gray-300">
      It was just an app in Flask, very light weight for browsers without any JavaScript. It can be rendered by formally famous UC Browsers 🤔Remember it?.
    </p>

    <hr class="mt-12 mb-4" />

    <PostInfo
      :stack="['Python']"
      :title="title + ' CLI'"
      subtitle="september 2020"
      codeURL="resourcesr/cli"
    />


    <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

    <p class="text-justify dark:text-gray-300">
      The purpose of the Command Line App is to scrap the data from Riphah International University Website and put in Firebase, the main data we were interested to fetch related to facility members.
    </p>
    
    <h3 class="project-headings mt-5 dark:text-gray-300">Future Thoughts</h3>

    <p class="text-justify dark:text-gray-300">
      I would like  to continue maintaining it and to add the configuration base scraper so it would work for every site.
    </p>
  </PostLayout>
</template>

<script lang="js">

import PostLayout from "@/components/PostLayout";
import PostInfo from "@/components/PostInfo";

export default {
  name: "ResourcesR",
  components: {
    PostLayout,
    PostInfo
  },
  data() {
    return {
      stack: ["Vue", "Firebase", "Flutter"],
      title: "ResourcesR",
      description: "An app that provides a platform to share resources for study especially for Riphah Students. Features including sharing resources, timetable, events, assignments, etc.",
    }
  },
  computed: {
    theme() {
        return this.$store.getters['Theme/theme']
    },
  }
}
</script>
