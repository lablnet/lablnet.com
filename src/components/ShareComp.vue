<template>
  <div class="container mx-auto px-4 mt-4 mb-4">
    <h1 class="text-4xl font-bold mb-4">Share your project</h1>
    <p class="mb-4">
      Share your project with the world! Please select the projects of your
      choice and click on the share button.
    </p>
    <div class="flex justify-between items-center mb-4">
      <input
        v-model="search"
        type="text"
        placeholder="Search..."
        class="mb-4 p-2 border rounded"
      />
      <ButtonComp
        text="Share"
        @click="shareProjects"
        class="mb-4"
        v-if="selectedProjects.length > 0"
      >
        Share
      </ButtonComp>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        :class="[
          'border rounded p-4',
          selectedProjects.includes(project.slug) ? 'bg-blue-200' : '',
        ]"
      >
        <label :for="`project-${project.slug}`" class="block cursor-pointer">
          <input
            type="checkbox"
            v-model="selectedProjects"
            :value="project.slug"
            class="hidden"
            :id="`project-${project.slug}`"
          />
          <h2 class="text-xl font-semibold mb-1">{{ project.title }}</h2>
          <p class="text-sm mb-1">{{ project.description }}</p>
          <p class="text-xs text-gray-500">Start: {{ project.startDate }}</p>
          <p class="text-xs text-gray-500">End: {{ project.endDate }}</p>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import ButtonComp from "./ButtonComp.vue";

export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  components: {
    ButtonComp,
  },
  setup(props) {
    const search = ref("");
    const selectedProjects = ref([]);

    const filteredProjects = computed(() => {
      if (!search.value) return props.projects;
      return props.projects.filter((project) => {
        const title = project.title.toLowerCase();
        const keywords = search.value.toLowerCase().split(" ");
        return keywords.some((keyword) => title.includes(keyword));
      });
    });

    return {
      search,
      selectedProjects,
      filteredProjects,
    };
  },
};
</script>
