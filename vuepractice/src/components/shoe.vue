<template>
    <div>
        <div class="product-shoe">
            <router-link :to="{name:'sport',params:{brand:'李宁',price:'320元'}}">运动鞋</router-link>
            <router-link :to="{name:'tour',params:{brand:'阿迪',price:'500元'}}">旅游鞋</router-link>
            <router-link :to="{name:'tuo',params:{brand:'托鞋',price:'600元'}}">托鞋</router-link>
        </div>
        <div class="shoe-detail">
            <h3>价格品牌展示版</h3>
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
    .product-shoe{
        width: 30%;
        background: #ccc;
        height: 200px;
        margin-left:15%;
        margin-top:20px;
        float:left;
    }
    a{
        text-decoration:none;
        width: 100%;
        height: 65px;
        border:1px solid black;
        display:block;
        text-align:center;
        line-height:65px;
    }
    .shoe-detail{
        width:30%;
        margin-right:20%;
        left:0;
        background: #ccc;
        float:right;
        height: 200px;
        margin-top:20px;
    }
</style>

<script>
    export default{

    }
</script>