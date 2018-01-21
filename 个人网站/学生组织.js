(function(){
    var Img_first = document.getElementById('img_first');
    var oDetail1= document.getElementsByClassName('detail1')[0];
    var oDetail2= document.getElementsByClassName('detail2')[0];
    var oDetail3= document.getElementsByClassName('detail3')[0];
    var oDetail4= document.getElementsByClassName('detail4')[0];
    //getElementsByClassName传递的是一个nodelist,改变第一个元素[0]
    var Img_second = document.getElementsByClassName('img_second')[0];
    var Img_third= document.getElementsByClassName('img_third')[0];
    var Img_fourth = document.getElementsByClassName('img_fourth')[0];
    Img_first.onmouseover = function(){
        oDetail1.style.display="block";
    };
    Img_first.onmouseout = function(){
        oDetail1.style.display="none";
    };
})();