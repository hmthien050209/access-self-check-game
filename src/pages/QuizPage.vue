<script setup lang="ts">
import AnswerSelectionBox from "../components/AnswerSelectionBox.vue";
import Button from "../components/Button.vue";
import { playConfetti } from "../playConfetti";
import { quizes } from "../quizes";
import { useQuizStore } from "../stores/useQuizStore";

const props = defineProps({
  id: { type: Number, required: true },
});

const currentQuiz = quizes.find((quiz) => quiz.id == props.id)!;
const store = useQuizStore();

function onSolved() {
  store.setSolved(props.id);
  playConfetti();
}
</script>

<template>
  <div class="quiz-page">
    <div
      class="my-4 flex items-center justify-center py-4 text-center font-[Oswald] text-5xl leading-tight text-titleForegroundColor"
    >
      {{ currentQuiz.question }}
    </div>
    <AnswerSelectionBox
      v-for="answer in currentQuiz.answers"
      :id="currentQuiz.id"
      :is-correct-answer="answer.correct || false"
      :show-answer="store.quizSolvedState[id - 1] || store.solvedAll"
      @solved="onSolved"
      >{{ answer.answer }}</AnswerSelectionBox
    >
    <div class="flex h-20 flex-row">
      <RouterLink to="/quiz_list">
        <Button class="h-20 w-20">
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-left"
            size="lg"
          />
        </Button>
      </RouterLink>
      <Button
        @click="store.setSolved(id)"
        class="h-full w-full text-3xl"
      >
        Hiện đáp án đúng
      </Button>
    </div>
  </div>
</template>

<style scoped>
.quiz-page {
  @apply relative flex h-screen w-screen flex-col items-center justify-center p-16;
}
</style>
