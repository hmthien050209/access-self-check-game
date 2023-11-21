import { defineStore } from "pinia";
import { ref } from "vue";

export const useQuizStore = defineStore("quizStates", () => {
  const quizLockState = ref(Array<boolean>(13));
  const quizSolvedState = ref(Array<boolean>(13));
  const solvedAll = ref(false);

  function init() {
    quizSolvedState.value.fill(false, 0, 13);
    quizLockState.value.fill(true, 0, 13);
  }

  function unlock(quizId: number) {
    quizLockState.value[quizId - 1] = false;
  }

  function setSolved(quizId: number) {
    quizSolvedState.value[quizId - 1] = true;
  }

  function setSolvedAll() {
    solvedAll.value = true;
    quizLockState.value.fill(false, 0, quizLockState.value.length);
  }

  return {
    init,
    quizSolvedState,
    quizLockState,
    setSolved,
    unlock,
    solvedAll,
    setSolvedAll,
  };
});
