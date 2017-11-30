/**
 * Created by asus1 on 2017/8/12.
 */
(function(){
    var oSquare=document.getElementById("square");
    var oLeft=document.getElementById("left");
    var oRight=document.getElementById("right");
    var speed=5;
    oSquare.innerHTML+=oSquare.innerHTML;
    //(把内容复制一遍)
    oSquare.style.width=oSquare.offsetWidth * 2+"px";
    //宽度扩大一倍好能够上去
    setInterval(function(){
        oSquare.style.left=oSquare.offsetLeft-speed+"px";
        if(-oSquare.offsetLeft>=oSquare.offsetWidth/2){
            oSquare.style.left=0;
        }
        //左
        if(oSquare.offsetLeft>0){
            oSquare.style.left=-oSquare.offsetWidth/2+"px";
        }
        //右
    },100);
   oLeft.onclick=oRight.onclick=function(){
       if(this===oLeft) {
       speed=5;
               }else{
       speed=-5;
       }
   }
   })();