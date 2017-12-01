(function(){
          var oCanvas = document.getElementById("canvas");
          var cellHeight =10;
          var cellWidth = 20;
           var rows= 40;
            var cols =40;
          oCanvas.style.height = 400+"px";//������
          oCanvas.style.width = 400+"px";
          oCanvas.style.border = "1px solid black";//�����߿�
          var ctx = oCanvas.getContext("2d");//��ͼAPI
          ctx.beginPath();//������ͼ·��
          //���ƣ�ÿһ�к���(moveTo��㣬lineTo�յ�)
          for (var i = 1; i < rows; i++) {
              ctx.moveTo(0, i * cellHeight);
              ctx.lineTo(cols * cellHeight, i * cellHeight);
          }
          //����ÿһ������
          for (var i = 1; i < cols; i++) {
              ctx.moveTo(i * cellWidth, 0);
              ctx.lineTo(i * cellWidth, rows * cellWidth);
          }
          ctx.strokeStyle = "grey";
          ctx.lineWidth = 0.3;
          ctx.stroke();
    //������ɫ
        var color= ["#fff", "#f00" , "#0f0" , "#00f"
                 , "#c60" , "#f0f" , "#0ff" , "#609"];
    //�����ĸ���������ͼ��
    var blockArr =[
        //  Z
        [
            {x: cols / 2 - 1, y:0, color:color[0]},
            {x: cols / 2 , y:0,color:1},
            {x: cols / 2 , y:1,color:1},
            {x: cols / 2 + 1 , y:1 , color:1}
        ],
        // ����ڶ��ֿ��ܳ��ֵķ�����ϣ���Z
        [
            {x: cols / 2 + 1 , y:0, color:2},
            {x: cols / 2 , y:0, color:2},
            {x: cols / 2 , y:1, color:2},
            {x: cols / 2 - 1 , y:1, color:2}
        ],
        // ��������ֿ��ܳ��ֵķ�����ϣ� ��
        [
            {x: cols / 2 - 1 , y:0 , color:3},
            {x: cols / 2 , y:0,  color:3},
            {x: cols / 2 - 1 , y:1, color:3},
            {x: cols / 2 , y:1, color:3}
        ],
        // ��������ֿ��ܳ��ֵķ�����ϣ�L
        [
            {x: cols / 2 - 1 , y:0, color:4},
            {x: cols / 2 - 1, y:1, color:4},
            {x: cols / 2 - 1 , y:1+1 , color:4},
            {x: cols / 2 , y:1+1 , color:4}
        ],
        // ��������ֿ��ܳ��ֵķ�����ϣ�J
        [
            {x: cols / 2  , y:-1+1 , color:5},
            {x: cols / 2 , y:0+1, color:5},
            {x: cols / 2  , y:1+1, color:5},
            {x: cols / 2 - 1, y:1+1, color:5}
        ],
        // ��������ֿ��ܳ��ֵķ������ : ��
        [
            {x: cols / 2 , y:-1+1 , color:6},
            {x: cols / 2 , y:0 +1, color:6},
            {x: cols / 2 , y:1 +1, color:6},
            {x: cols / 2 , y:2 +1, color:6}
        ],
        // ��������ֿ��ܳ��ֵķ������ : ��
        [
            {x: cols / 2 , y:-1 +1, color:7},
            {x: cols / 2 - 1 , y:0+1 , color:7},
            {x: cols / 2 , y:0+1 , color:7},
            {x: cols / 2 + 1, y:0 +1, color:7}
        ]
    ];
    //��������������ĸ�����λ��  x,y,color
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
