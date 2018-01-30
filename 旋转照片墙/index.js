(function(){
    var ROW = 4,COL = 6,NUM = ROW*COL;
    var oContainer = document.getElementById("container");
    //ͼƬԤ����
    for(var i=0;i<NUM;i++){
        var count = 0;
        var thumbsImg = new Image();
        thumbsImg.onload = function(){
            count++;
            if(count == NUM*2){
                loadSuccess();
            }
        };
        thumbsImg.src= "img/thumbs/"+(i+1)+".jpg";
        var bigImg = new Image();
        bigImg.onload = function(){
            count++;
            if(count == NUM*2){
                loadSuccess();
            }
            //��֪����ͼ��Сͼ˭�ȼ����꣬���Զ�Ҫд����loadSuccessֻ
            //ִ��һ�Σ�˭�ȼ�����(count == 24)ִ��˭��
        };
        bigImg.src = "img/"+(i+1)+".jpg";
    }
    var index = 0;
    var oImg;
    function loadSuccess() {
        //����24��div,��Img�Ž�ȥ
        for (var i = 0; i <COL; i++) {
            for (var j = 0; j < ROW; j++) {
                var oDiv = document.createElement("div");
                oDiv.className ="img";
                oDiv.style.backgroundImage = "url(img/thumbs/" + (index+1)+ ".jpg)";
                    oDiv.pos={
                        col:i,
                        row:j
                    };
                index++;
                oContainer.appendChild(oDiv);//appendChild() �������治������
                }
            }
            oImg = document.getElementsByClassName("img");
            console.log(oImg);
            var ImgWidth = oDiv.offsetWidth;
            var ImgHeight = oDiv.offsetHeight;
            var Rgap =(oContainer.offsetWidth-ImgWidth*COL)/(COL+1);
            var Cgap = (oContainer.offsetHeight-ImgHeight*ROW)/(ROW+1);
            for(var i=23; i>=0 ;i--) {
               oImg[i].style.transitionDelay = 200*(23-i)+"ms";
               oImg[i].style.left = ( Rgap + ImgWidth) * oImg[i].pos.col + Rgap + "px";
               oImg[i].style.top = ( Cgap + ImgHeight) * oImg[i].pos.row + Cgap + "px";
               oImg[i].style.transform = "rotate("+( Math.random()*40-20)+"deg)";
        }
    }


})();