(function() {
    var oSearch_Meau = document.getElementById("Search-Meau");
    var oLi = oSearch_Meau.getElementsByTagName("li");
    var oSearch_bar = document.getElementById("Search-bar");
    var oTdiv = oSearch_bar.getElementsByClassName("tdiv");
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].index = i;
        oLi[i].onclick = function () {
            for (var i = 0; i < oLi.length; i++) {
                oLi[i].className = "";
                oTdiv[i].className = "tdiv";
                //原本就带着class名字tdiv，这时候也得写上
            }
            this.className = "selected";
            oTdiv[this.index].className = "tdiv ddd";
        };
    }

    var oFooter = document.getElementById("footer");
    var oUl = oFooter.getElementsByTagName("ul")[0];
    var aLi = oUl.getElementsByTagName("li");
    var oCarousel_figure = document.getElementById("Carousel-figure");
    var oIimg = document.getElementById("Img");
    var oImg = oIimg.getElementsByTagName("img");
    var oRight_button = document.getElementById("right-button");
    var oLeft_button = document.getElementById("left-button");
    var PictureOrder = document.getElementById("picture-order");
    var OrderSelected = PictureOrder.getElementsByTagName("li");
    var nowIndex = 0;
    var timer;
    oRight_button.onclick = oLeft_button.onclick = function () {
        if (this == oRight_button) {
            nowIndex++;
            if (nowIndex == aLi.length) {
                nowIndex = 0;
            }
        } else {
            nowIndex--;
            if (nowIndex == -1) {
                nowIndex = aLi.length - 1;
            }
        }
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].className = "";
            oImg[i].className = "";
        }
        aLi[nowIndex].className = "li-selected";
        oImg[nowIndex].className = "picture-selected";
    };

    oCarousel_figure.onmouseover = function () {
        clearInterval(timer);
    };
    oCarousel_figure.onmouseout = function () {
        play();
    };
    play();

    function play() {
        timer = setInterval(function () {
            oRight_button.onclick();
        }, 1000);
    }
    var oTab=document.getElementById("tab");
    var oTab_Nav=oTab.getElementsByClassName("tab-nav")[0];
    var oUL=oTab_Nav.getElementsByTagName("ul")[0];
    var TLi=oUL.getElementsByTagName("li");
    var oContext=oTab.getElementsByClassName("context");

    for(var i=0;i<TLi.length;i++) {
        TLi[i].index = i;
        TLi[i].onmouseover = function () {
            for (var i = 0; i < TLi.length; i++) {
                TLi[i].className = "";
                oContext[i].className = "context";
            }
            TLi[this.index].className = "tSelected";
            oContext[this.index].className = "context cSelected";
        };
    }

    var oTop=document.getElementById("top");
    window.onscroll=function(){
        var t=document.body.scrollTop||document.documentElement.scrollTop;
        if(t>250){
            oTop.style.display="block";
            oTop.style.position="fixed";
            oTop.style.top="0";
            //Zindex在css中写
        }else{
            oTop.style.position="static";
            //恢复原状
            oTop.style.display ="none";
        }
    };

    var oProduct = document.getElementById("product");
    var oProduct_div = oProduct.getElementsByTagName("div");
    for(var i=0;i<oProduct_div.length;i++) {
        oProduct_div[i].onclick = function () {
            //this.style.borderCcolor = 'red';
            console.log(oProduct_div[i]);
        }
    }
})();