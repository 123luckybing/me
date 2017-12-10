<template>
    <div class='musicList'>
        <li v-for='music in musicList' :key='music.id'>
            <router-link :to="'/music/MusicData/'+ music.id">
              <img :src='music.bg' alt=''/>
            </router-link>
        </li>
    </div>
</template>

<script>
import Axios from "axios"
export default{
  data(){
    return{
      musicList:[]
    }
  },
  mounted(){
    let url1 = '/static/musiclist.json';
    Axios.get(url1).then(res=>{
      console.log(res);
      this.musicList = res.data.albums;
  }).catch();
},

}
</script>

  <style scoped>
    li{
      list-style:none;
    }
    .musicList{
      margin:1.1rem 0.2rem;
    }
    li img{
      float:left;

      width:50%;
    }
  </style>
