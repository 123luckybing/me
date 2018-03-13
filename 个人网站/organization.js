(function(){
   // var Page1 = document.getElementsByClassName('page1')[0];
   // var oDetail1= document.getElementsByClassName('detail1')[0];
   // var oDetail2= document.getElementsByClassName('detail2')[0];
   // var oDetail3= document.getElementsByClassName('detail3')[0];
   // var oDetail4= document.getElementsByClassName('detail4')[0];
   // //getElementsByClassName传递的是一个nodelist,改变第一个元素[0]
   // var Page2 = document.getElementsByClassName('page2')[0];
   // var Page3= document.getElementsByClassName('page3')[0];
   // var Page4 = document.getElementsByClassName('page4')[0];
   // var Page_first_big = document.getElementsByClassName("page1_big")[0];
   // var Page_second_big = document.getElementsByClassName("page2_big")[0];
   // var Page_third_big = document.getElementsByClassName("page3_big")[0];
   // var Page_fourth_big = document.getElementsByClassName("page4_big")[0];
   // Page1.onmouseover = function(e){
   //     oDetail1.style.display="block";
   // };
   //Page1.onmouseout = function(e){
   //     oDetail1.style.display="none";
   // };
   // Page2.onmouseover = function(){
   //     oDetail2.style.display="block";
   // };
   // Page2.onmouseout = function(){
   //     oDetail2.style.display="none";
   // };
   // Page3.onmouseover = function(){
   //     oDetail3.style.display="block";
   // };
   // Page3.onmouseout = function(){
   //     oDetail3.style.display="none";
   // };
   // Page4.onmouseover= function(e){
   //     oDetail4.style.display="block";
   // };
   // Page4.onmouseout = function(e){
   //     oDetail4.style.display="none";
   // };
   // //一闪一闪的问题：给大小相同位置相同的都绑定上事件，解决事件冒泡的问题
   // Page1.onclick = function(){
   //         Page_first_big.style.display = "block";
   // };
   // Page_first_big.onclick = function(){
   //     this.style.display="none";
   // };
   // Page2.onclick = function(){
   //     Page_second_big.style.display = "block";
   // };
   // Page_second_big.onclick = function(){
   //     this.style.display="none";
   // };
   // Page3.onclick = function(){
   //     Page_third_big.style.display = "block";
   // };
   // Page_third_big.onclick = function(){
   //     this.style.display="none";
   // };
   // Page4.onclick = function(){
   //     Page_fourth_big.style.display = "block";
   // };
   // Page_fourth_big.onclick = function(){
   //     this.style.display="none";
   // };
   //
   // var Down1= document.getElementsByClassName("down1")[0];
   // var Down2= document.getElementsByClassName("down2")[0];
   // var Down3= document.getElementsByClassName("down3")[0];
   // var Reg =  document.getElementsByClassName("reg")[0];
   // var Total_st =  document.getElementsByClassName("total_st")[0];
   // var Total_nd=  document.getElementsByClassName("total_nd")[0];
   // console.log(Down1);
   // Down1.onclick = function(){
   //     Reg.style.display='block';
   // };
   // Reg.onclick =function(){
   //     this.style.display = 'none';
   // };
   // Down2.onclick = function(){
   //     Total_st.style.display='block';
   // };
   // Total_st.onclick =function(){
   //     this.style.display = 'none';
   // };
   // Down3.onclick = function(){
   //     Total_nd.style.display='block';
   // };
   // Total_nd.onclick =function(){
   //     this.style.display = 'none';
   // };




    var oClock = document.getElementById("clock");
    var oMask = document.getElementById("mask");
    var list = "";
    for(var i=0;i<60;i++){
        list+="<li style='transform:rotate("+ i*6+"deg)'></li>";
    }
    oMask.innerHTML = list;

    run();
    function run() {
        var date = new Date();
        var second = date.getSeconds();
        var minute = date.getMinutes()+second/60;
        var hour = date.getHours()+minute/60;
        var oHour = document.getElementById("hour");
        var oMinute = document.getElementById("minute");
        var oSecond = document.getElementById("second");
        oHour.style.transform = "rotate(" + (hour * 30) + "deg)";
        oMinute.style.transform = "rotate(" + (minute * 6) + "deg)";
        oSecond.style.transform = "rotate(" + (second * 6) + "deg)";
    }
    setInterval(run,1000);
})();