<template>
  <div class='all'>
    <ul>
      <li @click='goDetail(movie.id)' v-for='movie in movieList' :key='movie.id' class='movie'>
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
    <div v-show='end'>
        <h4 class='endtext'>数据已经到底了</h4>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  export default{
    data(){
    return{
      movieList:[],
      showLoading:true,
      end:false
    }
  },
  mounted(){
    this.loadData();
  //钩子函数
    //监听滚动条事件
    window.onscroll=()=>{
      let CH = document.documentElement.clientHeight;//可视区域高度
      let ST = document.documentElement.scrollTop||document.body.scrollTop;//滚动条高度  浏览器兼容问题
      let SH = document.documentElement.scrollHeight;//文本高度
     if( CH+ST == SH ){
       this.showLoading = true;
        if(this.end==false){
            this.loadData();
        }else{
          this.showLoading = false;
        }
     }
    }
  },
  methods:{
      loadData(){
      //url1表示猫眼的远程接口，url2 表示本地的
          let url1 = API_PROXY+ 'http://m.maoyan.com/movie/list.json?type=hot&limit=10&offset='+ this.movieList.length;
          let url2 = '../../../static/moviedata.json'
          Axios .get(url2)
           .then(res=>{
           console.log(res);
           let list= res.data.data.movies;// 37条数据
           let data = list.slice(this.movieList.length,this.movieList.length+10);
           this.movieList = this.movieList.concat(data);
           if(data.length<10){
             this.end = true;
             }
         //假加页的方式，一次截取10个
         this.showLoading=false;
        }).catch(()=>{});
  },
      goDetail(movieId){
        this.$router.push('/movie/movieDetail/'+movieId);
        }
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
      text-align:center;
}
.endtext{
   text-align:center;
}

</style>
