<!-- CounterComponent.vue -->
<template>
  <section>
    <h4>{{ name }}</h4>
    <div>
      <p>Kcal: {{kcal}}</p>
      <button @click="deleteActivity">Delete</button>
    </div>
  </section>
</template>

<script>
export default {
  props:['id','name','kcal'],
  emits:["deleteActivity"],
  methods:{
    deleteActivity(){
      this.$emit('deleteActivity', {id: this.id})
    }
  },

}
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div{
  display: flex;
  justify-content: end;
  align-items: center;
}

h4{
  margin-left:20px;
}
</style>
