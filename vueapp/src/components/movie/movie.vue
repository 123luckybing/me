<template>
  <div>
       <Common-header></Common-header>
          <router-view></router-view>
      <Common-footer></Common-footer>
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
