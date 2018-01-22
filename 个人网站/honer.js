(function(){
    var oBg = document.getElementById("background");
    var Img = oBg.getElementsByTagName("img");
    //背景图片轮播图
    var nowIndex = 0;
    function play(){
        for (var i = 0; i < Img.length; i++){
            Img[i].index = i;
            //加载就触发，不用人为手动
           window.onload = function (){
                setInterval(function(){
                    for (var i = 0; i < Img.length; i++) {
                            Img[i].className = "";
                   }
                    Img[nowIndex].className = "appear";
                    nowIndex++;
                    if(nowIndex== Img.length){
                        nowIndex = 0;
                    }
                },2500);
            };
        }
    }
        play();
    var oneUp = document.getElementById("oneUp");
    var oneDown = document.getElementById("oneDown");
    var twoUp = document.getElementById("twoUp");
    var twoDown = document.getElementById("twoDown");
    var activity = document.getElementById("activity");
    var match = document.getElementById("match");
    var money = document.getElementById("money");
    var volenteer =document.getElementById("volenteer");
    var English =document.getElementById("English");
    var car =document.getElementById("car");
    window.onscroll = function() {
        var t = document.documentElement.scrollTop||document.body.scrollTop;
        if(t>0){
            oneUp.style.left = " 600px ";
            oneUp.style.transition = "left 1s ease";
        }if (t > 300) {
            oneDown.style.left = " 600px ";
            oneDown.style.transition = "left 1s ease";
        }if (t > 800) {
            twoUp.style.left = " 600px ";
            twoUp.style.transition = "left 1s ease";
        }
        if (t > 1400) {
            twoDown.style.left = " 600px ";
            twoDown.style.transition = "left 1s ease";
        }if(t>1800){
            activity.style.left = " 600px ";
            activity.style.transition = "left 1s ease";
        }if(t>2400){
            match.style.left = " 600px ";
            match.style.transition = "left 1s ease";
        }if(t>2900){
            money.style.left = " 600px ";
            money.style.transition = "left 1s ease";
        }if(t>3700){
            volenteer.style.left = " 600px ";
            volenteer.style.transition = "left 1s ease";
        }if(t>4400){
            English.style.left = " 600px ";
            English.style.transition = "left 1s ease";
        }if(t>5100){
            car.style.left = " 600px ";
            car.style.transition = "left 1s ease";
        }
    };
})();
