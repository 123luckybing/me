<template>
  <div class='header'>
      <span>首页</span>
      <h2>Movie</h2>
  </div>
</template>

<script>
export default{

}

</script>

<style scoped>
.header{
    height:1rem;
    background-color: rgb(33, 150, 243);
    position:fixed;
    top:0;
    width:100%;
    line-height:1rem;
}
.header span{
    color:white;
    margin-left:0.2rem;
    font-size:0.4rem;
}
.header h2{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    color:white;
}
</style>
