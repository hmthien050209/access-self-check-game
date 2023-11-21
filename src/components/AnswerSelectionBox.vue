<script setup lang="ts">
import { ref } from "vue";
const emit = defineEmits(["solved"]);
const props = defineProps({
  id: { type: Number, required: true },
  showAnswer: Boolean,
  isCorrectAnswer: Boolean,
});
let selected = ref(false);

function checkAnswer() {
  selected.value = true;
  if (props.isCorrectAnswer) emit("solved");
}
</script>

<template>
  <div
    v-if="isCorrectAnswer"
    @click="checkAnswer()"
    :class="
      selected || showAnswer ? `selection-box-correct` : `selection-box-normal`
    "
  >
    <slot>Right answer here!</slot>
    <font-awesome-icon
      icon="fa-solid fa-check-square"
      :class="[
        selected || showAnswer ? `scale-100` : `scale-0`,
        `selection-icon`,
      ]"
    ></font-awesome-icon>
  </div>
  <div
    v-else
    @click="checkAnswer()"
    :class="
      selected || showAnswer ? `selection-box-wrong` : `selection-box-normal`
    "
  >
    <slot> Answers here! </slot>
    <font-awesome-icon
      icon="fa-solid fa-xmark-square"
      :class="[
        selected || showAnswer ? `scale-100` : `scale-0`,
        `selection-icon`,
      ]"
    ></font-awesome-icon>
  </div>
</template>

<style scoped lang="scss">
%selection-box-shared {
  @apply m-2 flex h-32 
    w-4/5 cursor-pointer 
    items-center rounded-lg border-2 
    pl-8 text-4xl shadow-lg transition-all
    duration-100 ease-linear;
}
.selection-box-normal {
  @extend %selection-box-shared;
  @apply border-titleForegroundColor bg-orange-200;
}
.selection-box-correct {
  @extend %selection-box-shared;
  @apply scale-105 border-emerald-600 bg-emerald-500 text-white;
}
.selection-box-wrong {
  @extend %selection-box-shared;
  @apply scale-95 border-red-700 bg-red-500 text-white;
}
.selection-icon {
  @apply m-8 ml-auto;
}
</style>
