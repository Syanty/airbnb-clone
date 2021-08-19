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
    <div
      :class="view.atTopOfPage ? 'invisible md:visible' : 'hidden'"
      class="absolute z-40 flex flex-col top-24 w-full"
    >
      <div
        :class="view.atTopOfPage ? ' lg:hidden flex' : 'hidden'"
        class="justify-center space-x-4 p-2 items-center"
      >
        <h3 class="min-w-max p-2">Places to stay</h3>
        <h3 class="min-w-max p-2">Experiences</h3>
        <h3 class="min-w-max p-2">Online Experiences</h3>
      </div>
      <div
        class="
          bg-white
          rounded-full
          h-20
          w-9/12
          mx-auto
          grid grid-cols-4
          p-2
          space-x-4
          text-black
        "
      >
        <div
          class="p-2 px-3 hover:rounded-full hover:bg-gray-200 cursor-pointer"
          v-for="item in items"
          :key="item.title"
        >
          <h3>{{ item.title }}</h3>
          <p class="text-gray-400">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <img src="/banner.jpg" class="w-full h-full object-cover" />
    <div class="absolute top-1/2 w-full transform -translate-y-1/2 text-center">
      <p class="text-sm sm:text-lg text-white">Not sure where to go? Perfect.</p>
      <button
        class="
          text-red-600
          bg-white
          px-10
          py-4
          shadow-md
          rounded-full
          font-bold
          my-3
          hover:shadow-xl
          active:scale-90
          transition
          duration-150
        "
      >
        I'm flexible
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['view'],
  data() {
    return {
      items: [
        {
          title: 'Location',
          description: 'Where are you going?',
        },
        {
          title: 'Check In',
          description: 'Add Dates',
        },
        {
          title: 'Check Out',
          description: 'Add Dates',
        },
        {
          title: 'Guests',
          description: 'Add Guests',
        },
      ],
    }
  },
}
</script>