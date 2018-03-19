<template>
    <div>
      <h4>请输入始发地：</h4>
      <input type="text" v-model="start"/>
      <h4>请输入目的地：</h4>
      <input type="text" v-model="end"/>
      <br>
      <h4>始发地至目的地：</h4>
      <h4>{{start}}---{{end}}</h4>
      <button @click="goDetail(start,end)">查询</button>
      <img src="../../assets/img/borad.jpg" alt=""/>
    </div>
</template>

<script>
  export default{
    data(){
      return{
        start:'',
        end:''
      }
    },
    methods:{
      goDetail(start,end){
        if(this.start==''||this.end==''){
          alert('请输入始发地以及目的地');
        }
        this.$router.push("/Broadcast/BroadcastDetail/"+start+"/"+ end);
      }
    }
  }
</script>

<style scoped>
div input{
  width: 80%;
  height: 0.5rem;
  border:1px solid black;
}
button{
  width: 40%;
  height: 0.5rem;
  background: lightsalmon;
  margin-top:10px;
}
img{
  margin-top:25px;
}
</style>
