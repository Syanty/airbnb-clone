<template>
  <div>
    <Banner :view="view"/>
    <main class="max-w-7xl mx-auto px-8 sm:px-16" v-if="!$fetchState.pending">
      <section class="pt-6">
        <h2 class="text-4xl font-semibold pb-5">Explore Nearby</h2>
        <!-- pull some data -- from endpoint -->
        <div
          class="grid sm:grid-cols-2 grid-cols-1 xl:grid-cols-4 lg:grid-cols-3"
        >
          <card-small
            v-for="item in exploreData"
            :key="item.location"
            :place="item"
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
      liveData: [],
      largeCardItem: {
        title: 'Try Hosting',
        description:
          'Earn extra income and unlock new opportunities by sharing your space.',
        buttonText: 'Learn More',
        img: '4cj',
      },
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
  async fetch() {
    this.exploreData = await this.$axios.get(`/pyp`).then((res) => {
      return res.data
    })

    this.liveData = await this.$axios.get('/zp1').then((res) => {
      return res.data
    })
  },
}
</script>
