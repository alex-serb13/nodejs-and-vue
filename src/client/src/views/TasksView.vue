<script setup>
import {
  BoltIcon,
  ArrowUpRightIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";

import { useRouter } from "vue-router";
import TaskLoading from "../components/TasksLoading.vue";

const router = useRouter();
const store = useStore();
const token = computed(() => store.state.token).value;

const tasks = ref([]);
const isLoading = ref(true);

fetch("http://localhost:5000/tasks", {
  headers: { Authorization: `Bearer ${token}` },
})
  .then((res) => res.json())
  .then((data) => {
    tasks.value = data.tasks;
    isLoading.value = false;
  });
</script>

<template>
  <div class="py-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="sm:text-center">
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          A better way to manage your tasks
        </p>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
      </div>

      <TaskLoading v-if="isLoading" />

      <div
        v-if="!isLoading && !tasks?.length"
        class="text-center flex justify-center"
      >
        <div class="pt-28">
          <div
            class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8"
          >
            <div class="sm:max-w-lg">
              <div class="mb-2 flex justify-center">
                <ClipboardDocumentCheckIcon class="h-10" />
              </div>
              <h1 class="font text-2xl font-bold tracking-tight text-gray-900">
                No tasks
              </h1>
              <p class="mt-4 text-xl text-gray-500">
                Get started by creating a new task
              </p>
            </div>
            <div class="mt-6">
              <router-link
                to="/create-task"
                class="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                >Create a task</router-link
              >
            </div>
          </div>
        </div>
      </div>

      <div v-if="!isLoading" class="mt-20 max-w-lg sm:mx-auto md:max-w-none">
        <div
          class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16"
        >
          <div
            v-for="task in tasks"
            :key="task?.title"
            @click="router.push(`tasks/${task._id}`)"
            class="duration-100 hover:cursor-pointer hover:shadow-2xl hover:scale-101 rounded-lg p-10 bg-white shadow-xl relative flex flex-col gap-6 md:flex-col"
          >
            <div class="flex flex-row items-center justify-between">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-white sm:shrink-0"
              >
                <BoltIcon class="text-yellow-500 h-8 w-8" aria-hidden="true" />
              </div>
              <div><ArrowUpRightIcon class="text-gray-300 h-8 w-8" /></div>
            </div>
            <div class="sm:min-w-0 sm:flex-1">
              <p class="text-lg font-semibold leading-8 text-gray-900">
                {{ task?.title }}
              </p>
              <p class="mt-2 text-base leading-7 text-gray-600">
                {{ task?.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
