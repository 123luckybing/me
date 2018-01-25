//index.js里引入jquery.js
requirejs.config({
    paths:{
        jquery:"jquery-1.11.2"
    }
});
require(["jquery"],function($){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop>=100 && scrollTop<150){
           $("#nav").css({
               "position":"fixed",
               "top":0,
               "z-index":"99"
               //找了好久为啥不出来，原来是被盖住了气死我啦
           });
        }
        if(scrollTop>150){
                $("#nav").slideUp(500);
        }else{
                $("#nav").slideDown(500);
            }
        });

    $("#left").on("click",function(){
        $("#left-nav").fadeIn(1000);
    });
    $("#left-nav").on("click",function(){
        $("#left-nav").fadeOut(1000);
    });
    var flag = false;//合上的
    $("#left-nav .title").on("click",function(event){
        event.stopPropagation();
        if(flag==false){
            $(this).siblings().slideDown(500);
        }else{
            $(this).siblings().slideUp(500);
        }
        flag=!flag;
    });
//Footer
        var flag1 = false;
    var h = $("#footer-top-last").height();
    console.log(h);
    $("#footer-top-last .title").on("click",function(){
        if(flag1==false) {
            $(this).siblings().slideDown(500);
            $(this).css({
                color:"#b89f7a"
            });
            h += 50;
            $("#footer-top-last").height(h);
            console.log($("#footer-top-last").height());
        }else{
            $(this).siblings().slideUp(500);
            $(this).css("color","#ffffff");
        }
        flag1 = !flag1;
    });

    });
