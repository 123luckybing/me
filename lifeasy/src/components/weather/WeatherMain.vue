<template>
  <div class="content">
    <h4 class="change" @click="change">选择城市</h4>
    <h4 class="data">当前日期：{{mainList.date}}</h4>
    <h1>{{mainList.city}}</h1>
    <div class="wendu">{{lastList.wendu}}°</div>
    <ul class="today">
      <li>今日建议：{{lastList.ganmao}}</li>
      <li>空气质量：{{lastList.quality}}</li>
      <li>湿度：{{lastList.shidu}}</li>
    </ul>
    <div class="funture">
      <h2>未来近况</h2>
      <ul>
        <li v-for="item in funture">
          {{item.date}}
          最高温：{{item.high}}
          最低温：{{item.low}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Axios from "axios";
  export default{
    data(){
    return{
      mainList:[],
      lastList:[],
      funture:[]
    };
  },
  mounted(){
    let url = API_PROXY + 'https://www.sojson.com/open/api/weather/json.shtml?city='+ this.$route.params.city;
  Axios.get(url).then((res)=>{
    this.mainList =res.data;
    this.lastList=res.data.data;
    this.funture = res.data.data.forecast;
  }).catch(()=>{
    alert("数据获取失败");
  });
  },
  methods:{
    change(){
      this.$router.push("/weather/WeatherChange");
    }
  }
  }
</script>

<style scoped>
  .content{
    width: 100%;
    margin:1rem 0;
    background: mediumpurple;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    color:white;
    overflow:scroll;
  }
  .change{
    position:absolute;
    left:10px;
  }
  .today{
    width: 100%;
    height: 1.5rem;
  }
  .today li{
    font-size:16px;
  }
  .wendu{
    font-size:80px;
    text-align:center;
  }
  .funture{
    margin-top:20px;
  }
</style>
