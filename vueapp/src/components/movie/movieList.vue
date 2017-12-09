<template>
  <div>
    <ul class='all'>
      <li v-for='movie in movieList' :key='movie.id' class='movie'>
        <div class='img'>
          <img :src='movie.img' alt=''/>
      </div>
        <div class='introduce'>
          <p class='movie-name'>{{movie.nm}}</p>
          <p>{{movie.ver}}</p>
          <p>主演:{{movie.star}}</p>
          <p>{{movie.showInfo}}</p>
        </div>
      </li>
    </ul>
    <div class='loading' v-show='showLoading'>
      <img src='../../assets/img/loading.gif' alt=''/>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  export default{
    data(){
    return{
      movieList:[],
      showLoading:true
    }
  },
  mounted(){ //钩子函数
    Axios .get(API_PROXY+'http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset='+ movieList.length)
      .then((res)=>{
      //console.log(res);
    this.movieList = res.data.data.movies;
    this.showLoading=false;
  }).catch(()=>{});
  }
}
</script>

<style scoped>
  .movie{
  display:flex;
  margin:0.1rem  0.2rem;
  border-bottom:1px solid black;
}
.introduce{
  flex-grow:2;
  width:0;
  margin-left:0.2rem;
}
.img{
  flex-grow:1;
  width:0;
}
.all{
  margin-top:1rem;
  margin-bottom:1rem;
}
.movie-name{
    font-weight:bolder;
}
.loading{
}

</style>
