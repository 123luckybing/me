(function() {
    var ROW = 4, COL = 6, NUM = ROW * COL;
    BIG_WIDTH = 750;
    BIG_HEIGHT = 500;
    var oContainer = document.getElementById("container");
    var nowIndex = 0;
    //图片预处理
    for (var i = 0; i < NUM; i++) {
        var count = 0;
        var thumbsImg = new Image();
        thumbsImg.onload = function () {
            count++;
            if (count == NUM * 2) {
                loadSuccess();
            }
        };
        thumbsImg.src = "img/thumbs/" + (i + 1) + ".jpg";
        var bigImg = new Image();
        bigImg.onload = function () {count++;
            if (count == NUM * 2) {
                loadSuccess();
            }
            //不知道大图和小图谁先加载完，所以都要写，但loadSuccess只
            //执行一次，谁先加载完(count == 24)执行谁的
        };
        bigImg.src = "img/" + (i + 1) + ".jpg";
    }
    var index = 0;
    var oImg;

    function loadSuccess() {
        //生成24个div,把Img放进去
        for (var i = 0; i < COL; i++) {
            for (var j = 0; j < ROW; j++) {
                var oDiv = document.createElement("div");
                oDiv.className = "img";
                oDiv.innerHTML = "<span></span>";
                oDiv.style.backgroundImage = "url(img/thumbs/" + (index + 1) + ".jpg)";
                oDiv.pos = {
                    col: i,
                    row: j
                };
                index++;
                oDiv.index = index;//保存图片名称
                oContainer.appendChild(oDiv);//appendChild() 括号里面不加引号
            }
        }
        oImg = document.getElementsByClassName("img");
        var ImgWidth = oDiv.offsetWidth;
        var ImgHeight = oDiv.offsetHeight;
        var Rgap = (oContainer.offsetWidth - ImgWidth * COL) / (COL + 1);
        var Cgap = (oContainer.offsetHeight - ImgHeight * ROW) / (ROW + 1);
        for (var i = 23; i >= 0; i--) {
            oImg[i].style.transitionDelay = 100 * (23 - i) + "ms";
            oImg[i].style.left = ( Rgap + ImgWidth) * oImg[i].pos.col + Rgap + "px";
            oImg[i].style.top = ( Cgap + ImgHeight) * oImg[i].pos.row + Cgap + "px";
            oImg[i].style.transform = "rotate(" + ( Math.random() * 40 - 20) + "deg)";
        }
    }

    var oNext = document.getElementById("next");
    var oPrev = document.getElementById("prev");
    var imgURL;
    var Flag = true; //true展开要合上，false合上要展开
    oContainer.onclick = function (e) {
        if (this === e.target) {
            return false;
        }//不能点击空
        if (Flag) {
            for (var i = 0; i < oImg.length; i++) {
                oImg[i].style.transform = "rotate(0)";
                oImg[i].style.borderWidth = "1px";
                oImg[i].style.transitionDelay = "0ms";
                oImg[i].style.top = (oContainer.offsetHeight - BIG_HEIGHT) / 2 + oImg[i].pos.row * 125 + "px";
                oImg[i].style.left = (oContainer.offsetWidth - BIG_WIDTH) / 2 + oImg[i].pos.col * 125 + "px";
                var oSpan = oImg[i].getElementsByTagName("span")[0];
                oSpan.style.opacity = 1;
                if (e.target.className == "img") {
                    imgURL = e.target.index;
                } else {
                    imgURL = e.target.parentNode.index;
                }
                nowIndex = imgURL;
                oSpan.style.backgroundImage = "url(img/" + imgURL + ".jpg)";
                oSpan.style.backgroundPosition = -125 * oImg[i].pos.col + "px " + (-125 * oImg[i].pos.row) + "px";
                //空格也得拼进去
            }
            oNext.style.display = "block";
            oPrev.style.display = "block";
        }else {
            var Rgap = (oContainer.offsetWidth - 125 * COL) / (COL + 1);
            var Cgap = (oContainer.offsetHeight - 125 * ROW) / (ROW + 1);
            for (var i = 0; i < NUM; i++) {
                oImg[i].style.left = ( Rgap + 125) * oImg[i].pos.col + Rgap + "px";
                oImg[i].style.top = ( Cgap + 125) * oImg[i].pos.row + Cgap + "px";
                oImg[i].style.transform = "rotate(" + ( Math.random() * 40 - 20) + "deg)";
                var oSpan = oImg[i].getElementsByTagName("span")[0];
                oSpan.style.opacity = 0;
                oImg[i].style.borderWidth = "5px";
                oNext.style.display = "none";
                oPrev.style.display = "none";
            }
        }
        Flag = !Flag;
    };

    oNext.onclick = oPrev.onclick = function() {
        if (this === oNext) {
            console.log(nowIndex);
            nowIndex++;
            if (nowIndex == NUM + 1) {
                nowIndex = 1;
            }
        } else {
            nowIndex--;
            console.log(nowIndex);
            if (nowIndex == 0) {
                nowIndex = NUM;
            }
        }
        var arr = [];//0~23
        for(var i=0; i<NUM; i++){
            arr.push(i);
        }
        arr.sort(function(a, b){
            return Math.random() - 0.5;
        });

        for(var i=0; i<arr.length; i++){
            var oSpan = oImg[arr[i]].getElementsByTagName("span")[0];
            oSpan.style.transitionDelay = (i + 1) * 50 + "ms";
            oSpan.style.backgroundImage = "url(img/"+ nowIndex +".jpg)";
        }
    }

})();