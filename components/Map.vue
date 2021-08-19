<template>
  <client-only>
    <MglMap
      :accessToken="access_token"
      :mapStyle.sync="mapStyle"
      :center="center"
      :zoom="11"
      :offset="[-20, -10]"
      color="#ef4444"
    >
      <div v-for="coord in searchResult" :key="coord.name">
        <MglMarker :coordinates="[coord.properties.lon, coord.properties.lat]">
          <p
            slot="marker"
            class="cursor-pointer text-2xl"
            @click="selectedLocation = coord.properties"
          >
            📌
          </p>
          <MglPopup :closeButton="false">
            {{ coord.properties.name || coord.properties.formatted }}
          </MglPopup>
        </MglMarker>
      </div>
    </MglMap>
  </client-only>
</template>
<script>
import getcenter from 'geolib/es/getCenter'
export default {
  props: ['searchResult'],
  data() {
    return {
      mapStyle: 'mapbox://styles/iamsanty/ckshgam0l7ufl17rzfjwjwooo',
      coordinates: [],
      access_token: process.env.NUXT_ENV_MAPBOX_KEY,
      center: [],
      selectedLocation: {},
    }
  },
  created() {
    this.findCenter()
  },
  methods: {
    findCenter() {
      // transform each search result object into
      // { latitude: 52.516272, longitude: 13.377722 }
      // object

      this.coordinates = this.searchResult.map((result) => ({
        longitude: result.properties.lon,
        latitude: result.properties.lat,
      }))

      // latitude and longitude of the center of location coordinates
      const centerCoord = getcenter(this.coordinates)

      this.center = [centerCoord.longitude, centerCoord.latitude]
    },
  },
}
</script>

