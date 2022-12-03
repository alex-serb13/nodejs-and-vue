<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div>
    <div>
      <div class="navigation-container"><Navigation /></div>
      <div class="router-container"><RouterView /></div>
    </div>
  </div>
</template>
