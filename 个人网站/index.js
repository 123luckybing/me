(function(){
    var oNav=document.getElementById("nav");
    window.onscroll=function(){
        var t=document.documentElement.scrollTop||document.body.scrollTop;
        if(t>50){
            oNav.style.position="fixed";
            oNav.style.top="0";
            oNav.style.opacity="0.8";
        }else{
            oNav.style.position="static";
            oNav.style.opacity="1";
        }
    };
    var oFixed=document.getElementById("fixed");
    oFixed.onclick=function() {
        var timer = setInterval(function () {
            var iScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (iScrollTop <= 0) {
                clearInterval(timer);
            } else {
                window.scrollTo(0, iScrollTop -= 100);
            }
        }, 50);
}
    var oPicture=document.getElementById("picture");
    var oImg=oPicture.getElementsByTagName("img");
    var oButton=document.getElementById("button");
    var oLeft=oButton.getElementsByClassName("left")[0];
    var nowIndex=0;
    var oRight=oButton.getElementsByClassName("right")[0];
    oRight.onclick=oLeft.onclick=function(){
        if(this==oLeft){
          nowIndex--;
            if(nowIndex==-1) {
                nowIndex = oImg.length - 1;
               }
            }else{
                nowIndex++;
                if(nowIndex==oImg.length ){
                 nowIndex=0;
                }
            }
        for(var i=0;i<oImg.length;i++){
            oImg[i].className="";
        }
        oImg[nowIndex].className="selected";
};

    //youwenti
    oRight.onmouseover=oLeft.onmouseover=function() {
        if (this == oLeft) {
            nowIndex--;
            if (nowIndex == -1) {
                nowIndex = oImg.length - 1;
            }
            oLeft.innerHTML = "";
        } else {
            nowIndex++;
            if (nowIndex == oImg.length) {
                nowIndex = 0;
            }
            oRight.innerHTML = "";
        }
    }
    oRight.onmouseout=oLeft.onmouseout=function(){

    }



})()
