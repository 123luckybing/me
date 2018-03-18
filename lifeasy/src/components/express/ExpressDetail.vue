<template>
  <div class="detail">
    <h4>获取信息状况：{{list.message}}</h4>
      <h3>您的物流信息如下：</h3>
      <ul>
          <li v-for="item in listDetail">
            <p>时间:</p>
            {{item.time}}
            <br/>
            <p>到达地点：</p>
            {{item.context}}
            <hr/>
          </li>
      </ul>
  </div>
</template>

<script>
  import Axios from "axios";
  export default{
    data(){
      return{
          listDetail:[],
          list:[]
      }
    },
    mounted(){
      let url =API_PROXY+"www.kuaidi100.com/query?type="+ this.$route.params.typ +"&postid="+this.$route.params.number_order;
      Axios.get(url).then((res)=>{
        this.listDetail = res.data.data;
        this.list = res.data;

      }).catch(()=>{
          alert("获取数据失败");
        });
    }
  }
</script>

<style scoped>
.detail{
  margin:1rem 6px;
}
.detail ul li{
  text-align:left;
  font-size:16px;
}
.detail ul li p{
  color:green;
}
</style>
