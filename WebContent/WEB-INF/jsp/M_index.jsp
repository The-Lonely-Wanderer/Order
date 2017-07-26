<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>外卖网【点我吧】</title>
<meta charset="utf-8">
<meta name="author" content="点我吧[admin@dianwoba.com]" />
<meta name="mobile-agent"
	ontent="format=xhtml; url=http://m.dianwoba.com/hangzhou">
<meta name="mobile-agent"
	ontent="format=html5; url=http://m.dianwoba.com/hangzhou">
<meta name="mobile-agent"
	content="format=wml; url=http://m.dianwoba.com/hangzhou">
<meta name="renderer" content="webkit">
<link rel="stylesheet" href="css/3.0/style.css?v=20170331" />
<link rel="stylesheet" href="css/3.0/zxx.lib.min.css?v=20170331" />
<link href="css/bootstrap.css" rel="stylesheet" />
<link href="css/buttons.css" rel="stylesheet" />
<link href="css/flat.css" rel="stylesheet" />
<link href="css/font-awesome.css" rel="stylesheet" />
<!-- 购物车导航栏 -->
<link rel="stylesheet" href="css/nav.css" type="text/css">
<script type="text/javascript" src="js/jquery-1.6.2.min.js"></script>
<script type="text/javascript" src="js/adminpagejs/jquery.js"></script>
<!-- <script type="text/javascript" src="path/sea.js"></script> -->
<style>
body, html {
	background: #fff;
}

#banner {
	width: 150px;
	height: 200px;
	float: left;
	margin-left: 15px;
	margin-top: 10px;
	box-shadow: 0px 0px 1px 2px rgba(0, 0, 0, 0.5);
	cursor: pointer;
	overflow: hidden;
	transition: 0.2s;
	border-radius: 5px;
}

#banner p {
	margin-left: 10px;
}

#banner:hover {
	transform: scale(1.01);
}

.shang {
	float: left;
}

.xia {
	float: right;
}

/* 购物车样式 */
.mydiv {
	line-height: 35px;
	border: 2px solid #0080FF;
	font-size: 25px;
	z-index: 999;
	width: 904px;
	height: 412px;
	left: 34%;
	top: 50%;
	text-align: center;
	margin-left: -152px !important;
	/*FF IE7 该值为本身宽的一半 */
	margin-top: -240px !important;
	/*FF IE7 该值为本身高的一半*/
	margin-top: 0px;
	position: fixed !important;
	/* FF IE7*/
	position: absolute;
	/*IE6*/
}
</style>
</head>

<body>
	<div class="d_seach d_headBox_index">
		<noscript>
			<iframe src="//www.googletagmanager.com/ns.html?id=GTM-MQLLZQ"
				height="0" width="0" style="display: none; visibility: hidden"></iframe>
		</noscript>
		<!--头部模块-->
		<div class="d_head">
			<div class="d_headBox clearfix">
				<a href="" title="点我吧外卖网" class="logo-index db fl"></a>
				<!--logo end-->

				<!--右侧未登录状态-->
				<div class="noLogin clearfix">
					<a href="UserBiao.jsp" rel="nofollow"
						onClick="_gaq.push(['_trackEvent', 'dwb','register']);" title=""
						class="btnOrg40">用户:${t_user.username}</a>
						<!--  <a href="register.jsp"
						rel="nofollow"
						onClick="_gaq.push(['_trackEvent', 'dwb','register']);" title=""
						class="btnOrg40">用户注册</a> <a href="adminlogin.action"
						rel="nofollow"
						onClick="_gaq.push(['_trackEvent', 'dwb','register']);" title=""
						class="btnOrg40">商家登录</a> <a href="login.jsp" rel="nofollow"
						onClick="_gaq.push(['_trackEvent', 'dwb','login']);" title=""
						class="btnOrg40" id="login-url">用户登录</a> -->

				</div>
				<!--noLogin end 未登录-->
			</div>
			<!--d_headBox end-->
		</div>
		<!--d_head end-->

		<div class="d_seachBox d_seachBox_index clearfix">
			<div class="d_seachMain">
				<h2>搜索食物</h2>
				<div class="search-line"></div>
				<div class="d_seachCon clearfix">
					<div class="selectBox citySelect">
						<input type="text" class="" disabled="disabled" value="食物" />
					</div>
					<div class="select-index-line"></div>
					<div class="selectBox addressSelect">
						<!-- 未登录 -->
						<input type="text" class="searchAddress searchInput"
							placeholder="请输入要搜索的食物名" name="shangjianame" id="shangjianame" />
						<ul class="selectList selectListAddress searchResult">

						</ul>
						<input type="submit" id="ban-searchBtn" class="searchBtn" value="" />
					</div>
				</div>

			</div>
		</div>
	</div>

	<div class="d_navBox_index">
		<ul class="f-cb">
			<li><a href="app/app.jsp" title="" target="_blank"
				class="db tc rel">
					<div class="d_navBox_app abs"></div>
					<p class="f16">APP下载</p>
			</a></li>
			<li><a href="dianwoba/dcbbs/index.jsp" title="" target="_blank"
				class="db tc rel">
					<div class="d_navBox_dp abs"></div>
					<p class="f16">点评</p>
			</a></li>
			<li><a href="gift/index.html" title="" target="_blank"
				class="db tc rel">
					<div class="d_navBox_gift abs"></div>
					<p class="f16">礼品</p>
			</a></li>
			<li>
				<!-- 未登录 --> <a
				href="auth/login.do#?http://www.dianwoba.com/ucenter/vip!myVip.do"
				title="" target="_blank" class="db tc rel">
					<div class="d_navBox_vip abs"></div>
					<p class="f16">VIP</p>
			</a>
			</li>
		</ul>
	</div>


	<!-- 食物的排版 -->

	<div class="index-say w980" id="shangpin"
		style="width: 900px; margin: 10px auto; display: block;"></div>

	<!-- 购物车导航栏 -->

	<div class="J-global-toolbar">
		<div class="toolbar-wrap J-wrap">
			<div class="toolbar">
				<div class="toolbar-panels J-panel">
					<div style="visibility: hidden;"
						class="J-content 

toolbar-panel tbar-panel-cart toolbar-animate-out">
						<h3 class="tbar-panel-header J-panel-

header">
							<a href="" class="title"><i></i><em class="title">购物车</em></a> <span
								class="close-panel J-

close"></span>
						</h3>
						<div class="tbar-panel-main">
							<div class="tbar-panel-content 

J-panel-content">
								<div id="J-cart-tips" class="tbar-tipbox hide">
									<div class="tip-

inner">
										<span class="tip-text">还没有登录，登录后商品将被保存</span> <a href="#none"
											class="tip-btn J-login">登录</a>
									</div>
								</div>
								<div id="J-cart-render">
									<div class="tbar-cart-list">
										<div class="tbar-cart-item">

											<div class="jtc-item-promo">

												<em class="promo-tag promo-mz">满赠<i class="arrow"></i></em>

												<div class="promo-text">已购满600元，您可领赠品</div>

											</div>
											<!-- 购物车显示商品的功能 -->
											<div class="jtc-item-goods" id="gou">

												
											</div>


										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="tbar-panel-footer J-panel-

footer">
							<div class="tbar-checkout">
								<div class="jtc-number">

									<strong class="J-count"><b id = "length"></b></strong>件商品
								</div>
								<div class="jtc-sum">
									共 计： <strong class="J-total">¥<b id="zong"></b></strong>
								</div>
								<a class="jtc-btn J-btn" href="#none" target="_blank">去购物车结算</a>
							</div>
						</div>
					</div>

					<div style="visibility: hidden;" data- name="follow"
						class="J-content toolbar-panel tbar-panel-follow">
						<h3 class="tbar-panel-header J-panel-

header">
							<a href="#" target="_blank" class="title"> <i></i> 
							<!-- 商品查询的点击事件 -->
								<em class="title">我的关注</em>
							</a> <span class="close-panel J-close"></span>
						</h3>
						<div class="tbar-panel-main">
							<div class="tbar-panel-content 

J-panel-content">
								<div class="tbar-

tipbox2">
									<div class="tip-

inner">
										<i class="i-loading"></i>
									</div>
								</div>
							</div>
						</div>
						<div class="tbar-panel-footer J-panel-

footer"></div>
					</div>

					<div style="visibility: hidden;"
						class="J-content 

toolbar-panel tbar-panel-history toolbar-animate-in">
						<h3 class="tbar-panel-header J-panel-

header">
							<a href="#" target="_blank" class="title"> <i></i> <em
								class="title">我的足迹</em>
							</a> <span class="close-panel J-

close"></span>
						</h3>
						<div class="tbar-panel-main">
							<div class="tbar-panel-content 

J-panel-content">
								<div class="jt-history-

wrap">
									<ul>
										<li class="jth-item"><a href="#" class="img-wrap"> <img
												src="http://img10.360buyimg.com/n0/s100x100_g9/M03/0C/18/rBEHalCKCk8IAAAAAAD5nbR5

xOAAACfgQENi_wAAPm1269.jpg"
												height="100" width="100" />
										</a> <a class="add-cart-button" href="#" target="_blank">加入购物车</a>

											<a href="#" target="_blank" class="price">￥498.00</a></li>
										<li class="jth-item"><a href="#" class="img-wrap"> <img
												src="http://img10.360buyimg.com/n0/s100x100_g9/M03/0C/18/rBEHalCKCk8IAAAAAAD5nbR5

xOAAACfgQENi_wAAPm1269.jpg"
												height="100" width="100" /></a> <a class="add-cart-button"
											href="#" target="_blank">加入购物车</a> <a href="#"
											target="_blank" class="price">￥498.00</a></li>
									</ul>
									<a href="#" class="history-bottom-more" target="_blank">查看更多足迹商品
										&gt;&gt;</a>
								</div>
							</div>
						</div>
						<div class="tbar-panel-footer J-panel-

footer"></div>
					</div>
				</div>

				<div class="toolbar-header"></div>

				<div class="toolbar-tabs J-tab">
					<div class="toolbar-tab tbar-tab-cart" id="gouwuche">
						<i class="tab-ico"></i> <em class="tab-text ">购物车</em> <span
							class="tab-sub J-count "><b id="daohang"></b></span>
					</div>
					<div class=" toolbar-tab tbar-tab-follow">
						<i class="tab-ico"></i> <em class="tab-text">我的关注</em> <span
							class="tab-sub J-count 

hide">0</span>
					</div>
					<div class=" toolbar-tab tbar-tab-history ">
						<i class="tab-ico"></i> <em class="tab-text">我的足迹</em> <span
							class="tab-sub J-count 

hide">0</span>
					</div>
				</div>

				<div class="toolbar-footer">
					<div class="toolbar-tab tbar-tab-top">
						<a href="#"> <i class="tab-ico  "></i> <em
							class="footer-tab-text">顶部</em>
						</a>

					</div>
					<div class=" toolbar-tab tbar-tab-feedback">
						<a href="#" target="_blank"> <i class="tab-ico"></i> <em
							class="footer-tab-text ">反 馈</em>
						</a>
					</div>
				</div>

				<div class="toolbar-mini"></div>

			</div>

			<div id="J-toolbar-load-hook"></div>

		</div>
	</div>

	<script type="text/javascript" src='js/nav.js'></script>

	<!-- 友情链接 -->

	<div class="index-hot w980">
		<h2 class="tc">最热餐厅</h2>
		<div class="hot-line"></div>
		<div class="index-hot-list rel" id="recommend">
			<div class="index-hot-list-box">
				<div class="index-hot-list-main">
					<ul class="preUl f-cb">
						<li class="preLi fl">
							<ul class="index-hot-ul f-cb f0">
								<a href='/brand/21'>
									<li><img
										src="http://res.dianwoba.com/image//liansuorecommend/ab46e142-2f17-4cee-be1d-e8cfc970ef47.png"
										alt="两岸咖啡" class="db" title="两岸咖啡"></li>
								</a>
								<a href='/brand/174'>
									<li class="vertical"><img
										src="http://res.dianwoba.com/image//liansuorecommend/5ef9cb1a-a8be-43ea-baa4-152ea85e50e7.png"
										alt="新白鹿" class="db" title="新白鹿"></li>
								</a>
								<a href='/brand/5448'>
									<li><img
										src="http://res.dianwoba.com/image//liansuorecommend/d9e1701d-c3ad-4233-9efc-81a6d89b5981.png"
										alt="食之秘" class="db" title="食之秘"></li>
								</a>
								<a href='brand/5295'>
									<li class="vertical"><img
										src="http://res.dianwoba.com/image//liansuorecommend/1dec1f1c-d96e-4a06-ab3c-2bbd22eb52ee.png"
										alt="蓝之莲" class="db" title="蓝之莲"></li>
								</a>
								<a href='brand/77'>
									<li><img
										src="http://res.dianwoba.com/image//liansuorecommend/7aa1c13a-e07e-42db-8f51-9c356642d01a.png"
										alt="老娘舅" class="db" title="老娘舅"></li>
								</a>
								<a href='/brand/3727'>
									<li class="vertical"><img
										src="http://res.dianwoba.com/image//liansuorecommend/52911e4d-73db-451e-b293-2aa7b8bcd0d6.png"
										alt="永和大王" class="db" title="永和大王"></li>
								</a>
								<a href='brand/3'>
									<li><img
										src="http://res.dianwoba.com/image//liansuorecommend/d8f198dc-059b-4964-9866-cce1fddc2aca.png"
										alt="真功夫" class="db" title="真功夫"></li>
								</a>
								<a href='brand/13'>
									<li class="vertical"><img
										src="http://res.dianwoba.com/image//liansuorecommend/3445437a-6c27-4c7d-80c4-fd18e81d2cb3.png"
										alt="一茶一坐" class="db" title="一茶一坐"></li>
								</a>
								<a href='brand/445'>
									<li><img
										src="http://res.dianwoba.com/image//liansuorecommend/50de3e78-5c11-448b-b26c-2512a2c2641b.png"
										alt="名人名家&名家厨房" class="db" title="名人名家&名家厨房"></li>
								</a>
								<a href='brand/61'>
									<li class="vertical"><img
										src="http://res.dianwoba.com/image//liansuorecommend/a28fbb58-4d47-4f08-873d-fefc3e2ce886.png"
										alt="汉堡王" class="db" title="汉堡王"></li>
								</a>
							</ul>
						</li>
						<li class="preLi fl">
							<ul class="index-hot-ul f-cb f0">
								<a href='brand/745'>
									<li><img
										src="http://res.dianwoba.com/image//liansuorecommend/53ad9470-7266-4816-8616-e8f92854e744.png"
										alt="必胜客" class="db" title="必胜客"></li>
								</a>
								<a href='brand/3208'>
									<li class="vertical"><img
										src="http://res.dianwoba.com/image//liansuorecommend/1526d200-9d63-427e-8d15-3b1d7772fa87.png"
										alt="味千拉面" class="db" title="味千拉面"></li>
								</a>
								<a href='brand/3018'>
									<li><img
										src="http://res.dianwoba.com/image//liansuorecommend/c8854f09-1c4f-4936-9df6-f89b3b67d254.png"
										alt="许留山" class="db" title="许留山"></li>
								</a>
								<a href='brand/173'>
									<li class="vertical"><img
										src="http://res.dianwoba.com/image//liansuorecommend/ee322603-8379-4d87-940e-8259b6be86b3.png"
										alt="知味观" class="db" title="知味观"></li>
								</a>
								<a href='brand/2745'>
									<li><img
										src="http://res.dianwoba.com/image//liansuorecommend/d6f895ee-88a3-4adb-b502-c1731d39f0df.png"
										alt="张生记" class="db" title="张生记"></li>
								</a>
								<a href='brand/380'>
									<li class="vertical"><img
										src="http://res.dianwoba.com/image//liansuorecommend/bf40445e-4d5e-42b3-ae2b-d8e673e0cb0a.png"
										alt="五芳斋" class="db" title="五芳斋"></li>
								</a>
								<a href='brand/161'>
									<li><img
										src="http://res.dianwoba.com/image//liansuorecommend/20b36434-9e0c-4753-baac-4f60a5f6cbf1.png"
										alt="杭州新开元大酒店" class="db" title="杭州新开元大酒店"></li>
								</a>
								<a href='brand/5162'>
									<li class="vertical"><img
										src="http://res.dianwoba.com/image//liansuorecommend/6cee5160-25e1-4c9c-8dd3-5fa4589420b8.png"
										alt="童年小筑" class="db" title="童年小筑"></li>
								</a>
								<a href='brand/3192'>
									<li><img
										src="http://res.dianwoba.com/image//liansuorecommend/27486d42-9356-40af-be01-62db6ef84053.png"
										alt="咬不得高祖生煎" class="db" title="咬不得高祖生煎"></li>
								</a>
								<a href='brand/3860'>
									<li class="vertical"><img
										src="http://res.dianwoba.com/image//liansuorecommend/32800c40-b5e5-4f43-acf1-caa5bbab4c71.png"
										alt="蘭芳園" class="db" title="蘭芳園"></li>
								</a>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div class="say-row-index row-left-index poi abs" id="pre"></div>
			<div class="say-row-index row-right-index poi abs" id="next"></div>
		</div>
	</div>

	<!--底部-->
	<div id='webFooter'>
		<div class='webMainModel clearfix'>
			<div class="logo-foot fl"></div>

			<div class="footerModel-box f-cb fl">
				<div class="footerModel">
					<ul class="footerModel-list">
						<li><a href="about/about_us.jsp" title="网站介绍" rel="nofollow">网站介绍</a>
						</li>
						<li><a href="help/frequently_asked_questions.jsp#cjwt"
							title="常见问题" rel="nofollow">常见问题</a></li>
						<li><a href="all_somo" title="网站地图">网站地图</a></li>
					</ul>
				</div>
				<div class="footerModel" id='footer-about'>
					<ul class="footerModel-list">
						<li><a href="about/about_us.jsp#lxwm" title="联系我们"
							rel="nofollow">联系我们</a></li>
						<li><a href="about/careers.jsp" title="招贤纳士" rel="nofollow">招贤纳士</a>
						</li>
						<li><a href="about/win_win_cooperation.jsp" title="商家加盟"
							rel="nofollow">商家加盟</a></li>
					</ul>
				</div>
			</div>
			<div class="foot-app-down">
				<img src="images/web/4.0/foot-app-ewm@2x.jpg" alt="" class="fl db"
					width="91" height="91">
				<div class="fl pl5">
					<h3>下载手机版</h3>
					<p class="pt10">品质外卖，点我即达</p>
					<a
						href="https://itunes.apple.com/us/app/dian-wo-ba-wai-mai-wang/id592686847?ls=1&mt=8"
						class="dib mt10"> <img src="images/web/4.0/foot-apple@2x.jpg"
						alt="" width="60" height="23">
					</a> <a
						href="http://download.dianwoba.com:8080/yujw/android/dianwoba.apk"
						class="dib mt10"> <img
						src="images/web/4.0/foot-android@2x.jpg" alt="" width="60"
						height="23">
					</a>
				</div>
			</div>
			<div class="foot-kf fr pt10">
				<a class="foot-kf-btn poi rel db" href="auth/login.do"></a>
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

	<div class="locationLayer" style="display: none;">
		<div class="layerBox locationBox">
			<h2 class="clearfix">
				<div class="selectBox citySelect">
					<input type="text" value="杭州" disabled="disabled" class="">
					<a class="dropDown_iconBox" title="下拉" href="###"><span
						class="dropDown_icon"></span></a>
					<ul class="selectList selectListCity" id="map_city">
						<li><a class="link selectCityName" title="" cityId=1
							href="###">杭州</a></li>
						<li><a class="link " title="" cityId=3 href="###">上海</a></li>
					</ul>
				</div>
				<div class="selectBox addressSelect">
					<input type="text" placeholder="请输入您所在的位置（写字楼、小区或街道）" value=""
						class="searchInput2" id="mapInput"> <a
						href="javascript:void(0)" class="seach_btn" id="map_seach_btn"><img
						src="images/web/3.0/map_seachBtn.png" alt="搜索"></a>
					<ul class="selectList selectListAddress searchResult">
						<li><a class="link" title="" href="###">文晖路22号现代置业大厦东楼312室</a></li>
						<li><a class="link" title="" href="###">白石巷318号灯塔发展大厦北楼15楼</a></li>
					</ul>
				</div>
				<a href="javascript:void(0)" title="" class="locationClosed"></a>
			</h2>
			<div class="mapBox">
				<div class="addList">
					<div class="loadCon" style="display: none;">
						<h3>
							共<em>20</em>个地址
						</h3>
						<div id="addList">
							<ul></ul>
						</div>
						<div class="noResult">
							<dl>
								<dt>未找到相关地址：</dt>
								<dd>1.请检查拼写是否正确</dd>
								<dd>2.请尝试其它关键字</dd>
								<dd>3.点击地图直接定位</dd>
							</dl>
						</div>
						<!--noResult end-->
					</div>
					<!--loadCon end-->
					<div class="loadGif">
						<img src="/images/web/3.0/loading32.gif" alt="">
						<p>搜索中...</p>
					</div>
				</div>
				<div class="mapTips clearfix" style="display: none;">
					<p>点击地图可以直接定位</p>
					<a href="javascript:void(0)" title="" id="mapTipsClosed">×</a>
				</div>
				<a href="###" title="" class="backBtn" style="display: none;"><span
					class="arrow arrowB"></span></a>
				<div class="mapCon" id="markPointMap"></div>
			</div>
		</div>
		<!--locationBox end-->
	</div>
	<!--locationLayer end-->

	<!-- 公用JS -->
	<script src="js/2.1/base/googleAnaly.js"></script>

	<a key="5448c113efbfb00c859d96ab" logo_size="83x30"
		logo_type="realname" href="http://www.anquan.org"
		style="display: none"></a>
	<!-- js -->
	<script src="js/3.0/vendor/layer/sea.js"></script>
	<!-- 引入seajs -->
	<script>
		seajs
				.config({
					base : 'js/3.0/vendor/',
					alias : {
						'jquery' : 'jquery.js',
						'layer' : 'layer/layer.js',
						'bdmap' : 'http://api.map.baidu.com/getscript?v=2.0&ak=80c76ebcda10849b96c11a47151c99ef&services=&t=20140813160231'
					},
					paths : {
						'path' : 'js/3.0/module'
					},
					charset : 'gbk',
					preload : [ 'jquery' ],
					map : [ /^(.*\.(?:css|js))(.*)$/i, '$1?v=20170331' ]
				})
	</script>
	<!-- 引入seajs配置文件 -->
	<script>
		seajs.use([ 'jquery', 'path/layerCall', 'path/placeholder',
				'path/personalList', 'path/tabMask', 'path/indexSelect',
				'path/tabLight', 'path/mapSearch', 'path/searchaddrtip',
				'path/browserVersion', 'path/sayIndex' ], function(jquery,
				layerCall) {
			//清明节背景
			var sysDateD = '2017-07-17';
			if (sysDateD >= "2015-04-04" && sysDateD <= "2015-04-06") {
				$(".d_seach").css({
					"background-color" : "#dfe7cf",
					"background-image" : "url(/images/web/3.0/qingmin.jpg)"
				})
			}
			;

			//新增地址清空input
			function getQueryString(name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
				var r = window.location.search.substr(1).match(reg);
				if (r != null)
					return unescape(r[2]);
				return null;
			}
			if (getQueryString("clearAddress") == 1) {
				$(".searchAddress").attr({
					"value" : "",
					"placeholder" : "请输入送餐地址（写字楼，小区或街道）"
				}).focus();
				$(".selectList").hide();
			}
			;
		});
	</script>
	<!-- 调用启动模块 -->

	<script src="js/Ajax/SousuoAjax.js"></script>
	<script src="js/Ajax/ShoppAjax.js"></script>
</body>
<!-- 方便开发这快速定位到当前页面对应的jsp文件, 通过view source -->
<!--/WEB-INF/view/home-index.jsp-->

</html>