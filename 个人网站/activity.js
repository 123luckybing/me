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