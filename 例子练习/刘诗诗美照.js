/**
 * Created by asus1 on 2017/8/8.
 */
(function(){
    var oLeft=document.getElementById("left");
    var oRight=document.getElementById("right");
    var nowIndex=0;
    var oSmallPicture=document.getElementById("SmallPicture");
    var oSmallImg=oSmallPicture.getElementsByTagName("img");
    var oBigPicture=document.getElementById("BigPicture");
    var oBigImg=oBigPicture.getElementsByTagName("img")[0];
    var oDrag=document.getElementById("drag");
    var oExpand=document.getElementById("expand");
    var oImg=oExpand.getElementsByTagName("img")[0];
    var oMask=document.getElementById("mask");

    for(var i=0;i<oSmallImg.length;i++){
        oSmallImg[i].index=i;
        oSmallImg[i].onclick=function(){
            nowIndex=this.index;
            oBigImg.src=this.src;
            oImg.src=this.src;
            for(var i=0;i<oSmallImg.length;i++){
                oSmallImg[i].className = "";
            }
            oSmallImg[nowIndex].className = "selected";
        };
    }
   oLeft.onclick=oRight.onclick=function(){
       if(this===oLeft) {
           nowIndex--;
           if (nowIndex == -1) {
               nowIndex = oSmallImg.length - 1;
           }
       }else {
               nowIndex++;
               if (nowIndex == oSmallImg.length) {
                   nowIndex = 0;
               }
           }
           oBigImg.src = oSmallImg[nowIndex].src;
           oImg.src=oSmallImg[nowIndex].src;
           for (var i = 0; i < oSmallImg.length; i++) {
               oSmallImg[i].className = "";
           }
           oSmallImg[nowIndex].className = "selected";
        if(nowIndex==0){
            oSmallPicture.style.left=0;
        } else{
           oSmallPicture.style.left=-nowIndex*(oSmallImg[0].offsetWidth+10)+"px";
       }
       };
    oMask.onmouseover=function() {
        oDrag.style.display = "block";
        oExpand.style.display = "block";
        oMask.onmousemove = function (e) {
            e = e || window.event;
            var top = e.clientY - oDrag.offsetHeight / 2;
            var left = e.clientX - oDrag.offsetWidth / 2;
            if (top <= 0) {
                top = 0;
            }
            if (left <= 0) {
                left = 0;
            }
            var maxX=oBigPicture.offsetWidth-oDrag.offsetWidth;
            var maxY=oBigPicture.offsetHeight-oDrag.offsetHeight;
            //maxX和maxY不写这里不好使
            if (left >=maxX) {
                left =maxX;
            }
            if (top>=maxY) {
                top=maxY;
            }
            oDrag.style.top = top + "px";
            oDrag.style.left = left + "px";
            //写上面的话不好使判断
            var scoleX = left / maxX;
            var scoleY = top / maxY;
            oImg.style.left = -scoleX * (oImg.offsetWidth - oExpand.offsetWidth) + "px";
            oImg.style.top = -scoleY * (oImg.offsetHeight - oExpand.offsetHeight) + "px";
        };
    };
    oMask.onmouseout=function(){
        oDrag.style.display="none";
        oExpand.style.display="none";
    };
})();