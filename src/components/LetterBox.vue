<template>
  <div
    :class="[
      blank && 'lb-blank',
      showLb && isKeyLb && 'lb-key',
      showLb && 'lb-normal',
      !showLb && 'lb-hidden',
    ]"
  >
    <slot> A </slot>
  </div>
</template>

<style scoped lang="scss">
%lb-shared {
  @apply mx-1 h-14 w-14;
}
.lb-blank {
  @extend %lb-shared;
  @apply invisible;
}
.lb-hidden {
  @extend %lb-shared;
  @apply rounded-xl border-2 border-titleForegroundColor bg-orange-200 text-transparent;
}
.lb-normal {
  @extend %lb-shared;
  @apply flex items-center justify-center rounded-xl border-2 border-titleForegroundColor bg-orange-200 text-2xl text-normalForegroundColor;
}
.lb-key {
  @extend .lb-normal;
  @apply bg-emerald-500;
}
</style>

<script setup lang="ts">
defineProps({
  blank: Boolean,
  showLb: Boolean,
  isKeyLb: Boolean,
});
</script>
