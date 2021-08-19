<template>
  <div>
    <Banner :view="view" />
    <main class="max-w-7xl mx-auto px-8 sm:px-16">
      <section class="pt-6" v-if="exploreData.length > 0">
        <h2 class="text-4xl font-semibold pb-5">Explore Nearby</h2>
        <!-- pull some data -- from endpoint -->
        <div
          class="grid sm:grid-cols-2 grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 gap-x-4 gap-y-0"
          
        >
          <card-small
            v-for="item in exploreData"
            :key="item.properties.name"
            :place="item.properties"
          />
        </div>
      </section>
      <section>
        <h2 class="text-4xl font-semibold py-8">Live anywhere</h2>
        <div
          class="
            flex
            space-x-3
            overflow-scroll overflow-y-hidden
            scrollbar-hide
            p-3
            -ml-3
          "
        >
          <card-medium
            v-for="item in liveData"
            :key="item.title"
            :live="item"
          ></card-medium>
        </div>
      </section>
      <card-large :largeCardItem="largeCardItem"></card-large>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      view: {
        atTopOfPage: true,
      },
      exploreData: [],
      liveData: [
        {
          img: 'https://images.unsplash.com/photo-1582438005052-03a3d902afa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=508&q=80',
          title: 'Outdoor getaways',
        },
        {
          img: 'https://images.unsplash.com/photo-1624529334042-8ce6295bab97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=529&q=80',
          title: 'Unique stays',
        },
        {
          img: 'https://images.unsplash.com/photo-1624302286558-cd1867fb5b68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
          title: 'Entire homes',
        },
        {
          img: 'https://images.unsplash.com/photo-1598970868638-c7feff89b68e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
          title: 'Pet allowed',
        },
      ],
      largeCardItem: {
        title: 'Try Hosting',
        description:
          'Earn extra income and unlock new opportunities by sharing your space.',
        buttonText: 'Learn More',
        img: 'https://images.unsplash.com/photo-1489769002049-ccd828976a6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=914&q=80',
      },
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted() {
    this.getLocation()
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        this.view.atTopOfPage = false
      } else {
        this.view.atTopOfPage = true
      }
    },
    getLocation() {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          this.successfulLookup,
          console.log()
        )
      } else {
        alert('Geolocation not supported by your browser')
      }
    },
    async successfulLookup(position) {
      const { latitude, longitude } = position.coords

      this.exploreData = await this.$axios
        .get(
          `https://api.geoapify.com/v2/places?categories=accommodation&filter=circle:${longitude},${latitude},5000&bias=proximity:${longitude},${latitude}&lang=en&limit=10&apiKey=${process.env.NUXT_ENV_GEOAPIFY_KEY}`
        )
        .then((res) => {
          return res.data.features
        })
    },
  },
}
</script>
