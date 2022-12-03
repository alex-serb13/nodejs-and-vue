<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { LockClosedIcon } from "@heroicons/vue/20/solid";
import { BookmarkSquareIcon } from "@heroicons/vue/24/outline";

const email = ref(null);
const password = ref(null);

const router = useRouter();
const store = useStore();

const handleSubmit = () => {
  fetch("http://localhost:5000/signin", {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email: email.value.trim(),
      password: password.value.trim(),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data?.token) {
        store.dispatch("authenticate", data.token);
        router.push("/tasks");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>

<template>
  <div class="flex min-h-full items-center justify-center py-20 px-4">
    <div class="w-full max-w-md space-y-8">
      <div>
        <BookmarkSquareIcon
          class="mx-auto h-12 w-auto h-11 w-auto flex-shrink-0 text-indigo-600"
        />
        <h2
          class="mt-6 mb-2 text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Sign in to your account
        </h2>
      </div>
      <form
        @submit.prevent="handleSubmit"
        class="mt-8 space-y-6"
        autocomplete="false"
      >
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              @keydown.space.prevent
              pattern="\S(.*\S)?"
              v-model="email"
              id="email-address"
              name="email"
              type="email"
              autocomplete="off"
              required
              class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              @keydown.space.prevent
              pattern="\S(.*\S)?"
              v-model="password"
              id="password"
              name="password"
              type="password"
              autocomplete="off"
              required
              class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="mt-6 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
