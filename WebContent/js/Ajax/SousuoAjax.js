

$("document").ready(
		function() {
					$("#shangjianame")
							.blur(
									function() {
										var i_id = $("#shangjianame").val();

										if (i_id.length == 0) {
											alert("您还未选中值，请选择！");
										} else {
											// 调用jquery下的ajax函数
											$
													.ajax({
														// 发送请求的方式 get post
														type : "post",
														// 目标资源位置
														url : "findGrade.action",
														async : true,
														// 需要发送到服务器的数据
														data : {
															i_id : i_id
														},
														// 请求成功后的回调函数。 data
														// 为服务器返回的数据
														success : function(
																gradelist) {
															var json = jQuery
																	.parseJSON(gradelist);
															var list = json[0].gradelist;
															var str = "";
															for ( var i in list) {
																str += "<div id='banner' ><img style='width:100%;height:50%;' src='images/foodimage/"
																		+ list[i].photo
																		+ "'/><p>名称:"
																		+ list[i].foodname
																		+ "</p><p>描述:"
																		+ list[i].foodinfo
																		+ "</p><p>价格:<font style='color:red;'>"
																		+ list[i].price
																		+ "</font></p>" 
//																				"<input type ='checkbox' value ='加入购物车' style='display:block;cursor:pointer;background-color: #D8891E;'"
//																		+ "class='shanchu' code='"
//																		+ list[i].id
//																		+ "'></div>"
																 +"<span style='display:block;cursor:pointer;width:73px ;height:25px;border: 1px inset red;background-color: #D8891E;' id='"
																 +list[i].id
																 +"' onclick=look('"
																 +list[i].id
																 +"');>加入购物车</span></div>"
																 			
															}
															$("#shangpin")
																	.html(
																			"<div style='width:900px;height:500px;'>"
																					+ str
																					+ "<div align='center'><div style='color:red;width:380px;'><p class='shang' style='display:block;cursor:pointer;width:72px;height:23px;border:1px solid red;background-color:#E18D17;' >上一页</p><p class='xia' style='display:block;cursor:pointer;width:72px;height:23px;border:1px solid red;background-color:#E18D17;' >下一页</p></div></div></div>");
														}
													});
										}
									});
				}


);

// 点击购买事件




function look(id) {
//	alert(id);
	$.ajax({
		type : "post",
		url : "gouMai.action?id=" + id,
		async : true,
		success : function(alist) {
			var json = jQuery.parseJSON(alist);
			var message = json[0].message;
			
//			var d = dialog({content: massage+'对话框将在两秒内关闭'});
//			d.show();
//			setTimeout(function () {
//			    d.close().remove();
//			}, 2000);

//			$("#tankuang").html(massage);
			alert(message);
//			$("#usernamespan").html(massage);


		}
	});
}



//购物车点击关注按钮事件


// 点击上一页事件
function dian(id) {

	alert(id);
	$.ajax({
		type : "post",
		url : "gouMai.action?id=" + id,
		async : true,
		success : function(alist) {
		}

	});
}