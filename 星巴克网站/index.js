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
        })
    $("#left img").on("click",function(){
        $("#left-nav").fadeIn(500);
    });
    //$(document).on("click",function(){
    //    var e =e||window.event;//浏览器兼容
    //    var elem = e.target|| e.srcElement;//获取当前事件源
    //    while(elem){
    //       if(elem.id != 'left-nav'){
    //           $("#left-nav").fadeOut(500);
    //       }
    //   }
    //});
    });

