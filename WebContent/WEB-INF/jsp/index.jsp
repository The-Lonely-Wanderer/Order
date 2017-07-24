<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<link rel="stylesheet" type="text/css" href="easyui_1.4.4/themes/bootstrap/easyui.css" />
		<link rel="stylesheet" type="text/css" href="easyui_1.4.4/themes/icon.css" />
		<link rel="stylesheet" type="text/css" href="css/adminpagecss/default.css" />
		<link rel="stylesheet" type="text/css" href="css/adminpagecss/css.css" />
		<script type="text/javascript" src="easyui_1.4.4/jquery.min.js"></script>
		<script type="text/javascript" src="easyui_1.4.4/jquery.easyui.min.js"></script>
		<script type="text/javascript" src="easyui_1.4.4/jquery.edatagrid.js"></script>
		<script type="text/javascript" src="easyui_1.4.4/locale/easyui-lang-zh_CN.js"></script>
		<script src="js/adminpagejs/common.js" type="text/javascript" charset="utf-8"></script>
		<script src="js/adminpagejs/js.js" type="text/javascript" charset="utf-8"></script>
		<title>外卖网【点我吧】</title>	
</head>
<body>
		<div class="easyui-layout" fit="true">
			<div id="header" data-options="region:'north'">
				<h1 class="header-welcome">商家操作平台</h1>
				<span class="header-yuan">欢迎:<a class="header-acolor" href="">${t_admins.adminname}</a><a class="header-abut" id="logoff">注销</a></span>
			</div>
			<div id="seidmenu" data-options="region:'west',split:false" style="overflow:auto;">
				<ul>
					<li class="seidmenu-sub">
						<a class="seidmenu-sub-a" href="javascript:addTab('管理员列表','selectalladminservlet.action');">管理员列表</a>
					</li>
					<li class="seidmenu-sub">
						<a id="membermanage" class="seidmenu-sub-a" href="javascript:addTab('会员管理','member.action')">会员管理</a>
					</li>
					<li id="kind" class="seidmenu-sub">
						<a class="seidmenu-sub-a" href="javascript:addTab('菜品种类管理','kind.action')">菜品种类管理</a>
					</li>
					<li class="seidmenu-sub">
						<a id="dishmanager" class="seidmenu-sub-a" href="javascript:addTab('菜品管理','dishmanager.action')">菜品管理</a>
					</li>
					<li class="seidmenu-sub">
						<a class="seidmenu-sub-a" href="javascript:addTab('留言管理','lygl.action')">留言管理</a>
					</li>
					<li class="seidmenu-sub">
						<a class="seidmenu-sub-a" href="javascript:addTab('公告管理','index-notice.action')">公告管理</a>
					</li>
					<li class="seidmenu-sub">
						<a class="seidmenu-sub-a" href="javascript:addTab('订单管理','OrderManager.action')">订单管理</a>
					</li>
					<li class="seidmenu-sub">
						<a class="seidmenu-sub-a" href="javascript:addTab('管理员邮箱','index-admineamil.action')">管理员信箱</a>
					</li>
					
				</ul>
			</div>
			<div data-options="region:'center'">
				<div id="_1_tabs" class="easyui-tabs" data-options="iconCls:'icon-ok',fit:true" style="min-width:1000px;">
					<div class="content" title="首页">
						<p style="color:orangered;font-size: 30px;text-align: center;">欢迎</p>
					</div>
				</div>
			</div>
		</div>
		<script type="text/javascript">
			$("#logoff").click(function(){
				if(confirm("确定要退出吗？")){
					location.href="index.jsp"
				}
			});
		</script>
	</body>
</html>