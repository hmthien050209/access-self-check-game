<template>
  <div class="flex h-screen w-screen flex-col items-center justify-center p-16">
    <span class="m-4 p-4 font-[Oswald] text-6xl text-titleForegroundColor"
      >Tích cực quay số, phần thưởng sẽ tới :)</span
    >
    <iframe
      src="https://wheelofnames.com/6zb-mw9"
      frameborder="0"
      height="80%"
      width="90%"
    ></iframe>
    <RouterLink to="/quiz_list">
      <Button class="text-3xl">Chọn câu hỏi</Button>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import Button from "../components/Button.vue";
</script>
