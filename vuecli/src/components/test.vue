<template>
  <h1>{{msg}}</h1>
</template>
<script>
export default{
  data(){
    return{
      msg:"测试组件"
    }
  }
}
</script>
<style scoped>
  h1{
    background:red;
  }
</style>
