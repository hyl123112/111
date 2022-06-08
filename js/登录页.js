
window.onload=function(){
	/*选项卡效果*/
	$(".hyl-select").click(function(){
		var index=$(this).index(".hyl-select");
		$(".hyl-selects").css({"display":"none"});
		$(".hyl-selects:eq("+index+")").css({"display":"block"});
		$(".hyl-select").css({"background":"white","color":"black"});
		$(".hyl-select:eq("+index+")").css({"background":"#FF3F29","color":"#fff"});
	})

	/*表单元素的特殊获取方式*/
	var login1=document.login1;
	var userName=login1.userName;
	var userPass=login1.userPass;
	var login2=document.login2;
	var phone=login2.phone;
	var yan=login2.yan;
	/*各输入框获取焦点时,输入框置空*/
	userName.onfocus=function(){
		userName.value="";
	}
	userPass.onfocus=function(){
		userPass.value="";
	}
	phone.onfocus=function(){
		phone.value="";
	}
	yan.onfocus=function(){
		yan.value="";
	}
	/*验证码的首次显示*/
	var chars=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	function yanShow(){
		var strings="";
		for(var i=0;i<6;i++){
		  var a=chars[Math.floor(Math.random()*36)];
		  strings=strings+a;	
		}
		$(".hyl-yan").html(strings);
	}
	yanShow();
	/*当单击"看不清,换一张"时换验证码*/
	$(".hyl-yan-ts").click(function(){
		yanShow();
	})
	$(".hyl-btn:eq(0)").click(function(){
        
		if(userName.value==""||userName.value=="请输入手机号码"){
			$(".hyl-tsa").css({"display":"block"});
		}else{
			$(".hyl-tsa").css({"display":"none"});
		}
		if(userPass.value==""||userPass.value=="请输入密码"){
			$(".hyl-tsb").css({"display":"block"});
		}else{
			$(".hyl-tsb").css({"display":"none"});
		}
		if(userName.value=="1"&&userPass.value=="1"){
			window.location.href="index.html";
		}else{
			alert("输入有误请重新输入");
		}
	})
		$(".hyl-btn:eq(1)").click(function(){
		if(phone.value==""||phone.value=="请输入手机号码"){
			$(".hyl-tsa1").css({"display":"block"});
		}else{
			$(".hyl-tsa1").css({"display":"none"});
		}
		if(yan.value==""||yan.value=="请输入验证码"){
			$(".hyl-tsb1").css({"display":"block"});
		}else{
			$(".hyl-tsb1").css({"display":"none"});
			if(yan.value!=$(".hyl-yan").html()){
			$(".hyl-tsb2").css({"display":"block"});
		}else{
			$(".hyl-tsb2").css({"display":"none"});
		}
		}
		if(phone.value=="1"&&yan.value==$(".hyl-yan").html()){
			window.location.href="";
		}else{
			alert("输入有误请重新输入");
		}
		
	})

}