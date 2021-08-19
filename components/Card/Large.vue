<template>
  <section class="relative py-16 cursor-pointer">
    <div class="relative h-96 min-w-[300px]">
      <img
        :src="`${largeCardItem.img}`"
        class="rounded-2xl h-full w-full object-cover"
      />
    </div>
    <div class="absolute top-32 left-12">
        <h3 class="text-4xl mb-3 w-64">{{largeCardItem.title}}</h3>
        <p>{{largeCardItem.description}}</p>
        <button class="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">{{largeCardItem.buttonText}}</button>
    </div>
  </section>
</template>
<script>
export default {
  props: ['largeCardItem'],
}
</script>