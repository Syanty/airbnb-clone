<template>
  <main class="flex mt-20">
    <section class="flex-grow pt-14 px-6">
      <p class="text-xs">
        300+ Stays {{ range }} - for {{ noOfGuests }} guests
      </p>
      <h1 class="text-3xl font-semibold mt-2 mb-6">Stays in {{ location }}</h1>
      <div
        class="
          hidden
          mb-5
          space-x-3
          text-gray-800
          whitespace-nowrap
          lg:inline-flex
        "
      >
        <p class="button">Cancellation flexibility</p>
        <p class="button">Type of Place</p>
        <p class="button">Price</p>
        <p class="button">Rooms and Beds</p>
        <p class="button">More Filters</p>
      </div>

      <div class="flex flex-col mb-5" v-if="!$fetchState.pending">
        <card-info
          v-for="info in searchResult"
          :key="info.title"
          :info="info"
        ></card-info>
      </div>
    </section>
  </main>
</template>
<script>
import { format } from 'date-fns'
export default {
  data() {
    return {
      location: '',
      startDate: '',
      endDate: '',
      noOfGuests: 0,
      range: '',
      searchResult: [],
    }
  },
  created() {
    this.computeQuery()
  },
  methods: {
    computeQuery() {
      const { location, startDate, endDate, noOfGuests } = this.$route.query
      this.location = location
      this.startDate = startDate
      this.endDate = endDate
      this.noOfGuests = noOfGuests

      const formatedStartDate = format(new Date(startDate), 'dd MMMM yy')
      const formatedEndDate = format(new Date(endDate), 'dd MMMM yy')

      this.range = `${formatedStartDate} - ${formatedEndDate}`
    },
  },
  async fetch() {
    this.searchResult = await this.$axios.get('/isz').then((res) => {
      return res.data
    })
  },
}
</script>