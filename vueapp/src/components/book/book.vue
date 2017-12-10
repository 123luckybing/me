<template>
    <div>
      <CommonHeader bg='rgb(33, 150, 243)'>
          <span slot='title'>Book</span>
      </CommonHeader>

      <CommonFooter bgc='rgb(33, 150, 243)'>
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
