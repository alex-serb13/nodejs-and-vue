<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { BookmarkSquareIcon } from "@heroicons/vue/24/outline";
import UserMenu from "./UserMenu.vue";

const store = useStore();
const isAuthenticated = computed(() => store.state.isAuthenticated);
</script>

<template>
  <div class="relative bg-white">
    <div class="">
      <div
        class="px-12 flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
      >
        <router-link
          class="items-center justify-start flex flex-1 lg:w-0"
          to="/"
        >
          <BookmarkSquareIcon
            class="px-2 h-11 w-auto flex-shrink-0 text-indigo-600"
          />
          <div
            class="text-center text-3xl font-semibold tracking-tight text-indigo-600"
          >
            Manager
          </div>
        </router-link>

        <div
          v-if="isAuthenticated"
          class="items-center justify-end md:flex md:flex-1 lg:w-0"
        >
          <router-link
            to="/tasks"
            class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >Tasks</router-link
          >
          <UserMenu />
        </div>

        <div
          v-if="!isAuthenticated"
          class="items-center justify-end md:flex md:flex-1 lg:w-0"
        >
          <router-link
            to="/signin"
            class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >Sign in</router-link
          >
          <router-link
            to="/signup"
            class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >Sign up</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
