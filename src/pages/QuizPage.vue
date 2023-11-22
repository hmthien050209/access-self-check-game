<script setup lang="ts">
import AnswerSelectionBox from "../components/AnswerSelectionBox.vue";
import { submitAnswer, state } from "../comm/socket";
</script>

<template>
  <div
    class="quiz-page"
    v-if="state.currentQuiz !== undefined"
  >
    <div
      class="my-4 flex items-center justify-center py-4 text-center font-[Oswald] text-5xl leading-tight text-titleForegroundColor"
    >
      {{ state.currentQuiz.question }}
    </div>
    <AnswerSelectionBox
      v-for="answer in state.currentQuiz.answers"
      @click="submitAnswer(answer)"
      >{{ answer }}</AnswerSelectionBox
    >
  </div>
  <span v-else>Waiting for question...</span>
</template>

<style scoped>
.quiz-page {
  @apply relative flex h-screen w-screen flex-col items-center justify-center p-16;
}
</style>
