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
    //存放图片路径的数组
    var imgSrcArr = [
        'img/市医院.jpg',
        'img/小学.jpg',
        'img/敬老院.jpg',
        'img/animal.jpg',
        'img/残联.jpg',
        'img/健身.jpg'
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