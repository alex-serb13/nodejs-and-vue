<script setup>
import { ref } from "vue";
import { computed } from "vue";

import { useRouter } from "vue-router";
import { useStore } from "vuex";

const title = ref(null);
const description = ref(null);

const router = useRouter();
const store = useStore();
const token = computed(() => store.state.token).value;

const endpoint = import.meta.env.VITE_API_ENDPOINT;

const handleSubmit = () => {
  fetch(`${endpoint}/tasks`, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: "POST",
    body: JSON.stringify({
      title: title.value.trim(),
      description: description.value.trim(),
    }),
  })
    .then(() => {
      router.push("/tasks");
    })
    .catch((err) => console.log(err));
};
</script>

<template>
  <div class="relative overflow-hidden h-full">
    <div class="pt-40 grid grid-cols-2">
      <div class="ml-40">
        <div class="sm:max-w-lg">
          <h1
            class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Easy way to create new a task
          </h1>
          <p class="mt-4 text-xl text-gray-500">
            This year, our new task collection will shelter you from the harsh
            elements of a world that doesn't care if you live or die.
          </p>
        </div>
      </div>
      <div class="px-20">
        <form @submit.prevent="handleSubmit" autocomplete="off">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6">
                  <label
                    for="title"
                    class="block text-sm font-medium text-gray-700"
                    >Title</label
                  >
                  <input
                    pattern="\S(.*\S)?"
                    required
                    v-model="title"
                    type="text"
                    name="title"
                    id="title"
                    autocomplete="off"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="description"
                    class="block text-sm font-medium text-gray-700"
                    >Description</label
                  >
                  <input
                    pattern="\S(.*\S)?"
                    required
                    v-model="description"
                    type="text"
                    name="description"
                    id="description"
                    autocomplete="off"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div class="bg-gray-200 px-4 py-3 text-center sm:px-6">
              <button
                type="submit"
                class="w-40 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
