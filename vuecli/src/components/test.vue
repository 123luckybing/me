<template>
  <div>
    <h1>{{msg}}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default{
  data(){
    return{
      msg:'测试组件123'
    };
  },
  beforeRouteEnter:(to,from,next)=>{
    console.log("进入");
    next(true);
  },
  beforeRouteLeave:(to,from,next)=>{
    console.log("Likai");
    next(true);
  }
}
</script>

<style scoped>
  h1{
    background:red;
  }
</style>
