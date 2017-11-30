/**
 * Created by zhoufangbing on 2017/8/5.
 */
(function() {
    var oSmallPicture = document.getElementById("SmallPicture");
    var aSmallImag = oSmallPicture.getElementsByTagName("img");
    var oBigPicture = document.getElementById("BigPicture");
    var oBigImag = oBigPicture.getElementsByTagName("img")[0];
    var oLeft = document.getElementById("left");
    var oRight = document.getElementById("right");
    var nowIndex = 0;
    for (var i = 0; i < aSmallImag.length;i++) {
        aSmallImag[i].index=i;
        aSmallImag[i].onclick = function(){
            nowIndex=this.index;
            changeImage();
        };
        oLeft.onclick = oRight.onclick = function () {
            if (this === oLeft) {
                nowIndex--;
                if (nowIndex == -1) {
                    nowIndex = aSmallImag.length - 1;
                }
            } else {
                nowIndex++;
                if (nowIndex == aSmallImag.length) {
                    nowIndex = 0;
                }
            }
            changeImage();
        };
    }
    function changeImage(){
        oBigImag.src=aSmallImag[nowIndex].src;
        for (var i = 0; i < aSmallImag.length; i++) {
            aSmallImag[i].className = "";
        }
        aSmallImag[nowIndex].className = "selected";
        //oSmallPicture定位，参照着谁往左移动
        if(nowIndex==0){
            oSmallPicture.style.left=0;
        }else {
            oSmallPicture.style.left = -(aSmallImag[0].offsetWidth + 5) + "px";
        }
    }
}());