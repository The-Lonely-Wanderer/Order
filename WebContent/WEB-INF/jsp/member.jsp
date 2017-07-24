<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
<title>会员管理</title>
<link rel="stylesheet" type="text/css"
	href="easyui_1.4.4/themes/bootstrap/easyui.css" />
<link rel="stylesheet" type="text/css"
	href="easyui_1.4.4/themes/icon.css" />
<link rel="stylesheet" type="text/css"
	href="css/adminpagecss/default.css" />
<link rel="stylesheet" type="text/css" href="css/adminpagecss/css.css" />
<script type="text/javascript" src="js/adminpagejs/jquery.js"></script>
<script type="text/javascript" src="easyui_1.4.4/jquery.min.js"></script>
<script type="text/javascript" src="easyui_1.4.4/jquery.easyui.min.js"></script>
<script type="text/javascript" src="easyui_1.4.4/jquery.edatagrid.js"></script>
<script type="text/javascript"
	src="easyui_1.4.4/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="js/Ajax/memberChange.js"></script>
</head>
<body>
	<div class="content">
		<div class="content-foot">
			<div class="content-sub">
				<form id="selform" action="selects.action" method="post" >
					<label class="c-label">关键字：</label> 
					<input type="text" class="c-text" placeholder="请输入用戶真實姓名" id="query" name=realname /> 
					<input type="button" class="c-but" value="查询" id="querybutton" name="querybutton" />
					<input type="button" class="c-but" value="返回" onclick="javascript:history.back(-1);"/>
					共有0${size}条查询结果

				</form>
			</div>${message}
			<div class="content-tab">
				<table id="admintable">
					<tr>
						<th>编号</th>
						<th>会员名称</th>
						<th>会员真实姓名</th>
						<th>性别</th>
						<th>电话</th>
						<th>地址</th>
						<!-- 						<th>注册时间</th> -->
						<th>编辑</th>
					</tr>
					<c:forEach items="${userlist}" var="userlist">
						<tr class="tabl">
							<td title="${userlist.id}">${userlist.id}</td>
							<td>${userlist.username}</td>
							<td>${userlist.realname}</td>
							<td>${userlist.sex}</td>
							<td>${userlist.tel}</td>
							<td title="${userlist.address}">${userlist.address}</td>
							<%-- 							<td style="font-size: 8px">${userlist.createTime}</td> --%>
							<td><span> <a class="c-taba" href="#"
									onclick="tanchuang('${userlist.id}')">修改</a>
							</span>/ <span> <a class="c-taba" href="#"
									onclick="deletes('${userlist.id}')">删除</a>
							</span></td>
						</tr>
					</c:forEach>
				</table>
			</div>
		</div>
		<div id="win1" class="easyui-dialog" title="修改会员信息" closed="true"
			modal="true"
			style="width: 400px; height: 300px; background: #fff; overflow: hidden; z-index: 3">
			<form action="updatememberaction.action" method="post"
				id="updatememberform">
				<input type="text" id="resiveid" name="id" style="display: none;" />
				<table style="margin: auto; line-height: 45px;">
					<tr>
						<td><label>用户：</label></td>
						<td><input type="text" id="usernames" class="tdp"
							name="usernames" placeholder="请输入姓名" /></td>
					</tr>
					<tr>
						<td><label>密码：</label></td>
						<td><input type="password" id="passwords" class="tdp"
							name="passwords" placeholder="请输入密码" /></td>
					</tr>
					<tr>
						<td><label>电话：</label></td>
						<td><input type="text" id="tel" class="tdp" name="tel"
							placeholder="请输入电话" /></td>
					</tr>

					<tr>
						<td><label>地址：</label></td>
						<td><input type="text" id="address" class="tdp"
							name="address" placeholder="请输入新地址" /></td>
					</tr>

				</table>
				<div class="w-index" style="text-align: center; margin-top: 20px;">
					<input class="w-but1" type="button" id="resivesubmitbutton"
						value="提交" /> <input id="resivereturn" class="w-but1"
						type="button" value="返回" />
				</div>
			</form>
		</div>
		<div id="win2" class="easyui-dialog" title="查詢提示!" closed="true" modal="true" style="width: 400px; height:150px; background: #fff; overflow: hidden; z-index: 3">
			<p style="font-size:20px;width:400px;height:40px;margin:35px auto;text-align:center;">請輸入需要查詢的用戶真實姓名!</p>
		</div>
	</div>
</body>
<script type="text/javascript">
	$("#resivereturn").click(function() {
		$("#win1").dialog('close');
	});
	function tanchuang(id) {
		$("#win1").dialog('open');
		$("#resivesubmitbutton")
				.click(
						function() {
							if ($("#usernames").val().length == 0
									|| $("#passwords").val().length == 0
							// 							
							) {
								alert("请填全参数");
							} else {
								// 								$("#resiveid").val(id);
								$("#win1").dialog('close');
								// 								$("#updatememberform").submit();
								// 								管理員更新換成會員更新
								$.ajax({
											type : "post",
											url : "updatememberaction.action",
											async : true,
											data : {
												username : $("#usernames").val(),
												password : $("#passwords").val(),
												tel : $("#tel").val(),
												address : $("#address").val(),
												id : id
											},
											success : function(userlist) {
												var json = jQuery.parseJSON(userlist);
												var userlists = json[0].userlist;
												str = "";
												for ( var i in userlists) {
													str += "<tr class='tabl'><td title="+userlists[i].id+">"
															+ userlists[i].id
															+ "</td><td>"
															+ userlists[i].username
															+ "</td><td>"
															+ userlists[i].realname
															+ "</td><td>"
															+ userlists[i].sex
															+ "</td><td>"
															+ userlists[i].tel
															+ "</td><td>"
															+ userlists[i].address
															+ "</td><td><span> <a class='c-taba' href='#' onclick='tanchuang('"
															+ userlists[i].id
															+ "')'>修改</a></span>/ <span> <a class='c-taba' href='#' onclick='tanchuang('"
															+ userlists[i].id
															+ "')'>删除</a></span></td></tr>";
												}
												$(".content-tab") .html("<table id='admintable'><tr><th>编号</th><th>会员名称</th><th>会员真实姓名</th><th>性别</th><th>电话</th><th>地址</th><th>编辑</th></tr>"
																		+ str
																		+ "</table>");
											}
										});
							}
						});

	}
	
	
	
	function deletes(id) {
		if (confirm("确定删除该用户吗？")) {
			$.ajax({
						type : "post",
						url : "deleuser.action",
						async : true,
						data : {
							id : id
						},
						success : function(userlist) {
							var json = jQuery.parseJSON(userlist);
							var userlists = json[0].userlist;
							str = "";
							for ( var i in userlists) {
								str += "<tr class='tabl'><td title='"+userlists[i].id+"'>"
										+ userlists[i].id
										+ "</td><td>"
										+ userlists[i].username
										+ "</td><td>"
										+ userlists[i].realname
										+ "</td><td>"
										+ userlists[i].sex
										+ "</td><td>"
										+ userlists[i].tel
										+ "</td><td>"
										+ userlists[i].address
										+ "</td><td><span> <a class='c-taba' href='#' onclick='tanchuang('"
										+ userlists[i].id
										+ "')'>修改</a></span>/ <span> <a class='c-taba' href='#' onclick='tanchuang('"
										+ userlists[i].id
										+ "')'>删除</a></span></td></tr>";
							}
							$(".content-tab")
									.html("<table id='admintable'><tr><th>编号</th><th>会员名称</th><th>会员真实姓名</th><th>性别</th><th>电话</th><th>地址</th><th>编辑</th></tr>"
													+ str + "</table>");
						}
					});
		}

	}
	$("#querybutton").click(function(){
		if($("#query").val()!=""){
			$("#selform").submit();
		}else{
			$("#win2").dialog("open");
		}
	});
</script>
</html>