<script setup lang="ts"></script>

<template>
  <div class="selection-box-normal">
    <slot></slot>
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
  @apply border-titleForegroundColor bg-slate-700;
}
</style>
