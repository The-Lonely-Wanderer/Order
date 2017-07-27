<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>菜品管理</title>
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

</head>
<body ondragstart=" return false">
	<div class="content">
		<div class="content-headtab">
			<p>
				菜品列表 <span> <a href="#" class="c-tianjia"
					onclick="javascript:$('#tj-admin').dialog('open')">[添加菜品]</a>
					<div id="tj-admin" class="easyui-dialog" modal="true"
						closable="false" closed="true" title="添加菜品信息"
						style="width: 400px; background: #fff; overflow: hidden;">
						<form id="tj-addfoodform" action="addfood.action" method="post"
							enctype="multipart/form-data">
							<div class="w-index">
								<label class="w-label-1">菜品名：</label> <input class="w-itext"
									type="text" id="foodname" name="foodname" style="width: 200px"
									value="" placeholder="请输入菜品名" />
							</div>
							<div class="w-index">
								<label class="w-label-1">菜品种类：</label> <select id="food_id"
									name="food_id" style="width: 200px"></select>
							</div>
							<div class="w-index">
								<label class="w-label-1">图片：</label> <input type="file"
									id="photo" name="photo" style="width: 200px">
							</div>
							<div class="w-index">
								<label class="w-label-1">菜品信息：</label> <input type="text"
									id="food_message" name="foodinfo" style="width: 200px"
									placeholder="请输入菜品信息">
							</div>
							<div class="w-index">
								<label class="w-label-1">单价：</label> <input type="text"
									id="food_price" name="price" style="width: 200px"
									placeholder="请输入单价">
							</div>
							<div class="w-index"
								style="text-align: center; margin-top: 30px;">
								<input id="addfoodsub" class="w-but1" type="button" value="提交" />
								<input class="w-but1" type="button" onclick="d_close_tj()"
									value="返回" />
							</div>
						</form>
					</div>
				</span>
			</p>
<!-- 			<p> -->
<!-- 				当前共计<span>0</span>个账户，分为4页 <span class="content-tabye">转到： <select -->
<!-- 					class="content-select"> -->
<!-- 						<option>1/4</option> -->
<!-- 						<option>2/4</option> -->
<!-- 						<option>3/4</option> -->
<!-- 						<option>4/4</option> -->
<!-- 				</select> -->
<!-- 				</span> -->
<!-- 			</p> -->
		</div>
		<div class="content-foot">
			<div class="content-sub">
				<form id="selectfood" action="selectfood.action" method="post">
					<label class="c-label">关键字：</label> 
					<input type="text" class="c-text" value="" id="queryid" name="foodname" placeholder="请输入关键字" />
					<input type="button" class="c-but" id="c-but" value="查询" />
					<input type="button" class="c-but" id="c-but" value="返回" onclick="javascript:history.back(-1);"/>共0${size}条查询结果
					<p>${message}</p>
				</form>
			</div>
			<div class="content-tab">
				<c:forEach items="${foodlist}" var="food">
					<div id="banner" class="${food.id}">
						<img style="width: 100%; height: 50%;"
							src="images/foodimage/${food.photo}" title="${food.photo}" />
						<p>名称:${food.foodname}</p>
						<p>描述:${food.foodinfo}</p>
						<p>价格:${food.price}</p>
						<p style="margin-bottom: 0px;">
							<a id="adele" href="#" onclick="remove('${food.id}')">删除</a>
						</p>
					</div>
				</c:forEach>
			</div>
<!-- 			<div class="c-foot"> -->
<!-- 				<p>1/1</p> -->
<!-- 			</div> -->
		</div>
	</div>
</body>
<script type="text/javascript">
	function remove(id) {
		if (confirm("是否删除该菜品？")) {
			$.ajax({
				type : "post",
				url : "delefood.action",
				data : {
					id : id
				},
				async : true,
				success : function(flage) {
					var json = jQuery.parseJSON(flage);
					var flages = json[0].flage;
					if (flages > 0) {
						$("." + id + "").remove();
						window.location.reload();//刷新当前页面
					}
				}
			});
		} else {
			alert("该操作已取消！");
		}
	}
	function d_close_tj() {
		$("#tj-admin").dialog('close');
		$("#tj-addfoodform").form('clear');
	}

	function d_close() {
		//关闭窗口
		$("#xg-admin").dialog('close');
		//清除表单缓存
		$("#xg-adminform").form('clear');
	}
	$("#addfoodsub").click(
			function() {
				if ($("#foodname").val().length == 0
						|| $("#food_message").val().length == 0
						|| $("#food_price").val().length == 0) {
					alert("输入框不能为空！  ");
				} else {
					$("#tj-addfoodform").submit();
				}
			});

	function tanchuang(id) {
		$("#xg-id").val(id);
		$('#xg-admin').dialog('open');
	}
	$("#c-but").click(function() {
			if($("#queryid").val().length==0){
				alert("请输入要查询的菜名!");
			}else{
				$("#selectfood").submit();
			}
	})
</script>
</html>