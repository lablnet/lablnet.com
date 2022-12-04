<template>
  <div>
    <PostLayout
      :title="title"
      :description="description"
      :coverPic="this.theme === 'dark' ? require('../../assets/images/transparent/zest.png') : require('../../assets/images/zest.png')"
    >
      <PostInfo
        :stack="['PHP']"
        :title="title"
        subtitle="May 2018 - Present"
        codeURL="zestframework/Zest_Framework"
        siteURL="https://zestframework.github.io/"
      />

      <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

      <p class="text-justify dark:text-gray-300">
        The purpose of the Zest Framework is to provide a lightweight, generic, and extensible PHP framework with a minimal bundle footprint. It is designed for PHP developers who want to build apps without having to code common features such as validation, routing, and database manipulation from scratch. Zest offers a set of well-defined toolkits to handle these tasks, allowing developers to focus on building their apps.
      </p>
     <h3 class="project-headings mt-5 dark:text-gray-300">Problems Faced</h3>
      <p class="text-justify dark:text-gray-300">
        Due to the complexity of this project, one of the main challenges was creating everything from scratch. Additionally, unit testing for each module took time.
      </p>

      <h3 class="project-headings mt-5 dark:text-gray-300">Some Goodies</h3>
       <p class="text-justify dark:text-gray-300">
        <ol class="list-disc mx-6">
          <li>Not to mention, working on the project was enjoyable, even during my college exams.</li>
          <li>The framework is purely lightweight and does not rely on third-party libraries.</li>
          <li>It supports components and plugins.</li>
        </ol>
      </p>

      <h3 class="project-headings mt-5 dark:text-gray-300">Lessons Learnt</h3>
      <p class="text-justify dark:text-gray-300">
        This was my first developed framework with real-world applications, and I learned a lot about the inner workings of PHP, including regular expressions and framework design.
      </p>
      <h3 class="project-headings mt-5 dark:text-gray-300">Future Thoughts</h3>
      <p class="text-justify dark:text-gray-300">
        I plan to continue maintaining and improving the framework in the future, including adding a database layer, security layer, package management, and more features.
      </p>
      <hr class="mt-12 mb-4" />

      <PostInfo
        :stack="['PHP']"
        title="Zest"
        subtitle="May 2018 - Present"
        codeURL="zestframework/Zest"
        siteURL="https://zestframework.github.io/"
      />

      <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

      <p class="text-justify dark:text-gray-300">
        This is a skeleton app for the Zest Framework that demonstrates the basic structure of the framework.
      </p>
      <hr class="mt-12 mb-4" />

      <PostInfo
        :stack="['PHP', 'Javascript', 'Bootstrap']"
        title="Component Installer "
        subtitle="July 2020"
        codeURL="zestframework/com_installer"
      />

      <h3 class="project-headings mt-9 dark:text-gray-300">Purpose</h3>

      <p class="text-justify dark:text-gray-300">
        This is a component for the Zest Framework, and its purpose is to install and manage the framework's components.
      </p>

      <h3 class="project-headings mt-5 dark:text-gray-300">Lesson Learnt</h3>
      <p class="text-justify dark:text-gray-300">
        Working on the basics of the component system, I learned about how systems that support components, plugins, and modules function. I also learned how to create a component for the Zest Framework &#x1F601;.
      </p>

      <hr class="mt-12 mb-4" />

      <PostInfo
        :stack="['PHP', 'MySql', 'Javascript', 'Bootstrap']"
        title="Zest_Web"
        subtitle="June 2021"
        codeURL="zestframework/Zest_Web"
      />
      <p class="mt-9 dark:text-gray-300">
        This website was developed using the Zest Framework.
      </p>
    </PostLayout>
  </div>
</template>

<script lang="js">

import PostLayout from "@/components/PostLayout";
import PostInfo from "@/components/PostInfo";
import { useThemeStore } from '@/store/ThemeStore';

export default {
  name: "ZestView",
  components: {
    PostLayout,
    PostInfo,
  },
  data() {
    return {     
      title: "Zest Framework",
      description: "Zest is a PHP MVC framework designed for rapid application development, particularly for small to medium scale apps and APIs. It offers a simple, yet powerful solution for creating efficient and scalable applications.",
    }
  },
  computed: {
    theme() {
        return useThemeStore().theme;
    },
  }
}
</script>
