<template>
  <div>
    <Commonheader>
      <h3 slot="title" class="title">火车票查询</h3>
    </Commonheader>
    <router-view></router-view>
    <Commonfooter></Commonfooter>
  </div>
</template>
<script>
  import Commonheader from '../common/header'
  import Commonfooter from '../common/footer'
  export default{
    components:{
      Commonheader,
      Commonfooter
    }
  }
</script>
<style scoped>
  .title{
    text-align:center;
    color:white;
    line-height:1rem;
  }
  .content{
    margin:1rem 0;
  }
</style>
