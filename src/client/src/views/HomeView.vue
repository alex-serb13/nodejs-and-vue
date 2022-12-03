<template>
  <div>
    <main>
      <div class="relative px-6 lg:px-8">
        <div class="mx-auto max-w-3xl pt-32 pb-32">
          <div>
            <div>
              <h1
                class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl"
              >
                An easy way to create and manage tasks
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div class="mt-8 flex gap-x-4 sm:justify-center">
                <router-link
                  to="/signup"
                  class="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                >
                  Get started
                  <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
