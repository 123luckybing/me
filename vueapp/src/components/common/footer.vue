<template>
  <div class='footer'>
      <li>电影</li>
    <li>音乐</li>
    <li>书籍</li>
    <li>图片</li>
  </div>
</template>

<script>
export default{

}

</script>

<style scoped>
  .footer{
      height:1rem;
      background-color: rgb(33, 150, 243);
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
</style>
