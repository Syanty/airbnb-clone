<template>
  <div
    class="
      flex
      py-7
      px-2
      border-b
      cursor-pointer
      hover:opacity-80
      first:border-t
      hover:shadow-lg
      pr-4
      transition
      duration-200
      ease-out
    "
  >
    <div class="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
      <img
        src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=676&q=80"
        alt="info image"
        class="object-cover h-full w-full rounded-2xl"
      />
    </div>
    <div class="flex flex-col flex-grow pl-5">
      <div class="flex justify-between">
        <p>{{ info.properties.formatted }}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
      <h4 class="text-xl">{{ info.properties.name || info.properties.formatted}}</h4>
      <div class="border-b w-10 pt-2" />

      <p class="pt-2 text-sm text-gray-500 flex-grow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione autem
        nihil sunt porro quam alias atque, dolore animi omnis consectetur at
        consequuntur fugiat voluptas culpa. Ipsa cumque veniam harum quibusdam!
      </p>
      <div class="flex justify-between items-end pt-5">
        <p class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          4
        </p>
        <div>
          <p class="text-lg lg:text-2xl font-semibold pb-2">$0000</p>
          <p class="text-right font-extralight">$00000</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['info'],
}
</script>