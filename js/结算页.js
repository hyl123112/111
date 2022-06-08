window.onload = function () {
    var zf = document.getElementsByClassName("zf");
    var xll = document.getElementsByClassName("xll");
    var xia = document.getElementById("xia");
    var shang = document.getElementById("shang");
    var sx = document.getElementById("sx");
    var wx = document.getElementById("wx");
    var mg1 = document.getElementById("mg1");
    var sp1 = document.getElementById("sp1");
    var zfbb = document.getElementById("zfbb");
    var mg2 = document.getElementById("mg2");
    var sp2 = document.getElementById("sp2");
    var hb = document.getElementById("hb");
    var mg3 = document.getElementById("mg3");
    var sp3 = document.getElementById("sp3");
    var ww = document.getElementById("ww");
    var ww2 = document.getElementById("ww2");
    var ww3 = document.getElementById("ww3");
    var p1 = document.getElementById("p1");
    var zfb = document.getElementById("zfb");
    var youhui = document.getElementById("youhui");
    var tankang = document.getElementById("tankang");
    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    var inp = document.getElementById("inp");
    var fq = document.getElementById("fq");





    var a = 0;
    zf[0].onclick = function () {
        if (a == 0) {
            xll[0].style.display = "block";
            shang.style.opacity = "1";
            xia.style.opacity = "0";
            a = 1;
        } else {
            xll[0].style.display = "none";
            shang.style.opacity = "0";
            xia.style.opacity = "1";
            a = 0;
        }
    }
    var b = 0;
    wx.onclick = function(){
        if(b==0){
            mg1.style.opacity = "1";
            sp1.style.opacity = "0";
            sp2.style.opacity = "0";
            sp3.style.opacity = "0";
            mg2.style.opacity = "1";
            mg3.style.opacity = "1";
            zfb.innerHTML = ww.innerHTML;
            b=1;
        }else{
            mg1.style.opacity = "0";
            sp1.style.opacity = "1";
            b = 0;
        }
    }
  var c = 0;
    zfbb.onclick = function(){
        if(c==0){
            mg2.style.opacity = "0";
            sp2.style.opacity = "1";
            sp1.style.opacity = "0";
            sp3.style.opacity = "0";
            mg3.style.opacity = "1";
            mg1.style.opacity = "1";
            zfb.innerHTML = ww2.innerHTML;
            c=1;
        }else{
            mg2.style.opacity = "1";
            sp2.style.opacity = "0";
            c = 0;
        }
    }

    var d = 0;
    hb.onclick = function(){
        if(d==0){
            mg3.style.opacity = "1";
            sp3.style.opacity = "0";
            sp1.style.opacity = "0";
            mg1.style.opacity = "1";
            sp2.style.opacity = "0";
            mg2.style.opacity = "1";           
            zfb.innerHTML = ww3.innerHTML;
            d=1;
        }else{
            mg3.style.opacity = "0";
            sp3.style.opacity = "1";
            d = 0;
        }
    }


    // 弹框
    youhui.onclick = function(){
        tankang.style.display = "block";
    }
    a1.onclick = function(){
        tankang.style.display = "none";

    }
    var ma = 123;
    inp.onfocus = function(){
        inp.value = "";
      }
    a2.onclick = function(){       
       if(inp.value==ma){
        alert("兑换成功");
        tankang.style.display = "none";
       }else{
           alert("兑换失败");
        tankang.style.display = "none";

       }

    }

fq.onclick = function(){
    alert("支付成功,自动跳转到首页")
    window.location.href = ""
}



   



}