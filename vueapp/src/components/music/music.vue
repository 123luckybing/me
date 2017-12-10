<template>
  <div>
      <CommonHeader bg='rgb(0, 150, 136)'>
          <span slot='title'>Music</span>
      </CommonHeader>
      <router-view></router-view>
      <CommonFooter bgc='rgb(0, 150, 136)'>
      </CommonFooter>
  </div>
</template>
<script>
import CommonHeader from '../common/header'
import CommonFooter from '../common/footer'
export default{
  components:{
    CommonFooter,
    CommonHeader
  }
}

</script>

  <style scoped>

  </style>
