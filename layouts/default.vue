<template>
  <div>
    <Header />
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
}
</script>