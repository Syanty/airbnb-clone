<template>
  <div
    v-if="place.name"
    class="
      flex
      items-center
      m-2
      p-1
      mt-5
      w-full
      space-x-4
      rounded-xl
      cursor-pointer
      hover:bg-gray-100
      hover:scale-105
      transition
      duration-200
      transform
      ease-out
      border
    "
  >
    <!-- left -->
    <div class="relative h-16 w-16">
      <img
        src="https://images.unsplash.com/photo-1565770772312-2b43cac7d585?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        class="rounded-lg w-full h-full"
      />
    </div>

    <!-- right -->
    <div>
      <h2 class="truncate">{{ place.name }}</h2>
      <h3 class="text-gray-500">{{ place.distance }} meter away</h3>
    </div>
  </div>
</template>
<script>
export default {
  props: ['place'],
}
</script>