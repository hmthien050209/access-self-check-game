<template>
  <div class="flex h-screen w-screen flex-col items-center justify-center">
    <audio
      autoplay
      :src="backgroundMusic"
      hidden
    ></audio>
    <div
      tabindex="0"
      class="h-2 w-2 bg-transparent"
      @focusin="playAudio()"
    ></div>
    <span class="m-8 p-8 font-[Bangers] text-7xl">Đi tìm từ khóa</span>
    <Presence>
      <Motion
        :initial="{ opacity: 0, x: 150 }"
        :animate="{
          opacity: 1,
          x: 0,
          transition: { delay: 0.5 },
        }"
      >
        <RouterLink
          tabindex="1"
          to="/rules"
          class="play-button"
        >
          Bắt đầu chơi!
        </RouterLink>
      </Motion>
    </Presence>
  </div>
</template>
<style scoped>
.play-button {
  @apply m-4 h-auto w-auto rounded-l-full rounded-r-full
    bg-gradient-to-b from-yellow-500 via-orange-500 to-orange-600
    p-7 font-[Bangers] text-5xl text-white
    shadow-md transition-all 
    duration-150 
    ease-linear;
}
</style>
<script setup lang="ts">
import { Motion, Presence } from "motion/vue";
import { RouterLink } from "vue-router";
import backgroundMusic from "../assets/audio/background-music.mp3";
function playAudio() {
  let audioElem = document.querySelector("audio");
  audioElem?.play();
}
</script>
