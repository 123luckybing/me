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
    $("#left-nav").on("click",function(event){
        $("#left-nav").fadeOut(1000);
    });
    var flag = false;//合上的
    $(".title").on("click",function(event){
        event.stopPropagation();
        if(flag==false){
            $(this).siblings().slideDown(1000);
        }else{
            $(this).siblings().slideUp(1000);
        }
        flag=!flag;
    });
    });
