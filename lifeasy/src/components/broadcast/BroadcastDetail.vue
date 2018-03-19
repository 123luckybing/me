<template>
  <div class="content">
    <h3>服务器请求结果:
      {{list.msg}}</h3>
    <ul>
      <li v-for="item in listDetail">
        <h4>类型：{{item.type}}</h4>
        <h4>出发时间---到达时间：{{item.departuretime}}---{{item.arrivaltime}}</h4>
        <h4>共计用时：{{item.costtime}}</h4>
        <h4>车次：{{item.trainno}}</h4>
        <h4>出发站--到达站：{{item.station}}--{{item.endstation}}</h4>
        <h4>票价</h4>
        <h4>特等座票价：{{item.pricetd}}</h4>
        <h4>一等座票价：{{item.priceyd}}</h4>
        <hr/>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  ul li{
    text-align:left;
    padding:5px;
  }
  .content{
      margin:1rem 0;
  }
</style>

<script>
  import Axios from "axios"
  export default{
    data(){
      return{
        list:[],
        listDetail:[]
      }
    },
    mounted(){
      let url = API_PROXY +'api.jisuapi.com/train/station2s?appkey=a6a45427646bfa84&start='+this.$route.params.start+'&end='+ this.$route.params.end+'&ishigh=0';
      Axios.get(url).then((res)=>{
        this.list  = res.data;
        this.listDetail = res.data.result;
      }).catch(()=>{
          alert("数据获取失败");
        });
    }
  }
</script>
