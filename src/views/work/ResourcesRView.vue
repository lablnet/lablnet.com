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
      As a university student in Pakistan, I noticed a common problem among my peers: they did not have access to lectures, slides, and other resources on exam night. I decided to develop an Android application to address this issue, as my university did not have an app available. I used Dart, Flutter, and Firebase to create the app, and was pleasantly surprised by the positive response from students. However, the app did not last long due to issues with resource management.
    </p>

    <h3 class="project-headings mt-5 dark:text-gray-300">Features</h3>

    <p class="text-justify dark:text-gray-300">
      <ol class="list-disc mx-6">
        <li>Sharing of class resources such as lectures, assignments, and quizzes.</li>
        <li>Viewing of today's events and class announcements.</li>
        <li>Weekly timetable.</li>
        <li>Downloading and managing resources within the app.</li>
        <li>Sharing of downloaded resources directly from the app.</li>
      </ol>
    </p>

    <h3 class="project-headings mt-5 dark:text-gray-300">Issues Faced</h3>
    <p class="text-justify dark:text-gray-300">
      <ol class="list-disc mx-6">
        <li>Difficulty in maintaining resources, as I relied on voluntary contributions from class representatives (CRs) who were often unwilling to help.</li>
        <li>Challenges with Firebase functions and Google payment due to my bank card not working 🤔. So I add firebase rules by adding email manually.</li>
        <li>On the top of it, timited support for Flutter as it was a relatively new technology at the time.</li>
      </ol>
    </p>

    <h3 class="project-headings mt-5 dark:text-gray-300">Some Goodies</h3>
    <p class="text-justify dark:text-gray-300">
      <ol class="list-disc mx-6">
        <li>The app supports  dark theme.</li>
        <li>It can be compiled for multiple platforms with minimal effort thanks to Flutter.</li>
        <li>Working on the project was enjoyable.</li>
      </ol>
    </p>

    <h3 class="project-headings mt-5 dark:text-gray-300">Lessons Learnt</h3>

    <p class="text-justify dark:text-gray-300">
      This was my first project using Flutter and Firebase, and I learned about these technologies while working on it.
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
      The purpose of this web app is similar to the previous project, but with a faster and more efficient design. I was able to compile the Flutter app to web, but it was very slow. Therefore, I developed the app in VueJs to improve its performance.
    </p>

    <h3 class="project-headings mt-5 dark:text-gray-300">Features</h3>

    <p class="text-justify dark:text-gray-300">
      <ol class="list-disc mx-6 dark:text-gray-300">
        <li>Sharing of class resources such as lectures, assignments, and quizzes.</li>
        <li>Viewing of today's events.</li>
        <li>Only class representatives or management can manage and update resources.</li>
      </ol>
    </p>

    <h3 class="project-headings mt-5 dark:text-gray-300">Issues Faced</h3>
    <p class="text-justify dark:text-gray-300">
      <ol class="list-disc mx-6">
        <li>The same challenges as the previous project, including difficulty in maintaining resources and issues with Firebase functions.</li>
      </ol>
    </p>

    <h3 class="project-headings mt-5 dark:text-gray-300">Some Goodies</h3>
    <p class="text-justify dark:text-gray-300">
      <ol class="list-disc mx-6">
        <li>I added additional features for admin users, such as the ability to add resources.</li>
      </ol>
    </p>

    <h3 class="project-headings mt-5 dark:text-gray-300">Lessons Learnt</h3>

    <p class="text-justify dark:text-gray-300">
      This was my first time using Firebase as a database, and I learned about its capabilities through this project.
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
      This was a simple app developed in Flask that was lightweight and could be rendered on browsers without JavaScript. It was designed to be compatible with UC Browsers, a once-popular browser 🤔 Remember it?.
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
      The purpose of this command line app is to scrape data from the Riphah International University website and store it in Firebase. The main data we were interested in were related to faculty members.
    </p>
    
    <h3 class="project-headings mt-5 dark:text-gray-300">Future Thoughts</h3>

    <p class="text-justify dark:text-gray-300">
      I plan to continue maintaining this app and add a configurable scraper so that it can be used on any website.
    </p>
  </PostLayout>
</template>

<script lang="js">

import PostLayout from "@/components/PostLayout";
import PostInfo from "@/components/PostInfo";
import { useThemeStore } from '@/store/ThemeStore';

export default {
  name: "ResourcesRView",
  components: {
    PostLayout,
    PostInfo
  },
  data() {
    return {
      stack: ["Vue", "Firebase", "Flutter"],
      title: "ResourcesR",
      description: "I developed an app that offers a platform for students at Riphah University to share and access study resources.",
    }
  },
  computed: {
    theme() {
        return useThemeStore().theme;
    },
  }
}
</script>
