<template>
  <div class="header">
    <div class="home" @click="home">首页</div>
    <slot name="title">默认值</slot>
  </div>
</template>

<script>
  export default{
    methods:{
      home(){
        this.$router.push("/weather/WeatherChange");
      }
    }
  }
</script>

<style scoped>
  body{
    position:relative;
  }
.header{
  background: blue;
  position:fixed;
  top:0;
  width: 100%;
  height: 1rem;
}
.home{
  position:absolute;
  left:10px;
  line-height:1rem;
  color:white;
}
.title{
  color:white;
  line-height:1rem;
  text-align:center;
}
</style>
