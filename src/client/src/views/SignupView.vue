<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const email = ref(null);
const password = ref(null);
const firstName = ref(null);
const lastName = ref(null);

const router = useRouter();
const store = useStore();

const handleSubmit = () => {
  fetch("http://localhost:5000/signup", {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email: email.value.trim(),
      password: password.value.trim(),
      firstName: firstName.value.trim(),
      lastName: lastName.value.trim(),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      store.dispatch("authenticate", data.token);
      router.push("/tasks");
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>
<template>
  <div class="m-10 p-10 flex justify-center">
    <div class="col-span-3">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">
            Personal Information
          </h3>
          <p class="mt-1 text-sm text-gray-600">
            Easily create an new account.
          </p>
        </div>
      </div>
      <div class="mt-5">
        <form @submit.prevent="handleSubmit" autocomplete="off">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >First name</label
                  >
                  <input
                    @keydown.space.prevent
                    pattern="\S(.*\S)?"
                    required
                    v-model="firstName"
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="off"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    >Last name</label
                  >
                  <input
                    @keydown.space.prevent
                    pattern="\S(.*\S)?"
                    required
                    v-model="lastName"
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="off"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="email-address"
                    class="block text-sm font-medium text-gray-700"
                    >Email address</label
                  >
                  <input
                    @keydown.space.prevent
                    required
                    v-model="email"
                    type="email"
                    name="email-address"
                    id="email-address"
                    autocomplete="off"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div class="col-span-6">
                  <label
                    for="street-address"
                    class="block text-sm font-medium text-gray-700"
                    >Password</label
                  >
                  <input
                    @keydown.space.prevent
                    pattern="\S(.*\S)?"
                    required
                    v-model="password"
                    type="password"
                    name="password"
                    id="password"
                    autocomplete="off"
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 text-center sm:px-6">
              <button
                type="submit"
                class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
