<template>
  <div>
       <Common-header bg='rgb(63, 81, 181)'>
          <span slot='title'>Movie</span>
       </Common-header>
          <router-view></router-view>
      <Common-footer bgc='rgb(63, 81, 181)'>
      </Common-footer>
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
