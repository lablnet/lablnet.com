<template>
  <div>
    <PostLayout
      :title="title"
      :description="description"
    >
      <PostInfo
        :stack="['Javascript']"
        title="Board"
        subtitle="Auguest 2020"
        siteURL="https://board.lablnet.com/"
        codeURL="lablnet/board"
      />
      <hr class="mt-12 mb-4" />
      <PostInfo
        :stack="['Javascript']"
        title="Snack"
        subtitle="November 2020"
        siteURL="https://snake.lablnet.com/index.html"
        codeURL="lablnet/snake"
      />
      <hr class="mt-12 mb-4" />
      <PostInfo
        :stack="['Javascript']"
        title="Tic Tac Toe"
        subtitle="May 2021"
        siteURL="https://tictactoe.lablnet.com/"
        codeURL="lablnet/TicTacToe"
      />
      <hr class="mt-12 mb-4" />
      <PostInfo
        :stack="['Javascript']"
        title="LumberJack Game"
        subtitle="December 2019"
        siteURL="https://lablnet.github.io/LumberJack-game/v2/index.html"
      />
      <hr class="mt-12 mb-4" />
      <PostInfo
        :stack="['JavaScript', 'Cordova']"
        title="EasyTool App"
        subtitle="Jamuary 2020"
        siteURL="https://play.google.com/store/apps/details?id=com.lablnet.easytools"
        codeURL="lablnet/EasyTools-Source"
      />
      <hr class="mt-12 mb-4" />
      <PostInfo
        :stack="['Dart', 'Flutter']"
        title="Prayers Time"
        subtitle="April 2021"
        siteURL="https://play.google.com/store/apps/details?id=prayer_time.lablnet.app"
        codeURL="alphasofthub/prayer_time"
      />
      <hr class="mt-12 mb-4" />
      <PostInfo
        :stack="['Javascript']"
        title="Upwork Visualization"
        subtitle="March 2021"
        siteURL="https://lablnet.github.io/upwork_visualization/"
        codeURL="lablnet/upwork_visualization"
      />
      <hr class="mt-12 mb-4" />
      <PostInfo
        :stack="['WordPress']"
        title="Travel With Atif Raiz"
        subtitle="March 2022"
        siteURL="https://www.travelwithatifriaz.com"
        :collabrators="collabrators"
      />
      <hr class="mt-12 mb-4" />
      <PostInfo
        :stack="['WordPress']"
        title="SpendBTC"
        subtitle="July 2019"
        siteURL="https://spendbtc.io"
        :collabrators="collabrators"
      />
      <hr class="mt-12 mb-4" />
      <PostInfo
        :stack="['Python', 'Flask', 'Bootstrap']"
        title="lablnet-flask"
        subtitle="April 2021"
        siteURL="https://lablnet-flask.herokuapp.com"
        :collabrators="collabators"
      />
      <hr class="mt-12 mb-4" />
      <PostInfo
        :stack="['Python', 'Flask', 'Bootstrap']"
        title="lablnet-flask"
        subtitle="May 2021"
        siteURL="https://lablnet.github.io/resume"
        codeURL="alphasofthub/resume"
      />
      <hr class="mt-12 mb-4" />
      <PostInfo
        :stack="['JavaScript', 'Cordova']"
        title="AINDA"
        subtitle="February 2020"
        siteURL="https://play.google.com/store/apps/details?id=com.practicalvalue.ainda&hl=en"
        :collabrators="collabators"
      />
      <hr class="mt-12 mb-4" />
      <PostInfo
        :stack="['JavaScript', 'CSS']"
        title="Simplete Software House Site Template"
        subtitle="December 2020"
        siteURL="https://lablnet.github.io/softhubpro/index.html"
        :collabrators="collabators"
      />
    </PostLayout>
  </div>
</template>

<script lang="js">

import PostLayout from "@/components/PostLayout";
import PostInfo from "@/components/PostInfo";

export default {
  name: "Alphasofthub",
  components: {
    PostLayout,
    PostInfo,
  },
  data() {
    return {     
      collabrators: [
        {
          name: "Muhammad Umer Farooq",
          pic: require("@/assets/images/u.png"),
          link: "https://www.lablnet.com",
        },
      ],
      stack: ["PHP"],
      title: "Other Projects",
      description: "These are the project which I do not feel proud to show.",
    }
  }
}
</script>
