<template>
  <div class="button">
    <slot>Button</slot>
  </div>
</template>
<style scoped>
.button {
  @apply m-4 flex cursor-pointer items-center
    justify-center rounded-lg border-2
    border-titleForegroundColor bg-orange-200 p-4 text-center text-normalForegroundColor 
    shadow-lg transition-all duration-150 ease-linear;
}
</style>
