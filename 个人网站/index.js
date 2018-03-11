(function() {
    var oFixed = document.getElementById("fixed");
    oFixed.onclick = function () {
         timer = setInterval(function () {
             iScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (iScrollTop <= 0) {
                clearInterval(timer);
            } else {
                window.scrollTo(0, iScrollTop -= 100);
            }
        }, 50);
    }
})();
