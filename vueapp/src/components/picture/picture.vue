<template>
<div>
  <CommonHeader bg='rgb(125,125,125)'>
      <span slot='title'>Picture</span>
  </CommonHeader>
    <router-view></router-view>
  <CommonFooter bgc='rgb(125,125,125)'>
  </CommonFooter>
</div>
</template>
<script>
  import CommonHeader from '../common/header'
  import CommonFooter from '../common/footer'
export default{
  components:{
    CommonHeader,
    CommonFooter
  }
}

</script>

  <style scoped>

  </style>
