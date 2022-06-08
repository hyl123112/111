$(function(){
     var obj;
     var rq = document.getElementsByClassName("rq");
     $.ajax({
         url:'js/必推好课.json',
         dataType:'json',
         type:'GET',
         async:false,
         success:function(list){
             obj = list;
         }
     })

   
        for(let i = 0;i<obj.src.length;i++){
            rq[i].innerHTML=
        `

         <div class="a">
                    <div class="a1">
                        <a href="">
                            <img src="${obj.src[i]}" alt="">
                            <p>${obj.p1[i]}</p>
                            <span>${obj.span[i]}</span>
                            <p>${obj.p2[i]}</p>
                            <div>${obj.div[i]}</div>
                        </a>
                    </div>
                </div> 
        `
        }


        $(".icon2").click(function(){
            location.href = "我的收益.html"
        })
        $(".icon3").click(function(){
            location.href = "个人信息.html"
        })
        





        var startx, starty;
        //获得角度
        function getAngle(angx, angy) {
            return Math.atan2(angy, angx) * 180 / Math.PI;
        };
        
        //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
        function getDirection(startx, starty, endx, endy) {
            var angx = endx - startx;
            var angy = endy - starty;
            var result = 0;
        
            //如果滑动距离太短
            if (Math.abs(angx) < 300 && Math.abs(angy) < 300) {
                return result;
            }
        
            var angle = getAngle(angx, angy);
            if (angle >= -135 && angle <= -45) {
                result = 1;
            } else if (angle > 45 && angle < 135) {
                result = 2;
               }
        //   else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        //      result = 3;
        //  } else if (angle >= -45 && angle <= 45) {
        //      result = 4;
        //  }
        
            return result;
        }
        //手指接触屏幕
        document.addEventListener("touchstart", function(e){
            startx = e.touches[0].pageX;
            starty = e.touches[0].pageY;
        }, false);
        //手指离开屏幕
        document.addEventListener("touchend", function(e) {
            var endx, endy;
            endx = e.changedTouches[0].pageX;
            endy = e.changedTouches[0].pageY;
            var direction = getDirection(startx, starty, endx, endy);
            switch (direction) {
        //      case 0:
        //          alert("未滑动!");
        //          break;
                case 1:
                    alert("向左!");
                    break;
                case 2:
                    window.location="我的收益.html";
                    break;
        //      case 3:
        //          alert("向左!");
        //          break;
        //      case 4:
        //          alert("向右!");
        //          break;
                default:
            }
        }, false);







     
})