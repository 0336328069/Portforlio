<template>
  <div class="overflow-hidden py-4 relative">
    <div class="flex flex-nowrap infinity-scroll gap-8">
      <slot></slot>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.infinity-scroll {
  animation: scroll 25s linear infinite;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* Pause animation on hover */
.infinity-scroll:hover {
  animation-play-state: paused;
}
</style>