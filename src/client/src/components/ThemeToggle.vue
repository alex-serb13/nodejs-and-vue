<script setup>
import { SunIcon, MoonIcon } from "@heroicons/vue/24/outline";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div
    class="flex space-x-1 rounded-lg bg-slate-100 p-0.5"
    role="tablist"
    aria-orientation="horizontal"
  >
    <button
      class="flex items-center rounded-md py-[0.4375rem] pl-2 pr-2 text-sm font-semibold lg:pr-3"
      id="headlessui-tabs-tab-121"
      role="tab"
      type="button"
      tabindex="-1"
      aria-controls="headlessui-tabs-panel-123"
      @click="() => toggleDark(!isDark)"
    >
      <SunIcon v-if="!isDark" class="h-5 w-5 flex-none stroke-slate-600" />
      <MoonIcon v-if="isDark" class="h-5 w-5 flex-none stroke-slate-600" />
    </button>
  </div>
</template>
