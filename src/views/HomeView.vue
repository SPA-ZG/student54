<script>
import ListComponent from '@/components/ListComponent.vue'
import SportComponent from '@/components/SportComponent.vue'
import { mapState } from 'pinia'
import { useSportsStore } from '@/stores/sports.js'

export default {
  components: {SportComponent, ListComponent},
  computed: {
    ...mapState(useSportsStore, ['getSports'])
  }
}
</script>

<template>
  <div class="container">
    <list-component></list-component>
    <aside>
      <h2>List of sports</h2>
      <sport-component
        v-for="sportName in getSports"
        v-bind:name="sportName"
        v-bind:key="sportName"
        zoom="small"
        v-key="name"></sport-component>
    </aside>
  </div>
</template>

<style scoped>

</style>
