<template>
  <div class="header">
    <div class="home">首页</div>
    <h3>天气</h3>
  </div>
</template>

<script>
  export default{

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
h3{
  text-align:center;
  color:white;
  line-height:1rem;
}
</style>
