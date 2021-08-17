<template>
  <div
    class="
      relative
      w-full
      h-[300px]
      sm:h-[400px]
      md:h-[500px]
      lg:h-[600px]
      xl:h-[700px]
    "
  >
    <nuxt-img src="/papareact/0fm" fit="cover" class="w-full" />
    <div class="absolute top-1/2 w-full transform -translate-y-1/2 text-center">
      <p class="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
      <button
        class="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 "
      >
        I'm flexible
      </button>
    </div>
  </div>
</template>
<script>
export default {}
</script>