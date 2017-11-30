(function() {
    var oActivity_introduce = document.getElementById("Activity-introduce");
    var oHispital = oActivity_introduce.getElementsByClassName("hospital")[0];
    var oSchool = oActivity_introduce.getElementsByClassName("school")[0];
    var oOld = oActivity_introduce.getElementsByClassName("old")[0];
    var oAnimal = oActivity_introduce.getElementsByClassName("animal")[0];
    var oHealth = oActivity_introduce.getElementsByClassName("health")[0];
    var oDisabled = oActivity_introduce.getElementsByClassName("disabled")[0];
    var oHospital_pic = oActivity_introduce.getElementsByClassName("hospital-pic")[0];
    var oSchool_pic = oActivity_introduce.getElementsByClassName("school-pic")[0];
    var oOld_pic = oActivity_introduce.getElementsByClassName("old-pic")[0];
    var oAnimal_pic = oActivity_introduce.getElementsByClassName("animal-pic")[0];
    var oDisabled_pic = oActivity_introduce.getElementsByClassName("disabled-pic")[0];
    var oHealth_pic = oActivity_introduce.getElementsByClassName("health-pic")[0];
    window.onscroll = function () {
        var t = document.body.scrollTop || document.documentElement.scrollTop;
        if(t>15){
            oHispital.style.right="10%";
            oHispital.style.transition="right 4s linear";
            oHospital_pic.style.left="24%";
            oHospital_pic.style.transition="left 4s linear";
        }if(t>265){
            oSchool.style.left="10%";
            oSchool.style.transition="left 4s linear";
            oSchool_pic.style.right="24%";
            oSchool_pic.style.transition="right 4s linear";
        }if(t>450){
            oOld.style.right="10%";
            oOld.style.transition="right 4s linear";
            oOld_pic.style.left="24%";
            oOld_pic.style.transition="left 4s linear";
        }if(t>700){
            oAnimal.style.left="10%";
            oAnimal.style.transition="left 4s linear";
            oAnimal_pic.style.right="24%";
            oAnimal_pic.style.transition="right 4s linear";
        }if(t>1050){
            oHealth.style.left="10%";
            oHealth.style.transition="left 4s linear";
            oHealth_pic.style.right="24%";
            oHealth_pic.style.transition="right 4s linear";
        }if(t>900){
            oDisabled.style.right="10%";
            oDisabled.style.transition="right 4s linear";
            oDisabled_pic.style.left="24%";
            oDisabled_pic.style.transition="left 4s linear";
        }
    };


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
    }


    var oContainer=document.getElementById("container");
    var oImg=oContainer.getElementsByTagName("img");

     for(var i=0;i<oImg.length;i++){
         oImg[i].style.transform="rotateY("+(i+1)*40+"deg) translateZ(280px)";
         oImg[i].style.transitionDelay = i * 100 + "ms";
         play();
     }

     function play(){
         var num=0;
         setInterval(function(){
             num++;
             oContainer.style.transform = "rotateY(" + num * 40 + "deg)";
         },3000)
     }
})()