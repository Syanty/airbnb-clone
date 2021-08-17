<template>
  <div
    class="
      hover:scale-105
      transition
      transform
      duration-300
      ease-out
      cursor-pointer
    "
  >
    <div class="relative h-80 w-80">
      <img :src="live.img" class="rounded-xl h-full w-full">
    </div>
    <h3 class="text-2xl mt-3">{{ live.title }}</h3>
  </div>
</template>
<script>
export default {
  props: ['live'],
}
</script>