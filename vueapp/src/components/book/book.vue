<template>
    <div>
      <CommonHeader bg='rgb(33, 150, 243)'>
          <span slot='title'>Book</span>
      </CommonHeader>
      <swipe class="my-swipe">
        <swipe-item class="slide1">

        </swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
      </swipe>
      <CommonFooter bgc='rgb(33, 150, 243)'>
      </CommonFooter>
    </div>
</template>
<script>
  import CommonHeader from '../common/header'
  import CommonFooter from '../common/footer'
  require('vue-swipe/dist/vue-swipe.css');
  import { Swipe, SwipeItem } from 'vue-swipe';
export default{
    components:{
      CommonFooter,
      CommonHeader,
      'swipe': Swipe,
      'swipe-item': SwipeItem
    }
}

</script>

<style scoped>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin:1rem 0;

}

.slide1 {
  background-image: url('https://img3.doubanio.com/lpic/s24468373.jpg');
  color: #fff;
}

.slide2 {
  background-image: url('https://img3.doubanio.com/lpic/s6989253.jpg');
  color: #000;
}

.slide3 {
  background-image: url('https://img3.doubanio.com/lpic/s27102925.jpg');
  color: #fff;
}
</style>
