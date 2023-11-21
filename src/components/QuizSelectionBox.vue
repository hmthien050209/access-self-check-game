<template>
  <div
    class="my-1 flex h-20 w-auto flex-row items-center rounded-xl bg-[#c8a888] px-3 shadow-md brightness-110"
  >
    <div class="relative h-14 w-14">
      <Button
        @click="pushQuiz()"
        class="id-button"
        >{{ id }}</Button
      >
      <Presence class="absolute left-0 top-0 h-full w-full">
        <Motion
          v-if="store.quizLockState[id - 1]"
          :initial="{ opacity: 0, x: 16 }"
          :animate="{
            opacity: 0.8,
            x: 0,
          }"
          :exit="{
            opacity: 0,
            x: -16,
            transition: { duration: 0.3 },
          }"
        >
          <div
            @click="store.unlock(id)"
            class="lock-button"
          >
            <FontAwesomeIcon
              icon="fa-solid fa-lock"
              size="2x"
            />
          </div>
        </Motion>
      </Presence>
    </div>
    <LetterBox
      v-for="i in blankLbLeftNum + 1"
      blank
    />
    <LetterBox
      v-for="i in currentQuiz.keyword.length"
      :blank="store.quizLockState[id - 1]"
      :show-lb="store.quizSolvedState[id - 1] || store.solvedAll"
      :class="`visibleLetterBox${id}`"
      :is-key-lb="i == currentQuiz.keyIdx"
      >{{ currentQuiz.keyword.charAt(i - 1) }}</LetterBox
    >
    <LetterBox
      v-for="i in blankLbRightNum"
      blank
    />
  </div>
</template>
<script setup lang="ts">
import { animate, stagger } from "motion";
import { Motion, Presence } from "motion/vue";
import { onUpdated } from "vue";
import { useRouter } from "vue-router";
import { quizes } from "../quizes";
import { useQuizStore } from "../stores/useQuizStore";
import LetterBox from "./LetterBox.vue";
import Button from "./Button.vue";

const props = defineProps({
  id: { type: Number, required: true },
  keyColIdx: { type: Number, required: true },
});

const router = useRouter();
const store = useQuizStore();
const currentQuiz = quizes.find((quiz) => quiz.id == props.id)!;
const blankLbLeftNum = props.keyColIdx - currentQuiz.keyIdx,
  blankLbRightNum = 18 - (blankLbLeftNum + currentQuiz.keyword.length);

function pushQuiz() {
  router.push(`/quiz/${props.id}`);
}

onUpdated(() => {
  if (!store.quizLockState[props.id - 1] && !store.solvedAll) {
    animate(
      `.visibleLetterBox${props.id}`,
      { y: [-24, 0], opacity: [0, 1] },
      { delay: stagger(0.05, { start: 0.1 }) }
    );
  }
  if (store.solvedAll) {
    animate(
      `.visibleLetterBox${props.id}`,
      { y: [-24, 0], opacity: [0, 1] },
      { delay: stagger(0.05, { start: 0.1 }) }
    );
  }
});
</script>
<style scoped>
.id-button {
  @apply m-0
    flex h-full w-full
    cursor-pointer items-center justify-center 
    rounded-xl p-0 text-3xl font-medium text-normalForegroundColor;
}
.lock-button {
  @apply flex h-full w-full
    items-center justify-center rounded-xl
    bg-gray-400 brightness-75;
}
</style>
