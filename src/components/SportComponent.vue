<script>
import {useSportsStore} from '@/stores/sports.js'
import { mapState } from 'pinia'
export default {
  props:['name','zoom'],
  data(){
    return {
      sport: {name:'e',kcal:0,description:''}
    }
  },
  computed: {
    link(){ return `/sports/${this.sport.name}`},
    ...mapState(useSportsStore, ["getSport"])
  },
  created(){
    this.sport = {...this.getSport(this.name)}
  }
}
</script>

<template>
  <a :href="link" v-if="zoom !== 'big'">
  <section :class="zoom">
    <h2>{{sport.name}}</h2>
    <h4 v-if="zoom === 'medium'">{{sport.kcal}} kcal per hour</h4>
  </section>
  </a>
  <section :class="zoom" v-else>
    <h2>{{sport.name}}</h2>
    <p>{{sport.description}}</p>
    <h4>{{sport.kcal}} kcal per hour</h4>
  </section>
</template>

<style scoped>

section.small>h2{
  font-size: 1em;
  font-weight: 100;
}

a {
  color:inherit
}

section.medium:hover, section.small:hover{
  background: rgba(66, 197, 244, 0.33);
}

</style>