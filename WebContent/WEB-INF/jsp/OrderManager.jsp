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
</head>
<body>
	<div class="content">
		<div class="content-headtab"></div>
		<div class="content-foot">
			${message}
			<div class="content-tab">
				<table>
					<tr>
						<th>编号</th>
						<th>价格</th>
						<th>状态</th>
						<th>创建时间</th>
						<th>会员</th>
					</tr>
					<c:forEach var="t_orderlist" items="${t_orderlist}">
						<tr class="tabl">
							<td>${t_orderlist.id}</td>
							<td>${t_orderlist.prices}</td>
							<td>${t_orderlist.status}</td>
							<td><fmt:formatDate value="${t_orderlist.createTime}"
									pattern="yyyy-MM-dd HH:mm:ss" /></td>
							<td>${t_orderlist.userId}</td>
						</tr>
					</c:forEach>
				</table>
			</div>
		</div>
	</div>
	<script src="https://cdn.bootcss.com/socket.io/2.0.3/socket.io.js">
		
	
	
	</script>
</body>
</html>