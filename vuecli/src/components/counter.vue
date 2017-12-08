<template>
  <div>
    <h1>计数器：{{$store.state.count}}</h1>
    <h1>{{count}}</h1>
    <button @click="add">加一</button>
    <button @click="reduce">减一</button>
  </div>
</template>
<style>

</style>
<script scoped>
import store from '@/vuex/store'
import {mapState,mapMutations,mapGetters} from 'vuex'
export default{
  data(){
    return{

      }
    },
  store,
  //computed:{
  //  count(){
  //      return this.$store.state.count;
  //  }
  //},
  computed: {
        ...mapState(['count']),
        ...mapGetters(['count'])
    },
  methods:mapMutations(['add','reduce'])



}
</script>
