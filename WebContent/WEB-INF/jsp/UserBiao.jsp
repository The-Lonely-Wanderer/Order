<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">


<html>

<head>
<title>外卖网【点我吧】</title>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/userbiaojs/ajax.js"></script>
<meta charset="utf-8" />
<meta name="author" content="点我吧[admin@dianwoba.com]" />
<meta name="description"
	content="杭州外卖网，上海外卖网上订餐，网上叫外卖。点我吧是一家专业的外卖网，汇集各大品质连锁餐饮品牌，为用户提供网上订餐、超市、跑腿等服务。现已开通杭州、上海等城市。品质外卖，点我吧！" />
<meta name="keywords" content="网上点餐外卖 杭州外卖,杭州外卖网,杭州外卖电话" />
<link rel="stylesheet" href="css/3.0/style.css?v=" />
<link rel="stylesheet" href="css/2.1/base.css" />
<link rel="stylesheet" href="css/2.1/model.css" />
<link rel="stylesheet" href="css/2.1/ucenter.css" />
<link rel="stylesheet" href="css/4.0/ucenter.css" />
<link rel="stylesheet" href="css/3.0/zxx.lib.min.css" />
<style type="text/css">
</style>
</head>

<body>
	<!--头部-->

	<noscript>
		<iframe src="//www.googletagmanager.com/ns.html?id=GTM-MQLLZQ"
			height="0" width="0" style="display: none; visibility: hidden"></iframe>
	</noscript>
	<!-- End Google Tag Manager -->

	<!--头部模块-->
	<div class="d_head d_head_40">
		<div class="d_headBox clearfix">
			<a href="Index.action" rel="nofollow" title="首页" class="btnOrg40">首页</a>

			<!--右侧已登录状态-->
			<div class="inLogin clearfix">
				<div class="uesNameBox">
					<a href="/ucenter/home!index.do" title="" class="uesName"
						id="uesName">${t_user.username}</a> <span class="triangle_icon"></span>

					<ul class="useList" style="display: none;" id="personalListList">
						<li><a href="/ucenter/order!hotel.do" title="">我的订单</a></li>
						<li><a href="/ucenter/profile!address.do" title="">我的地址</a></li>
						<li><a href="/ucenter/home!cmt.do" title="">我的点评</a></li>
						<li><a href="/j_spring_security_logout" title="">退出</a></li>
					</ul>
				</div>
				<a> <span class="vm f14">订单监控</span>
				</a>
			</div>
			<!--noLogin end 已登录-->

		</div>
		<!--d_headBox end-->
	</div>
	<!--d_head end-->


	<!--main-->
	<div id='u-giftInt'>
		<div class="webMainModel clearfix">
			<!--左侧我的账户导航-->

			<!--账户模块-->

			<!--账户模块-->
			<div class="user-userAccntMoudle" id='u-userNav'>
				<dl>

					<dd>
						<ul>
							<li class="ucenter-moudle"><a href="userbiao.action"
								class="db f14" id="cateId1">基本资料</a></li>
							<li class="ucenter-moudle"><a href="myorder.action"
								class="db f14" id="cateId3">我的订单</a></li>
							<li class="ucenter-moudle"><a href="/ucenter/home!cmt.do"
								class="db f14" id="cateId9">我的点评</a></li>
						</ul>
					</dd>
				</dl>
			</div>


			<!--右侧信息-->
			<div class='u-index'>
				<!--用户信息-->
				<div class='u-index-userInfoWarp u-index-userInfoWarpwBg'>
					<!--右侧的信息-->
					<div class="u-index-userInfo" id="user-panel">
						<p class="u-index-loginInfo clearfix">
							<b style="width: 500px;"><i class="u-index-uname">${t_user.username}</i>

							</b> <b style="float: right; width: 230px;">上一次登录时间： <i>${t_user.loginTime}</i>

							</b>
						</p>
						<div class='u-baseInfo'>
							<h2 class='moudleH2'>基本资料</h2>
							<div class='u-base-msn'>
								<!--基本资料-->
								<div class="u-baseAllInfo clearfix">

									<form class="fromMiddle u-baseTxtInfo"
										action="updateuser.action" method="post" id="updateuserform">

										<ul class='u-base-msnList'>
										<li>
											<input id="userid" name="id" value="${t_user.id}" style="display: none"></input>
											</li>
											<li><label>手机：</label> <input type="text"
												value="${t_user.tel}" id="tel" name="tel"
												readonly="readonly" /></li>
											<li><label>昵称：</label> <input value="${t_user.username}"
												type="text" maxlength="32" id="username" name="username"
												readonly="readonly" /></li>
											<li><label>真实姓名</label> <input
												value="${t_user.realname}" type="text" id="realname"
												name="realname" readonly="readonly" /></li>
											<li><label>性别：</label> <input value="${t_user.sex}"
												type="text" id="sex" name="sex" readonly="readonly" /></li>
											<li><label>密码：</label> <input value="${t_user.password}"
												type="password" id="password" name="password"
												readonly="readonly" /></li>
												<li><span>${message}</span></li>
											<li><input type="button" value="修改信息" id="updatebutton" />
											<input type="button" value="提交" id="updatebutton1"
												style="display: none" />											
											</li>																						
										</ul>
								</div>
								</form>
								<!--修改密码弹出窗口-->
								<form action="updatepassword.action" method="post"
									id="updatepasswordform"
									style="display: none; border: 1px solid red;">
									<div class="u-base-bindPhone" id="updatepwd">
										<h2 class='u-h2'>
											修改密码<span class='u-close'></span>
										</h2>
										<ul class='u-base-msnList fromMiddle'>

											<li><label>当前密码：</label> <input type="password"
												id="oldpwd" name="oldpwd" index='0' /> <span
												id="passwordspan"></span>
												<p class='tip'></p></li>
											<li><label>新密码：</label> <input type="password"
												type="password" name="pwdinput" id="pwdinput" index='1' />
												<p class='tip' id="pwddiv"></p></li>
											<li><label>确认密码：</label> <input type="password"
												type="password" name="pwd2input" id="pwd2input" index='2' />
												<p class='tip' id="pwd2div"></p></li>
											<li><input type="button" value="提交" id="addnewpassword"">
											</li>
										</ul>

									</div>
								</form>
							</div>

							<!--保存的配送地址-->
							<div class="u-index-moudleWarp">
								<h2 class="moudleH2 clearfix">
									配送地址<span class="u-index-txtTip"></span>
								</h2>
								<div class="tableData" id="addr-list">
									<div class="loading">
										<input type="text" value="${t_user.address}" />
										<!-- <input
											type="button"
											style="width: 30px; height: 30px; line-height: 30px; font-size: 2em; cursor: pointer;"
											value="+" id="add"> -->
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				<!--底部-->

				<!-- 方便开发这快速定位到当前页面对应的jsp文件, 通过view source -->
				<!--/WEB-INF/view/ucenter/home-index.jsp-->

				<!--底部-->
				<div id='webFooter'>
					<div class='webMainModel clearfix'>
						<div class="logo-foot fl"></div>

						<div class="footerModel-box f-cb fl">
							<div class="footerModel">
								<ul class="footerModel-list">
									<li><a href="/about/about_us.jsp" title="网站介绍"
										rel="nofollow">网站介绍</a></li>
									<li><a href="/help/frequently_asked_questions.jsp#cjwt"
										title="常见问题" rel="nofollow">常见问题</a></li>
									<li><a href="/all_somo" title="网站地图">网站地图</a></li>
								</ul>
							</div>
							<div class="footerModel" id='footer-about'>
								<ul class="footerModel-list">
									<li><a href="/about/about_us.jsp#lxwm" title="联系我们"
										rel="nofollow">联系我们</a></li>
									<li><a href="/about/careers.jsp" title="招贤纳士"
										rel="nofollow">招贤纳士</a></li>
									<li><a href="/about/win_win_cooperation.jsp" title="商家加盟"
										rel="nofollow">商家加盟</a></li>
								</ul>
							</div>
						</div>
						<div class="foot-app-down">
							<img src="images/web/4.0/foot-app-ewm@2x.jpg" alt=""
								class="fl db" width="91" height="91">
							<div class="fl pl5">
								<h3>下载手机版</h3>
								<p class="pt10">品质外卖，点我即达</p>
								<a
									href="https://itunes.apple.com/us/app/dian-wo-ba-wai-mai-wang/id592686847?ls=1&mt=8"
									class="dib mt10"> <img
									src="images/web/4.0/foot-apple@2x.jpg" alt="" width="60"
									height="23">
								</a> <a
									href="http://download.dianwoba.com:8080/yujw/android/dianwoba.apk"
									class="dib mt10"> <img
									src="images/web/4.0/foot-android@2x.jpg" alt="" width="60"
									height="23">
								</a>
							</div>
						</div>
						<div class="foot-kf fr pt10">

							<a class="foot-kf-btn poi rel db" target="_blank"
								href="http://a1.7x24cc.com/phone_webChat.html?accountId=N000000007215&chatId=dwbonline-313639e0-fbc3-11e5-b323-fd2b8fc9e209&customerId=4015400">

							</a>
							<div class="pt15">
								<span class="dib vm">关注我们：</span> <a
									href="http://weibo.com/dianwoba" class="dib vm foot-sina ml15"></a>
								<a href="javascript:void(0);" class="dib vm foot-wx ml15 abs">
									<div class="foot-kf-ewm abs dn"></div>
								</a>
							</div>
						</div>
					</div>

					<!--网站版权-->
					<p class="webMainModel footer-Copyright">
						&copy; 2014 点我吧 <a style="color: #c1c1c1" target="_blank"
							href="https://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&entyId=1nghw1jvl3cb40jgdejmclir2q16u252lqkzw090hnkd0qgwgw">沪ICP备12042558号</a>
					</p>
					<p class="tons" style="text-align: center">
						<a target="_blank"
							href="http://www.pingpinganan.gov.cn/web/index.aspx"
							rel="nofollow"> <img src="/images/web/cyberpolice1.gif"
							width='53' height='53' />
						</a> <a target="_blank"
							href="http://www.pingpinganan.gov.cn/web/index.aspx"
							rel="nofollow"> <img src="/images/web/cyberpolice2.gif"
							width='53' height='53' />
						</a> <a target="_blank"
							href="https://www.sgs.gov.cn/lz/licenseLink.do?method=licenceView&entyId=1nghw1jvl3cb40jgdejmclir2q16u252lqkzw090hnkd0qgwgw"
							rel="nofollow"> <img src="/images/web/zjgs.png" width='62'
							height='74' />
						</a>

					</p>
					<div style="text-align: center; padding: 0 0 20px 0;">
						<a target="_blank"
							href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010302002657"
							style="display: inline-block; text-decoration: none; height: 20px; line-height: 20px;"><img
							src="images/web/zjgs.png" style="float: left;" />
							<p
								style="float: left; height: 20px; line-height: 20px; margin: 0px 0px 0px 5px; color: #939393;">浙公网安备
								33010302002657号</p> </a>
					</div>
				</div>
</body>

<script type="text/javascript">
	$("#updatebutton").click(function() {
		document.getElementById("tel").style.backgroundColor = "red";
		document.getElementById("username").style.backgroundColor = "red";
		document.getElementById("sex").style.backgroundColor = "red";
		document.getElementById("password").style.backgroundColor = "red";
		document.getElementById("realname").style.backgroundColor = "red";
		document.getElementById("tel").readOnly = false;
		document.getElementById("username").readOnly = false;
		document.getElementById("sex").readOnly = false;
		$("#updatebutton1").css("display", "block")	
		$("#updatebutton").css("display", "none")
		$("#password").click(function() {
			$("#updatepasswordform").css("display", "block")
		});
		document.getElementById("realname").readOnly = false;
	});

	$("#oldpwd").blur(function() {
		$.ajax({
			// 发送请求的方式 get post
			type : "post",
			// 目标资源位置
			url : "testpassword.action",
			// 默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为
			// false。
			async : true,
			// 需要发送到服务器的数据
			// 请求成功后的回调函数。 data 为服务器返回的数据
			data : {
				tel : $("#tel").val(),

				password : $("#oldpwd").val()
			},
			success : function(message) {
				// 将数据转换成json对象
				var json = jQuery.parseJSON(message);
				// 从json对象中获取对应的参数
				var messages = json[0].message;
				// 在 usernamespan 标签中添加 font 标签
				$("#passwordspan").show();
				$("#passwordspan").html(messages);
			},
			error : function(data) {
				alert('出错了');
			}
		});

	});
	$("#addnewpassword").click(
			function() {
				if ($("#oldpwd").val().length == 0
						| $("#pwdinput").val().length == 0
						| $("#pwd2input").val().length == 0) {
					alert("参数不能为空");
				} else if ($("#pwdinput").val() != $("#pwd2input").val()) {
					alert("两次密码不一致")
				} else {

					 var value=document.getElementById("pwdinput").value;
					    document.getElementById("password").value=value;					
					$("#updatepasswordform").css("display", "none")									
				}
			});
	$("#updatebutton1").click(function() {
		$("#updateuserform").submit();

	});
</script>


</html>