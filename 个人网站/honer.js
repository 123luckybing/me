(function(){
    var oBg = document.getElementById("background");
    var Img = oBg.getElementsByTagName("img");
    var oHeader = document.getElementById("header");
    var oRight = document.getElementById("right");
    var oList = document.getElementById("list");
    //����ͼƬ�ֲ�ͼ
    var nowIndex = 0;
    function play(){
        for (var i = 0; i < Img.length; i++){
            Img[i].index = i;
            //���ؾʹ�����������Ϊ�ֶ�
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
