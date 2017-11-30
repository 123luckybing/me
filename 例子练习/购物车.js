/**
 * Created by zhoufangbing on 2017/8/4.
 */
(function(){
    var oButton=document.getElementsByTagName("button");
    var oH5=document.getElementsByTagName("h5");
    var oNumber=document.getElementsByTagName("input");
    var oPrice=[];
    for(var i=0;i<oH5.length;i++){
        if(oH5[i].className="price"){
            oPrice.push(oH5[i]);
        }
    }
        for(var i=0;i<oButton.length;i++) {
            oButton[i].index = i;
            oButton[i].onclick = function () {
                console.log(oH5[this.index].innerHTML);
                console.log(oNumber[this.index].innerHTML);
            };
        }