<template>
  <div>
    <PostLayout
      :title="title"
      :description="description"
      :coverPic="coverPic"
      :collabrators="collabrators"
    >
      <PostInfo
        :stack="stack"
        :title="title"
        subtitle="Feb 2020"
        codeURL="zestframework/Zest_Framework"
        siteURL="https://zestframework.github.io/"
      />

      <hr class="mt-2 mb-2" />

      <PostInfo
        :stack="stack"
        title="Zest"
        subtitle="Feb 2020"
        codeURL="zestframework/Zest"
        siteURL="https://zestframework.github.io/"
      />

      <hr class="mt-2 mb-2" />

      <PostInfo
        :stack="stack"
        title="Component Installer "
        subtitle="Feb 2020"
        codeURL="zestframework/com_installer"
      />

      
      <vue-markdown># this is the default slot</vue-markdown>

    </PostLayout>
  </div>
</template>

<script lang="js">

import PostLayout from "@/components/PostLayout";
import PostInfo from "@/components/PostInfo";
import CustomMarkdown from '@/components/CustomMarkdown';

export default {
  name: "Zest",
  components: {
    PostLayout,
    PostInfo,
    'vue-markdown': CustomMarkdown,
  },
  data() {
    return {     
      stack: ["PHP"],
      coverPic: require('../../assets/images/zest.png'),
      title: "Zest Framework",
      description: "Zest is a simple yet powerful PHP MVC framework for rapid application development that is suited for small to medium scale apps and APIs.",
    }
  }
}
</script>
