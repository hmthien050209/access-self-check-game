<script lang="ts">
import { quizes } from "./quizes";
import { Motion, Presence } from "motion/vue";
import { useQuizStore } from "./stores/useQuizStore";
import { onMounted } from "vue";
export default {
  components: { Motion, Presence },
  setup() {
    onMounted(() => {
      useQuizStore().init();
    });
    return {
      quizes,
    };
  },
};
</script>
<template>
  <div class="background">
    <RouterView v-slot="{ Component, route }">
      <Presence>
        <Motion
          :key="route.path"
          :initial="{ opacity: 0, x: 100 }"
          :animate="{
            opacity: 1,
            x: 0,
            transition: { delay: 0.3 },
          }"
          :exit="{ opacity: 0, x: -100 }"
          :exitBeforeEnter="true"
        >
          <component :is="Component"></component>
        </Motion>
      </Presence>
    </RouterView>
  </div>
</template>
<style scoped>
.background {
  background-image: url("assets/images/background.png");
  @apply h-screen w-screen overflow-hidden bg-cover bg-no-repeat font-['Roboto_Slab'] font-medium text-normalForegroundColor;
}
</style>
