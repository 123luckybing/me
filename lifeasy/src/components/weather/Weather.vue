<template>
  <div>
    <Commonheader>
      <h3 slot="title" class="title">天气</h3>
    </Commonheader>
    <router-view></router-view>
    <Commonfooter></Commonfooter>
  </div>
</template>

<style scoped>
  .title{
    text-align:center;
    color:white;
    line-height:1rem;
  }
</style>

<script>
  import Commonheader from "../common/header";
  import Commonfooter from "../common/footer";
export default{
  components:{
    Commonheader,
    Commonfooter
  }
}
</script>
