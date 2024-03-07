<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-4">Share your project</h1>
    <input v-model="search" type="text" placeholder="Search..." class="mb-4 p-2 border rounded" />
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div v-for="project in filteredProjects" :key="project.id" class="border rounded p-4">
        <input type="checkbox" v-model="selectedProjects" :value="project.id" class="mb-2" />
        <h2 class="text-2xl font-bold mb-2">{{ project.title }}</h2>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const search = ref('')
    const selectedProjects = ref([])

    const filteredProjects = computed(() => {
      if (!search.value) return props.projects
      return props.projects.filter(project => project.title.includes(search.value))
    })

    return {
      search,
      selectedProjects,
      filteredProjects
    }
  }
}
</script>
