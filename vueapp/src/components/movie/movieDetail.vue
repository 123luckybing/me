<template>
  <div class='total'>
    <div class='detail'>
        <div class='imag'>
          <img :src='detail.img' alt=''/>
        </div>
        <div class='detail-content'>
                <p class='movie-name'>片名：{{ detail.nm }}</p>
                <p>执行导演：{{ detail.dir}}</p>
                <p>主演：{{ detail.star}}</p>
                <p>影片类型：{{ detail.cat}}</p>
                <p>产地：{{ detail.src}}/{{detail.dur}}分钟</p>
                <p>评分：{{detail.sc}}</p>
                <p>上映时间:{{detail.rt}}</p>
        </div>
    </div>
    <div class='ino'>
        <p v-html="'影片介绍:'+detail.dra"></p>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
export default{
  data(){
    return{
      detail:{}
    }
  },
    mounted(){
    let url2 = '../../static/moviedetail.json';
    let url1 = API_PROXY+"http://m.maoyan.com/movie/" + this.$route.params.movieId + '.json'
    Axios.get(url1).then(res=>{
        console.log(res);
        this.detail = res.data.data.MovieDetailModel;
  }).catch();
      }
  }
</script>
<style scoped>
  .detail{
    margin:1rem 0;
    display:flex;
  }
  .imag{
      flex-grow:1;
      margin-left:0.2rem;
      width:0;
  }
  .detail-content{
      flex-grow:2;
      margin-left:0.2rem;
      width:0;
  }
 .movie-name{
 font-weight:bolder;

 }
.ino{
    margin:0 0.2rem;
    text-align:justify;
}
.total{
    margin:1rem 0.2rem;
}

</style>
