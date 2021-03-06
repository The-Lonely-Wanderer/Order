<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>订单管理</title>
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
<style type="text/css">
.order {
	width: 98%;
	margin: 20px auto;
	box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
	cursor: pointer;
	border-radius: 10px;
	overflow: hidden;
}

.order:hover {
	transfrom: scale(1.02);
}

.orderid {
	width: 100%;
	background: #1e90ff;
	height: 30px;
}

.banner {
	margin-left: 10px;
}

.selec {
	width: 86px;
	float: right;
	margin-right: 10px;
	border-radius: 5px;
}

.orderm {
	width: 100%;
	transition: 0.2s;
}

.order:hover {
	transform: scale(1.01);
}

.orderid {
	width: 100%;
	background: #1e90ff;
	height: 30px;
}

.banner {
	margin-left: 10px;
}

.selec {
	width: 86px;
	float: right;
	margin-right: 10px;
	border-radius: 5px;
}

.orderm {
	width: 100%;
	border-top: 1px dotted #1e90ff;
}
</style>
</head>
<body>
	<div class="content">
		<!-- 		<div class="content-headtab"></div> -->
		<div class="content-foot">
			<div class="content-sub">
				<form id="sele" action="selectorder.action" method="post">
					<label class="c-label">关键字：</label> <input type="text"
						class="c-text" placeholder="请输入关键字" id="query" name="username" />
					<input type="button" class="c-but" value="查询" id="querybutton"
						name="query" /> <input type="button" class="c-but" value="返回"
						onclick="javascript:history.back(-1);" /><input type="button" class="c-but" value="刷新"
						onclick="javascript:window.location.reload();" />  共有0${size}条查询结果
				</form>
			</div>${message}
			<div class="content-tab">
				${message}
				<div class="content-tab">
					<c:forEach var="t_orderlists" items="${t_orderlist}">
						<div class="order">
							<p class="orderid">
								<span style="margin-left: 5px;">訂餐用戶:</span>
								&nbsp;&nbsp;${t_orderlists.username} <span
									style="float: right; margin-right: 10px"> <c:choose>
										<c:when test="${t_orderlists.status == 1}">正在处理</c:when>
										<c:when test="${t_orderlists.status == 0}">待处理</c:when>
										<c:when test="${t_orderlists.status == 2}">配送中</c:when>
										<c:when test="${t_orderlists.status == 3}">已配送</c:when>
									</c:choose></span>
							</p>
							<div class="banner">
								<p>价格:${t_orderlists.prices}</p>

								<p class="orderm">
									<c:forEach var="foodlist" items="${t_orderlists.t_shopp}">
										<p>
											<span>${foodlist.foodname}</span><span
												style="width: 100px; height: 20px; margin-left: 50px;">${foodlist.price}</span>
										</p>
									</c:forEach>
								</p>
								<p>
									下单时间:
									<fmt:formatDate value="${t_orderlists.createTime}"
										pattern="yyyy-MM-dd HH:mm:ss" />
								</p>
								<p class="sp">
									<span>訂單號:</span>&nbsp;&nbsp;${t_orderlists.id}
									<c:if test="${t_orderlists.status <3}">
										<select id="s" class="selec" title="${t_orderlists.id}">
											<option value="0">待处理</option>
											<option value="1">正在处理</option>
											<option value="2">配送中</option>
											<option value="2">已配送</option>
										</select>
									</c:if>
								</p>
							</div>
						</div>
					</c:forEach>
				</div>
			</div>
		</div>
	</div>
	<script src="js/adminpagejs/jquery-1.11.1.min.js"
		type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript">
		$(".selec").change(function() {
			var t = $(".selec option:selected").text();
			var status = $(this).val();
			var tex = $(this).attr("title");
			$.ajax({
				type : "post",
				url : "changestatus.action",
				async : true,
				data : {
					id : tex,
					status : status
				},
				success : function(flage) {
					var json = jQuery.parseJSON(flage);
					var fla = json[0].flage;
					if (fla == 1) {
						alert("订单状态修改成功!目前状态:-->" + t);
					} else {
						alert("订单状态修改失败,请刷新页面后重新尝试!");
					}
				}
			});
		});
		/* alert($(".selec option:selected").val()); */
		$("#querybutton").click(function() {
			if ($("#query").val().length == 0) {
				alert("请输入需要查询的用户名!");
			} else {
				$("#sele").submit();
			}

		});
	</script>
</body>
</html>