<template>
  <div class="h-screen">
    <Header :view="view" />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: 'debug-screens',
      },
    }
  },
  data() {
    return {
      view: {
        atTopOfPage: true,
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
}
</script>