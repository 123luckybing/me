<template>
  <div>
    <div class="header">
        天气选择城市
    </div>
    <div class="city">
        <ul>
          <li>
            <router-link to="/weather/WeatherMain/哈尔滨">哈尔滨</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/北京">北京</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/香港">香港</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/上海">上海</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/广州">广州</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/南京">南京</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/沈阳">沈阳</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/西安">西安</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/高雄">高雄</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/苏州">苏州</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/杭州">杭州</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/重庆">重庆</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/武汉">武汉</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/天津">天津</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/深圳">深圳</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/牡丹江">牡丹江</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/石家庄">石家庄</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/郑州">郑州</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/长沙">长沙</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/南昌">南昌</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/长春">长春</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/太原">太原</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/济南">济南</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/西宁">西宁</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/合肥">合肥</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/兰州">兰州</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/海口">海口</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/贵阳">贵阳</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/昆明">昆明</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/拉萨">拉萨</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/银川">银川</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/乌鲁木齐">乌鲁木齐</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/呼和浩特">呼和浩特</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/香港">香港</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/澳门">澳门</router-link>
          </li>
          <li>
            <router-link to="/weather/WeatherMain/林口">林口</router-link>
          </li>
        </ul>
    </div>
  </div>
</template>

<style scoped>
  .header{
    width: 100%;
    height:1rem;
    background:blue;
    color:white;
    text-align:center;
    position:fixed;
    top:0;
    font-size:20px;
    line-height:1rem;
  }
  .city{
    width: 100%;
    height: 2rem;
    background: white;
    position:absolute;
    margin-top:10px;
  }
  .city li{
    font-size:20px;
    color:black;
    border:1px solid black;
    width: 30%;
    margin:2px;
    float:left;
  }
</style>

<script>
  export default{
    methods:{
      goChange(city){
        this.$route.push('/weather/WeatherMain/'+ city);
      }
    }
  }
</script>
