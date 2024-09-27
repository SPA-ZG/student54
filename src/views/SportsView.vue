<template>
  <article v-if="$route.params.name === ''">
    <h1>List of sports</h1>
    <sport-component
      v-for="sportName in getSports"
      v-bind:name="sportName"
      v-bind:key="sportName"
      zoom="medium"></sport-component>
  </article>

  <article v-else>
    <h1>Selected sport</h1>
    <sport-component :name="$route.params.name"
    zoom="big">
    </sport-component>
  </article>

</template>

<style scoped>
</style>

<script>
import SportComponent from '@/components/SportComponent.vue'

import {useSportsStore} from '@/stores/sports.js'
import { mapState } from 'pinia'
export default {
  computed: {
    ...mapState(useSportsStore, ["getSports"])
  },
  components: { SportComponent }
}

</script>
