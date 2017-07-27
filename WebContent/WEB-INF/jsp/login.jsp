

<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<title>外卖网【点我吧】-网上订餐,杭州外卖网,上海外卖网｜外卖电话-订餐电话-不只有外卖</title>

<link rel="stylesheet" href="css/3.0/style.css" />
<link rel="stylesheet" href="css/3.0/zxx.lib.min.css" />
<style type="text/css">
span {
	color: red;
	display: none;
}

.white_content {
	width: 389px;
	height: 553px; display : none;
	position: absolute;
	padding: 10px;
	border: 1px solid red;
	background-color: white;
	z-index: 1002;
	overflow: auto;
	display: none;
}
.closebutton2{
position: relative;
top:1px;
left:380px;
}

.white_content label{
width:60px;
float:left ;
text-align:left ;

}

.white_content .btnOrg40{
margin-left: 180px

}
</style>
</head>
<body>
	<!--头部模块-->
	<div class="d_head d_head_40 d_head_40_login">
		<div class="d_headBox clearfix">
			<a href="index.jsp" title="点我吧外卖网" class="logo"></a>
			<!--logo end-->
			<!--右侧未登录状态-->
			<div class="noLogin clearfix">
				<a href="userregist.action" rel="nofollow"
					onClick="_gaq.push(['_trackEvent', 'dwb','register']);" title=""
					class="btnOrg40">注册</a> <a href="userlogin1.action" rel="nofollow"
					onClick="_gaq.push(['_trackEvent', 'dwb','login']);" title=""
					class="btnOrg40" id="login-url">登录</a>
			</div>
			<!--noLogin end 未登录-->


		</div>
		<!--d_headBox end-->
	</div>
	<!--d_head end-->

	<div class="d_loginBox">
		<div class="loginBox clearfix rel">
			<div class="login-left abs"></div>
			<div class="loginBoxR">
				<form action="userlogin.action" method="post" id="loginform">
					<h2>登录点我吧</h2>
					<ul class="inputBox">
						<li><input type="text" id="username" name="username"
							class="loginInput" placeholder="账号或手机号"> <span
							id="usernamespan">用户名不能为空</span></li>
						<li><input type="password" id="password" name="password"
							class="loginInput" placeholder="密码"> <span
							id="passwordspan">密码不能为空</span><br />
							<span style="display: block" id="messagespan">${message}</span><br /></li>						 
					</ul>
					<div class="passHandel clearfix">
						<label for="checkbox"><input type="checkbox"
							id="forget_pw" name="_spring_security_remember_me" value="1"
							checked>记住我</label> <a href="JavaScript:void(0)" title=""
							id="forget" class="fr g6">忘记密码？</a>
					</div>

					<div class="btnBox">
						<input type="button" value="立即登录" class="btnOrg40"
							id="personloginBtn">
					</div>
				</form>

				<div id="light" class="white_content">
					<a href="javascript:void(0)" id="closebutton"class="closebutton2">X</a>					
					<form action="findpassword.action" method="post" id="login1form">
						<label>手机号</label><input type="text" name="tel" id="tel" placeholder="请输手机号"
							class="loginInput" /> <br /> 
						<label>账号</label><input type="text"
							name="username" id="username" placeholder="请输入账号"
							class="loginInput" /> <br /> 
						<label>密码</label><input type="password"
							name="password1" id="password1" class="loginInput"
							placeholder="请输入密码" /><br /> 
						<label>确认密码</label><input type="password"
							name="repassword1" id="repassword1" class="loginInput"
							placeholder="请再次输入密码" /><br /> 
						<input type="button" value="确定" id="login"class="btnOrg40" /> 
					</form>
					
				</div>
				<h3 class="f14 tc g6">第三方账号登录</h3>
				<div class="login-other-box f0 tc">
					<a href="#" title="微博登录" class="dib vm"></a>
					<a href="#" title="微信登录" class="dib vm wx"></a>
					<a href="#" title="QQ登录" class="dib vm qq"></a>
				</div>
			</div>
		</div>
		<!--loginBox end-->
	</div>
	<!--d_loginBox end-->

	<p class="f12 tc gc">&copy; 2014 点我吧 沪ICP备12042558号</p>
	<script type="text/javascript" src="js/jquery.js"></script>
	<!--底部-->
	<script type="text/javascript">
	$("#username").click(function() {
		$("#messagespan").hide();
	
	});
		$("#username").blur(function() {
			if ($("#username").val().length == 0) {
				$("#usernamespan").show();
			} else {
				$("#usernamespan").hide();
			}
		});

		$("#password").blur(function() {
			if ($("#password").val().length == 0) {
				$("#passwordspan").show();
			} else {
				$("#passwordspan").hide();
			}
		});

		$("#personloginBtn").click(
				function() {
					if ($("#username").val().length == 0
							| $("#password").val().length == 0) {
						alert("参数不能为空");
					} else {
						$("#loginform").submit();
					}
				});

		$("#forget").click(function() {
			$("#light").css("display", "block");
			$("#loginform").css("display", "none");
		});
		$("#closebutton").click(function() {
			$("#light").css("display", "none");
			$("#loginform").css("display", "block");
		});
		$("#login").click(function(){
			$("#login1form").submit();
		})
	</script>
	<!-- 尾部 -->
</body>
</html>