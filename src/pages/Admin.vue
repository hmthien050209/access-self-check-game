<template>
  <div class="entries">
    <span>Hiện còn lại {{ adminState.numberOfQuestionRemaining }} câu hỏi</span>
    <div
      v-for="entry in adminState.entries"
      :key="entry.userId"
      class="entry"
    >
      <span>Máy số {{ entry.userId }}</span>
      <span>Thời gian {{ entry.timeToAnswer }}ms</span>
      <span
        >Đáp án
        <span
          class="answer"
          :class="
            adminState.currentQuiz?.correctAnswer === entry.answer
              ? `correct`
              : `incorrect`
          "
          >{{ entry.answer }}</span
        ></span
      >
    </div>
    <button @click="adminReset()">Reset</button>
    <button @click="sendNewQuestion(quizCollection)">Tạo câu hỏi mới</button>
    <button @click="changeQuizCollection(1)">Chuyển sang bài 1</button>
    <button @click="changeQuizCollection(2)">Chuyển sang bài 5</button>
  </div>
</template>

<style scoped>
* {
  @apply m-2 p-2 text-2xl;
}
.answer {
  @apply font-bold;
}
.correct {
  @apply text-green-600;
}
.incorrect {
  @apply text-red-600;
}
.entries {
  @apply flex flex-col;
}
button,
.entry {
  @apply m-2 rounded-md border-2 border-slate-500 bg-backgroundColor p-2 transition-all duration-150 hover:brightness-90;
}
</style>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  adminState,
  adminReset,
  sendNewQuestion,
  adminJoin,
  getNumberOfRemainingQuestion,
} from "../comm/socket";

const quizCollection = ref(1);

function changeQuizCollection(newQuizCollection: number) {
  quizCollection.value = newQuizCollection;
  getNumberOfRemainingQuestion(quizCollection.value);
}

onMounted(() => {
  adminJoin();
});
</script>
