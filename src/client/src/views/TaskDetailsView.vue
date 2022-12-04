<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import {
  CalendarIcon,
  BoltIcon,
  ArrowLeftIcon,
} from "@heroicons/vue/24/outline";
import TaskDetailsLoading from "../components/TaskDetailsLoading.vue";

const route = useRoute();
const store = useStore();

const token = computed(() => store.state.token).value;
const id = route.params.id;

const task = ref({});
const isLoading = ref(true);

const endpoint = import.meta.env.VITE_API_ENDPOINT;

fetch(`${endpoint}/tasks/${id}`, {
  headers: { Authorization: `Bearer ${token}` },
})
  .then((res) => res?.json())
  .then((data) => {
    task.value = data;
    isLoading.value = false;
  });

const toLocalString = (createdAt) => {
  const date = new Date(createdAt);
  return date.toDateString() + " at " + date.toLocaleTimeString();
};
</script>

<template>
  <TaskDetailsLoading v-if="isLoading" />

  <div v-if="!isLoading" class="py-10">
    <div class="mx-auto max-w-7xl px-20">
      <router-link
        class="text-md inline-flex items-center justify-center rounded-lg font-semibold py-3 px-4 bg-white/0 text-indigo-500 hover:text-indigo-600"
        to="/tasks"
      >
        <ArrowLeftIcon class="pr-2 h-5 text-inherit" />
        All Tasks
      </router-link>
    </div>
    <div class="mt-20 mx-auto max-w-7xl px-20">
      <div class="grid md:grid-cols-2 sm:grid-cols-1">
        <!-- Task Title and Description Section -->
        <div>
          <div class="sm:text-left">
            <p
              class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              {{ task?.title }}
            </p>
            <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              {{ task?.description }}
            </p>
          </div>
        </div>
        <!-- Task Status and Date Section -->
        <div class="md:pl-20 md:pt-0 sm:pt-10">
          <div class="flex flex-row items-center">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-300 text-white sm:shrink-0"
            >
              <CalendarIcon
                class="text-indigo-500 h-10 w-10"
                aria-hidden="true"
              />
            </div>
            <div class="ml-10 flex flex-col justify-center">
              <div class="font-bold">Creation date</div>
              <div class="font-normal text-gray-500">
                {{ toLocalString(task?.createdAt) }}
              </div>
            </div>
          </div>

          <div class="my-10 flex flex-row items-center">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-100 text-white sm:shrink-0"
            >
              <BoltIcon class="text-yellow-500 h-10 w-10" aria-hidden="true" />
            </div>
            <div class="ml-10 flex flex-col justify-center">
              <div class="font-bold">Status</div>
              <div class="font-normal text-gray-500">
                {{ task?.progress }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
