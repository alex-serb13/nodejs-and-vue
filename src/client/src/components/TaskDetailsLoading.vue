<template>
  <div class="animate-pulse py-10">
    <div class="mx-auto max-w-7xl px-20">
      <div class="bg-slate-300 h-10 w-44"></div>
    </div>
    <div class="mt-20 mx-auto max-w-7xl px-20">
      <div class="grid md:grid-cols-2 sm:grid-cols-1">
        <!-- Task Title and Description Section -->
        <div>
          <div class="sm:text-left">
            <p
              class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
            <div class="h-12 bg-slate-300 rounded col-span-2"></div>
        </p>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                <div class="mt-4 h-6 bg-slate-300 rounded "></div>
          
            </p>
          </div>
        </div>
        <!-- Task Status and Date Section -->
        <div class="md:pl-20 md:pt-0 sm:pt-10">
          <div class="flex flex-row items-center">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-300 text-white sm:shrink-0"
            >
            <div class="bg-slate-300 h-10 w-10"></div>
            </div>
            <div class="ml-10 flex flex-col justify-center">
              <div class="font-bold">Creation date</div>
              <div class="font-normal text-gray-500">
                <div class="mt-2 h-6 bg-slate-300 rounded col-span-2"></div>
              </div>
            </div>
          </div>

          <div class="my-10 flex flex-row items-center">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-300   text-white sm:shrink-0"
            >
            <div class="bg-slate-300 h-10 w-10"></div>
            </div>
            <div class="ml-10 flex flex-col justify-center">
              <div class="font-bold">Status</div>
              <div class="font-normal text-gray-500">
                <div class="mt-2 h-6 bg-slate-300 rounded col-span-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
