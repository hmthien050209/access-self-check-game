<template>
  <div
    class="relative flex h-screen w-screen flex-row items-center justify-center"
  >
    <div class="m-16 flex h-auto w-auto flex-col items-center justify-center">
      <span
        class="m-2 p-2 font-[Oswald] text-5xl text-titleForegroundColor transition-all duration-300 ease-linear"
        >{{
          store.solvedAll || answeredQuizNum === 13
            ? 'Chúc mừng, mật mã là "Tan rã thuộc địa"'
            : "Mời bạn chọn câu hỏi"
        }}</span
      >
      <Button
        v-if="answeredQuizNum >= 6"
        @click="showAllAnswers()"
        class="h-full w-full text-3xl"
      >
        Giải mật mã
      </Button>
      <Button class="h-full w-full text-3xl">
        <RouterLink
          to="/random_wheel"
          class="h-full w-full"
        >
          Quay số
        </RouterLink>
      </Button>
    </div>
    <div class="relative flex flex-col items-center justify-center">
      <QuizSelectionBox
        v-for="quiz in quizes"
        :id="quiz.id"
        :key-col-idx="keyColIdx"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { quizes } from "../quizes";
import QuizSelectionBox from "../components/QuizSelectionBox.vue";
import { useQuizStore } from "../stores/useQuizStore";
import { ref, onMounted } from "vue";
import Button from "../components/Button.vue";
import { playConfetti } from "../playConfetti";
const keyColIdx: number = 10;
let store = useQuizStore();
let answeredQuizNum = ref(
  store.quizSolvedState.filter((val) => val === true).length
);

function showAllAnswers() {
  store.setSolvedAll();
  playConfetti();
}
onMounted(() => {
  if (answeredQuizNum.value === 13) playConfetti();
});
</script>
