(function(){
          var oCanvas = document.getElementById("canvas");
          var cellHeight =10;
          var cellWidth = 20;
           var rows= 40;
            var cols =40;
          oCanvas.style.height = 400+"px";//画布高
          oCanvas.style.width = 400+"px";
          oCanvas.style.border = "1px solid black";//画布边框
          var ctx = oCanvas.getContext("2d");//画图API
          ctx.beginPath();//创建画图路径
          //绘制，每一行横向(moveTo起点，lineTo终点)
          for (var i = 1; i < rows; i++) {
              ctx.moveTo(0, i * cellHeight);
              ctx.lineTo(cols * cellHeight, i * cellHeight);
          }
          //绘制每一个纵向
          for (var i = 1; i < cols; i++) {
              ctx.moveTo(i * cellWidth, 0);
              ctx.lineTo(i * cellWidth, rows * cellWidth);
          }
          ctx.strokeStyle = "grey";
          ctx.lineWidth = 0.3;
          ctx.stroke();
    //定义颜色
        var color= ["#fff", "#f00" , "#0f0" , "#00f"
                 , "#c60" , "#f0f" , "#0ff" , "#609"];
    //定义四个方块的组合图形
    var blockArr =[
        //  Z
        [
            {x: cols / 2 - 1, y:0, color:color[0]},
            {x: cols / 2 , y:0,color:1},
            {x: cols / 2 , y:1,color:1},
            {x: cols / 2 + 1 , y:1 , color:1}
        ],
        // 代表第二种可能出现的方块组合：反Z
        [
            {x: cols / 2 + 1 , y:0, color:2},
            {x: cols / 2 , y:0, color:2},
            {x: cols / 2 , y:1, color:2},
            {x: cols / 2 - 1 , y:1, color:2}
        ],
        // 代表第三种可能出现的方块组合： 田
        [
            {x: cols / 2 - 1 , y:0 , color:3},
            {x: cols / 2 , y:0,  color:3},
            {x: cols / 2 - 1 , y:1, color:3},
            {x: cols / 2 , y:1, color:3}
        ],
        // 代表第四种可能出现的方块组合：L
        [
            {x: cols / 2 - 1 , y:0, color:4},
            {x: cols / 2 - 1, y:1, color:4},
            {x: cols / 2 - 1 , y:1+1 , color:4},
            {x: cols / 2 , y:1+1 , color:4}
        ],
        // 代表第五种可能出现的方块组合：J
        [
            {x: cols / 2  , y:-1+1 , color:5},
            {x: cols / 2 , y:0+1, color:5},
            {x: cols / 2  , y:1+1, color:5},
            {x: cols / 2 - 1, y:1+1, color:5}
        ],
        // 代表第六种可能出现的方块组合 : 条
        [
            {x: cols / 2 , y:-1+1 , color:6},
            {x: cols / 2 , y:0 +1, color:6},
            {x: cols / 2 , y:1 +1, color:6},
            {x: cols / 2 , y:2 +1, color:6}
        ],
        // 代表第七种可能出现的方块组合 : ┵
        [
            {x: cols / 2 , y:-1 +1, color:7},
            {x: cols / 2 - 1 , y:0+1 , color:7},
            {x: cols / 2 , y:0+1 , color:7},
            {x: cols / 2 + 1, y:0 +1, color:7}
        ]
    ];
    //定义正在下落的四个方块位置  x,y,color
    var initBlock = function() {
        var rand = Math.floor(Math.random() * blockArr.length);
        var currentFall = [
            {
                x: blockArr[rand][0].x,
                y: blockArr[rand][0].y,
                color: blockArr[rand][0].color
            },
            {
                x: blockArr[rand][1].x,
                y: blockArr[rand][1].y,
                color: blockArr[rand][1].color
            },
            {
                x: blockArr[rand][2].x,
                y: blockArr[rand][2].y,
                color: blockArr[rand][2].color
            },
            {
                x: blockArr[rand][3].x,
                y: blockArr[rand][3].y,
                color: blockArr[rand][3].color
            }
        ];
    };
          initBlock();
})();
