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

      <div class="flex flex-col mb-5">
        <card-info
          v-for="info in searchResult"
          :key="info.title"
          :info="info"
        ></card-info>
      </div>
    </section>
    <section v-if="searchResult.length > 0" class="hidden xl:inline-flex xl:min-w-[500px] py-5">
      <Map :searchResult="searchResult" />
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
      latitude: '',
      longitude: '',
      searchResult: [],
      categories:"accommodation",
      radius: 5000,

    }
  },
  created() {
    this.computeQuery()
  },
  methods: {
    computeQuery() {
      const { location, startDate, endDate, noOfGuests, latitude, longitude } =
        this.$route.query
      this.location = location
      this.startDate = startDate
      this.endDate = endDate
      this.noOfGuests = noOfGuests
      this.latitude = latitude
      this.longitude = longitude

      const formatedStartDate = format(new Date(startDate), 'dd MMMM yy')
      const formatedEndDate = format(new Date(endDate), 'dd MMMM yy')

      this.range = `${formatedStartDate} - ${formatedEndDate}`
    },
  },
  async fetch() {
    this.searchResult = await this.$axios
      .get(
        `https://api.geoapify.com/v2/places?categories=${this.categories}&filter=circle:${this.longitude},${this.latitude},${this.radius}&bias=proximity:${this.longitude},${this.latitude}&lang=en&limit=20&apiKey=${process.env.NUXT_ENV_GEOAPIFY_KEY}`
      )
      .then((res) => {
        return res.data.features
      })
  },
}
</script>