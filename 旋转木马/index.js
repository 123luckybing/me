(function(){
    var oContainer=document.getElementById("container");
    var counter=0;
    //���ü�����
    for(var i=0;i<9;i++) {
        //һ��7��ͼƬ������iС��7
        var oImg = new Image();
        oImg.onload = function () {
            counter++;
            if (counter == 9) {
                onloadSucceed();
            }
        };
        oImg.src = "img/" + (i + 1) + ".jpg";
        //srcд��onload�ĺ���
        oContainer.appendChild(oImg);
        play();
    }
        //��oImg�� oContainer��
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
