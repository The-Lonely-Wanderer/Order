<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>外卖网</title>
<link rel="stylesheet" href="css/3.0/style.css" />
<link rel="stylesheet" type="text/css" href="/Order/css/register.css" />
<script type="text/javascript" src="js/register.js"></script>
<script src="js/jquery.js"></script>
<!-- 公用JS -->
<script src="js/2.1/base/googleAnaly.js"></script>
<script src="js/3.0/vendor/layer/sea.js"></script>


<style type="text/css">
.formList .error {
	font-size: 13px;
}

</style>
<link rel="stylesheet" href="css/3.0/zxx.lib.min.css" />
</head>

<body>

	<!--头部模块-->
	<div class="d_head d_head_40 d_head_40_login">
		<div class="d_headBox clearfix">
			<a href="index.jsp" title="点我吧外卖网" class="logo"></a>


			<!--右侧未登录状态-->
			<div class="noLogin clearfix">
				<a href="userregist.action" rel="nofollow"
					onClick="_gaq.push(['_trackEvent', 'dwb','register']);" title=""
					class="btnOrg40">注册</a> 
					<a href="userlogin1.action" rel="nofollow"
					onClick="_gaq.push(['_trackEvent', 'dwb','login']);" title=""
					class="btnOrg40" id="login-url">登录</a>
			</div>
			<!--noLogin end 未登录-->

		</div>
		<!--d_headBox end-->
	</div>
	<!--d_head end-->

	<script>
		if ('' != 'null' && '' != '') {
			var isLogin = true;
		} else {
			var isLogin = false;
		}
		var cur_city = '1' || 1; //没有取到值就默认为杭州的ID
	</script>

	<input type='hidden' value='6e41477f88c648e19b2b3c9d49a7feb3'
		id='token' />

	<div class="d_loginBox">
		<div class="loginBox clearfix rel">
			<div class="login-left abs"></div>
			<div class="loginBoxR">

				<form action="register.action" method="post" id="registform">
					<input type="hidden" value="dianwo__@bacom" id="keyword" /> <input
						type="hidden" name="userRegisterDto.cityid" value="1">
					<h2>注册</h2>
					<ul class="registerList formList inputBox">
						<li class="clearfix" style="margin-bottom: 25px">
							<div class="con clearfix">
								<div class="conBox clearfix rel">
									<input type="text" name="username" placeholder="请输入用户名"
										id="username" class="loginInput" /> <span id="usernamespan">用户名不能为空</span>									
								</div>
							</div>
						</li>
						<li class="clearfix" style="margin-bottom: 25px">
							<div class="con clearfix">
								<div class="conBox clearfix rel">
									<input type="text" name="tel" placeholder="请输入手机号" id="tel"
										class="loginInput"> <span id="telspan">手机号不能为空</span>									
								</div>
							</div>
						</li>

						<li class="clearfix" style="margin-bottom: 25px">
							<div class="con clearfix">
								<div class="conBox clearfix">
									<input type="password" name="password" placeholder="请设置密码"
										id="password" class="loginInput"> <span
										id="passwordspan">密码不能为空</span><br />
								</div>
							</div>
						</li>
						<li class="clearfix" style="margin-bottom: 25px">
							<div class="con clearfix">
								<div class="conBox clearfix">
									<input type="password" name="password2" placeholder="确认密码"
										id="password2" class="loginInput"> <span
										id="repasswordspan">重复密码不能为空</span><br />
								</div>
							</div>
						</li>

					</ul>
					<div class="protocol">
						<input type="checkbox" class="vm mr10" checked> <a
							href="###" title="" id="protocolBtn" class="vm dib">我已经阅读并同意<span>点我吧服务协议</span></a>
					</div>
					<div class="registerBox"></div>
					<div class="btnBox">
						<input type="button" value="立即注册" id="registbutton"
							class="btnOrg40 phone_sub_">
					</div>
				</form>

				<h3 class="f14 tc g6">第三方账号登录</h3>
				<div class="login-other-box f0 tc">
					<a href="/auth/login!sinaAuth.do" title="微博登录" class="dib vm"></a>
					<a href="/auth/login!weixinAuth.do" title="微信登录" class="dib vm wx"></a>
					<a href="/auth/login!qqAuth.do" title="QQ登录" class="dib vm qq"></a>
				</div>
			</div>
		</div>
		<!--loginBox end-->
	</div>
	<!--d_loginBox end-->

	<p class="f12 tc gc">&copy; 2014 点我吧 沪ICP备12042558号</p>


	<!--底部-->
</body>
<script type="text/javascript">
	
	$("#password").blur(function() {
		if ($("#password").val().length == 0) {
			$("#passwordspan").show();
		} else {
			$("#passwordspan").hide();
		}
	});

	$("#password2").blur(function() {
		if ($("#password2").val().length == 0) {
			$("#repasswordspan").show();
		} else {
			$("#repasswordspan").hide();
		}
	});

	

	$("#registbutton").click(
			function() {
				if ($("#username").val().length == 0
						| $("#password").val().length == 0
						| $("#password2").val().length == 0) {
					alert("参数不能为空");
				} else if ($("#password").val() != $("#password2").val()) {
					alert("两次密码不一致")
				} else {
					$("#registform").submit();
				}
			});
	
	$("#username").blur(function() {
		if ($("#username").val().length == 0) {
			$("#usernamespan").show();
		} else {
			$("#usernamespan").hide();								
				// 调用jquery下的ajax函数
				$.ajax({
					// 发送请求的方式 get post
					type: "post",
					// 目标资源位置
					url: "testusername.action",
					// 默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为
					// false。
					async: true,
					// 需要发送到服务器的数据
					// 请求成功后的回调函数。 data 为服务器返回的数据
					data: {
						username: $("#username").val()
					},
					success: function(message) {
						// 将数据转换成json对象
						var json = jQuery.parseJSON(message);
						// 从json对象中获取对应的参数
						var b = Boolean(json[0].b);
						var messages = json[0].message;
						
						// 设定font标签的初始颜色
						var fontcolor = "green";
						// 如果用户名被使用，则将font标签颜色设置为红色
						if (b) {
							fontcolor = "red";
							$("#registbutton").attr("disabled", true); 
						}else{
							$("#registbutton").attr("disabled", false); 
						}
						// 编写font标签代码
						var fonthtml = "<font color =" + fontcolor
						+ " >" + messages + "</font>";
						// 在 usernamespan 标签中添加 font 标签
						$("#usernamespan").show();
						$("#usernamespan").html(fonthtml);
					},
					error: function(data) {
						alert('出错了');
					}
				});
				}
			});

	
	$("#tel").blur(function() {
		if ($("#tel").val().length == 0) {
			$("#telspan").show();
		} else {
			$("#telspan").hide();
			var telVal = $("#tel").val();
			var re = /^1\d{10}$/
			if (re.test(telVal)) {
				
					$.ajax({
						// 发送请求的方式 get post
						type : "post",
						// 目标资源位置
						url : "testtel.action",
						// 默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为
						// false。
						async : true,
						// 需要发送到服务器的数据
						// 请求成功后的回调函数。 data 为服务器返回的数据
						data : {
							tel : $("#tel").val()
						},
						success : function(message) {
							// 将数据转换成json对象
							var json = jQuery.parseJSON(message);
							// 从json对象中获取对应的参数
							var b = Boolean(json[0].b);
							var messages = json[0].message;
							
							// 设定font标签的初始颜色
							var fontcolor = "green";
							// 如果用户名被使用，则将font标签颜色设置为红色
							if (b) {
								fontcolor = "red";
								$("#registbutton").attr("disabled", true); 
							}else{
								$("#registbutton").attr("disabled", false); 
							}
							// 编写font标签代码
							var fonthtml = "<font color =" + fontcolor
							+ " >" + messages + "</font>";
							// 在 usernamespan 标签中添加 font 标签
							$("#telspan").show();
							$("#telspan").html(fonthtml);
						},
						error : function(data) {
							alert('出错了');
						}																		
					});				
		} else {
			alert("电话号码输入错误");
		}
	}												
		});
</script>

</html>