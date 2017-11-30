(function(){

    var oTop=document.getElementById("top");
    oTop.onclick=function() {
        var timer = setInterval(function () {
            var iScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (iScrollTop <= 0) {
                clearInterval(timer);
            } else {
                window.scrollTo(0, iScrollTop -= 100);
            }
        }, 50);
    };

    var oNav=document.getElementById("nav");
    var oImg=oNav.getElementsByTagName("img")[0];
    var oSpan=oNav.getElementsByTagName("span")[0];

    window.onscroll=function(){
        var t=document.documentElement.scrollTop||document.body.scrollTop;
       if(t=0){
           oImg.style.left="28%";
           oImg.style.transition="left 3s linear";
       }
    }
})()
