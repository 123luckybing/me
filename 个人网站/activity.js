(function() {
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


    //var oContainer=document.getElementById("container");
    //var oImg=oContainer.getElementsByTagName("img");
    //
    // for(var i=0;i<oImg.length;i++){
    //     oImg[i].style.transform="rotateY("+(i+1)*40+"deg) translateZ(280px)";
    //     oImg[i].style.transitionDelay = i * 100 + "ms";
    //     play();
    // }
    //
    // function play(){
    //     var num=0;
    //     setInterval(function(){
    //         num++;
    //         oContainer.style.transform = "rotateY(" + num * 40 + "deg)";
    //     },3000)
    // }

    //���ͼƬ·��������
    var imgSrcArr = [
        'img/��ҽԺ.jpg',
        'img/Сѧ.jpg',
        'img/����Ժ.jpg',
        'img/animal.jpg',
        'img/����.jpg',
        'img/����.jpg'
    ];


    var imgWrap = [];
    function preloadImg(arr) {
        for(var i =0; i< arr.length ;i++) {
            imgWrap[i] = new Image();
            imgWrap[i].src = arr[i];
        }
    }
    preloadImg(imgSrcArr);
})();