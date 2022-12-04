<template>
  <div class="animate-pulse mt-20 max-w-lg sm:mx-auto md:max-w-none">
    <div
      class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16"
    >
      <div
        v-for="index in 4"
        class="rounded-lg p-10 bg-gray-100 shadow-xl relative flex flex-col gap-6 md:flex-col"
      >
        <div class="flex flex-row items-center justify-between">
          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-white sm:shrink-0"
          >
            <div class="bg-slate-300 h-10 w-10"></div>
          </div>
          <div></div>
        </div>
        <div class="sm:min-w-0 sm:flex-1">
          <div class="h-6 bg-slate-300 rounded col-span-2"></div>
          <div class="mt-4 h-6 bg-slate-300 rounded col-span-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>
