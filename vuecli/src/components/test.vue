<template>
    <h1 class="test">{{msg}}</h1>
</template>
<script>
export default{
  data(){
    return{
      msg:'测试组件'
    };
  }
}
</script>
<style scoped>
  .test{
    background:red;
  }
</style>
