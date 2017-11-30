(function(){
    var oContainer=document.getElementById("container");
    var counter=0;
    //设置计数器
    for(var i=0;i<9;i++) {
        //一共7张图片，所以i小于7
        var oImg = new Image();
        oImg.onload = function () {
            counter++;
            if (counter == 9) {
                onloadSucceed();
            }
        };
        oImg.src = "img/" + (i + 1) + ".jpg";
        //src写在onload的后面
        oContainer.appendChild(oImg);
        play();
    }
        //把oImg放 oContainer里
       function play(){
       var num=0;
        setInterval(function () {
            num++;
            oContainer.style.transform = "rotateY(" + num * 40 + "deg)";
        }, 2000)
    }


    function onloadSucceed(){
        var aImg=oContainer.getElementsByTagName("img");
        for(var i=0;i<aImg.length;i++){
            aImg[i].style.transform="rotateY("+(i+1)*40+"deg) translateZ(215px)";
            aImg[i].style.transitionDelay=i*30+"ms";
        }
    }
})();
