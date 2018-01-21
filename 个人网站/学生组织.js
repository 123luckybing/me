(function(){
    var Page1 = document.getElementsByClassName('page1')[0];
    var oDetail1= document.getElementsByClassName('detail1')[0];
    var oDetail2= document.getElementsByClassName('detail2')[0];
    var oDetail3= document.getElementsByClassName('detail3')[0];
    var oDetail4= document.getElementsByClassName('detail4')[0];
    //getElementsByClassName传递的是一个nodelist,改变第一个元素[0]
    var Page2 = document.getElementsByClassName('page2')[0];
    var Page3= document.getElementsByClassName('page3')[0];
    var Page4 = document.getElementsByClassName('page4')[0];
    var Page_first_big = document.getElementsByClassName("page1_big")[0];
    var Page_second_big = document.getElementsByClassName("page2_big")[0];
    var Page_third_big = document.getElementsByClassName("page3_big")[0];
    var Page_fourth_big = document.getElementsByClassName("page4_big")[0];
    Page1.onmouseover = function(e){
        oDetail1.style.display="block";
    };
   Page1.onmouseout = function(e){
        oDetail1.style.display="none";
    };
    Page2.onmouseover = function(){
        oDetail2.style.display="block";
    };
    Page2.onmouseout = function(){
        oDetail2.style.display="none";
    };
    Page3.onmouseover = function(){
        oDetail3.style.display="block";
    };
    Page3.onmouseout = function(){
        oDetail3.style.display="none";
    };
    Page4.onmouseover= function(e){
        oDetail4.style.display="block";
    };
    Page4.onmouseout = function(e){
        oDetail4.style.display="none";
    };
    //一闪一闪的问题：给大小相同位置相同的都绑定上事件，解决事件冒泡的问题
    Page1.onclick = function(){
            Page_first_big.style.display = "block";
    };
    Page_first_big.onclick = function(){
        this.style.display="none";
    };
    Page2.onclick = function(){
        Page_second_big.style.display = "block";
    };
    Page_second_big.onclick = function(){
        this.style.display="none";
    };
    Page3.onclick = function(){
        Page_third_big.style.display = "block";
    };
    Page_third_big.onclick = function(){
        this.style.display="none";
    };
    Page4.onclick = function(){
        Page_fourth_big.style.display = "block";
    };
    Page_fourth_big.onclick = function(){
        this.style.display="none";
    }
})();