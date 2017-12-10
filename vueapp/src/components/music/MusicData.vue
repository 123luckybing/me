<template>
  <div class='MusicData'>
    <a-player v-if="isShow" :autoplay="true" :music="songs" :showlrc='3'></a-player>
  </div>
</template>

<script>
import VueAplayer from 'vue-aplayer'
import Axios from 'axios'
export default{
    components: {
      'a-player': VueAplayer
    },
  data(){
    return{
      songs:[],
      isShow:false
    }
  },
  mounted(){
    let url1 = '/static/musicdata.json';
    Axios.get(url1).then(res=>{
      console.log(res);
      let list= res.data.musicData;
      list.forEach(element=>{
        let obj={
        title:element.title,
        author:element.author,
        url:element.src,
        pic:element.musicImgSrc,
        lrc:'../../../static/'+element.lrc
          };
        this.songs.push(obj);
      });
      this.isShow = true;
    }).catch();
  }
}
</script>

<style scoped>
  .MusicData{
    margin:1rem 0;
  }
</style>
