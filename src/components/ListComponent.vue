<script>
import ActivityComponent from '@/components/ActivityComponent.vue'
import SportComponent from '@/components/SportComponent.vue'
import { mapState } from 'pinia'
import { useSportsStore } from '@/stores/sports.js'

export default {
  components: { ActivityComponent },
  data() {
    return {
      newActivity: "",
      newKcal: 0,
      listOfActivities:[
        {name:'Swimming',kcal:400,id:0},
        {name:'Running', kcal:200, id:1}
      ]
    }
  },
  computed: {
    totalKcal(){
      return this.listOfActivities.reduce(
        (acc, cur) => acc + cur.kcal, 0
      )
    },
  },
  methods: {
    addActivity(){
      const id = 1 + this.listOfActivities.reduce(
        (acc, cur) => cur.id > acc ? cur.id : acc, -1);
      this.listOfActivities.push(
        {name: this.newActivity, kcal:this.newKcal, id}
      )
      this.newActivity = '';
      this.newKcal = 0;
    },
    deleteActivity(args){
      console.log(this.listOfActivities, args.id)
      this.listOfActivities = this.listOfActivities.filter(x => x.id != args.id);
    }
  }
}
</script>

<template>
  <article>
    <h2>My activities</h2>
    <section class="controller">
      <form>
        <div>
          <label for="name">Activity name:</label>
          <input type="text" v-model.trim="newActivity" id="name">
        </div>
        <div>
          <label for="kcal">Calories [kcal]:</label>
          <input type="number" v-model.trim="newKcal" id="kcal">
        </div>
      </form>
      <div>
        <button @click="addActivity">Add</button>
      </div>

    </section>
    <activity-component v-for="activity in listOfActivities"
                        :key="activity.id"
                        v-bind="activity"
                        @delete-activity="deleteActivity">
    </activity-component>
    <h2>Total kcal: {{totalKcal}}</h2>
  </article>

</template>

<style scoped>
section{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

form{
  display: flex;
  flex-direction: column;
}

form > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

input {
  margin: 5px;
}

.controller {
  margin-bottom: 30px;
}
</style>