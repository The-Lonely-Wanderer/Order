<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css"
	href="easyui_1.4.4/themes/bootstrap/easyui.css" />
<link rel="stylesheet" type="text/css"
	href="easyui_1.4.4/themes/icon.css" />
<link rel="stylesheet" type="text/css"
	href="css/adminpagecss/default.css" />
<link rel="stylesheet" type="text/css" href="css/adminpagecss/css.css" />
<script type="text/javascript" src="easyui_1.4.4/jquery.min.js"></script>
<script type="text/javascript" src="easyui_1.4.4/jquery.easyui.min.js"></script>
<script type="text/javascript" src="easyui_1.4.4/jquery.edatagrid.js"></script>
<script type="text/javascript"
	src="easyui_1.4.4/locale/easyui-lang-zh_CN.js"></script>
<script src="js/adminpagejs/js.js" type="text/javascript"
	charset="utf-8"></script>

<title>菜品种类列表</title>
</head>
<body>
	<div class="content">
		<div class="content-headtab">
			<p>
				菜品种类列表 <span> <a href="#" class="c-tianjia"
					onclick="javascript:$('#tj-cpzl').dialog('open')">[添加菜品种类]</a>
					<div id="tj-cpzl" class="easyui-dialog" modal="true"
						closable="false" closed="true" title="添加菜品种类信息"
						style="width: 400px; height: 300px; background: #fff; overflow: hidden;">
						<form id="addcpzl" action="addcatelogservlet" method="post">
							<div class="w-index">
								<label class="w-label-1">菜品种类：</label> <input class="w-itext"
									id="tjcpzlinfo" type="text" name="cateloginfo"
									placeholder="请输入菜品种类信息" />
							</div>
							<div class="w-index">
								<label class="w-label-1">菜品种类信息：</label> <input class="w-itext"
									id="tjcpzlname" type="text" name="catelogname"
									placeholder="请输入菜品种类" />
							</div>
							<div class="w-index" style="text-align: center; margin-top: 30px;">
								<form>
									<input class="w-but1" type="button" value="提交" id="subbutcpzl" />
									<input class="w-but1" type="button" onclick="d_close_tj()"
										value="返回" />
								</form>

							</div>
						</form>
					</div>
				</span>
			</p>
			<p>
				当前共计<span>0</span>个账户，分为4页 <span class="content-tabye">转到： <select
					class="content-select">
						<option>1/4</option>
						<option>2/4</option>
						<option>3/4</option>
						<option>4/4</option>
				</select>
				</span>
			</p>
		</div>
		<div class="content-foot">
			<div class="content-sub">
				<form action="selectcp.action" method="post">
					<label class="c-label">关键字：</label> 
					<input type="text" class="c-text" placeholder="请输入关键字" id="query" name="catelogname" />
					<input type="button" class="c-but" value="查询" id="querybutton" name="query" />
					<input type="button" class="c-but" value="返回" onclick="javascript:history.back(-1);"/>
					共有0${size}条查询结果
				</form>
			</div>
			<div class="content-tab">
				<table>
					<tr>
						<th width=22%>编号</th>
						<th width=22%>菜品种类</th>
						<th width=22%>菜品种类信息</th>
						<th width=12%>操作</th>
					</tr>
					<c:forEach items="${cateloglist}" var="catelog">
						<tr class="tabl" id="${catelog.id}">
							<td>${catelog.id}</td>
							<td>${catelog.catelogName}</td>
							<td title="${catelog.catelogInfo}">${catelog.catelogInfo}</td>
							<td><span> <a class="c-taba" href="#"
									onclick="tanchuang('${catelog.id}')">修改</a> / <a class="c-taba"
									onclick="remove('${catelog.id}')">删除</a>
							</span></td>
						</tr>
					</c:forEach>
				</table>
			</div>
			<div id="xg-cpzl" class="easyui-dialog" modal="true" closable="false"
				closed="true" title="修改菜品类别信息"
				style="width: 400px; height: 300px; background: #fff; overflow: hidden;">

				<div class="w-index">
					<label class="w-label-1">菜品种类：</label> <input class="w-itext"
						type="text" name="catelogname" id="xgcpzlinfo"
						placeholder="请输入菜品种类" />
				</div>
				<div class="w-index">
					<label class="w-label-1">菜品种类信息：</label> <input class="w-itext"
						type="text" name="cateloginfo" id="xgcpzlname"
						placeholder="请输入菜品种类信息" />
				</div>
				<div class="w-index" style="text-align: center; margin-top: 30px;">
					<input class="w-but1" type="button" value="提交" id="submitxgcpzl" />
					<input class="w-but1" type="button" onclick="d_close()" value="返回" />
				</div>

			</div>
			<div class="c-foot">
				<p>1/1</p>
			</div>
		</div>
	</div>
</body>
<script type="text/javascript">
	function remove(id) {
		if (confirm("是否删除该数据？")) {

			$
					.ajax({
						type : "post",
						url : "delecatelog.action",
						async : true,
						data : {
							id : id
						},
						success : function(cateloglist) {
							var json = jQuery.parseJSON(cateloglist);
							var list = json[0].cateloglist;
							str = "";
							for ( var i in list) {
								str += "<tr class='tabl'><td>"
										+ list[i].id
										+ "</td><td>"
										+ list[i].catelogName
										+ "</td><td title='"
							+list[i].catelogInfo+"'>"
										+ list[i].catelogInfo
										+ "</td><td><span> <a class='c-taba' href='#' onclick='tanchuang('"
										+ list[i].id
										+ "')'>修改</a> / <a class='c-taba' onclick='remove('"
										+ list[i].id + "')'>删除</a></span></td>"
							}
							$(".content-tab")
									.html(
											"<table><tr><th width=22%>编号</th><th width=22%>菜品种类</th><th width=22%>菜品种类信息</th><th width=12%>操作</th></tr>"
													+ str + "</table>");

						}
					});
		}
	}

	function d_close_tj() {
		$("#tj-cpzl").dialog('close');
		$("#tj-form").form('clear');
	}

	function d_close() {
		//关闭窗口
		$("#xg-cpzl").dialog('close');
		//清除表单缓存
		$("#xg-form").form('clear');
	}

	//添加菜品种类事件
	$("#subbutcpzl")
			.click(
					function() {
						if ($("#tjcpzlinfo").val().length == 0
								|| $("#tjcpzlname").val().length == 0) {
							alert("请填写添加的菜品信息!");
						} else {
							$("#tj-cpzl").dialog("close");
							$.ajax({
										type : "post",
										url : "addcatelog.action",
										async : true,
										data : {
											catelogInfo : $("#tjcpzlname")
													.val(),
											catelogName : $("#tjcpzlinfo")
													.val()
										},
										success : function(cateloglist) {
											var json = jQuery
													.parseJSON(cateloglist);
											var list = json[0].cateloglist;
											str = "";
											for ( var i in list) {
												str += "<tr class='tabl' id='"
														+list[i].id+"' ><td>"
														+ list[i].id
														+ "</td><td>"
												list[i].catelogName
														+ "</td><td title='"
														+list[i].catelogInfo+"'>"
														+ list[i].catelogInfo
														+ "</td><td><span> <a class='c-taba' href='#' onclick='tanchuang('"
														+ list[i].id
														+ "')'>修改</a> / <a class='c-taba' onclick='remove('"
														+ list[i].id
														+ "')'>删除</a></span></td>"
											}
											$(".content-tab")
													.html(
															"<table><tr><th width=22%>编号</th><th width=22%>菜品种类</th><th width=22%>菜品种类信息</th><th width=12%>操作</th></tr>"
																	+ str
																	+ "</table>");

										}
									});
						}
					});

	function tanchuang(id) {
		$('#xg-cpzl').dialog('open');
		// 修改菜品种类事件
		$("#submitxgcpzl").click(
				function() {
					if ($("#xgcpzlinfo").val().length == 0
							|| $("#xgcpzlname").val().length == 0) {
						alert("输入框不能为空");
					} else {
						var name = $("#xgcpzlinfo").val();//获取页面值
						var info = $("#xgcpzlname").val();
						alert(name + "-->" + info)
						$('#xg-cpzl').dialog('close');

						$.ajax({
							type : "post",
							url : "catelogchange.action",
							data : {
								catelogName : name,
								catelogInfo : info,
								id : id
							},
							async : true,
							success : function(i) {
								var json = jQuery.parseJSON(i);
								var i = json[0].i;
								if (i > 0) {
									$("#" + id + "").eq(1).val(name);
									$("#" + id + "").eq(2).val(info);
									window.location.reload();//刷新当前页面
								}
							}
						});
					}
				});
	}
</script>
</html>