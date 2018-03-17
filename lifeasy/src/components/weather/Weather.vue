<template>
  <div>
    <Commonheader></Commonheader>
    <router-view></router-view>
    <Commonfooter></Commonfooter>
  </div>
</template>

<style scoped>

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
