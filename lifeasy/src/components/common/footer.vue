<template>
  <div>
    <ul class="footer">
      <li><router-link to="/weather/WeatherMain">天气</router-link></li>
      <li>xx</li>
      <li>xx</li>
      <li>xx</li>
    </ul>
  </div>
</template>

<script>
  export default{

  }
</script>

<style scoped>
.footer{
  background: blue;
  height: 1rem;
  color:white;
  position:fixed;
  bottom:0;
  width: 100%;
  display:-webkit-box;
}
ul li{
  -webkit-box-flex:1;
  font-size:20px;
  line-height:1rem;
}
.router-link-active{
    color:black;
  }
</style>
