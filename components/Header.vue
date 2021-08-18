<template>
  <header
    :class="{ scrolled: !view.atTopOfPage }"
    class="fixed top-0 z-50 w-full grid grid-cols-3 p-5 md:px-10 text-gray-500"
  >
    <!-- left -->
    <div
      class="h-10 flex items-center relative cursor-pointer my-auto"
      @click="$router.push('/')"
    >
      <img
        src="https://links.papareact.com/qd3"
        class="h-full object-contain"
      />
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
        v-model="searchInput"
        @input="$refs.picker.togglePicker(true)"
        :placeholder="placeholder"
        class="
          pl-5
          bg-transparent
          text-sm text-gray-600
          font-medium
          focus:outline-none
          flex-grow
          placeholder-gray-400
          cursor-pointer
          transition
          duration-200
          ease-out
          overflow-hidden
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
          lg:inline
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

    <div
      v-show="searchInput"
      :class="!view.atTopOfPage ? 'visible' : 'hidden'"
      class="col-span-3 flex flex-col mx-auto"
    >
      <date-range-picker
        v-model="dateRange"
        :min-date="new Date()"
        ref="picker"
      >
        <!--    date slot-->
        <template #date="data">
          <span class="small">{{ data.date | dateCell }}</span>
        </template>
        <!--    ranges (new slot syntax) -->
        <template #ranges="ranges">
          <div class="ranges">
            <ul>
              <li
                v-for="(range, name) in ranges.ranges"
                :key="name"
                @click="ranges.clickRange(range)"
              >
                <b>{{ name }}</b>
                <small class="text-muted"
                  >{{ range[0].toDateString() }} -
                  {{ range[1].toDateString() }}</small
                >
              </li>
            </ul>
          </div>
        </template>
        <!--    footer slot-->
        <div slot="footer" class="mb-4">
          <div class="flex items-center border-b mb-4 p-2">
            <h2 class="text-2xl flex-grow font-semibold">Number of Guests</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
              />
            </svg>
            <input
              type="number"
              class="pl-2 w-12 text-lg text-red-400 outline-none"
              v-model="noOfGuests"
              :min="1"
            />
          </div>
          <div class="flex">
            <button @click="searchInput = ''" class="flex-grow text-gray-500">
              Cancel
            </button>
            <button class="flex-grow text-red-400" @click="search">
              Search
            </button>
          </div>
        </div>
      </date-range-picker>
    </div>
  </header>
</template>
<script>
import DateRangePicker from 'vue2-daterange-picker'
/* you need to import the CSS manually */
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
import { format } from 'date-fns'
export default {
  props: ['view'],
  components: { DateRangePicker },
  data() {
    const startDate = new Date()
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 6)

    return {
      placeholder: 'Start your Search',
      dateRange: { startDate, endDate },
      searchInput: '',
      noOfGuests: 1,
    }
  },
  filters: {
    dateCell(value) {
      const dt = new Date(value)

      return dt.getDate()
    },
    date(val) {
      return val ? val.toLocaleString() : ''
    },
  },
  methods: {
    search() {
      const searchQuery = {
        location: this.searchInput,
        startDate: this.dateRange.startDate.toISOString(),
        endDate: this.dateRange.endDate.toISOString(),
        noOfGuests: this.noOfGuests,
      }

      const formatedStartDate = format(
        new Date(searchQuery.startDate),
        'dd MMMM yy'
      )
      const formatedEndDate = format(
        new Date(searchQuery.endDate),
        'dd MMMM yy'
      )

      const range = `${formatedStartDate} - ${formatedEndDate}`

      this.searchInput = ''
      this.placeholder = `${searchQuery.location} | ${range} | ${searchQuery.noOfGuests} guests`

      this.$router.push({
        path: 'search',
        query: searchQuery,
      })
    },
  },
}
</script>
