<template>
  <div class='footer'  :style='{background:bgc}'>
    <li><router-link to='/movie/movieList'>电影</router-link></li>
    <li><router-link to='/music'>音乐</router-link></li>
    <li><router-link to='/book'>书籍</router-link></li>
    <li><router-link to='/picture'>图片</router-link></li>
  </div>
</template>

<script>
export default{
    props:["bgc"]
}

</script>

<style scoped>
  .footer{
      height:1rem;

      color:white;
      position:fixed;
      width:100%;
      bottom:0;
      display:flex;
      text-align:center;
      line-height:1rem;
      font-size:0.4rem;
  }
  .footer li{
      flex-grow:1;
      list-style:none;

  }
  .footer li a{
      color:#ccc;
  }
  .footer a.router-link-active{
    color:#000;
  }
</style>
