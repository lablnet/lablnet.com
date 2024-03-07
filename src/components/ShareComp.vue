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
        @click="isModalOpen = true"
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

    <ModelComp v-if="isModalOpen" @close="isModalOpen = false">
      <div class="p-4">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold mb-4">Selected Projects</h2>
          <i
            class="fa fa-times text-2xl mb-4 cursor-pointer text-red-500"
            @click="isModalOpen = false"
          >
          </i>
        </div>
        <ul
          :class="['overflow-auto', selectedProjects.length > 2 ? 'h-96' : '']"
        >
          <li
            v-for="projectSlug in selectedProjects"
            :key="projectSlug"
            class="mb-2"
          >
            <div class="border p-2 rounded">
              <div class="flex justify-between items-center mb-4">
                <h3 class="font-bold">{{ getProject(projectSlug).title }}</h3>
                <button
                  @click="removeProject(projectSlug)"
                  class="mt-2 text-red-500"
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
              <p>{{ getProject(projectSlug).description }}</p>
              <p class="text-xs text-gray-500">
                Date: {{ getProject(projectSlug).startDate }} -
                {{ getProject(projectSlug).endDate }}
              </p>
            </div>
          </li>
        </ul>
        <div class="mb-2 mt-2">
          <p class="mb-2">
            Share the selected projects with your client. You can also add a
            message to the client.
          </p>
          <TextareaComp
            label="Message"
            placeholder="Enter message"
            v-model="message"
          />
        </div>
        <div class="mt-4 float-end mb-4">
          <ButtonComp
            class="mb-4"
            text="Share"
            @click="share"
            :disable="loading"
          >
            Share
          </ButtonComp>
        </div>
      </div>
    </ModelComp>

    <ModelComp v-if="shareModel" @close="shareModel = false">
      <div class="p-12">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold mb-4">The share url is ready</h2>
          <i
            class="fa fa-times text-2xl mb-4 cursor-pointer text-red-500"
            @click="shareModel = false"
          >
          </i>
        </div>
        <div class="mt-4">
          <label for="shareUrl" class="block text-sm font-medium text-gray-700">
            Share URL
          </label>
          <p class="text-sm text-gray-500 mb-2">
            Share the following URL with your client.
          </p>
          <p class="text-green-500" v-if="copied">Link Copied to Clipboard</p>
          <div class="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              id="shareUrl"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              v-model="shareUrl"
              readonly
            />
            <div class="absolute inset-y-0 right-0 flex items-center">
              <button
                @click="copyToClipboard"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black hover:bg-gray-200"
              >
                <i class="fas fa-copy mr-2"></i>
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModelComp>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import ButtonComp from "./ButtonComp.vue";
import ModelComp from "./ModelComp.vue";
import TextareaComp from "./TextareaComp.vue";
import { firestore } from "../services/firebase";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";

export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  components: {
    ButtonComp,
    ModelComp,
    TextareaComp,
  },

  async setup(props) {
    const search = ref("");
    const selectedProjects = ref([]);
    const message = ref("");
    const loading = ref(false);
    const shareUrl = ref("");
    const isModalOpen = ref(false);
    const shareModel = ref(false);
    const copied = ref(false);

    const generateId = async () => {
      const id = Math.floor(100000 + Math.random() * 900000);
      const docRef = doc(firestore, "share", id.toString());
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return generateId();
      } else {
        return id;
      }
    };

    const filteredProjects = computed(() => {
      if (!search.value) return props.projects;
      return props.projects.filter((project) => {
        const title = project.title.toLowerCase();
        const keywords = search.value.toLowerCase().split(" ");
        return keywords.some((keyword) => title.includes(keyword));
      });
    });

    const removeProject = (project) => {
      selectedProjects.value = selectedProjects.value.filter(
        (slug) => slug !== project
      );
    };

    const getProject = (slug) => {
      return props.projects.find((project) => project.slug === slug);
    };

    const copyToClipboard = () => {
      navigator.clipboard.writeText(shareUrl.value);
      copied.value = true;
    };

    const share = async () => {
      // Create object with selected projects, client name and message
      const data = {
        projects: selectedProjects.value,
        message: message.value,
      };
      loading.value = true;

      const id = await generateId();
      console.log("ID", id, data);
      await addDoc(collection(firestore, "share"), { id, ...data });
      loading.value = false;
      isModalOpen.value = false;
      shareUrl.value = `https://lablnet.com/share/${id}`;
      shareModel.value = true;
    };

    // watch selectedProjects and update shareUrl
    watch(selectedProjects, () => {
      // if length is 0, close the model.
      console.log("selectedProjects", selectedProjects.value.length);
      if (selectedProjects.value.length === 0) {
        isModalOpen.value = false;
      }
    });

    return {
      search,
      selectedProjects,
      filteredProjects,
      isModalOpen,
      shareModel,
      shareUrl,
      message,
      loading,
      shareUrl,
      removeProject,
      getProject,
      copyToClipboard,
      share,
      copied,
    };
  },
};
</script>
