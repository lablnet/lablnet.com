<template>
  <PostLayout :title="title" :description="description" :coverPic="coverPic" :collabrators="collabrators" >

      <PostInfo
        :stack="stack"
        :title="title"
        subtitle=""
        codeURL="labljett/test"
        siteURL="url"
      />
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
      collabrators: [
        {
          text: "Muhammad Umer Farooq",
          picture: require("@/assets/images/u.png"),
          link: "lablnet.com",
        },
 
      ],        
      stack: ["Vue", "Firebase", "Flutter"],
      coverPic: require('../../assets/images/resourcesr.png'),
      title: "ResourcesR",
      description: "An app that provides a platform to share resources for study especially for Riphah Students. Features including sharing resources, timetable, events, assignments, etc.",
    }
  }
}
</script>