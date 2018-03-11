(function(){
    var oBg = document.getElementById("background");
    var Img = oBg.getElementsByTagName("img");
    var oHeader = document.getElementById("header");
    var oRight = document.getElementById("right");
    var oList = document.getElementById("list");
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
})();
