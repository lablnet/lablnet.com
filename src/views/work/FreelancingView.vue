<template>
  <div>
    <PostLayout
      :title="title"
      :description="description"
      :coverPic="this.theme === 'dark' ? require('../../assets/images/transparent/freelancing.png') : require('../../assets/images/freelancing.png')"
    >
    </PostLayout>
  </div>
</template>

<script lang="js">

import PostLayout from "@/components/PostLayout";
//import PostInfo from "@/components/PostInfo";
import { useThemeStore } from '@/store/ThemeStore';

export default {
  name: "ZestView",
  components: {
    PostLayout,
   // PostInfo,
  },
  data() {
    return {     
      title: "Freelancing",
      description: "",
    }
  },
  computed: {
    theme() {
        return useThemeStore().theme;
    },
  }
}
</script>
