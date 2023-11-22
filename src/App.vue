<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>
<template>
  <div class="background">
    <RouterView />
  </div>
</template>
<style scoped>
.background {
  @apply flex h-screen w-screen items-center justify-center overflow-hidden bg-backgroundColor font-sans font-medium text-normalForegroundColor;
}
</style>
