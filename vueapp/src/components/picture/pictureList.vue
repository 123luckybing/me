<template>
  <div id='photo'>
      <ul>
          <li v-for='(item,index) in photoList' :key='index'>
              <img :src='item.src' alt='' @click='go(index)'/>
          </li>
      </ul>
  </div>
</template>
<style scoped>
  #photo{
  margin:1rem 0;
  overflow:hidden;
    }
 #photo li{
  width:50%;
  float:left;
}

</style>

<script>
import Axios from 'axios'
export default{
    data(){
      return{
        photoList:[]
          }
      },
    mounted(){
    let url = '/static/photodata.json';
    Axios.get(url).then(res=>{
        console.log(res);
        this.photoList = res.data.photoData;
        this.$store.dispatch('setPhotoList',res.data.photoData);
        //把数据通过vuex传进去
    }).catch();
  },
  methods:{
    go(index)
{
      this.$router.push('/picture/pictureDetail/'+  index);
    }

  }

}
</script>
