<template>
  <header
    :class="{ scrolled: !view.atTopOfPage }"
    class="fixed top-0 z-50 w-full grid grid-cols-3 p-5 md:px-10 text-white"
  >
    <div
      :class="view.atTopOfPage ? 'invisible md:visible' : 'hidden'"
      class="absolute flex flex-col top-24 w-full"
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

    <!-- left -->
    <div class="h-10 flex items-center relative cursor-pointer my-auto">
      <nuxt-img src="/papareact/qd3" fit="contain" class="h-full" />
    </div>
    <!-- middle -->

    <!-- on scrolled to top -->
    <div
      :class="!view.atTopOfPage ? 'flex' : 'hidden'"
      class="
        items-center
        md:border-2
        rounded-full
        py-2
        md:shadow-md
        hover:shadow-lg
        cursor-pointer
      "
    >
      <input
        type="text"
        placeholder="Start your search"
        class="
          pl-5
          bg-transparent
          text-sm text-gray-600
          font-medium
          focus:outline-none
          flex-grow
          placeholder-black
          cursor-pointer
        "
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="
          h-8
          cursor-pointer
          text-white
          bg-red-600
          rounded-full
          p-2
          lg:mx-2
          hidden
          lg:inline-flex
        "
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clip-rule="evenodd"
        />
      </svg>
    </div>

    <!-- on normal form -->
    <div
      :class="view.atTopOfPage ? ' lg:visible invisible' : 'hidden'"
      class="flex justify-around space-x-4 p-2 items-center"
    >
      <h3 class="min-w-max">Places to stay</h3>
      <h3 class="min-w-max">Experiences</h3>
      <h3 class="min-w-max">Online Experiences</h3>
    </div>
    <!-- right -->
    <div class="flex items-center justify-end space-x-4">
      <p
        class="
          hidden
          md:inline
          cursor-pointer
          font-medium
          min-w-max
          hover:bg-gray-100 hover:bg-opacity-20
          rounded-full
          p-3
        "
      >
        Become a host
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="
          h-12
          p-3
          cursor-pointer
          flex-shrink-0
          hover:bg-gray-100 hover:bg-opacity-20
          rounded-full
        "
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
          clip-rule="evenodd"
        />
      </svg>
      <div
        class="
          border-2
          flex
          items-center
          space-x-2
          p-2
          rounded-full
          cursor-pointer
          bg-white
          text-gray-500
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      view: {
        atTopOfPage: true,
      },
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
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        this.view.atTopOfPage = false
      } else {
        this.view.atTopOfPage = true
      }
    },
  },
}
</script>
