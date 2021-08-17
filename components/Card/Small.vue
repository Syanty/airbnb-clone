<template>
  <div
    class="
      flex
      items-center
      m-2
      mt-5
      space-x-4
      rounded-xl
      cursor-pointer
      hover:bg-gray-100
      hover:scale-105
      transition
      duration-200
      transform
      ease-out
    "
  >
    <!-- left -->
    <div class="relative h-16 w-16">
      <img :src="place.img" class="rounded-lg">
    </div>

    <!-- right -->
    <div>
      <h2>{{ place.location }}</h2>
      <h3 class="text-gray-500">{{ place.distance }}</h3>
    </div>
  </div>
</template>
<script>
export default {
  props: ['place'],
}
</script>