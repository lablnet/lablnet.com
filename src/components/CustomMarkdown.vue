<template>
  <div>
    <span ref="markdownCode">
      <slot></slot>
    </span>
    <Markdown :source="markdownCode" />
  </div>
</template>

<script lang="js">

import Markdown from 'vue3-markdown-it';

export default {
    name: "CustomMarkdown",
    components: {
        Markdown,
    },
    data () {
        return {
            markdownCode: ""
        }
    },
    mounted() {
        let elem = this.$refs.markdownCode
        this.markdownCode = elem.textContent;
        elem.remove();
    }
}
</script>
