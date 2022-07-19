<template>
  <div>
    <LablnetPostLayout
      :title="title"
      :description="description"
      :coverPic="this.theme === 'dark' ? require('../../assets/images/transparent/zest.png') : require('../../assets/images/zest.png')"
    >
      <LablnetPostInfo
        :stack="['PHP']"
        :title="title"
        subtitle="May 2018 - Present"
        codeURL="zestframework/Zest_Framework"
        siteURL="https://zestframework.github.io/"
      />

      <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

      <p class="text-justify dark:text-gray-300">
        The purpose of Zest Framework As for PHP, there are many PHP frameworks
        available nowadays, so the question is raised as to why we/people should
        use ZestFramework. The main purpose of Zest framework is to provide a
        very lightweight framework that is generic and extensible with a minimum bundle footprint [without any external dependencies except core
        and autoloader]. And thanksfully I was able to archieve both.
        <br />
        <strong>Who is Zest For?</strong> Zest is for PHP developers who want to build apps instead of coding common things like validation, routing, database manipulation, etc, from scratch. Zest offers a set of well-defined toolkits that take care of those things allowing you to focus on building your app.
      </p>
     <h3 class="project-headings mt-5 dark:text-gray-300">Problems Faced</h3>
      <p class="text-justify">
        
        <ol class="list-disc mx-6 dark:text-gray-300">
          <li>Since this is a very complex project, the problem I encountered was to create everything from scratch.</li>
          <li>Unit testing for each module also took time.</li>
        </ol>
      </p>

      <h3 class="project-headings mt-5 dark:text-gray-300">Some Goodies</h3>
       <p class="text-justify dark:text-gray-300">
        <ol class="list-disc mx-6">
          <li>Not to mention, I enjoyed working on the project, even during my 1st year exams of college I liked to work on it other than preparation.</li>
          <li>This framework is purly light-weight without any third party libraries.</li>
          <li>It support components/plugins too.</li>
        </ol>
      </p>

      <h3 class="project-headings mt-5 dark:text-gray-300">Lessons Learnt</h3>
      <p class="text-justify dark:text-gray-300">
        This was probably my first developed framework with some real
        applications. I learned a lot about in-depth knowledge of PHP, including
        understanding Regex, how the framework works, and so on.
      </p>
      <h3 class="project-headings mt-5 dark:text-gray-300">Future Thoughts</h3>
      <p class="text-justify dark:text-gray-300">
        I would like  to continue maintaining and improving the Framework in the future. Here are the things I would like to add soon:
        <ol class="list-disc mx-6">
          <li>Add database layer</li>
          <li>Add securities layer</li>
          <li>Package management.</li>
          <li>And more features.</li>
        </ol>
      </p>
      <hr class="mt-12 mb-4" />

      <LablnetPostInfo
        :stack="['PHP']"
        title="Zest"
        subtitle="May 2018 - Present"
        codeURL="zestframework/Zest"
        siteURL="https://zestframework.github.io/"
      />

      <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

      <p class="text-justify dark:text-gray-300">
        The is the Skeleton app for Zest Framework that shows the basic
        structure of the framework.
      </p>
      <hr class="mt-12 mb-4" />

      <LablnetPostInfo
        :stack="['PHP', 'Javascript', 'Bootstrap']"
        title="Component Installer "
        subtitle="July 2020"
        codeURL="zestframework/com_installer"
      />

      <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

      <p class="text-justify dark:text-gray-300">
        The is the component for Zest Framework it's purpose is to install and
        manage the components of the framework.
      </p>

      <h3 class="project-headings mt-5 dark:text-gray-300">Lesson Learnt</h3>
      <p class="text-justify dark:text-gray-300">
        Working on the basics of component systems, I learned how a system that supports components / plugins and modules works.
        And I learned how to create a component for Zest Framework &#x1F601;.
      </p>

      <hr class="mt-12 mb-4" />

      <LablnetPostInfo
        :stack="['PHP', 'MySql', 'Javascript', 'Bootstrap']"
        title="Zest_Web"
        subtitle="June 2021"
        codeURL="zestframework/Zest_Web"
      />
      <p class="mt-9 dark:text-gray-300">
        This is the site developed with Zest Framework.
      </p>
    </LablnetPostLayout>
  </div>
</template>

<script lang="js">

import LablnetPostLayout from "@/components/LablnetPostLayout";
import LablnetPostInfo from "@/components/LablnetPostInfo";

export default {
  name: "Zest",
  components: {
    LablnetPostLayout,
    LablnetPostInfo,
  },
  data() {
    return {     
      title: "Zest Framework",
      description: "Zest is a simple yet powerful PHP MVC framework for rapid application development that is suited for small to medium scale apps and APIs.",
    }
  },
  computed: {
    theme() {
        return this.$store.getters['Theme/theme']
    },
  }
}
</script>
