//index.js������jquery.js
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
               //���˺þ�Ϊɶ��������ԭ���Ǳ���ס����������
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
    var flag = false;//���ϵ�
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

    $("#footer-top-last .title").on("click",function(){
        if(flag1==false) {
            $(this).siblings().slideDown(500);
           //$("#footer").css("height",
           //    $(this).height()+ ulh);
            $(this).css({
                color:"#b89f7a"
            });
        }else{
            $(this).siblings().slideUp(500);
            $(this).css("color","#ffffff");
        }
        console.log($("#footer").height());
        flag1 = !flag1;
    });

    });
